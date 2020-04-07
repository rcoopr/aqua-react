import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { selectBoard } from "../redux/actions";
import { boards } from "../utils/BoardData";

const Levels = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-bottom: 3em;
`;

const LevelButton = styled.button`
  background: ${p => p.theme.colors.bg};
  font-size: 3em;
  font-family: "Quicksand";
  height: 1.4em;
  width: 1.4em;
  margin: 0.15em;
  border-radius: 4px;
  border: none;
  -webkit-appearance: none;
  color: ${props => props.theme.colors.primary};
  border: ${props => props.active && `2px solid ${props.theme.colors.AIR}`};
  transition: transform 400ms;

  &:hover {
    transform: scale(1.1);
  }
`;

export const LevelSelector = () => {
  const currentBoard = useSelector(state => state.board.board.id);

  const dispatch = useDispatch();

  return (
    <Levels>
      {Object.keys(boards).map(key => (
        <LevelButton
          DEBUG_currentBoard={currentBoard}
          DEBUG_key={key}
          key={key}
          active={parseInt(key) === parseInt(currentBoard)}
          onClick={() => dispatch(selectBoard(key))}
        >
          {key}
        </LevelButton>
      ))}
    </Levels>
  );
};
