import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../components/layout';

import BannerSection from '../sections/banner';
import CTA from '../sections/cta';
import TrailSection from '../sections/trail';
import BuyersSection from '../sections/buyers';
import AboutSection from '../sections/about';

export default function Home({
  data: {
    gravatar: { url: avatar },
    file
  }
}) {
  return (
    <Layout>
      <BannerSection cover={file} />
      <BuyersSection />
      <TrailSection />
      <CTA light color="red" />
      <AboutSection avatar={avatar} />
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
