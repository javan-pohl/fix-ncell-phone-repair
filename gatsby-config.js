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
        pageURL: 'https://www.fixncell.com/',
      },
      {
        testid: 'aboutLink',
        link: '/about',
        text: 'About',
        pageURL: 'https://www.fixncell.com/about',
      },
      {
        testid: 'repairsLink',
        link: '/repairs',
        text: 'Repairs',
        pageURL: 'https://www.fixncell.com/repairs',
      },
      {
        testid: 'contactLink',
        link: '/contact',
        text: 'Contact',
        pageURL: 'https://www.fixncell.com/contact',
      },
    ],
    siteUrl: 'https://www.fixncell.com',
    phoneTemplate: {
      name: 'iPhone ',
      link: '/phones/iphone-',
      pageURL: 'https://www.fixncell.com/phones/iphone-',
    },
    phones: [
      {
        make: 'iPhone',
        model: '6',
      },
      {
        make: 'iPhone',
        model: '6 Plus',
      },
      {
        make: 'iPhone',
        model: '7',
      },
      {
        make: 'iPhone',
        model: '7 Plus',
      },
      {
        make: 'iPhone',
        model: '8',
      },
      {
        make: 'iPhone',
        model: '8 Plus',
      },
      {
        make: 'iPhone',
        model: 'X',
      },
      {
        make: 'iPhone',
        model: 'XS',
      },
      // {
      //   make: 'iPhone',
      //   model: 'XS Max',
      // },
      // {
      //   make: 'iPhone',
      //   model: 'XR',
      // },
      // {
      //   make: 'iPhone',
      //   model: '11',
      // },
      // {
      //   make: 'iPhone',
      //   model: '11 Pro',
      // },
      // {
      //   make: 'iPhone',
      //   model: '11 Pro Max',
      // },
    ],
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
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
    'gatsby-transformer-json',
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
        name: 'phones',
        path: `${__dirname}/src/data/`,
      },
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
