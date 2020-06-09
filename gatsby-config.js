module.exports = {
  siteMetadata: {
    title: 'keff'
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'keff.dev',
        short_name: 'keff.dev',
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
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-katex',
          'gatsby-remark-prismjs',
          'gatsby-remark-external-links',
        ],
      },
    },
    'gatsby-plugin-offline',
  ],
};
