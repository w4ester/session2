#!/usr/bin/env node
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import chalk from "chalk";
import ora from "ora";
import { Command } from "commander";
import axios from "axios";

class TransparencyCLI {
  constructor() {
    this.client = null;
    this.transport = null;
  }

  async connect(serverPath) {
    const spinner = ora("Connecting to Transparency MCP server...").start();

    try {
      // Create transport with command and args
      this.transport = new StdioClientTransport({
        command: "node",
        args: [serverPath],
      });

      // Create client
      this.client = new Client(
        {
          name: "transparency-cli",
          version: "1.0.0",
        },
        {
          capabilities: {},
        }
      );

      // Connect
      await this.client.connect(this.transport);

      spinner.succeed("Connected to Transparency MCP server");
      return true;
    } catch (error) {
      spinner.fail(`Failed to connect: ${error.message}`);
      return false;
    }
  }

  async fetchPolicy(url, company) {
    const spinner = ora(`Fetching policy from ${url}...`).start();

    try {
      const result = await this.client.callTool({
        name: "fetch_policy",
        arguments: { url, company },
      });

      spinner.succeed(`Fetched policy for ${company || "company"}`);

      const text = result.content[0].text;
      console.log(chalk.cyan("\n" + "=".repeat(80)));
      console.log(text.substring(0, 2000));
      if (text.length > 2000) {
        console.log(chalk.yellow(`\n[Truncated - full text is ${text.length} characters]`));
      }
      console.log(chalk.cyan("=".repeat(80) + "\n"));

      return text;
    } catch (error) {
      spinner.fail(`Failed to fetch policy: ${error.message}`);
      throw error;
    }
  }

  async analyzePolicy(text, company, focusAreas) {
    const spinner = ora(`Analyzing ${company} privacy policy...`).start();

    try {
      const result = await this.client.callTool({
        name: "analyze_policy",
        arguments: {
          text,
          company,
          focus_areas: focusAreas,
        },
      });

      spinner.succeed(`Analysis complete for ${company}`);

      const analysisPrompt = result.content[0].text;

      console.log(chalk.yellow("\n" + "=".repeat(80)));
      console.log(chalk.yellow("ANALYSIS PROMPT (send this to your LLM):"));
      console.log(chalk.yellow("=".repeat(80) + "\n"));
      console.log(analysisPrompt);
      console.log(chalk.yellow("\n" + "=".repeat(80) + "\n"));

      return analysisPrompt;
    } catch (error) {
      spinner.fail(`Failed to analyze policy: ${error.message}`);
      throw error;
    }
  }

  async comparePolicies(policies, comparisonPoints) {
    const spinner = ora("Comparing policies...").start();

    try {
      const result = await this.client.callTool({
        name: "compare_policies",
        arguments: {
          policies,
          comparison_points: comparisonPoints,
        },
      });

      spinner.succeed("Comparison complete");

      const comparisonPrompt = result.content[0].text;

      console.log(chalk.magenta("\n" + "=".repeat(80)));
      console.log(chalk.magenta("COMPARISON PROMPT (send this to your LLM):"));
      console.log(chalk.magenta("=".repeat(80) + "\n"));
      console.log(comparisonPrompt);
      console.log(chalk.magenta("\n" + "=".repeat(80) + "\n"));

      return comparisonPrompt;
    } catch (error) {
      spinner.fail(`Failed to compare policies: ${error.message}`);
      throw error;
    }
  }

  async sendToOllama(prompt, model = "llama3.2") {
    const spinner = ora(`Sending to Ollama (${model})...`).start();

    try {
      const response = await axios.post("http://localhost:11434/api/generate", {
        model,
        prompt,
        stream: false,
      });

      spinner.succeed("Analysis received from Ollama");

      console.log(chalk.green("\n" + "=".repeat(80)));
      console.log(chalk.green("OLLAMA RESPONSE:"));
      console.log(chalk.green("=".repeat(80) + "\n"));
      console.log(response.data.response);
      console.log(chalk.green("\n" + "=".repeat(80) + "\n"));

      return response.data.response;
    } catch (error) {
      spinner.fail(`Ollama request failed: ${error.message}`);
      console.log(chalk.yellow("\nMake sure Ollama is running: ollama serve"));
      throw error;
    }
  }

  async disconnect() {
    if (this.client) {
      await this.client.close();
    }
    if (this.transport) {
      await this.transport.close();
    }
  }
}

// CLI Program
const program = new Command();

program
  .name("transparency-cli")
  .description("CLI for analyzing privacy policies with local or cloud LLMs")
  .version("1.0.0");

program
  .command("fetch")
  .description("Fetch a privacy policy from a URL")
  .argument("<url>", "URL of the privacy policy")
  .option("-c, --company <name>", "Company name")
  .option("-s, --server <path>", "Path to MCP server", "../transparency/index.js")
  .action(async (url, options) => {
    const cli = new TransparencyCLI();

    try {
      await cli.connect(options.server);
      await cli.fetchPolicy(url, options.company);
    } catch (error) {
      console.error(chalk.red(`Error: ${error.message}`));
      process.exit(1);
    } finally {
      await cli.disconnect();
    }
  });

program
  .command("analyze")
  .description("Analyze a privacy policy")
  .argument("<url>", "URL of the privacy policy")
  .requiredOption("-c, --company <name>", "Company name")
  .option("-f, --focus <areas...>", "Focus areas (e.g., training retention opt-out)")
  .option("-s, --server <path>", "Path to MCP server", "../transparency/index.js")
  .option("-o, --ollama [model]", "Send to Ollama (default: llama3.2)")
  .action(async (url, options) => {
    const cli = new TransparencyCLI();

    try {
      await cli.connect(options.server);

      // Fetch the policy
      const policyText = await cli.fetchPolicy(url, options.company);

      // Analyze it
      const analysisPrompt = await cli.analyzePolicy(
        policyText,
        options.company,
        options.focus
      );

      // Optionally send to Ollama
      if (options.ollama) {
        const model = typeof options.ollama === "string" ? options.ollama : "llama3.2";
        await cli.sendToOllama(analysisPrompt, model);
      }
    } catch (error) {
      console.error(chalk.red(`Error: ${error.message}`));
      process.exit(1);
    } finally {
      await cli.disconnect();
    }
  });

program
  .command("compare")
  .description("Compare multiple privacy policies")
  .argument("<urls...>", "URLs of privacy policies to compare")
  .requiredOption("-c, --companies <names...>", "Company names (same order as URLs)")
  .option("-p, --points <points...>", "Comparison points")
  .option("-s, --server <path>", "Path to MCP server", "../transparency/index.js")
  .option("-o, --ollama [model]", "Send to Ollama (default: llama3.2)")
  .action(async (urls, options) => {
    const cli = new TransparencyCLI();

    try {
      if (urls.length !== options.companies.length) {
        throw new Error("Number of URLs must match number of company names");
      }

      await cli.connect(options.server);

      // Fetch all policies
      const policies = [];
      for (let i = 0; i < urls.length; i++) {
        const text = await cli.fetchPolicy(urls[i], options.companies[i]);
        policies.push({
          company: options.companies[i],
          text,
        });
      }

      // Compare them
      const comparisonPrompt = await cli.comparePolicies(policies, options.points);

      // Optionally send to Ollama
      if (options.ollama) {
        const model = typeof options.ollama === "string" ? options.ollama : "llama3.2";
        await cli.sendToOllama(comparisonPrompt, model);
      }
    } catch (error) {
      console.error(chalk.red(`Error: ${error.message}`));
      process.exit(1);
    } finally {
      await cli.disconnect();
    }
  });

program.parse();
