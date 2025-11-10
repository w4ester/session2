# Transparency CLI

**Analyze privacy policies from your terminal with local or cloud LLMs.**

A command-line MCP client for the Transparency MCP Server. Fetch, analyze, and compare privacy policies using any LLM—100% local via Ollama or cloud via Claude/ChatGPT.

## Why Use This

> "Your data doesn't have to be just a given."

Most people accept privacy policies without reading them. Even if you try, they're dense and confusing. This CLI makes it easy to:

- **Fetch** privacy policies from any URL
- **Analyze** them for training, retention, opt-out, third-party sharing
- **Compare** multiple policies side-by-side
- **Use local LLMs** (Ollama) for 100% privacy, or cloud LLMs for convenience

## Quick Start

### Install

```bash
npm install -g @edinfinite/transparency-cli
```

Or run directly with npx:

```bash
npx @edinfinite/transparency-cli --help
```

### Prerequisites

1. **Node.js 18+**
2. **Transparency MCP Server** (install separately)
3. **Optional: Ollama** for local LLM analysis

### Install the MCP Server

```bash
npm install -g @edinfinite/transparency-mcp-server
```

## Usage

### Basic Commands

**Fetch a privacy policy:**
```bash
transparency fetch "https://anthropic.com/news/updates-to-our-consumer-terms" --company "Anthropic"
```

**Analyze a privacy policy:**
```bash
transparency analyze "https://openai.com/enterprise-privacy" \
  --company "OpenAI" \
  --focus "training" "retention" "opt-out"
```

**Analyze with local LLM (Ollama):**
```bash
transparency analyze "https://anthropic.com/news/updates-to-our-consumer-terms" \
  --company "Anthropic" \
  --focus "training" "retention" \
  --ollama "qwen2.5:14b"
```

**Compare multiple policies:**
```bash
transparency compare \
  "https://openai.com/enterprise-privacy" \
  "https://anthropic.com/news/updates-to-our-consumer-terms" \
  --companies "OpenAI" "Anthropic" \
  --points "training" "retention" "API vs consumer"
```

### Full Example: 100% Local Analysis

This demonstrates the complete stack running locally with zero cloud dependencies:

```bash
# 1. Make sure Ollama is running
ollama serve

# 2. Analyze Anthropic's policy with local LLM
transparency analyze "https://anthropic.com/news/updates-to-our-consumer-terms" \
  --company "Anthropic" \
  --focus "training" "retention" "opt-out" \
  --ollama "qwen2.5:14b" \
  --server "/path/to/transparency/index.js"
```

**Output:**
```
✔ Connected to Transparency MCP server
✔ Fetched policy for Anthropic
✔ Analysis complete for Anthropic
✔ Analysis received from Ollama

OLLAMA RESPONSE:
================================================================================

### Privacy Policy Analysis for Anthropic

#### Training
"We will train new models using data from Free, Pro, and Max accounts when
this setting is on..."

Red Flags:
- Users' data continues to be used in models already trained
- No clear timeframe for data purge after opt-out

[Full analysis...]
```

## Command Reference

### `transparency fetch <url>`

Fetch and display a privacy policy.

**Options:**
- `-c, --company <name>` - Company name (for labeling)
- `-s, --server <path>` - Path to MCP server (default: `../transparency/index.js`)

**Example:**
```bash
transparency fetch "https://grammarly.com/privacy-policy" --company "Grammarly"
```

### `transparency analyze <url>`

Analyze a privacy policy for key data points.

**Options:**
- `-c, --company <name>` - Company name (required)
- `-f, --focus <areas...>` - Focus areas (default: training, retention, opt-out, etc.)
- `-o, --ollama [model]` - Send to Ollama (default model: llama3.2)
- `-s, --server <path>` - Path to MCP server

**Example:**
```bash
transparency analyze "https://notion.so/Privacy-Policy" \
  --company "Notion" \
  --focus "training" "third-party sharing" \
  --ollama "qwen2.5:14b"
```

### `transparency compare <urls...>`

Compare multiple privacy policies.

**Options:**
- `-c, --companies <names...>` - Company names (same order as URLs, required)
- `-p, --points <points...>` - Comparison points
- `-o, --ollama [model]` - Send to Ollama
- `-s, --server <path>` - Path to MCP server

**Example:**
```bash
transparency compare \
  "https://openai.com/enterprise-privacy" \
  "https://privacy.anthropic.com" \
  --companies "OpenAI" "Anthropic" \
  --points "API data usage" "training" "retention" \
  --ollama "qwen2.5:14b"
```

