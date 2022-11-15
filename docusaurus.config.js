// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentation',
  tagline: 'Tài liệu hướng dẫn sử dụng',
  url: 'https://docs.sphoton.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'ducnt',
  projectName: 'template-documents',

  i18n: {
    defaultLocale: 'vi',
    locales: ['vi','en'],
    localeConfigs: {
      vi: {
        label: 'Tiếng việt',
        htmlLang: 'vi'
      },
      en: {
        label: 'English',
        htmlLang: 'en'
      }
    }
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/'
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/scss/global.scss')
        }
      })
    ]
  ],
  themes: [
    [
      require.resolve('@cmfcmf/docusaurus-search-local'),
      {
        indexBlog: false,
        language: 'vi'
      }
    ]
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Documentation',
        logo: {
          alt: 'Documentation Logo',
          src: 'img/logo.png'
        },
        items: [
          {
            href: 'https://team.sphoton.com/sphoton/channels/pj-documentation',
            label: 'Hỗ trợ',
            position: 'left'
          },
          {
            type: 'localeDropdown',
            position: 'right'
          },
          // {
          //   type: 'docsVersionDropdown',
          //   position: 'right'
          // }
        ]
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} sPhoton technology co.,ltd. Built with Docusaurus.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    }),
  plugins: ['docusaurus-plugin-sass']
}

module.exports = config
