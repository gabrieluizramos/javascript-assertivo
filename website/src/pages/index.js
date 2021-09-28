import React from 'react';
import { graphql } from 'gatsby';

import Layout, { SEO } from '../components/layout';

import BannerSection from '../sections/banner';
import CTA from '../sections/cta';
import TrailSection from '../sections/trail';
import BuyersSection from '../sections/buyers';
import AboutSection from '../sections/about';
import Newsletter from '../sections/newsletter';

export default function Home({
  data: {
    gravatar: { url: avatar },
    cover
  }
}) {
  return (
    <Layout>
      <SEO banner={cover} />
      <BannerSection cover={cover} />
      <BuyersSection />
      <TrailSection />
      <CTA light color="red" />
      <AboutSection avatar={avatar} />
      <Newsletter />
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    gravatar(email: { eq: "gabriel.luiz.ramos@gmail.com" }) {
      url
    }
    cover: file(relativePath: { eq: "cover.png" }) {
      childImageSharp {
        fixed(width: 260, height: 390) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
