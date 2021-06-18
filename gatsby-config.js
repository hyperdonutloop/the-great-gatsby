module.exports = {
  siteMetadata: {
    title: "the-great-gatsby",
  },
  plugins: [
    "gatsby-plugin-styled-components", 
    "gatsby-plugin-gatsby-cloud",
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@src': 'src',
          '@components': 'src/components',
          '@pages': 'src/pages'
        },
        extenstions: [
          'js',
        ]
      }
    }
  ],
};
