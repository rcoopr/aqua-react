import React, { useState } from "react";
import Header from "../header/Header";
import Board from "../board/Board";
import BoardControls from "../board-controls/BoardControls";
import S from "./App.styled";
import { ToolContextProvider } from "../tool-context/ToolContext";
import { ThemeProvider } from "styled-components";
import darkTheme from "../../themes/dark";
import lightTheme from "../../themes/light";

const App = () => {
  const stored = localStorage.getItem("isDarkMode");
  const [isDarkMode, setIsDarkMode] = useState(!!stored | true);
  const [dragging, setDragging] = useState(false);
  const [boardID, setBoardID] = useState(2);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <ToolContextProvider>
        <S.Container onMouseUp={() => setDragging(false)}>
          <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          <S.GameArea>
            <Board
              dragging={dragging}
              setDragging={setDragging}
              boardID={boardID}
            />
            <BoardControls boardID={boardID} setBoardID={setBoardID} />
          </S.GameArea>
        </S.Container>
      </ToolContextProvider>
    </ThemeProvider>
  );
};

export default App;
