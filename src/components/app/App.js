import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/actions";

import { ThemeProvider } from "styled-components";
import S from "./App.styled";
import dark from "../../themes/dark";
import light from "../../themes/light";

import Header from "../header/Header";
// import Board from "../board/Board";
// import BoardControls from "../board-controls/BoardControls";

const App = () => {
  // const theme = useSelector(state => state.theme);

  const dispatch = useDispatch();

  return (
    <ThemeProvider theme={dark}>
      <S.Container>
        <Header onClick={() => dispatch(toggleTheme())} />
        {/* <S.GameArea>
          <Board />
          <BoardControls />
        </S.GameArea> */}
      </S.Container>
    </ThemeProvider>
  );
};

export default App;
