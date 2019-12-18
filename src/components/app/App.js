import React, { useState } from "react";
import Header from "../header/Header";
import Board from "../board/Board";
import BoardControls from "../board-controls/BoardControls";
import S from "./App.styled";
import { ThemeProvider } from "styled-components";
import darkTheme from "../../themes/dark";
// import lightTheme from "../../themes/light";

const App = () => {
  const [currentlySelectedTool, setCurrentlySelectedTool] = useState("air");
  const [dragging, setDragging] = useState(false);

  return (
    <ThemeProvider theme={darkTheme}>
      <S.Container onMouseUp={() => setDragging(false)}>
        <Header />
        <S.GameArea>
          <Board
            currentTool={currentlySelectedTool}
            dragging={dragging}
            setDragging={setDragging}
          />
          <BoardControls
            currentTool={currentlySelectedTool}
            setCurrentTool={setCurrentlySelectedTool}
          />
        </S.GameArea>
      </S.Container>
    </ThemeProvider>
  );
};

export default App;
