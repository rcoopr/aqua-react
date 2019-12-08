import React, { useState } from "react";

import "./App.css";
import Header from "../header/Header";
import Board from "../board/Board";
import BoardControls from "../board-controls/BoardControls";
import BoardData from "../board-data/BoardData";

const totallyRandomBoard = BoardData.content[0];

const App = () => {
  // 0: air, 1: water, 2: trash
  const [currentlySelectedTool, setCurrentlySelectedTool] = useState("air");

  return (
    <div className="app">
      <Header />
      <section className="board">
        <Board boardData={totallyRandomBoard} />
        <BoardControls
          size="32"
          currentTool={currentlySelectedTool}
          setCurrentTool={setCurrentlySelectedTool}
        />
      </section>
    </div>
  );
};

export default App;
