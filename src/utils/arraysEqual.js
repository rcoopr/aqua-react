export const arraysEqual = (a, b) => {
  const equalsB = (element, index) => {
    if (element === "AIR") element = "EMPTY";
    return element === b[index];
  };
  if (a.length !== b.length) return false;
  if (!a.every(equalsB)) return false;

  return true;
};
