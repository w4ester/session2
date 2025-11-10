#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import axios from "axios";
import * as cheerio from "cheerio";
import { z } from "zod";

const FetchPolicyArgsSchema = z.object({
  url: z.string().url().describe("URL of the privacy policy to fetch"),
  company: z.string().optional().describe("Company name (optional, for labeling)"),
});

const AnalyzePolicyArgsSchema = z.object({
  text: z.string().describe("Privacy policy text to analyze"),
  company: z.string().describe("Company name"),
  focus_areas: z.array(z.string()).optional().describe("Specific areas to focus on (e.g., 'training', 'retention', 'opt-out')"),
});

const ComparePoliciesArgsSchema = z.object({
  policies: z.array(z.object({
    company: z.string(),
    text: z.string(),
  })).describe("Array of policies to compare"),
  comparison_points: z.array(z.string()).optional().describe("Specific points to compare"),
});

class TransparencyServer {
  constructor() {
    this.server = new Server(
      {
        name: "transparency-mcp-server",
        version: "1.0.0",
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    this.setupHandlers();
    this.policyCache = new Map();
  }

  setupHandlers() {
    this.server.setRequestHandler(ListToolsRequestSchema, async () => ({
      tools: [
        {
          name: "fetch_policy",
          description: "Fetch a privacy policy from a URL and extract readable text",
          inputSchema: {
            type: "object",
            properties: {
              url: {
                type: "string",
                description: "URL of the privacy policy",
              },
              company: {
                type: "string",
                description: "Company name (optional, for labeling)",
              },
            },
            required: ["url"],
          },
        },
        {
          name: "analyze_policy",
          description: "Analyze a privacy policy for key data points (training, retention, opt-out, etc.)",
          inputSchema: {
            type: "object",
            properties: {
              text: {
                type: "string",
                description: "Privacy policy text to analyze",
              },
              company: {
                type: "string",
                description: "Company name",
              },
              focus_areas: {
                type: "array",
                items: { type: "string" },
                description: "Specific areas to focus on (e.g., 'training', 'retention', 'opt-out')",
              },
            },
            required: ["text", "company"],
          },
        },
        {
          name: "compare_policies",
          description: "Compare multiple privacy policies side by side",
          inputSchema: {
            type: "object",
            properties: {
              policies: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    company: { type: "string" },
                    text: { type: "string" },
                  },
                  required: ["company", "text"],
                },
                description: "Array of policies to compare",
              },
              comparison_points: {
                type: "array",
                items: { type: "string" },
                description: "Specific points to compare",
              },
            },
            required: ["policies"],
          },
        },
      ],
    }));

    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      switch (request.params.name) {
        case "fetch_policy":
          return await this.handleFetchPolicy(request.params.arguments);
        case "analyze_policy":
          return await this.handleAnalyzePolicy(request.params.arguments);
        case "compare_policies":
          return await this.handleComparePolicies(request.params.arguments);
        default:
          throw new Error(`Unknown tool: ${request.params.name}`);
      }
    });
  }

  async handleFetchPolicy(args) {
    const { url, company } = FetchPolicyArgsSchema.parse(args);

    try {
      // Check cache
      if (this.policyCache.has(url)) {
        return {
          content: [
            {
              type: "text",
              text: `[From cache]\n\n${this.policyCache.get(url)}`,
            },
          ],
        };
      }

      const response = await axios.get(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
        },
        timeout: 10000,
      });

      const $ = cheerio.load(response.data);

      // Remove script and style elements
      $('script, style, nav, header, footer').remove();

      // Try to find main content
      let text = '';
      const mainSelectors = ['main', 'article', '[role="main"]', '.content', '#content', 'body'];

      for (const selector of mainSelectors) {
        const element = $(selector);
        if (element.length) {
          text = element.text();
          break;
        }
      }

      if (!text) {
        text = $('body').text();
      }

      // Clean up text
      text = text
        .replace(/\s+/g, ' ')
        .replace(/\n\s*\n/g, '\n\n')
        .trim();

      // Cache the result
      this.policyCache.set(url, text);

      const companyLabel = company ? `${company} - ` : '';
      const result = `${companyLabel}Privacy Policy\nSource: ${url}\n\n${text}`;

      return {
        content: [
          {
            type: "text",
            text: result,
          },
        ],
      };
    } catch (error) {
      throw new Error(`Failed to fetch policy: ${error.message}`);
    }
  }

  async handleAnalyzePolicy(args) {
    const { text, company, focus_areas } = AnalyzePolicyArgsSchema.parse(args);

    const defaultFocusAreas = [
      "data collection",
      "training on user data",
      "retention period",
      "opt-out mechanisms",
      "third-party sharing",
      "API vs consumer differences"
    ];

    const areasToAnalyze = focus_areas || defaultFocusAreas;

    // This tool provides the text to the LLM with instructions
    // The LLM will do the actual analysis
    const analysisPrompt = `Analyze the following privacy policy for ${company}.

Focus on these specific areas:
${areasToAnalyze.map((area, i) => `${i + 1}. ${area}`).join('\n')}

For each area, provide:
- Direct quotes from the policy (with quotation marks)
- Your interpretation
- Any red flags or notable points

Privacy Policy Text:
${text.substring(0, 10000)}${text.length > 10000 ? '\n\n[Text truncated - full policy is ' + text.length + ' characters]' : ''}

Provide a structured analysis.`;

    return {
      content: [
        {
          type: "text",
          text: analysisPrompt,
        },
      ],
    };
  }

  async handleComparePolicies(args) {
    const { policies, comparison_points } = ComparePoliciesArgsSchema.parse(args);

    const defaultComparisonPoints = [
      "Training on user data",
      "Data retention period",
      "Opt-out options",
      "Third-party sharing",
      "API vs consumer product differences",
      "Zero data retention availability"
    ];

    const pointsToCompare = comparison_points || defaultComparisonPoints;

    const comparisonPrompt = `Compare the following privacy policies across these dimensions:

${pointsToCompare.map((point, i) => `${i + 1}. ${point}`).join('\n')}

Policies to compare:

${policies.map((policy, i) => `
### ${i + 1}. ${policy.company}
${policy.text.substring(0, 5000)}${policy.text.length > 5000 ? '\n[Truncated - full policy is ' + policy.text.length + ' characters]' : ''}
`).join('\n---\n')}

Create a comparison table with:
- Rows: comparison points
- Columns: companies
- Cells: key findings with direct quotes

Highlight major differences and red flags.`;

    return {
      content: [
        {
          type: "text",
          text: comparisonPrompt,
        },
      ],
    };
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error("Transparency MCP server running on stdio");
  }
}

const server = new TransparencyServer();
server.run().catch(console.error);
