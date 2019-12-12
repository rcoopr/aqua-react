import styled, { css } from "styled-components";

export const Container = styled.li`
  width: 5vw;
  height: 5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-style: ${props => (props.type === "label" ? "dashed" : "solid")};
  border-color: ${props =>
    props.value >= 0 && props.type === "label" ? "#baababaa" : "#baabab22"};
  opacity: ${props => (props.faded === true ? 0.2 : 1)};

  ${props =>
    props.value === "water" &&
    css`
      background: #5ccfe6aa;
    `}
  ${props =>
    props.value === "air" &&
    css`
      background: #d8f6efaa;
    `}
`;

export const Value = styled.span`
  color: #baabab;
  font-size: calc(2vw + 10px);
`;
