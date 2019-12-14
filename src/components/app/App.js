import React, { useState } from "react";
import Header from "../header/Header";
import Board from "../board/Board";
import BoardControls from "../board-controls/BoardControls";
import S from "./App.styled";

const App = () => {
  const [currentlySelectedTool, setCurrentlySelectedTool] = useState("air");
  const [dragging, setDragging] = useState(false);

  return (
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
  );
};

export default App;
