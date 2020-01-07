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
