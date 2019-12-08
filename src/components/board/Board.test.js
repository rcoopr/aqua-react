import React from "react";
import ReactDOM from "react-dom";
import Board from "./Board";
import BoardData from "../board-data/BoardData";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<Board boardData={BoardData.content[0]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
