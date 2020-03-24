require('dotenv').config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `THC Solutions Cannabis Policy Page`,
    description: `Find information on Cannabis policies within the United States with our interactive map!`,
    author: `@`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `thc-us-cannabis-policy-page`,
        short_name: `thc-us-cannabis-map`,
        start_url: `/`,
        background_color: `#4a7729 `,
        theme_color: `#4a7729 `,
        display: `minimal-ui`,
        icon: `src/images/thc-logo@300x.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.MY_SANITY_PROJECT_ID,
        dataset: process.env.MY_SANITY_DATASET,
        token: process.env.MY_SANITY_TOKEN,
        overlayDrafts: `true`,
        watchMode: `true`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
