export default ({ app }, inject) => {
  inject("setMeta", (title, description) => {
    console.log("title", title);
    app.head.title = title;
    app.head.meta = [
      { name: "description", content: description },
      ...app.head.meta, // Preserve existing meta tags
    ];
  });
};
