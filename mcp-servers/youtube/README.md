# YouTube MCP Server

A Model Context Protocol (MCP) server that provides tools to fetch YouTube video transcripts, search within transcripts, and list available languages.

## Features

**Tools:**
1. **get_transcript** - Fetch video transcripts/captions
2. **list_transcripts** - List all available transcript languages
3. **search_transcript** - Search for specific text within transcripts

**Supports:**
- Multiple video URL formats (youtube.com, youtu.be, direct video IDs)
- Multiple languages with automatic fallback to English
- Formatted output with timestamps or plain text
- Search within transcripts

## Installation

### 1. Install Dependencies

```bash
cd mcp-servers/youtube
pip install -r requirements.txt
```

Or install globally:

```bash
pip install mcp youtube-transcript-api
```

### 2. Configure Claude Code

Add this to your Claude Code MCP settings:

**Location:** `~/.config/Claude/claude_desktop_config.json` (Linux/Mac) or `%APPDATA%\Claude\claude_desktop_config.json` (Windows)

```json
{
  "mcpServers": {
    "youtube": {
      "command": "python3",
      "args": ["/Users/willf/ai-workshop-session2/mcp-servers/youtube/server.py"]
    }
  }
}
```

**Important:** Update the path in `args` to match your actual installation path.

### 3. Restart Claude Code

Restart Claude Code (or Claude Desktop) to load the new MCP server.

## Usage

### Get Video Transcript

**Plain text format:**
```
Use the get_transcript tool with:
- video_url: "https://www.youtube.com/watch?v=ibfdqyz4KhQ"
```

**With timestamps:**
```
Use the get_transcript tool with:
- video_url: "https://www.youtube.com/watch?v=ibfdqyz4KhQ"
- preserve_formatting: true
```

**Different language:**
```
Use the get_transcript tool with:
- video_url: "https://www.youtube.com/watch?v=ibfdqyz4KhQ"
- language: "es"
```

### List Available Transcripts

```
Use the list_transcripts tool with:
- video_url: "https://www.youtube.com/watch?v=ibfdqyz4KhQ"
```

This shows all available languages (manual and auto-generated).

### Search Within Transcript

```
Use the search_transcript tool with:
- video_url: "https://www.youtube.com/watch?v=ibfdqyz4KhQ"
- query: "LinkedIn"
```

Finds all mentions of "LinkedIn" with timestamps.

## Example Prompts for Claude

Once configured, you can ask Claude:

- "Get the transcript for https://www.youtube.com/watch?v=ibfdqyz4KhQ"
- "What languages are available for video ibfdqyz4KhQ?"
- "Search for 'AI' in the video https://youtu.be/ibfdqyz4KhQ"
- "Summarize the key points from this YouTube video: [URL]"
- "What does the speaker say about LinkedIn in this video: [URL]"

## Supported URL Formats

The server automatically handles these YouTube URL formats:

- `https://www.youtube.com/watch?v=VIDEO_ID`
- `https://youtu.be/VIDEO_ID`
- `https://youtube.com/watch?v=VIDEO_ID`
- `VIDEO_ID` (direct 11-character ID)

## Error Handling

The server handles common errors gracefully:

- **Transcripts disabled** - Video has disabled captions
- **No transcript found** - Requested language not available
- **Video unavailable** - Video doesn't exist or is private
- **Invalid URL** - Couldn't extract video ID

## Technical Details

**Built with:**
- [MCP Python SDK](https://github.com/modelcontextprotocol/python-sdk)
- [youtube-transcript-api](https://github.com/jdepoix/youtube-transcript-api)

**How it works:**
- Extracts video ID from URLs using regex
- Fetches transcripts via YouTube's internal API (no API key required)
- Formats output as plain text or timestamped text
- Searches transcript entries using case-insensitive matching

**Limitations:**
- Only works with videos that have captions enabled
- Cannot fetch metadata (title, views, etc.) - only transcripts
- Rate limited by YouTube (though very generous limits)

## Troubleshooting

### "No module named 'mcp'"

Install the MCP SDK:
```bash
pip install mcp
```

### "No module named 'youtube_transcript_api'"

Install the transcript library:
```bash
pip install youtube-transcript-api
```

### "Transcripts are disabled for this video"

The video owner has disabled captions. Try a different video.

### Server not showing in Claude Code

1. Check the config file path is correct
2. Verify the `args` path points to `server.py`
3. Restart Claude Code completely
4. Check Claude Code logs for errors

### "Could not extract video ID"

Make sure you're using a valid YouTube URL format. Examples:
- ✅ `https://www.youtube.com/watch?v=ibfdqyz4KhQ`
- ✅ `https://youtu.be/ibfdqyz4KhQ`
- ✅ `ibfdqyz4KhQ`
- ❌ `https://youtube.com/channel/...`

## Development

### Testing Locally

Run the server directly:
```bash
python3 server.py
```

It will start in stdio mode waiting for MCP messages.

### Adding New Tools

To add new tools:
1. Add tool definition to `list_tools()`
2. Implement handler in `call_tool()`
3. Test with Claude Code

### Future Enhancements

Potential additions:
- Video metadata (title, views, duration) using pytube
- Channel information
- Playlist support
- Comment extraction
- Search YouTube for videos

## License

MIT License - Feel free to use in your projects!

## Contributing

Found a bug or want to add a feature? Pull requests welcome!

## Workshop Use

This MCP server was built as part of the AI Workshop Session 2 demonstrating:
- How to extend AI capabilities with custom tools
- MCP server development in Python
- Practical AI integration for content analysis
- Real-world use case: analyzing YouTube content

**Workshop Context:**
- Analyzing the video "Watch Me Use AI to Create 30 Days of Viral LinkedIn Posts"
- Demonstrating Custom GPT capabilities with real transcripts
- Teaching attendees how AI can augment content research
