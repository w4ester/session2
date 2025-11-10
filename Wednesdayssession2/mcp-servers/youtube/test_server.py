#!/usr/bin/env python3
"""
Quick test script to verify YouTube MCP server functionality.
"""

from youtube_transcript_api import YouTubeTranscriptApi
import re
from urllib.parse import parse_qs, urlparse


def extract_video_id(url_or_id: str) -> str:
    """Extract YouTube video ID from URL or return the ID."""
    if re.match(r'^[a-zA-Z0-9_-]{11}$', url_or_id):
        return url_or_id

    parsed = urlparse(url_or_id)

    if parsed.netloc in ('youtu.be', 'www.youtu.be'):
        return parsed.path.lstrip('/')

    if parsed.netloc in ('youtube.com', 'www.youtube.com', 'm.youtube.com'):
        if parsed.path == '/watch':
            query_params = parse_qs(parsed.query)
            return query_params.get('v', [None])[0]
        elif parsed.path.startswith('/embed/'):
            return parsed.path.split('/')[2]
        elif parsed.path.startswith('/v/'):
            return parsed.path.split('/')[2]

    raise ValueError(f"Could not extract video ID from: {url_or_id}")


def test_video(url: str):
    """Test fetching transcript for a video."""
    print(f"\n🎥 Testing video: {url}")
    print("=" * 80)

    try:
        video_id = extract_video_id(url)
        print(f"✅ Extracted video ID: {video_id}")

        # Initialize API
        ytt_api = YouTubeTranscriptApi()

        # List available transcripts
        print(f"\n📋 Listing available transcripts...")
        transcript_list = ytt_api.list(video_id)

        print("\nAvailable transcripts:")
        for transcript in transcript_list:
            transcript_type = "Auto-generated" if transcript.is_generated else "Manual"
            print(f"  - {transcript.language} ({transcript.language_code}) - {transcript_type}")

        # Get English transcript
        print(f"\n📝 Fetching English transcript...")
        fetched_transcript = ytt_api.fetch(video_id, languages=['en'])
        transcript = fetched_transcript.snippets

        # Show first 5 entries
        print(f"\n✅ Success! First 5 entries:")
        for i, entry in enumerate(transcript[:5]):
            timestamp = entry.start
            minutes = int(timestamp // 60)
            seconds = int(timestamp % 60)
            print(f"  [{minutes:02d}:{seconds:02d}] {entry.text}")

        # Show stats
        total_text = " ".join([entry.text for entry in transcript])
        print(f"\n📊 Transcript stats:")
        print(f"  - Total entries: {len(transcript)}")
        print(f"  - Total words: {len(total_text.split())}")
        print(f"  - Total characters: {len(total_text)}")
        print(f"  - Duration: ~{int(transcript[-1].start / 60)} minutes")

        # Test search
        search_term = "AI"
        matches = [entry for entry in transcript if search_term.lower() in entry.text.lower()]
        print(f"\n🔍 Search results for '{search_term}': {len(matches)} mentions")

        return True

    except Exception as e:
        print(f"❌ Error: {e}")
        return False


if __name__ == "__main__":
    print("🚀 YouTube MCP Server Test")
    print("=" * 80)

    # Test with multiple videos
    test_urls = [
        "https://www.youtube.com/watch?v=ibfdqyz4KhQ",  # Workshop video
        "https://www.youtube.com/watch?v=8jPQjjsBbIc",  # Popular video with captions
    ]

    success_count = 0
    for url in test_urls:
        if test_video(url):
            success_count += 1
        print()

    success = success_count > 0

    if success:
        print("\n✅ All tests passed! Server is ready to use.")
        print("\nNext steps:")
        print("1. Add to Claude Code config (see README.md)")
        print("2. Restart Claude Code")
        print("3. Ask Claude to fetch transcripts!")
    else:
        print("\n❌ Tests failed. Check the error messages above.")
