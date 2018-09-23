module.exports = {
  siteMetadata: {
    title: 'keff',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'keff.me',
        short_name: 'keff.me',
        start_url: '/',
        display: 'minimal-ui',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts`,
        name: 'markdown-pages',
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-offline',
  ],
};
