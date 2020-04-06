import React, { useState } from "react";
import Ocitcon, { Eye, EyeClosed } from "@primer/octicons-react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTimer } from "../redux/actions";
import { formatTime } from "../utils/formatTime";
import styled from "styled-components";

// const clips = keyframes`
//   0% {
//     clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
//   }

//   100% {
//     clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
//   }
// `;

const Wrapper = styled.li`
  height: 32px;
  min-width: 4em;
  padding: 0 0.6em;
  margin: 0.4em;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  letter-spacing: 0.5px;
  cursor: pointer;
  background: ${props => props.theme.colors.bg};
  transition: background 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);

  &::before {
    position: absolute;
    display: inline-block;
    content: "";
    height: 100%;
    width: 100%;
    display: block;
    border-radius: 999em;
    background: ${props => props.theme.colors.bgLightTransOpaque};
    will-change: clip-path;
    transition: clip-path 600ms ease-in-out,
      background 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    /* animation: clips 3s alternate infinite; */
    clip-path: ${props =>
      props.hide
        ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
        : "polygon(0 0, 100% 0, 100% 0, 0 0)"};
    /* Doesn't work on mobile - SVG dash-offset as alternative */
  }
`;

const ToggleTimerButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  margin: 0.2em 0.7em 0 0;
  color: inherit;
  & > svg {
    position: relative;
    width: 16px;
    z-index: 1;
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
    <Wrapper hide={hidden} onClick={() => dispatch(toggleTimer())}>
      <ToggleTimerButton>
        <Ocitcon
          icon={hidden ? EyeClosed : Eye}
          verticalAlign="top"
          size="small"
        />
      </ToggleTimerButton>
      <Value>{formatTime(timeSpent)}</Value>
    </Wrapper>
  );
};
