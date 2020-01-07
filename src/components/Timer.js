import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTimer } from "../redux/actions";
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
    transition: opacity 300ms ease-in-out;
    display: block;
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: 999em;
    background: ${props => props.theme.colors.bgLight};
    opacity: ${props => (props.hidden ? 1 : 0)};
  }
`;

const Value = styled.span`
  text-align: center;
`;

export const Timer = () => {
  const [timeSpent, setTimeSpent] = useState(0);
  const hidden = useSelector(state => state.timer.hidden);
  const dispatch = useDispatch();

  const stopwatch = setTimeout(() => {
    setTimeSpent(timeSpent + 1000);
    clearTimeout(stopwatch);
  }, 1000);
  return (
    <Wrapper hidden={hidden} onClick={() => dispatch(toggleTimer())}>
      <Value>{formatTime(timeSpent)}</Value>
    </Wrapper>
  );
};
