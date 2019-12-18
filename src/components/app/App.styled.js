import styled from "styled-components";

const Container = styled.main`
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.primary};
  font-size: 1.1em;
  display: flex;
  flex-direction: column;
  height: 100vh;
  transition: all 300ms ease-in-out;
`;

const GameArea = styled.section`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const S = {
  Container,
  GameArea
};

export default S;
