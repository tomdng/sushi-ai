module.exports = {
  siteMetadata: {
    title: `Sushi Ai Manchester`,
    description: `Sushi Ai Manchester has delicious sushi and Japanese cuisine. It is conveniently located in the Manchester area. We have sushi, nigiri, udon, and more with dine in, pick up, and delivery options.`,
    author: `Sushi Ai`,
    siteUrl: `https://sushiaimanchester.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `logo`,
        path: `${__dirname}/src/assets/logo`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `menu`,
        path: `${__dirname}/src/assets/menu`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-excel`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `sushi-ai-manchester`,
        short_name: `sushi-ai`,
        start_url: `/`,
        background_color: `#2c271d`,
        theme_color: `#2c271d`,
        display: `minimal-ui`,
        icon: `src/assets/logo/logo512.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: ['/menu/'],
        serialize: ({ path }) => {
          return {
            url: path,
          }
        },
      },
    },
  ],
}
