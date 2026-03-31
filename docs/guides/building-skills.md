# Building Skills

Skills are plugins that extend Pelagora node functionality. This guide walks through creating a skill from scratch.

## Skill structure

A skill is an npm package that exports a class implementing the `Skill` interface from `@pelagora/pim-protocol`:

```typescript
import { Skill, SkillDatabase } from '@pelagora/pim-protocol'

export default class MySkill implements Skill {
  id = 'my-skill'
  name = 'My Skill'
  version = '1.0.0'
  description = 'What this skill does'

  async initialize(db: SkillDatabase): Promise<void> {
    // Set up database tables, register handlers
  }

  getRoutes() {
    // Return Express Router for HTTP endpoints
  }

  getMessageHandlers() {
    // Return DHT message handlers
  }

  getMcpTools() {
    // Return MCP tool definitions
  }
}
```

## Naming convention

Skills are discovered automatically from `node_modules`. Use the naming pattern:

- **Scoped:** `@pelagora/skill-{name}` (official skills)
- **Community:** `pelagora-skill-{name}`

## Database access

Skills receive a `SkillDatabase` interface (not `better-sqlite3` directly) to ensure portability:

```typescript
async initialize(db: SkillDatabase) {
  db.exec(`
    CREATE TABLE IF NOT EXISTS my_skill_data (
      id TEXT PRIMARY KEY,
      value TEXT
    )
  `)
}
```

## HTTP routes

Skills can add Express routes mounted at `/skills/{skill-id}/`:

```typescript
getRoutes() {
  const router = Router()
  router.get('/status', (req, res) => {
    res.json({ status: 'ok' })
  })
  return router
}
```

## DHT message handlers

Register handlers for custom peer message types:

```typescript
getMessageHandlers() {
  return {
    'my-custom-message': (message, peer) => {
      // Handle incoming DHT message
    }
  }
}
```

Messages are automatically namespaced as `skill:my-skill:my-custom-message`.

## MCP tools

Expose skill functionality to AI assistants:

```typescript
getMcpTools() {
  return [
    {
      name: 'my_skill_action',
      description: 'Do something with my skill',
      schema: z.object({ input: z.string() }),
      handler: async (params) => {
        return { result: 'done' }
      }
    }
  ]
}
```

## Example: Reverse Auction skill

See `@pelagora/skill-reverse-auction` for a complete reference implementation that includes database tables, DHT messaging, HTTP routes, and MCP tools.

## Installation

Users install skills as npm packages:

```bash
npm install @pelagora/skill-reverse-auction
```

The Pelagora skill loader automatically discovers and initializes installed skills on startup.
