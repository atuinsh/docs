import { defineConfig } from 'astro/config';
import starlightLinksValidator from 'starlight-links-validator'
import starlight from '@astrojs/starlight';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// https://astro.build/config
export default defineConfig({
  site: "https://docs.atuin.sh",
  markdown: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',
          headingProperties: {
            className: ['anchor'],
          },
          properties: {
            className: ['anchor-link'],
          },
        }
      ]
    ]
  },
  integrations: [
    starlight({
      plugins: [starlightLinksValidator()],
      title: 'Atuin Docs',
      favicon: 'atuin.png',

      head: [{
        tag: 'script',
        attrs: {
          src: 'https://plausible.io/js/script.js',
          defer: true,
          'data-domain': 'docs.atuin.sh',
        }
      }],

      logo: {
        light: './src/assets/logo-light.svg',
        dark: './src/assets/logo-dark.png',
        replacesTitle: true,
      },

      social: {
        github: 'https://github.com/atuinsh/atuin',
        discord: 'https://discord.gg/jR3tfchVvW',
        mastodon: 'https://hachyderm.io/@atuin',
        twitter: 'https://twitter.com/atuinsh',
        linkedin: 'https://www.linkedin.com/company/atuin/'
      },

      defaultLocale: "en",
      locales: {
        en: { label: "English", lang: "en" },
        "pt-br": {
          label: "Português (Brasil)",
          lang: "pt-BR",
          sidebar: [
            {
              label: 'Guia',
              items: [
                { label: 'Instalação', link: '/pt-br/guide/installation' },
                { label: 'Configurando a sincronização', link: '/pt-br/guide/sync' },
                { label: 'Importar histórico existente', link: '/pt-br/guide/import' },
                { label: 'Uso básico', link: '/pt-br/guide/basic-usage' },
                { label: 'Sincronizando dotfiles', link: '/pt-br/guide/dotfiles' },
                { label: 'Temas', link: '/pt-br/guide/theming' },
              ],
            },
            {
              label: 'Configuração',
              autogenerate: { directory: 'configuration' },
            },
            {
              label: 'Referência',
              autogenerate: { directory: 'reference' },
            },
            {
              label: 'Auto-hospedagem',
              items: [
                { label: 'Configuração do servidor', link: '/pt-br/self-hosting/server-setup' },
                { label: 'Uso', link: '/pt-br/self-hosting/usage' },
                { label: 'Docker', link: '/pt-br/self-hosting/docker' },
                { label: 'Kubernetes', link: '/pt-br/self-hosting/kubernetes' },
                { label: 'Systemd', link: '/pt-br/self-hosting/systemd' },
              ],
            },
            { label: 'Problemas conhecidos', link: '/pt-br/known-issues' },
            { label: 'Integrações', link: '/pt-br/integrations' },
            { label: 'Perguntas Frequentes', link: '/pt-br/faq' },
          ],
        }
      },

      sidebar: [
        {
          label: 'Guide',
          items: [
            { label: 'Installation', link: '/guide/installation' },
            { label: 'Setting up sync', link: '/guide/sync' },
            { label: 'Import existing history', link: '/guide/import' },
            { label: 'Basic usage', link: '/guide/basic-usage' },
            { label: 'Syncing dotfiles', link: '/guide/dotfiles' },
            { label: 'Theming', link: '/guide/theming' },
          ],
        },
        {
          label: 'Configuration',
          autogenerate: { directory: 'configuration' },
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
        {
          label: 'Self hosting',
          items: [
            { label: 'Server setup', link: '/self-hosting/server-setup' },
            { label: 'Usage', link: '/self-hosting/usage' },
            { label: 'Docker', link: '/self-hosting/docker' },
            { label: 'Kubernetes', link: '/self-hosting/kubernetes' },
            { label: 'Systemd', link: '/self-hosting/systemd' },
          ],
        },
        { label: 'Known issues', link: '/known-issues' },
        { label: 'Integrations', link: '/integrations' },
        { label: 'FAQ', link: '/faq' },
      ],
    }),
  ],
});
