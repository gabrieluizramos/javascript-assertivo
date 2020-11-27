import React from 'react';

import { Layout } from '../components/layout';

import BannerSection from '../sections/banner';
import CTA from '../sections/cta';
import TrailSection from '../sections/trail';
import AboutSection from '../sections/about';

export default function Home() {
  return (
    <Layout>
      <BannerSection />
      <TrailSection />
      <CTA color="red" />
      <AboutSection />
    </Layout>
  );
}
