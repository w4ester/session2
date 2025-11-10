#!/usr/bin/env python3
"""
YouTube MCP Server
Provides tools to fetch YouTube video information, transcripts, and search videos.
"""

import json
import logging
import re
from typing import Any
from urllib.parse import parse_qs, urlparse

from mcp.server import Server
from mcp.types import Tool, TextContent
from youtube_transcript_api import YouTubeTranscriptApi
from youtube_transcript_api._errors import (
    TranscriptsDisabledError,
    NoTranscriptFoundError,
    VideoUnavailableError
)

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("youtube-mcp-server")

# Initialize MCP server
app = Server("youtube-mcp-server")


def extract_video_id(url_or_id: str) -> str:
    """
    Extract YouTube video ID from various URL formats or return the ID if already provided.

    Supports:
    - https://www.youtube.com/watch?v=VIDEO_ID
    - https://youtu.be/VIDEO_ID
    - https://youtube.com/watch?v=VIDEO_ID
    - VIDEO_ID (direct)
    """
    # If it's already just an ID (11 characters, alphanumeric with dash/underscore)
    if re.match(r'^[a-zA-Z0-9_-]{11}$', url_or_id):
        return url_or_id

    # Parse URL
    parsed = urlparse(url_or_id)

    # Handle youtu.be short links
    if parsed.netloc in ('youtu.be', 'www.youtu.be'):
        return parsed.path.lstrip('/')

    # Handle youtube.com links
    if parsed.netloc in ('youtube.com', 'www.youtube.com', 'm.youtube.com'):
        if parsed.path == '/watch':
            query_params = parse_qs(parsed.query)
            return query_params.get('v', [None])[0]
        elif parsed.path.startswith('/embed/'):
            return parsed.path.split('/')[2]
        elif parsed.path.startswith('/v/'):
            return parsed.path.split('/')[2]

    raise ValueError(f"Could not extract video ID from: {url_or_id}")


@app.list_tools()
async def list_tools() -> list[Tool]:
    """List available YouTube tools."""
    return [
        Tool(
            name="get_transcript",
            description="Get the transcript/captions for a YouTube video. Supports multiple languages.",
            inputSchema={
                "type": "object",
                "properties": {
                    "video_url": {
                        "type": "string",
                        "description": "YouTube video URL (e.g., https://www.youtube.com/watch?v=VIDEO_ID) or video ID"
                    },
                    "language": {
                        "type": "string",
                        "description": "Preferred language code (e.g., 'en', 'es', 'fr'). Optional, defaults to auto-detect.",
                        "default": "en"
                    },
                    "preserve_formatting": {
                        "type": "boolean",
                        "description": "If true, preserves timing information. If false, returns plain text.",
                        "default": False
                    }
                },
                "required": ["video_url"]
            }
        ),
        Tool(
            name="list_transcripts",
            description="List all available transcript languages for a YouTube video.",
            inputSchema={
                "type": "object",
                "properties": {
                    "video_url": {
                        "type": "string",
                        "description": "YouTube video URL or video ID"
                    }
                },
                "required": ["video_url"]
            }
        ),
        Tool(
            name="search_transcript",
            description="Search for specific text within a YouTube video transcript.",
            inputSchema={
                "type": "object",
                "properties": {
                    "video_url": {
                        "type": "string",
                        "description": "YouTube video URL or video ID"
                    },
                    "query": {
                        "type": "string",
                        "description": "Text to search for in the transcript"
                    },
                    "language": {
                        "type": "string",
                        "description": "Language code (optional)",
                        "default": "en"
                    }
                },
                "required": ["video_url", "query"]
            }
        )
    ]


