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
    file
  }
}) {
  return (
    <Layout>
      <SEO banner={file} />
      <BannerSection cover={file} />
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
    file(relativePath: { eq: "cover.jpg" }) {
      childImageSharp {
        fixed(width: 280, height: 380) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
