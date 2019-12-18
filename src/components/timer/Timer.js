import React, { useState } from "react";
import S from "./Timer.styled";
import formatTime from "./formatTime";

const Timer = ({ hidden }) => {
  const [timeSpent, setTimeSpent] = useState(0);

  const stopwatch = setTimeout(() => {
    setTimeSpent(timeSpent + 1000);
    clearTimeout(stopwatch);
  }, 1000);
  return (
    <S.Timer hidden={hidden}>
      <S.Value>{formatTime(timeSpent)}</S.Value>
    </S.Timer>
  );
};
export default Timer;
