import styled, { css } from "styled-components";

const Tile = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #baabab22;
`;

const BoardTile = styled(Tile)`
  ${props =>
    props.value === "water" &&
    css`
      background: #5ccfe6aa;
    `};
  ${props =>
    props.value === "air" &&
    css`
      background: #d8f6efaa;
    `};
  ${props =>
    props.borderRight &&
    css`
      border-right: 2px solid white;
    `}
  ${props =>
    props.borderBottom &&
    css`
      border-bottom: 2px solid white;
    `}
`;

const NumberTile = styled(Tile)`
  border-style: dashed;
  border-color: ${props => (props.value === -1 ? "#baabab22" : "#baababaa")};
  opacity: ${props => (props.faded === true ? 0.2 : 1)};
`;

const Content = styled.span`
  color: #baabab;
  font-size: calc(3vmin + 10px);
`;

const S = {
  BoardTile,
  NumberTile,
  Content
};

export default S;