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
        position: 'Data Scientist - Game Intelligence',
        time: 'Oct 2024 - Present',
        location: 'Paris, France',
        link: 'https://www.skillcorner.com/',
        highlights: [
          "Opened a new revenue stream by applying the company's data to sports-betting markets. Built a Bayesian match-prediction model (PyMC library) with walk-forward backtesting and bet simulation, reaching bookmaker-level accuracy.",
          "Built an AI assistant that lets the whole team find answers about our code in plain language. Powered by an LLM (Claude), it distills the entire codebase (30+ repositories) into a self-updating, shared knowledge base, then serves it through specialized sub-agents and skills that answer questions, triage pipeline issues, and help with client support.",
          "Led a project to measure which direction players are facing on the pitch and derived key football metrics from this data. Derived player orientation from body-pose estimation, enriching football metrics (for example forward momentum) with biomechanical context unavailable from positional tracking data alone.",
          "Cut the company's reliance on costly third-party data providers. Integrated automatically detected events into the Game Intelligence pipeline, generating Dynamic Events directly from tracking data.",
        ],
      },
      {
        company: 'SkillCorner',
        position: 'Data Scientist - Computer Vision',
        time: 'Sep 2022 - Oct 2024',
        location: 'Paris, France',
        link: 'https://www.skillcorner.com/',
        highlights: [
          "Automated the detection of on-field actions (passes, shots, etc.) that previously required manual annotation. Built the detector on Graph Attention Networks applied to tracking data, extending coverage to leagues with no external annotation.",
          "Improved the automatic identification of players in match footage. Optimized a jersey-number recognition model (ResNet) and player-role embeddings (a latent representation of each player's football role).",
        ],
      },
      {
        company: 'Signality',
        position: 'Machine Learning Intern',
        time: 'Apr 2021 - Aug 2021',
        location: 'Linköping, Sweden',
        link: 'https://www.signality.com/',
        highlights: [
          "Led a research and development initiative for a company specializing in real-time sports tracking data.",
          "Created a 3D dataset of player poses from ordinary 2D camera footage. Reconstructed the 3D poses from synchronized multi-camera 2D detections using camera-geometry techniques with OpenCV.",
          "Built models that recover a player's 3D body pose from a single camera. Designed these monocular 3D pose-estimation models and implemented them with TensorFlow.",
        ],
      },
      {
        company: 'Dataperformers',
        position: 'Machine Learning Intern',
        time: 'May 2019 - Aug 2019',
        location: 'Montréal, Canada',
        link: 'https://www2.deloitte.com/ca/en/pages/press-releases/articles/deloitte-canada-acquires-dataperformers-company-inc-bolstering.html',
        highlights: [
          "Designed scalable algorithms for an ad-exchange client.",
          "Sped up the processing of massive, continuous data streams. Developed optimized scripts for large-scale streaming data using Cython and Numba.",
          "Enabled models to keep learning from new data as it arrives. Built and trained deep neural networks for online learning on unseen data.",
        ],
      },
      {
        company: 'Dataperformers',
        position: 'Machine Learning Intern',
        time: 'May 2018 - Aug 2018',
        location: 'Montreal, Canada',
        link: 'https://www2.deloitte.com/ca/en/pages/press-releases/articles/deloitte-canada-acquires-dataperformers-company-inc-bolstering.html',
        highlights: [
          "Implemented a social media data analysis pipeline for an investment company.",
          "Slashed the data pipeline's computation time. Automated and optimized Twitter data collection using Tweepy.",
          "Predicted market sentiment from social-media text. Designed and trained Natural Language Processing models for sentiment analysis with Keras.",
        ],
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
        background_color: `#091540`,
        theme_color: `#091540`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
