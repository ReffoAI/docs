# MCP Resources

The Pelagora MCP server exposes resources that AI assistants can read for context.

## reffo://inventory

Returns your full inventory as structured data. AI assistants use this to understand what you have listed without making multiple tool calls.

## reffo://health

Returns node health status including:
- Uptime
- Connected peers count
- Database status
- DHT connection status

## How resources are used

MCP resources are read-only data sources. Unlike tools (which perform actions), resources provide context that helps the AI assistant make better decisions.

For example, when you ask "What should I price this at?", the assistant can read your inventory resource to see pricing patterns in your existing listings.
