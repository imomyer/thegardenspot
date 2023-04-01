/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `The Garden Spot`,
    siteUrl: `https://thegardenspot.nyc`
  },
  plugins: ["gatsby-plugin-netlify", {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Courier Prime`,
            file: `https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap`,
          },
        ],
      },
    },],
};