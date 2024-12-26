export default ({ app }) => {
  if (process.client) {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-1WXVSBWR9Y");

    // Track route changes for SPA
    app.router.afterEach((to, from) => {
      gtag("config", "G-1WXVSBWR9Y", {
        page_path: to.fullPath,
      });
    });
  }
};
