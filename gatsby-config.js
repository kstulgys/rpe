module.exports = {
  siteMetadata: {
    title: `Rpetify`,
    description: `This app calculates you weights, plates on the bar, warmup sets and one rep max based on the rate of perceived exertion.`,
    keywords: "gatsbyjs, gatsby, javascript, sample, something",
    siteUrl: "https://gatsby-starter-typescript-plus.netlify.com",
    author: "@imkarolis",
    social: {
      twitter: `imkarolis`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-netlify-identity`,
      options: {
        url: `https://rpe.netlify.com/`,
      },
    },
    "gatsby-plugin-chakra-ui",
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-typescript`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
