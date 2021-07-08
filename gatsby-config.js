module.exports = {
  siteMetadata: {
    title: 'FixNcell Phone Repair',
    phone: '3034216499',
    email: 'fixncellllc@gmail.com',
    menuLinks: [
      {
        testid: 'homeLink',
        link: '/',
        text: 'Home',
      },
      {
        testid: 'aboutLink',
        link: '/about',
        text: 'About',
      },
      {
        testid: 'repairsLink',
        link: '/iphone-repair',
        text: 'Repairs',
      },
      {
        testid: 'contactLink',
        link: '/contact',
        text: 'Contact Us',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-70371516-1',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
}
