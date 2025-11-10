# Transparency MCP Server

**Analyze privacy policies with AI. Use any LLM. Own your data.**

An MCP (Model Context Protocol) server that helps you analyze, compare, and understand privacy policies from AI companies and SaaS tools. Use it with Claude Desktop, OpenAI's custom GPTs, or any local LLM via Ollama.

## Why This Exists

> "Is AI using you, or are you using AI to become a Producer?"

Privacy policies are deliberately dense. I used AI to accelerate my ability to read through every major AI tool's privacy policy. Then I realized: **everyone should be able to do this**.

This MCP server makes privacy policy analysis accessible to anyone with an LLM—cloud or local.

## What It Does

### Three Core Tools

1. **`fetch_policy`** - Fetch and extract privacy policy text from any URL
2. **`analyze_policy`** - Analyze a policy for key data points (training, retention, opt-out, etc.)
3. **`compare_policies`** - Compare multiple policies side-by-side

### What It Analyzes

- **Data collection** - What data is collected?
- **Training on user data** - Do they use your data to train models?
- **Retention period** - How long do they keep your data?
- **Opt-out mechanisms** - Can you opt out? How?
- **Third-party sharing** - Who else gets your data?
- **API vs consumer differences** - Different rules for different products?

## Installation

### Prerequisites

- Node.js 18+
- An MCP-compatible client (Claude Desktop, custom setup, etc.)

### Install via npm

```bash
npm install -g @edinfinite/transparency-mcp-server
```

### Or clone and run locally

```bash
git clone https://github.com/yourusername/transparency-mcp-server.git
cd transparency-mcp-server
npm install
```

## Usage

### With Claude Desktop

Add to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "transparency": {
      "command": "npx",
      "args": ["-y", "@edinfinite/transparency-mcp-server"]
    }
  }
}
```

Restart Claude Desktop. The tools will now be available.

### Example Queries

**Analyze OpenAI's privacy policy:**
```
Use the transparency tools to fetch and analyze OpenAI's privacy policy from https://openai.com/enterprise-privacy
```

**Compare ChatGPT vs Claude:**
```
Fetch privacy policies for OpenAI and Anthropic, then compare them on data training, retention, and opt-out
```

**Analyze a SaaS tool:**
```
Analyze Notion's privacy policy - focus on training data and third-party sharing
```

### With Local LLMs (Ollama)

Use with any tool that supports MCP:

```bash
# Run the server directly
node index.js

# Or use the bin command
transparency-mcp
```

Then connect your local LLM client to the MCP server.

## Example Output

When you run `fetch_policy` on Anthropic's consumer terms:

```
Anthropic - Privacy Policy
Source: https://anthropic.com/news/updates-to-our-consumer-terms

[Extracted text...]

Key findings:
- "Your data will still be included in model training that has already started..."
- 5-year retention if training enabled
- 30-day retention if disabled
- Deadline: October 8, 2025
```

When you run `compare_policies` on ChatGPT Free vs API:

```
| Comparison Point      | ChatGPT Free          | ChatGPT API           |
|-----------------------|-----------------------|-----------------------|
| Training on data      | Yes (unless opt-out)  | No                    |
| Retention period      | 30 days (history off) | 30 days (abuse only)  |
| Opt-out mechanism     | Settings > Data       | N/A (default no)      |
| Zero data retention   | No                    | Yes (eligible cases)  |
```

## What I Found (So Far)

Using this tool, here's what I discovered:

### ChatGPT
- **Free**: Trains on conversations unless you opt-out
- **API**: Does NOT train on your data

### Claude
- **Free/Pro/Max**: NOW trains on data IF you opt-in (new 2025 policy)
- **API**: Does NOT train (unless explicit agreement)

### AI Wrappers That Don't Disclose Backend Models
Copy.ai (15M users), Jasper (100K+), Notion AI (100M+), Grammarly (30M daily), Replit AI (30M+), Codeium (700K+), Character.AI (20M MAU)

**The problem:** You have TWO layers of privacy policies, and you can't even verify which LLM provider's policy governs your data.

## The Philosophy

This tool embodies a choice:

**AI** can mean **Artificial** intelligence, incentivized by advertising and marketing.

OR

**AI** can mean **Accessible** intelligence, incentivized by education and well-being.

**To revolutionize choice** is the reality of what local inference and local AI infrastructure provide: **accessible intelligence** where YOU are the producer, not the product.

This tool works with:
- ✅ Claude Desktop (cloud)
- ✅ Custom GPTs (cloud)
- ✅ Ollama + local LLMs (100% local, zero cloud)
- ✅ Any MCP-compatible client

**Your data doesn't have to be "just a given."**

## Development

### Project Structure

```
transparency-mcp-server/
├── index.js          # Main MCP server
├── package.json      # NPM config
└── README.md         # This file
```

### Run in Development

```bash
npm start
```

### Test with MCP Inspector

```bash
npx @modelcontextprotocol/inspector node index.js
```

## Contributing

Found a bug? Have an idea? Open an issue or PR!

Ideas for contributions:
- Add support for PDF privacy policies
- Extract specific sections (GDPR, CCPA, etc.)
- Generate "Privacy Score" based on key metrics
- Auto-detect policy updates
- Compare historical versions

## License

MIT - Use it however you want. Build on it. Share it.

## Credits

Built by [Will F](https://github.com/w4ester) at [edinfinite](https://edinfinite.com)

Part of the "AI Workshop Session 2" series teaching people to build their own AI tools instead of relying on wrappers.

## Resources

- [Anthropic Consumer Terms Update](https://anthropic.com/news/updates-to-our-consumer-terms)
- [Anthropic Privacy Policy](https://privacy.anthropic.com)
- [OpenAI Enterprise Privacy](https://openai.com/enterprise-privacy)
- [Model Context Protocol](https://modelcontextprotocol.io)

---

**Remember:** The real "moat" in AI isn't the technology—it's who owns your data, the incentives, and your imagination.
