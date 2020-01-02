import React from "react";
import ReactDOM from "react-dom";
import Board from "./Board";
import { boards } from "../board-data/BoardData";
import { ThemeProvider } from "styled-components";
import darkTheme from "../../themes/dark";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <ThemeProvider theme={darkTheme}>
      <Board boardData={boards[0]} />
    </ThemeProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
