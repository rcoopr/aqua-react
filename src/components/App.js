import React from "react";
import { useSelector } from "react-redux";

import { Header } from "./Header";
import { Board } from "./Board";
import { BoardControls } from "./BoardControls";

import styled, { ThemeProvider } from "styled-components";
import { dark } from "../themes/dark";
import { light } from "../themes/light";

const Container = styled.main`
  background: ${props => props.theme.colors.bg};
  color: ${props => props.theme.colors.primary};
  font-size: 1.1em;
  display: flex;
  flex-direction: column;
  height: 100vh;
  transition: background 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95),
    color 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
`;

const GameArea = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  touch-action: none;
  @media screen and (min-width: 800px) {
    flex: 1;
  }
`;

export const App = () => {
  const theme = useSelector(state => state.theme);

  return (
    <ThemeProvider theme={theme === "dark" ? dark : light}>
      <Container>
        <Header />
        <GameArea>
          <Board />
          <BoardControls />
        </GameArea>
      </Container>
    </ThemeProvider>
  );
};
