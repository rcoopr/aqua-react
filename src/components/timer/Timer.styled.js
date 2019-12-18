import styled from "styled-components";

const Timer = styled.li`
  min-width: 4em;
  margin: 0.4em;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

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

const S = {
  Timer,
  Value
};

export default S;
