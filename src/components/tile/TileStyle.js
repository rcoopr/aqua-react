import styled, { css } from "styled-components";

const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #baabab22;
`;

export const BoardTileContainer = styled(Container)`
  ${props =>
    props.value === "water" &&
    css`
      background: #5ccfe6;
    `};
  ${props =>
    props.value === "air" &&
    css`
      background: #d8f6ef;
    `};
`;

export const NumberTileContainer = styled(Container)`
  border-style: dashed;
  border-color: ${props => (props.value === -1 ? "#baabab22" : "#baababaa")};
  opacity: ${props => (props.faded === true ? 0.2 : 1)};
`;

export const Content = styled.span`
  color: #baabab;
  font-size: calc(2vw + 10px);
`;
