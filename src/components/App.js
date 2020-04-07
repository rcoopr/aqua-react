import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLevelSelectorOpen } from "../redux/actions";

import { Header } from "./Header";
import { Board } from "./Board";
import { Modal } from "./Modal";
import { BoardControls } from "./BoardControls";
import { BoardSelector } from "./BoardSelector";
import { LevelSelector } from "./LevelSelector";

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
  const boardIsCompleted = useSelector(state => state.board.boardIsCompleted);
  const levelSelectorOpen = useSelector(
    state => state.controls.levelSelectorOpen
  );
  const dispatch = useDispatch();

  return (
    <ThemeProvider theme={theme === "dark" ? dark : light}>
      <Container>
        <Header />
        <GameArea>
          {boardIsCompleted && (
            <Modal>
              <BoardSelector />
            </Modal>
          )}
          {levelSelectorOpen && (
            <Modal onClick={() => dispatch(setLevelSelectorOpen(false))}>
              <LevelSelector />
            </Modal>
          )}
          <Board />
          <BoardControls />
        </GameArea>
      </Container>
    </ThemeProvider>
  );
};