@app.call_tool()
async def call_tool(name: str, arguments: Any) -> list[TextContent]:
    """Handle tool calls."""

    try:
        if name == "get_transcript":
            video_url = arguments.get("video_url")
            language = arguments.get("language", "en")
            preserve_formatting = arguments.get("preserve_formatting", False)

            try:
                video_id = extract_video_id(video_url)
                logger.info(f"Fetching transcript for video: {video_id}")

                # Initialize API
                ytt_api = YouTubeTranscriptApi()

                # Get transcript
                fetched_transcript = ytt_api.fetch(
                    video_id,
                    languages=[language, 'en']  # Fallback to English
                )
                transcript_list = fetched_transcript.snippets

                if preserve_formatting:
                    # Include timing information
                    formatted_transcript = []
                    for entry in transcript_list:
                        timestamp = entry.start
                        minutes = int(timestamp // 60)
                        seconds = int(timestamp % 60)
                        formatted_transcript.append(
                            f"[{minutes:02d}:{seconds:02d}] {entry.text}"
                        )
                    result = "\n".join(formatted_transcript)
                else:
                    # Plain text
                    result = " ".join([entry.text for entry in transcript_list])

                return [TextContent(
                    type="text",
                    text=f"Transcript for video {video_id}:\n\n{result}"
                )]

            except TranscriptsDisabledError:
                return [TextContent(
                    type="text",
                    text=f"Error: Transcripts are disabled for this video ({video_id})"
                )]
            except NoTranscriptFoundError:
                return [TextContent(
                    type="text",
                    text=f"Error: No transcript found for video {video_id} in language '{language}'. Try using list_transcripts to see available languages."
                )]
            except VideoUnavailableError:
                return [TextContent(
                    type="text",
                    text=f"Error: Video {video_id} is unavailable or does not exist"
                )]
            except ValueError as e:
                return [TextContent(
                    type="text",
                    text=f"Error: {str(e)}"
                )]

        elif name == "list_transcripts":
            video_url = arguments.get("video_url")

            try:
                video_id = extract_video_id(video_url)
                logger.info(f"Listing transcripts for video: {video_id}")

                # Initialize API and get all available transcripts
                ytt_api = YouTubeTranscriptApi()
                transcript_list = ytt_api.list(video_id)

                available = []
                for transcript in transcript_list:
                    available.append({
                        "language": transcript.language,
                        "language_code": transcript.language_code,
                        "is_generated": transcript.is_generated,
                        "is_translatable": transcript.is_translatable
                    })

                result = "Available transcripts:\n\n"
                for t in available:
                    transcript_type = "Auto-generated" if t["is_generated"] else "Manual"
                    result += f"- {t['language']} ({t['language_code']}) - {transcript_type}\n"

                return [TextContent(
                    type="text",
                    text=result
                )]

            except Exception as e:
                return [TextContent(
                    type="text",
                    text=f"Error listing transcripts: {str(e)}"
                )]

        elif name == "search_transcript":
            video_url = arguments.get("video_url")
            query = arguments.get("query")
            language = arguments.get("language", "en")

            try:
                video_id = extract_video_id(video_url)
                logger.info(f"Searching transcript for video: {video_id}, query: {query}")

                # Initialize API and get transcript
                ytt_api = YouTubeTranscriptApi()
                fetched_transcript = ytt_api.fetch(
                    video_id,
                    languages=[language, 'en']
                )
                transcript_list = fetched_transcript.snippets

                # Search for query (case-insensitive)
                query_lower = query.lower()
                matches = []

                for entry in transcript_list:
                    if query_lower in entry.text.lower():
                        timestamp = entry.start
                        minutes = int(timestamp // 60)
                        seconds = int(timestamp % 60)
                        matches.append({
                            "timestamp": f"{minutes:02d}:{seconds:02d}",
                            "text": entry.text
                        })

                if matches:
                    result = f"Found {len(matches)} matches for '{query}':\n\n"
                    for match in matches:
                        result += f"[{match['timestamp']}] {match['text']}\n\n"
                else:
                    result = f"No matches found for '{query}' in the transcript."

                return [TextContent(
                    type="text",
                    text=result
                )]

            except Exception as e:
                return [TextContent(
                    type="text",
                    text=f"Error searching transcript: {str(e)}"
                )]

        else:
            return [TextContent(
                type="text",
                text=f"Unknown tool: {name}"
            )]

    except Exception as e:
        logger.error(f"Error in call_tool: {e}")
        return [TextContent(
            type="text",
            text=f"Error: {str(e)}"
        )]


async def main():
    """Run the MCP server."""
    from mcp.server.stdio import stdio_server

    async with stdio_server() as (read_stream, write_stream):
        logger.info("YouTube MCP Server starting...")
        await app.run(
            read_stream,
            write_stream,
            app.create_initialization_options()
        )


if __name__ == "__main__":
    import asyncio
    asyncio.run(main())
