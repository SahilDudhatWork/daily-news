const fs = require("fs");
const path = require("path");
const $axios = require("axios"); // Assuming you're using axios to fetch data

async function addMetaTagsToGeneratedHTML() {
  // Fetch the categories and posts data
  const res = await $axios.get(
    "https://admin.dailytimesnewz.com/api/get-all-post"
  ); // Make sure this API is accessible after building
  const posts = res.data.data.posts;

  // Loop through each slug to add meta tags
  for (const post of posts) {
    try {
      const folderPath = path.resolve(
        __dirname,
        "dist",
        post.slug.replace("/", "")
      ); // Use the folder path without .html
      const filePath = path.join(folderPath, "index.html"); // Now target index.html within the folder
      // Check if the HTML file exists for this slug
      if (fs.existsSync(filePath)) {
        // Read the existing HTML file
        let htmlContent = fs.readFileSync(filePath, "utf-8");

        const newMetaTags = `
        <meta property="og:title" content="${post.title}" />
        <meta property="og:type" content="website" />
        <meta name="og:description" content="${post.excerpt}" />
        <meta name="og:url" content="https://dailytimesnewz.com/${post.slug}/" />
        <meta property="og:image" content="${post.image}" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />
      `;
        // Insert the new meta tags into the <head> section
        htmlContent = htmlContent.replace(
          /<\/head>/,
          `${newMetaTags}\n</head>`
        );
        // Write the updated HTML back to the file
        fs.writeFileSync(filePath, htmlContent);
        console.error("build generated", filePath);
      }
    } catch (error) {
      console.error(`Error processing:`, error);
    }
  }
}

// Call the function to add meta tags
addMetaTagsToGeneratedHTML();
