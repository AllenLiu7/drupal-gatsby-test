const path = require(`path`)


module.exports = {
    siteMetadata: {
        title: `Allen Drupal Gatsby`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        `gatsby-transformer-sharp`, // Needed for dynamic images
        {
            resolve: `gatsby-source-drupal`,
            options: {
              baseUrl: `https://dev-allendrupal.pantheonsite.io/`,
              apiBase: `jsonapi`, // optional, defaults to `jsonapi`
            },
          },
    ],
};
