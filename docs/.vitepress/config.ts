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
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Fira+Sans:wght@700&family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap', rel: 'stylesheet' }],
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
      { text: 'Glossary', link: '/reference/glossary' },
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
      '/beacon/': [
        {
          text: 'Beacon',
          items: [
            { text: 'Overview', link: '/beacon/' },
            { text: 'Installation', link: '/beacon/installation' },
            { text: 'Web UI', link: '/beacon/web-ui' },
            { text: 'API Reference', link: '/beacon/api-reference' },
            { text: 'Data Model', link: '/beacon/data-model' },
            { text: 'DHT Networking', link: '/beacon/dht-networking' },
            { text: 'Sync', link: '/beacon/sync' },
            { text: 'Configuration', link: '/beacon/configuration' },
          ],
        },
      ],
      '/pim-protocol/': [
        {
          text: 'PIM Protocol',
          items: [
            { text: 'Overview', link: '/pim-protocol/' },
            { text: 'Types', link: '/pim-protocol/types' },
            { text: 'Schemas', link: '/pim-protocol/schemas' },
            { text: 'Utilities', link: '/pim-protocol/utilities' },
          ],
        },
      ],
      '/mcp-server/': [
        {
          text: 'MCP Server',
          items: [
            { text: 'Overview', link: '/mcp-server/' },
            { text: 'Installation', link: '/mcp-server/installation' },
            { text: 'Tools', link: '/mcp-server/tools' },
            { text: 'Prompts', link: '/mcp-server/prompts' },
            { text: 'Resources', link: '/mcp-server/resources' },
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
      '/reference/': [
        {
          text: 'Reference',
          items: [{ text: 'Glossary', link: '/reference/glossary' }],
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ReffoAI' },
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
