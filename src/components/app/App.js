import React, { useState } from "react";
import Header from "../header/Header";
import Board from "../board/Board";
import BoardControls from "../board-controls/BoardControls";
import { Container, GameArea } from "./AppStyle";

const App = () => {
  const [currentlySelectedTool, setCurrentlySelectedTool] = useState("air");
  const [dragging, setDragging] = useState(false);

  return (
    <Container onMouseUp={() => setDragging(false)}>
      <Header />
      <GameArea>
        <Board
          draggingType={dragging}
          setDraggingType={setDragging}
          onMouseDown={() => setDragging(true)}
        />
        <BoardControls
          currentTool={currentlySelectedTool}
          setCurrentTool={setCurrentlySelectedTool}
        />
      </GameArea>
    </Container>
  );
};

export default App;
