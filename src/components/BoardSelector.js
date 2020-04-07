import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { selectBoard, setDragging } from "../redux/actions";
import { boards } from "../utils/BoardData";

import { ReactComponent as ArrowLeft } from "../assets/arrowLeft.svg";
import { ReactComponent as Complete } from "../assets/complete.svg";
import { ReactComponent as Redo } from "../assets/redo.svg";

const Buttons = styled.ul`
  display: flex;
  justify-content: space-evenly;
`;

const CustomButton = styled.button`
  background: ${p => p.theme.colors.bg};
  padding: 1em 4em;
  border-radius: 4px;
  border: none;
  -webkit-appearance: none;
  color: ${p => p.theme.colors.primary};
  cursor: pointer;
`;

const CompletedBoard = styled.div`
  align-self: center;
`;
const PrevPuzzle = styled(CustomButton)``;
const Retry = styled(CustomButton)``;
const NextPuzzle = styled(CustomButton)`
  & svg {
    transform: rotate(180deg);
  }
`;

export const BoardSelector = () => {
  const currentBoard = useSelector(state => state.board.board.id);
  const numberOfLevels = Object.keys(boards).length;

  const dispatch = useDispatch();
  return (
    <>
      <CompletedBoard>
        <Complete />
      </CompletedBoard>
      <Buttons>
        {currentBoard > 1 && (
          <PrevPuzzle
            onClick={() => {
              dispatch(selectBoard(currentBoard - 1));
              dispatch(setDragging(false));
            }}
          >
            <ArrowLeft />
          </PrevPuzzle>
        )}
        <Retry
          onClick={() => {
            dispatch(selectBoard(currentBoard));
            dispatch(setDragging(false));
          }}
        >
          <Redo />
        </Retry>
        {currentBoard < numberOfLevels && (
          <NextPuzzle
            onClick={() => {
              dispatch(selectBoard(currentBoard + 1));
              dispatch(setDragging(false));
            }}
          >
            <ArrowLeft />
          </NextPuzzle>
        )}
      </Buttons>
    </>
  );
};
