import { useState } from "react";
import styled, { keyframes } from "styled-components";
import Logo from "./Logo";
import Title from "./Title";

const fadeDurationInMs = 500;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -40%);
  }

  to {
    opacity: unset;
    transform: translate(-50%, -50%);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: unset;
    transform: translate(-50%, -50%);
  }

  to {
    opacity: 0;
    transform: translate(-50%, -60%);
  }
`;

const Container = styled.div`
  display: ${(props) => (props.started ? "none" : "flex")};
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  position: absolute;
  top: 50%;
  left: 50%;

  animation-name: ${(props) => (props.visible ? fadeIn : fadeOut)};
  animation-duration: ${`${fadeDurationInMs}ms`};
  animation-timing-function: ease;
  animation-fill-mode: forwards;
`;

const LogoContainer = styled.div`
  height: 16rem;
`;

const StartButton = styled.button`
  height: 5.4rem;
  padding-inline: 3rem;
  border: none;
  border-radius: 5px;
  background-color: white;
  font-size: 1.8rem;
  color: #d70900;
  transition: filter 200ms ease;

  &:hover {
    cursor: pointer;
  }

  &:active {
    filter: brightness(90%);
    transition: filter 200ms ease;
  }
`;

export default function StartScreen({ started, setStarted }) {
  const [visible, setVisible] = useState(true);

  function startRecall() {
    setVisible(false);
    setTimeout(() => setStarted(true), fadeDurationInMs);
  }

  return (
    <Container started={started} visible={visible}>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Title>ZapRecall</Title>
      <StartButton onClick={startRecall}>Iniciar Recall!</StartButton>
    </Container>
  );
}