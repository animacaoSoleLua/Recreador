// ...existing code...
// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Recreadores",
  tagline: "Como se tornar um bom recreador.",
  favicon: "img/logo.png",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://animacaoSoleLua.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/Recreador/",

  // Load Ionicons web components in the browser (CDN). We add the
  // scripts here so they are included only on the client side.
  scripts: [
    { src: 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js', type: 'module' },
    { src: 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js', nomodule: true },
  ],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "animacaoSoleLua", // Usually your GitHub org/user name.
  projectName: "Recreador", // Usually your repo name.

  trailingSlash: false,

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn', // ou 'throw' / 'ignore'
    },
  },
  deploymentBranch: "gh-pages",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".

  i18n: {
    defaultLocale: "pt-BR",
    locales: ["pt-BR"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["pt"], // busca em português
        searchBarShortcutKeymap: "ctrl+shift+f", // Use Ctrl+Shift+F
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          // Permite que a sidebar seja recolhida/expandida pelo usuário
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: "Recreação",
        logo: {
          alt: "Logo SL",
          src: "img/logo.png",
          href: "/",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Início",
          },
        ],
      },
      footer: {
        links: [
          {
            title: "Contato",
            items: [
              {
                label: "WhatsApp",
                href: "https://wa.me/61981836060",
              },
              {
                label: "Instagram",
                href: "https://www.instagram.com/animacaosolelua/",
              },
            ],
          },
        ],
  // Use HTML for the icon; Ionicons web component will render in the browser
  copyright: `Copyright © ${new Date().getFullYear()} Sol e Lua. Built with <ion-icon name="heart-outline"></ion-icon>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;