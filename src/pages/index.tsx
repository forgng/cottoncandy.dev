import React from "react";
import { Link } from "gatsby";
import styled from "styled-components/macro";
import Image from "../components/image";
import SEO from "../components/seo";
import HeroBackground from "../components/HeroBackground";

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Hero>
      <HeroBackground />
      <LogoContainer>
        <Logo src="./images/hero-logo.svg" alt="logo" />
      </LogoContainer>
    </Hero>
    <Page>
      <Title>Colorful theme for Visual Studio Code</Title>
      <ImageExampleContainer>
        <ImageExample
          src="./images/example.png"
          alt="example typescript file"
        />
      </ImageExampleContainer>
      {/* <div class="section">
        <h2 class="title">Install</h2>
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
            <span class="no-select">$ </span>git clone
            https://github.com/forgng/Cotton-Candy.git
            ~/.vscode/extensions/theme-cotton-candy
          </code>
        </pre>
      </div>
    </div> */}
    </Page>
    <Footer>
      <Credits>
        made with 🍺 by <a href="https://forgng.ovrvu.com">forgng</a>
      </Credits>
    </Footer>
  </>
);

const Hero = styled.div``;

const LogoContainer = styled.div``;
const Logo = styled.img``;

const Page = styled.div``;
const Title = styled.h1``;
const ImageExampleContainer = styled.div``;

const ImageExample = styled.img``;

const Footer = styled.footer``;
const Credits = styled.p``;

export default IndexPage;
