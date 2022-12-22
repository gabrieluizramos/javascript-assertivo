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
      <AboutSection />
      <Newsletter />
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    cover: file(relativePath: { eq: "cover.png" }) {
      childImageSharp {
        fixed(width: 260, height: 390) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
