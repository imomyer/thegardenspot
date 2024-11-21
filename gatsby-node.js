const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allImagesJson {
        nodes {
          id
          slug
        }
      }
    }
  `);

  if (result.errors) {
    console.error(result.errors);
    throw new Error("Failed to fetch image data");
  }

  const imageTemplate = path.resolve(`src/templates/image-page.js`);

  result.data.allImagesJson.nodes.forEach((node) => {
    createPage({
      path: `/images/${node.slug}`, // Customize the URL structure
      component: imageTemplate,
      context: {
        slug: node.slug,
      },
    });
  });
};
