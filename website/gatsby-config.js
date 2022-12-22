const path = require('path');
const { author } = require('./package.json');
const email = author.split('<').pop().slice(0, -1)

module.exports = {
  siteMetadata: {
    title: `JavaScript Assertivo - Testes e qualidade de código em todas as camadas da aplicação | Gabriel Ramos`,
    description: `Chegou a hora de testar todas as camadas de uma aplicação JavaScript. De uma simples ferramenta de linha de comando, à uma aplicação Back-end que expõe uma API e uma aplicação Front-end.`,
    author: `@gabrieluizramos`,
    siteUrl: `https://javascriptassertivo.com.br/`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-gravatar`,
      options: {
        emails: [
          { email, query: `?size=240` }
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          'G-4MBSCVZZLD',
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: 'OPT_CONTAINER_ID',
          anonymize_ip: true,
          cookie_expires: 0,
        }
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://gabrieluizramos.us8.list-manage.com/subscribe/post?u=a28aa5218b0f56cc08730dcec&id=e8f87b328e',
        timeout: 5000
      }
    },
  ],
}
