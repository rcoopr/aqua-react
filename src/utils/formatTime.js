export const formatTime = ms => {
  const seconds = Math.floor((ms % 60000) / 1000);
  const mins = Math.floor(ms / 60000);

  const s = seconds.toString();
  const ss = s.padStart(2, "0");

  const m = mins.toString();
  const mm = m.padStart(2, "0");

  return `${mm}:${ss}`;
};
