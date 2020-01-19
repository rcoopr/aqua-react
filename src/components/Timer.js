import React, { useState } from "react";
import Ocitcon, { Eye, EyeClosed } from "@primer/octicons-react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTimer } from "../redux/actions";
import { formatTime } from "../utils/formatTime";
import styled from "styled-components";

const Clip = styled.div`
  margin: 0.4em;
  transition: transform 1000ms ease-in-out;
  transform: ${props => (props.hide ? "translateY(0em)" : "translateY(-2em)")};
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
`;

const Cover = styled.div`
  min-width: 4em;
  height: 1.4em;
  padding: 0 0.6em;
  cursor: pointer;
  border-radius: 999em;
  transition: transform 1000ms ease-in-out;
  transform: ${props => (props.hide ? "translateY(0em)" : "translateY(2em)")};
  background: ${props => props.theme.colors.bgLight};
`;

const Wrapper = styled.li`
  min-width: 4em;
  padding: 0 0.6em;
  margin: 0.4em;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  letter-spacing: 0.5px;
  cursor: pointer;
`;

const ToggleTimerButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  margin: 0.3em 0.7em 0 0;
  & > svg {
    width: 16px;
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
    <>
      <Wrapper onClick={() => dispatch(toggleTimer())}>
        <ToggleTimerButton>
          <Ocitcon
            icon={hidden ? EyeClosed : Eye}
            verticalAlign="top"
            size="small"
          />
        </ToggleTimerButton>
        <Value>{formatTime(timeSpent)}</Value>
      </Wrapper>
      <Clip hide={hidden}>
        <Cover hide={hidden} />
      </Clip>
    </>
  );
};
