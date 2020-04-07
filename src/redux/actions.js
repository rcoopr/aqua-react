export const toggleTheme = () => {
  return {
    type: "TOGGLE_THEME"
  };
};

export const toggleTimer = () => {
  return {
    type: "TOGGLE_TIMER"
  };
};

export const startTimer = () => {
  return {
    type: "START_TIMER"
  };
};

export const setTimer = time => {
  return {
    type: "SET_TIMER",
    payload: time
  };
};

export const setTool = tool => {
  return {
    type: "SET_TOOL",
    payload: tool
  };
};

export const setFill = tool => {
  return {
    type: "SET_FILL",
    payload: tool
  };
};

export const setDragging = boolean => {
  return {
    type: "SET_DRAGGING",
    payload: boolean
  };
};

export const setLevelSelectorOpen = boolean => {
  return {
    type: "SET_LEVEL_SELECTOR_OPEN",
    payload: boolean
  };
};

export const selectBoard = id => {
  return {
    type: "SELECT_BOARD",
    payload: id
  };
};

export const fillTile = index => {
  return (dispatch, getState) => {
    const { controls } = getState();
    const fill = controls.fill;
    dispatch({
      type: "FILL_TILE",
      payload: { index, fill }
    });
  };
};
