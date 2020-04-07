import { combineReducers } from "redux";
import { boards } from "../utils/BoardData";
import { arraysEqual } from "../utils/arraysEqual";

const defaultTheme = localStorage.getItem("theme") || "dark";

const theme = (state = defaultTheme, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      const newState = state === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newState);
      return newState;
    default:
      localStorage.setItem("theme", state);
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

const controls = (
  state = {
    tool: "WATER",
    fill: "WATER",
    dragging: false,
    levelSelectorOpen: false
  },
  action
) => {
  switch (action.type) {
    case "SET_TOOL":
      return { ...state, tool: action.payload };
    case "SET_FILL":
      return { ...state, fill: action.payload };
    case "SET_DRAGGING":
      return { ...state, dragging: action.payload };
    case "SET_LEVEL_SELECTOR_OPEN":
      return { ...state, levelSelectorOpen: action.payload };
    default:
      return state;
  }
};

const board = (
  state = {
    boardIsCompleted: false,
    labels: boards[1].labels,
    board: {
      id: 1,
      playing: Array(boards[1].regions.length ** 2).fill("EMPTY"),
      regions: boards[1].regions,
      completed: boards[1].completed.flat()
    }
  },
  action
) => {
  switch (action.type) {
    case "SELECT_BOARD":
      return {
        ...state,
        boardIsCompleted: false,
        labels: {
          ...boards[action.payload].labels
        },
        board: {
          id: action.payload,
          playing: Array(boards[action.payload].regions.length ** 2).fill(
            "EMPTY"
          ),
          regions: boards[action.payload].regions,
          completed: boards[action.payload].completed.flat()
        }
      };
    case "FILL_TILE":
      const newPlayingState = state.board.playing;
      newPlayingState[action.payload.index] = action.payload.fill;
      const isCompleted = arraysEqual(newPlayingState, state.board.completed);

      return {
        ...state,
        boardIsCompleted: isCompleted,
        board: {
          ...state.board,
          playing: newPlayingState
        }
      };
    default:
      return state;
  }
};

export const game = combineReducers({ theme, timer, controls, board });
