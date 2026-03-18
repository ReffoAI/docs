# MCP Prompts

The Pelagora MCP server includes built-in prompt templates that guide AI assistants through common workflows.

## list-an-item

Walks through creating a new inventory listing step by step.

**Flow:**
1. Ask for item details (title, description, category)
2. Suggest a category from the taxonomy
3. Ask for pricing and condition
4. Create the item
5. Confirm with a summary

## search-and-buy

Guides the user through searching the network and making an offer.

**Flow:**
1. Ask what the user is looking for
2. Search the network
3. Present results with key details
4. Help the user choose an item
5. Draft and send an offer

## Using prompts

In Claude Desktop, prompts appear in the prompt selector. You can also invoke them by describing the workflow:

> "I want to list a new item for sale"

> "Help me find and buy a vintage camera"
