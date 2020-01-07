import React from "react";
import { useSelector } from "react-redux";

import { Header } from "./Header";

import styled, { ThemeProvider } from "styled-components";
import dark from "../themes/dark";
import light from "../themes/light";

const Container = styled.main`
  background: ${props => props.theme.colors.bg};
  color: ${props => props.theme.colors.primary};
  font-size: 1.1em;
  display: flex;
  flex-direction: column;
  height: 100vh;
  transition: all 300ms ease-in-out;
`;

const GameArea = styled.section`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  touch-action: none;
`;

export const App = () => {
  const theme = useSelector(state => state.theme);
  return (
    <ThemeProvider theme={theme === "dark" ? dark : light}>
      <Container>
        <Header />
        <GameArea>{/* <Board />
          <BoardControls /> */}</GameArea>
      </Container>
    </ThemeProvider>
  );
};
