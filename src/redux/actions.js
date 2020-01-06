export const SET_TOOL = "SET_TOOL";
export const SET_FILL = "SET_FILL";
export const RESET_TIMER = "RESET_TIMER";
export const TOGGLE_THEME = "TOGGLE_THEME";
export const TOGGLE_DRAGGING = "TOGGLE_DRAGGING";
export const TOGGLE_LABEL_TOP = "TOGGLE_LABEL_TOP";
export const TOGGLE_LABEL_LEFT = "TOGGLE_LABEL_LEFT";
export const SELECT_BOARD = "SELECT_BOARD";

export const TOOLS = {
  WATER: "WATER",
  AIR: "AIR",
  EMPTY: "EMPTY"
};

export const THEMES = {
  DARK: "DARK",
  LIGHT: "LIGHT"
};

export function toggleTheme() {
  return { type: TOGGLE_THEME };
}

export function setTool(tool) {
  return { type: SET_TOOL, tool };
}
export function setFill(tool) {
  return { type: SET_FILL, tool };
}

export function resetTimer() {
  return { type: RESET_TIMER };
}

export function toggleDragging() {
  return { type: TOGGLE_DRAGGING };
}

export function toggleLabelTop(index) {
  return { type: TOGGLE_LABEL_TOP, index };
}

export function toggleLabelLeft(index) {
  return { type: TOGGLE_LABEL_LEFT, index };
}

export function selectBoard(id) {
  return { type: SELECT_BOARD, id };
}
