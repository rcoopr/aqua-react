import React, { useState } from "react";
import { formatTime } from "../utils/formatTime";
import styled from "styled-components";

const Wrapper = styled.li`
  min-width: 4em;
  margin: 0.4em;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  letter-spacing: 0.5px;

  &::after {
    display: block;
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: 999em;
    background: ${props => props.hidden && props.theme.colors.bgLight};
  }
`;

const Value = styled.span`
  text-align: center;
`;

export const Timer = ({ hidden }) => {
  const [timeSpent, setTimeSpent] = useState(0);

  const stopwatch = setTimeout(() => {
    setTimeSpent(timeSpent + 1000);
    clearTimeout(stopwatch);
  }, 1000);
  return (
    <Wrapper hidden={hidden}>
      <Value>{formatTime(timeSpent)}</Value>
    </Wrapper>
  );
};
