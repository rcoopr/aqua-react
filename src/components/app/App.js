import React from "react";
import "./App.css";
import Header from "../header/Header";
import Board from "../board/Board";
import { ReactComponent as AirIcon } from "../../assets/air.svg";
import { ReactComponent as WaterIcon } from "../../assets/water.svg";
import { ReactComponent as TrashIcon } from "../../assets/trash.svg";
import BoardData from "../board-data/BoardData";

const totallyRandomBoard = BoardData.content[0];

const BoardControls = () => {
  return (
    <ul className="controls">
      <li>
        <AirIcon />
      </li>
      <li>
        <WaterIcon />
      </li>
      <li>
        <TrashIcon />
      </li>
    </ul>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header />
      <section className="board">
        <Board boardData={totallyRandomBoard} />
        <BoardControls size="32" />
      </section>
    </div>
  );
};

export default App;
