import styled from "styled-components";

const Container = styled.main`
  font-size: 1.1em;
  display: flex;
  flex-direction: column;
  height: 100vh;
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
