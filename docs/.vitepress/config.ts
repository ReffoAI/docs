import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Pelagora',
  description: 'Developer documentation for the Pelagora P2P marketplace network',
  ignoreDeadLinks: [
    /^http:\/\/localhost/,
  ],
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/pelagora-logo_sm.png' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Fira+Sans:wght@700&family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Josefin+Sans:wght@600&display=swap', rel: 'stylesheet' }],
  ],
  themeConfig: {
    logo: {
      light: '/pelagora-logo.png',
      dark: '/pelagora-logo_reverse.png',
    },
    nav: [
      { text: 'Getting Started', link: '/getting-started/' },
      { text: 'CLI Installer', link: '/cli-installer/' },
      { text: 'Guides', link: '/guides/building-skills' },
      { text: 'Glossary', link: '/glossary/', activeMatch: '/glossary/' },
    ],
    sidebar: {
      '/getting-started/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Overview', link: '/getting-started/' },
            { text: 'Quick Start', link: '/getting-started/quick-start' },
            { text: 'Architecture', link: '/getting-started/architecture' },
          ],
        },
      ],
      '/glossary/': [
        {
          text: 'Glossary',
          items: [
            { text: 'Overview', link: '/glossary/' },
          ],
        },
        {
          text: 'Pelagora',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/glossary/pelagora/' },
            { text: 'Web UI', link: '/glossary/pelagora/web-ui' },
            { text: 'Ref', link: '/glossary/pelagora/ref' },
            { text: 'DHT Networking', link: '/glossary/pelagora/dht-networking' },
          ],
        },
        {
          text: 'Beacon',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/glossary/beacon/' },
            { text: 'Installation', link: '/glossary/beacon/installation' },
            { text: 'API Reference', link: '/glossary/beacon/api-reference' },
            { text: 'Sync', link: '/glossary/beacon/sync' },
            { text: 'Configuration', link: '/glossary/beacon/configuration' },
          ],
        },
        {
          text: 'PIM Protocol',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/glossary/pim-protocol/' },
            { text: 'Types', link: '/glossary/pim-protocol/types' },
            { text: 'Schemas', link: '/glossary/pim-protocol/schemas' },
            { text: 'Utilities', link: '/glossary/pim-protocol/utilities' },
          ],
        },
        {
          text: 'MCP Server',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/glossary/mcp-server/' },
            { text: 'Installation', link: '/glossary/mcp-server/installation' },
            { text: 'Tools', link: '/glossary/mcp-server/tools' },
            { text: 'Prompts', link: '/glossary/mcp-server/prompts' },
            { text: 'Resources', link: '/glossary/mcp-server/resources' },
          ],
        },
        {
          text: 'More Terms',
          collapsed: true,
          items: [
            { text: 'Category Schema', link: '/glossary/#category-schema' },
            { text: 'DHT', link: '/glossary/#dht' },
            { text: 'Hyperswarm', link: '/glossary/#hyperswarm' },
            { text: 'MCP', link: '/glossary/#mcp' },
            { text: 'Negotiation', link: '/glossary/#negotiation' },
            { text: 'Offer', link: '/glossary/#offer' },
            { text: 'Peer', link: '/glossary/#peer' },
            { text: 'PeerMessage', link: '/glossary/#peermessage' },
            { text: 'Ref', link: '/glossary/#ref' },
            { text: 'Skill', link: '/glossary/#skill' },
            { text: 'Tool', link: '/glossary/#tool' },
            { text: 'Topic', link: '/glossary/#topic' },
            { text: 'Traits', link: '/glossary/#traits' },
            { text: 'Want', link: '/glossary/#want' },
          ],
        },
      ],
      '/guides/': [
        {
          text: 'Guides',
          items: [
            { text: 'Building Skills', link: '/guides/building-skills' },
            { text: 'Adding Categories', link: '/guides/adding-categories' },
            { text: 'Schema.org', link: '/guides/schema-org' },
          ],
        },
      ],
      '/cli-installer/': [
        {
          text: 'CLI Installer',
          items: [{ text: 'Overview', link: '/cli-installer/' }],
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/orgs/ReffoAI/repositories' },
    ],
    search: {
      provider: 'local',
    },
    editLink: {
      pattern: 'https://github.com/ReffoAI/docs/edit/main/docs/:path',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 Pelagora',
    },
  },
})
