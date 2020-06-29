import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import SEO from "../components/seo";
import HeroBackground from "../components/HeroBackground";
import HeroLogo from "../components/HeroLogo";
import { GlobalStyle } from "../styles";
import ExampleImage from "../components/ExampleImage";
import VSCodeIcon from "../components/VSCodeIcon";
import GithubIcon from "../components/GithubIcon";
import "normalize.css";

const IndexPage = () => (
  <>
    <GlobalStyle />
    <SEO />
    <Hero>
      <HeroBackground />
      <LogoContainer>
        <HeroLogo />
      </LogoContainer>
    </Hero>
    <Page>
      <Title>Colorful Dark Theme</Title>
      <Title>🍭🍬🦄</Title>
      <Center>
        <ImageExampleContainer>
          <ExampleImage />
        </ImageExampleContainer>
      </Center>
      <InstallationInstructionsContainer>
        <h2>Install</h2>
        <h3>Install using Command Palette</h3>
        <ul>
          <li>Go to View -&gt; Command Palette or press</li>
          <li>Ctrl+Shift+P - Install Extension - Search Cotton Candy</li>
          <li>Select it or press Enter to install</li>
        </ul>
        <h3>Install from source</h3>
        <pre>
          <code>
            git clone https://github.com/forgng/Cotton-Candy.git
            ~/.vscode/extensions/theme-cotton-candy
          </code>
        </pre>
      </InstallationInstructionsContainer>
      <Footer>
        <IconsContainer>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://marketplace.visualstudio.com/items?itemName=forgng.theme-cotton-candy"
          >
            <VSCodeIcon fill="#fff" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/forgng/cotton-candy-vscode-theme"
          >
            <GithubIcon fill="#fff" />
          </a>
        </IconsContainer>
        <Credits>
          made with 🍺 by{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://forgng.ovrvu.page"
          >
            forgng
          </a>
        </Credits>
      </Footer>
    </Page>
  </>
);

const Center = styled.div`
  display: flex;
  justify-content: center;
`;
const InstallationInstructionsContainer = styled.div`
  overflow-x: scroll;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1000px) {
    font-size: 0.9rem;
  }
`;
const IconsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
`;

const Hero = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: 95vh;

  @media screen and (max-width: 900px) {
    height: 85vh;
  }
`;

const LogoContainer = styled.div`
  margin-top: 50px;
  width: 600px;
  z-index: 1;
  @media screen and (min-height: 1600px) {
    width: 800px;
  }

  @media screen and (max-height: 900px) {
    width: 500px;
  }
  @media screen and (max-height: 900px) {
    width: 400px;
  }
  @media screen and (max-width: 900px) {
    width: 500px;
  }
  @media screen and (max-width: 700px) {
    width: 350px;
  }
  @media screen and (max-width: 600px) {
    width: 300px;
  }
  @media screen and (max-width: 330px) {
    width: 200px;
  }
`;

const Page = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 30px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  @media screen and (max-width: 900px) {
    padding: 10px;
  }
`;
const Title = styled.h1`
  margin-top: 10px;
  font-size: 4.2rem;
  text-align: center;
  @media screen and (max-width: 1000px) {
    font-size: 3rem;
  }
  @media screen and (max-width: 800px) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;
const ImageExampleContainer = styled.div`
  width: 700px;
  border: 1px solid #fff;
  border-radius: 5px;
  @media screen and (max-width: 1000px) {
    width: 500px;
  }
  @media screen and (max-width: 800px) {
    width: 450px;
  }
  @media screen and (max-width: 600px) {
    width: 300px;
  }
  img {
    border-radius: 5px;
  }
`;

const Footer = styled.footer`
  height: 250px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const Credits = styled.p``;

export default IndexPage;
