import { combineReducers } from "redux";

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
    case "TOGGLE_TIMER":
      return { ...state, hidden: !state.hidden };
    case "START_TIMER":
      return { ...state, time: 0 };
    case "SET_TIMER":
      return { ...state, time: action.payload };
    default:
      return state;
  }
};

export const game = combineReducers({ theme, timer });
