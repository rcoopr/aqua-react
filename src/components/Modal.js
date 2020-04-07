import React from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(150px);
  }

  to {
    transform: translateY(0px);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation: ${fadeIn} 600ms forwards;

  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.6;
    z-index: 1;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  animation: ${slideUp} 600ms forwards;

  position: relative;
  width: 50%;
  height: 50%;
  min-width: 160px;
  min-height: 160px;
  padding: 3em;
  border-radius: 1em;
  overflow: scroll;
  background: ${props => props.theme.colors.bgLight};

  z-index: 2;
`;

export const Modal = ({ onClick, children }) => (
  <Container onClick={onClick}>
    <Card>{children}</Card>
  </Container>
);
