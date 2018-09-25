module.exports = {
  siteMetadata: {
    title: 'Allez la !',
    description: 'A big text goes here',
    keywords: 'Nothing to see here'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'abneuteuqhda',
        accessToken: 'bb74ba05715e994e4822bd22c2a4ada3a92ae5390de64bd31f3136ab5c71dd1e'
      }
    }
  ],
}
