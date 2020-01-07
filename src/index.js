import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

import "./index.css";
import { App } from "./components/App";

// ActionCreator
// const toggleTheme = () => {
//   return {
//     type: "TOGGLE_THEME"
//   };
// };

// Reducer
const theme = (state = "dark", action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return state === "dark" ? "light" : "dark";
    default:
      return state;
  }
};

const timer = (state = { time: 0, hidden: false }, action) => {
  switch (action.type) {
    case "TOGGLE_HIDDEN":
      return { ...state, hidden: !state.hidden };
    default:
      return state;
  }
};

// Store
const store = createStore(combineReducers({ theme, timer }));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
