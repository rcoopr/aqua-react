import styled from "styled-components";

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
  /* background: ${props =>
    props.type === "cell"
      ? props.value >= 1
        ? "#5CCFE6aa"
        : "#D8F6EFaa"
      : ""}; */
  opacity: ${props =>
    props.type === "label" && props.faded === true ? 0.2 : 1};
`;

export const Value = styled.span`
  color: #baabab;
  font-size: calc(2vw + 10px);
`;
