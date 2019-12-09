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

const StyledLi = styled.li`
  margin: 0 0.4em;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Timer = styled(StyledLi)``;

export const ControlsPrompt = styled(StyledLi)``;

export const GithubLink = styled(StyledLi)``;

export const ThemeSwitch = styled(StyledLi)``;

export const AppInfo = styled.ul`
  margin: 0.5em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AppTitle = styled.h1`
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
