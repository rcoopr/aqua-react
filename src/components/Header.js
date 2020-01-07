import React from "react";
import Ocitcon, { MarkGithub } from "@primer/octicons-react";
import { ThemeSwitch } from "./ThemeSwitch";
import { Timer } from "./Timer";
import styled, { keyframes } from "styled-components";

const HeaderFlow = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const GithubLink = styled.li`
  margin: 0.4em;
  a {
    color: inherit;
  }
`;

const AppInfo = styled.ul`
  margin: 0.5em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AppTitle = styled.h1`
  margin: 0.5em;
  color: #00d4ff;
  font-size: 2rem;
  background: linear-gradient(68deg, #fff300, #00d4ff);
  background-clip: inherit;
  background-size: 200% 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: ${HeaderFlow} 15s ease infinite;
`;

export const Header = () => {
  return (
    <Nav>
      <AppTitle>Aquarium</AppTitle>
      <AppInfo>
        <Timer />
        <GithubLink>
          <a href="https://github.com/Froskk">
            <Ocitcon icon={MarkGithub} verticalAlign="middle" size="medium" />
          </a>
        </GithubLink>
        <ThemeSwitch />
      </AppInfo>
    </Nav>
  );
};
