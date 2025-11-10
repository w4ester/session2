# Usage Examples

## Quick Start

### 1. Install the Server

```bash
cd /Users/willf/ai-workshop-session2/mcp-servers/transparency
npm install
```

### 2. Configure Claude Desktop

Add this to your Claude Desktop config (`~/Library/Application Support/Claude/claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "transparency": {
      "command": "node",
      "args": ["/Users/willf/ai-workshop-session2/mcp-servers/transparency/index.js"]
    }
  }
}
```

Restart Claude Desktop.

## Example Queries

### Example 1: Analyze Anthropic's New Policy

**User:** "Use the transparency tools to fetch and analyze Anthropic's privacy policy from https://anthropic.com/news/updates-to-our-consumer-terms - focus on training data, retention period, and opt-out"

**What happens:**
1. Claude calls `fetch_policy` with the URL
2. Gets back the full policy text
3. Claude calls `analyze_policy` with focus areas
4. Returns structured analysis with direct quotes

### Example 2: Compare ChatGPT Free vs API

**User:** "Fetch OpenAI's enterprise privacy page and consumer terms, then compare them on data training and retention"

**What happens:**
1. Claude calls `fetch_policy` twice (consumer and enterprise)
2. Claude calls `compare_policies` with both texts
3. Returns side-by-side comparison table

### Example 3: Investigate an AI Wrapper

**User:** "Fetch and analyze Grammarly's privacy policy - do they disclose which LLM they use? What happens to my data?"

**What happens:**
1. Claude fetches Grammarly's policy
2. Analyzes for LLM disclosure and data usage
3. Identifies any gaps or red flags

## Real Findings

### Anthropic Consumer Terms (October 2025 Update)

```
Company: Anthropic
URL: https://anthropic.com/news/updates-to-our-consumer-terms

Key Findings:
- "Starting October 8, 2025, we'll use an opt-in process for training"
- 5-year retention if training enabled
- 30-day retention if training disabled
- "Your data will still be included in model training that has already started"
- Does NOT apply to: Claude for Work, API, Bedrock, Vertex AI
```

### OpenAI Enterprise vs Consumer

| Feature | ChatGPT Free | ChatGPT API |
|---------|--------------|-------------|
| Training | Yes (unless opt-out) | No |
| Retention | 30 days when history off | 30 days abuse monitoring |
| Zero retention | No | Yes (eligible) |

## Testing the Server

### With MCP Inspector

```bash
cd /Users/willf/ai-workshop-session2/mcp-servers/transparency
npx @modelcontextprotocol/inspector node index.js
```

Then open the URL in your browser to test the tools interactively.

### Direct Test (via curl simulation)

The MCP server runs on stdio, so you can test it by sending JSON-RPC messages:

```javascript
// Example tool call
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "fetch_policy",
    "arguments": {
      "url": "https://anthropic.com/news/updates-to-our-consumer-terms",
      "company": "Anthropic"
    }
  }
}
```

## Tips

1. **URLs must be accessible** - Some privacy policies are behind login walls
2. **Caching** - The server caches fetched policies to avoid repeated requests
3. **Truncation** - Very long policies (>10,000 chars) are truncated in analysis prompts
4. **Direct quotes** - Always ask for direct quotes to verify claims
5. **Compare apples to apples** - Compare consumer vs consumer, or API vs API

## Common Privacy Policy URLs

**AI Companies:**
- Anthropic Consumer: https://anthropic.com/news/updates-to-our-consumer-terms
- Anthropic Privacy: https://privacy.anthropic.com
- OpenAI Enterprise: https://openai.com/enterprise-privacy
- OpenAI Consumer: https://openai.com/policies/privacy-policy

**AI Wrappers:**
- Grammarly: https://www.grammarly.com/privacy-policy
- Notion: https://www.notion.so/Privacy-Policy
- Jasper: https://www.jasper.ai/privacy-policy
- Copy.ai: https://www.copy.ai/privacy-policy

## Next Steps

Once you've analyzed policies:
1. Create a comparison table
2. Identify red flags
3. Share your findings
4. Help others understand their data rights

**Remember:** The goal isn't to shame companies—it's to make informed choices about where your data goes.
