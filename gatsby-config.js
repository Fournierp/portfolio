module.exports = {
  pathPrefix: "portfolio",
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: 'https://fournierp.github.io/portfolio/',
    // Your Name
    name: 'Paul Fournier',
    // Main Site Title
    title: `Paul Fournier | Data Scientist`,
    // Description that goes under your name in main bio
    description: `Helping football clubs do data driven player recruitment`,
    // Optional: Twitter account handle
    // author: `@rfitzio`,
    // Optional: Email address
    email: `paul.ag.fournier@gmail.com`,
    // Optional: Github account URL
    github: `https://github.com/Fournierp`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/fournier-paul/`,
    // Content of the About Me section
    about: `🇫🇷 but lived in 🇭🇰 🇺🇸 🇨🇦`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: '⚽ Fantasy Premier League',
        description:
          'Collection of Football data scraping, analysis and modeling',
        link: 'https://github.com/Fournierp/FPL',
      },
      {
        name: '🤖 Atari Reinforcement Learning',
        description:
          'Atari Breakout game solved using Deep Q-Learning from frame data',
        link: 'https://github.com/Fournierp/rl',
      },
      {
        name: '🔍 CAPTCHA',
        description:
          'Decyphering CAPTCHAv2 images with Convolution Neural Networks',
        link: 'https://github.com/Fournierp/OCR',
      },
      {
        name: '💸 Dashboard for Stock Market Analysis',
        description:
          'Interactive web app with live visualizations of companies stock price variations and recent articles',
        link: 'https://github.com/Fournierp/alfred',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        company: 'SkillCorner',
        position: 'Data Scientist',
        time: 'Sep 2022 - Present',
        location: 'Paris, France',
        link: 'https://www.skillcorner.com/',
      },
      {
        company: 'Signality',
        position: 'Machine Learning Intern',
        time: 'Apr 2021 - Aug 2021',
        location: 'Linköping, Sweden',
        link: 'https://www.signality.com/',
      },
      {
        company: 'Dataperformers',
        position: 'Machine Learning Intern',
        time: 'May 2019 - Sep 2019',
        location: 'Montréal, Canada',
        link: 'https://www2.deloitte.com/ca/en/pages/press-releases/articles/deloitte-canada-acquires-dataperformers-company-inc-bolstering.html',
      },
      {
        company: 'Dataperformers',
        position: 'Machine Learning Intern',
        time: 'May 2018 - Sep 2018',
        location: 'Montreal, Canada',
        link: 'https://www2.deloitte.com/ca/en/pages/press-releases/articles/deloitte-canada-acquires-dataperformers-company-inc-bolstering.html',
      },
    ],
    // Optional: List your education, they must have `name` and `description`. `link` is optional.
    education: [
      {
        company: 'Ecole Polytechnique & HEC Paris',
        position: 'MScT Data Science for Business',
        time: '2020 - 2022',
        location: 'Paris, France',
        link: 'https://www.hec.edu/en/master-s-programs/ecole-polytechnique-hec-programs/master-science-data-sciencefor-business-ecole-polytechnique-hec',
      },
      {
        company: 'McGill University',
        position: 'B.A. in Software Engineering with Minor in Mathematics',
        time: '2015 - 2020',
        location: 'Montréal, Canada',
        link: 'https://www.mcgill.ca/ece/',
      }
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Python, Tensorflow, PyTorch, OpenCV',
      },
      {
        name: 'Other',
        description:
          'Git, AWS, Docker',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
