const path = require('path');
const { author } = require('./package.json');
const email = author.split('<').pop().slice(0, -1)

module.exports = {
  siteMetadata: {
    title: `JavaScript Assertivo`,
    description: `Testar aplicações JavaScript de ponta-a-ponta utilizando conceitos fundamentais e tecnologias de mercado.`,
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
  ],
}