## Using with Ollama (100% Local)

**Install Ollama:**
```bash
# macOS
brew install ollama

# Linux
curl https://ollama.ai/install.sh | sh
```

**Start Ollama:**
```bash
ollama serve
```

**Pull a model:**
```bash
ollama pull qwen2.5:14b
# or
ollama pull llama3.2
```

**Use with transparency CLI:**
```bash
transparency analyze "https://..." --company "..." --ollama "qwen2.5:14b"
```

**Why local LLMs?**
- ✅ Zero data sent to cloud
- ✅ No API costs
- ✅ Complete privacy
- ✅ Works offline
- ✅ Full control

## Using with Cloud LLMs

The CLI outputs prompts that you can copy/paste into:
- Claude Desktop
- ChatGPT
- Any LLM interface

**Example workflow:**
```bash
# Generate analysis prompt
transparency analyze "https://..." --company "..." > prompt.txt

# Copy prompt.txt and paste into Claude or ChatGPT
cat prompt.txt | pbcopy  # macOS
```

## Real-World Examples

### Example 1: Check if Grammarly discloses their LLM

```bash
transparency analyze "https://www.grammarly.com/privacy-policy" \
  --company "Grammarly" \
  --focus "LLM disclosure" "backend models" "third-party AI" \
  --ollama
```

### Example 2: Compare ChatGPT Free vs API

```bash
transparency compare \
  "https://openai.com/policies/privacy-policy" \
  "https://openai.com/enterprise-privacy" \
  --companies "ChatGPT Free" "ChatGPT API" \
  --points "training" "retention" "opt-out" \
  --ollama "qwen2.5:14b"
```

### Example 3: Analyze Claude Code data usage

```bash
transparency analyze "https://anthropic.com/news/updates-to-our-consumer-terms" \
  --company "Anthropic" \
  --focus "Claude Code" "consumer vs API" "training opt-in" \
  --ollama
```

## Architecture

```
┌─────────────────┐
│  transparency   │  ← CLI Client (this package)
│      CLI        │
└────────┬────────┘
         │ MCP Client SDK
         ↓
┌─────────────────┐
│  Transparency   │  ← MCP Server
│   MCP Server    │
└────────┬────────┘
         │ Fetch & Parse
         ↓
┌─────────────────┐
│  Privacy Policy │  ← Web pages
│      URLs       │
└─────────────────┘

Analysis sent to:
┌─────────────────┐
│  Ollama (local) │  ← 100% local option
└─────────────────┘
        OR
┌─────────────────┐
│ Claude/ChatGPT  │  ← Cloud option
└─────────────────┘
```

## Configuration

### Default Server Path

By default, the CLI looks for the MCP server at `../transparency/index.js` (relative to CLI).

**Override with:**
```bash
transparency analyze "..." --server "/absolute/path/to/transparency/index.js"
```

**Or set environment variable:**
```bash
export TRANSPARENCY_SERVER="/path/to/transparency/index.js"
```

### Ollama Configuration

**Default model:** `llama3.2`

**Override:**
```bash
transparency analyze "..." --ollama "qwen2.5:14b"
```

**Ollama endpoint:** `http://localhost:11434` (default)

## Philosophy

This tool embodies a choice:

**AI** can mean **Artificial** intelligence, incentivized by advertising and marketing.

OR

**AI** can mean **Accessible** intelligence, incentivized by education and well-being.

**This CLI gives you the choice:**
- Use cloud LLMs (convenient, fast)
- Use local LLMs (private, free, offline)
- Use no LLM (just fetch and read yourself)

**Your data doesn't have to be "just a given."**

## Contributing

Found a bug? Have an idea?

- GitHub: [YOUR_GITHUB_REPO_URL]
- Email: howdy@edinfinite.com
- Issues: [YOUR_GITHUB_REPO_URL]/issues

Ideas for contributions:
- Add support for PDF privacy policies
- Export analysis to JSON/markdown
- Build comparison tables automatically
- Add privacy score calculator
- Support for local embeddings and semantic search

## License

MIT - Use it however you want.

## Credits

Built by [Will F](https://github.com/w4ester) at [edinfinite](https://edinfinite.com)

Part of the AI Workshop Session 2 series teaching people to build their own AI tools instead of relying on wrappers.

## Related Projects

- **[Transparency MCP Server](../transparency/)** - The MCP server this CLI connects to
- **[YouTube MCP Server](../youtube/)** - Extract and analyze YouTube transcripts

---

**Remember:** The real "moat" in AI isn't the technology—it's who owns your data, the incentives, and your imagination.
