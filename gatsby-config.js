module.exports = {
  siteMetadata: {
    title: "the-great-gatsby",
  },
  plugins: [
    "gatsby-plugin-styled-components", 
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-alias-imports"
  ],

  flags: {
    DEV_SSR: false
  }
};
