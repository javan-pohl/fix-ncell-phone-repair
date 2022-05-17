module.exports = {
  siteMetadata: {
    title: 'FixNcell iPhone Repair',
    siteName: 'FixNcell iPhone Repair',
    phone: '3034216499',
    email: 'info@fixncell.com',
    menuLinks: [
      {
        testid: 'homeLink',
        link: '/',
        text: 'Home',
        pageURL: 'https://www.fixncell.com/',
      },
      {
        testid: 'aboutLink',
        link: '/about/',
        text: 'About',
        pageURL: 'https://www.fixncell.com/about/',
      },
      {
        testid: 'repairsLink',
        link: '/repairs/',
        text: 'Repairs',
        pageURL: 'https://www.fixncell.com/repairs/',
      },
      // {
      //   testid: 'locationsLink',
      //   link: '/locations',
      //   text: 'Service Areas',
      //   pageURL: 'https://www.fixncell.com/locations',
      // },
      {
        testid: 'contactLink',
        link: '/contact-us/',
        text: 'Contact',
        pageURL: 'https://www.fixncell.com/contact-us/',
      },
    ],
    siteUrl: 'https://www.fixncell.com',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'UA-70371516-1', // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
        },
      },
    },

    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-next-seo',
    {
      resolve: 'gatsby-plugin-scroll-reveal',
      options: {
        threshold: 0.1, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations

        // Advanced Options
        selector: '[data-sal]', // Selector of the elements to be animated
        animateClassName: 'sal-animate', // Class name which triggers animation
        disabledClassName: 'sal-disabled', // Class name which defines the disabled state
        rootMargin: '0% 50%', // Corresponds to root's bounding box margin
        enterEventName: 'sal:in', // Enter event name
        exitEventName: 'sal:out', // Exit event name
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/favicon.ico',
      },
    },
    'gatsby-transformer-remark',
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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'repairs',
        path: './src/pages/repairs',
      },
      __key: 'repairs',
    },
  ],
}
