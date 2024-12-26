export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  pages: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "dailytimesnewz",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "preload", href: "/css/unicons.min.css", as: "style" },
      { rel: "preload", href: "/css/fonts.css", as: "style" },
      {
        rel: "preload",
        href: "/css/swiper-bundle.min.css",
        as: "style",
      },

      // Stylesheets
      { rel: "stylesheet", href: "/js/uni-core/css/uni-core.min.css" },
      { rel: "stylesheet", href: "/css/unicons.min.css" },
      { rel: "stylesheet", href: "/css/prettify.min.css" },
      { rel: "stylesheet", href: "/css/swiper-bundle.min.css" },
      { rel: "stylesheet", href: "/css/theme/demo-seven.min.css" },
      { rel: "stylesheet", href: "/css/style.css" },
    ],
    // Scripts
    script: [
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-1WXVSBWR9Y",
        async: true,
      },
      { src: "/js/app-head-bs.js" },
      { src: "/js/uni-core/js/uni-core-bundle.min.js" },
      { src: "/js/libs/jquery.min.js" },
      { src: "/js/libs/scrollmagic.min.js" },
      { src: "/js/libs/swiper-bundle.min.js" },
      { src: "/js/libs/anime.min.js" },
      { src: "/js/helpers/data-attr-helper.js" },
      { src: "/js/helpers/swiper-helper.js" },
      { src: "/js/helpers/anime-helper.js" },
      { src: "/js/helpers/anime-helper-defined-timelines.js" },
      { src: "/js/uikit-components-bs.js" },
      { src: "/js/app.js" },
      { src: "/js/sw.js" },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/gtag.client.js", mode: "client" }, // Load only on the client side
    { src: "~/plugins/meta.js", mode: "client" },
  ],

  // router: {
  //   prefetchLinks: true,
  //   extendRoutes(routes, resolve) {
  //     routes.push({
  //       name: "blog",
  //       path: ":pathMatch+",
  //       component: resolve(__dirname, "pages/_.vue"),
  //     });
  //   },
  // },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [{ path: "~/components/", pathPrefix: false }],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      // To enable font loading support
      config.module.rules.push({
        test: /\.(ttf|woff|woff2|eot|otf)$/,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
        },
      });
    },
    postcss: {
      plugins: {
        autoprefixer: {},
      },
    },
  },
};
