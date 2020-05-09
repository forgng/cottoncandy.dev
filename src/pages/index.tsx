import React from "react";
import { Link } from "gatsby";
import styled from "styled-components/macro";
import SEO from "../components/seo";
import HeroBackground from "../components/HeroBackground";
import Layout from "../components/layout";
import HeroLogo from "../components/HeroLogo";
import { GlobalStyle } from "../styles";
import ExampleImage from "../components/ExampleImage";

const IndexPage = () => (
  <Layout>
    <GlobalStyle />
    <SEO title="Home" />
    <Hero>
      <HeroBackground />
      <LogoContainer>
        <HeroLogo />
      </LogoContainer>
    </Hero>
    <Page>
      <Title>Colorful theme for Visual Studio Code</Title>
      <ImageExampleContainer>
        <ExampleImage />
      </ImageExampleContainer>
      <div>
        <h2>Install</h2>
        <h3>Install using Command Palette</h3>
        <ul>
          <li>Go to View -> Command Palette or press</li>
          <li>
            Ctrl+Shift+P - Then enter Install Extension - Write Cotton Candy
          </li>
          <li>Select it or press Enter to install</li>
        </ul>
        <h3>Install from source</h3>
        <pre>
          <code>
            <span>$ </span>git clone https://github.com/forgng/Cotton-Candy.git
            ~/.vscode/extensions/theme-cotton-candy
          </code>
        </pre>
      </div>
    </Page>
    <Footer>
      <Credits>
        made with 🍺 by <a href="https://forgng.ovrvu.com">forgng</a>
      </Credits>
    </Footer>
  </Layout>
);

const Hero = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: 95vh;
  overflow-x: hidden;
`;

const LogoContainer = styled.div`
  margin-top: 50px;
  width: 600px;
  z-index: 1;
`;

const Page = styled.div`
  width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h1`
  margin-top: 10px;
  font-size: 5rem;
`;
const ImageExampleContainer = styled.div`
  width: 700px;
`;

const Footer = styled.footer`
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Credits = styled.p``;

export default IndexPage;
