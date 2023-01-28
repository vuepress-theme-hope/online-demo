import { hopeTheme } from 'vuepress-theme-hope';
import { enNavbar, zhNavbar } from './navbar/index.js';
import { enSidebar, zhSidebar } from './sidebar/index.js';

const hostname =
  process.env.HOSTNAME || 'https://vuepress-theme-hope-docs-demo.netlify.app';

export default hopeTheme({
  hostname,

  author: {
    name: 'Mr.Hope',
    url: 'https://mrhope.site',
  },

  iconAssets: 'iconfont',

  logo: '/logo.svg',

  repo: 'vuepress-theme-hope/vuepress-theme-hope',

  docsDir: 'demo/theme-docs/src',

  pageInfo: ['Author', 'Original', 'Date', 'Category', 'Tag', 'ReadingTime'],

  locales: {
    '/': {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      footer: 'Default footer',

      displayFooter: true,

      metaLocales: {
        editLink: 'Edit this page on GitHub',
      },
    },

    /**
     * Chinese locale config
     */
    '/zh/': {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: '默认页脚',

      displayFooter: true,

      // page meta
      metaLocales: {
        editLink: '在 GitHub 上编辑此页',
      },
    },
  },

  encrypt: {
    config: {
      '/demo/encrypt.html': ['1234'],
      '/zh/demo/encrypt.html': ['1234'],
    },
  },

  plugins: {
    // If you don’t need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    comment: {
      /**
       * Using Giscus
       */
      // provider: "Giscus",
      // repo: "vuepress-theme-hope/giscus-discussions",
      // repoId: "R_kgDOG_Pt2A",
      // category: "Announcements",
      // categoryId: "DIC_kwDOG_Pt2M4COD69",

      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      provider: 'Waline',
      serverURL: 'https://vuepress-theme-hope-comment.vercel.app',
    },

    // Disable features you don’t want here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ['ts', 'vue'],
      },
      presentation: {
        plugins: ['highlight', 'math', 'search', 'notes', 'zoom'],
      },
      stylize: [
        {
          matcher: 'Recommended',
          replacer: ({ tag }) => {
            if (tag === 'em')
              return {
                tag: 'Badge',
                attrs: { type: 'tip' },
                content: 'Recommended',
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },
  },
});
