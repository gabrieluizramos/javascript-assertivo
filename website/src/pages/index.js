import React from "react"

import { Layout } from "../components/layout"
import styled from "styled-components"

const Page = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  height: 100vh;
  overflow: hidden;
`;

const Stripe = styled.h1`
  width: 100%;
  padding: 150px 30px;
  color: #dadada;
  background: #202020;
  letter-spacing: 2px;
  text-align: center;
  transform: skewY(25deg);
  font-weight: 100;

  & > * {
    display: block;
    transform: skewY(-25deg);
  }
`;

export default function Home() {
  return (
    <Layout>
      <Page>
        <Stripe>
          <span>Em breve</span>
        </Stripe>
      </Page>
    </Layout>
  )
}
