import React from "react";
import ReactDOM from "react-dom";
import Board from "./Board";
import { ToolContextProvider } from "../tool-context/ToolContext";
import { ThemeProvider } from "styled-components";
import darkTheme from "../../themes/dark";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <ThemeProvider theme={darkTheme}>
      <ToolContextProvider>
        <Board boardID={0} />
      </ToolContextProvider>
    </ThemeProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
