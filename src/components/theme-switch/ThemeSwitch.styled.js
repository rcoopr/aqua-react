import styled from "styled-components";

const ThemeSwitch = styled.div`
  width: 75px;
  height: 34px;
  position: relative;
  margin: 0.4em;
  background-color: ${props => props.theme.colors.backgroundLight};
  transition: background-color 0.3s ease-in;
  border-radius: 999em;
`;

const HiddenInput = styled.input`
  position: absolute;
  left: -999em;
  &:checked + label > div {
    background-color: #f3d076;
    transform: translate3d(0, 0, 0);
    border-radius: 999em;
    box-shadow: inset -8px 8px 0 15px transparent;
  }
`;

const Label = styled.label`
  width: 100%;
  height: 100%;
  display: block;
  cursor: pointer;
`;

const Icon = styled.div`
  position: absolute;
  display: block;
  top: 5px;
  left: 5px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: transparent;
  box-shadow: inset -3px 3px 0 3px ${props => props.theme.colors.primary};
  transform: translate3d(41px, 0, 0) rotate(180deg);
  transition: all 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
`;

const S = {
  ThemeSwitch,
  HiddenInput,
  Label,
  Icon
};

export default S;
