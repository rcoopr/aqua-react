import { combineReducers } from "redux";
import {
  TOOLS,
  THEMES,
  SET_TOOL,
  SET_FILL,
  RESET_TIMER,
  TOGGLE_THEME,
  TOGGLE_DRAGGING,
  TOGGLE_LABEL_TOP,
  TOGGLE_LABEL_LEFT,
  SELECT_BOARD
} from "./actions";

const { WATER } = TOOLS;
const { DARK } = THEMES;

const initialState = {
  dragging: false,
  tool: WATER,
  fill: WATER,
  timer: 0,
  theme: DARK
};

const utils = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOOL:
      return { ...state, tool: action.tool };
    case SET_FILL:
      return { ...state, fill: action.fill };
    case RESET_TIMER:
      return { ...state, timer: 0 };
    case TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK
      };
    case TOGGLE_DRAGGING:
      return { ...state, dragging: !state.dragging };
    default:
      return state;
  }
};

const labels = (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_LABEL_TOP:
      return {
        ...state,
        top: state.top.map((label, index) => {
          if (index === action.index) {
            return { ...label, faded: !label.faded };
          }
          return label;
        })
      };
    case TOGGLE_LABEL_LEFT:
      return {
        ...state,
        left: state.left.map((label, index) => {
          if (index === action.index) {
            return { ...label, faded: !label.faded };
          }
          return label;
        })
      };
    default:
      return state;
  }
};

const board = (state = {}, action) => {
  switch (action.type) {
    case SELECT_BOARD:
      // want to change all of board state here
      return {
        ...state,
        board: {
          ...state.board,
          id: action.id
        }
      };
    default:
      return state;
  }
};

const game = combineReducers({
  utils,
  labels,
  board
});

export default game;

// const state = {
//   labels: {
//     top: [
//       {
//         value: 0,
//         faded: false
//       }
//     ]
//   },
//   board: {
//     id: int,
//     difficulty: string,
//     regions: [],
//     current: [],
//     complete: []
//   }
// };
