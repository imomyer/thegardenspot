const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allImagesJson {
        nodes {
          itemID
          slug
          project
          images {
            slug
            fileName
          }
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
    if (node.slug) {
      createPage({
        path: `/images/${node.slug}`, 
        component: imageTemplate,
        context: {
          itemID: node.itemID,
          slug: node.slug
        },
      });
    } else {
      if (node.images) {
        node.images.forEach((image) => {
          createPage({
            path: `/images/${node.project}/${image.slug}`, 
            component: imageTemplate,
            context: {
              itemID: node.itemID,
              slug: image.slug

            },
          });
        });
      }
    }
  });
};
