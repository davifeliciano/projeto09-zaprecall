import styled, { keyframes } from "styled-components";
import Progress from "./Progress";
import Result from "./Result";

const slideIn = keyframes`
  from {
    transform: translateY(100%);
  }
`;

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.4rem;
  width: 100%;
  padding: 1.4rem 5rem;
  background-color: white;
  font-size: 1.8rem;
  text-align: center;

  animation-name: ${slideIn};
  animation-duration: 500ms;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
`;

export default function Footer({ cardsStatuses, answeredCardsStatuses }) {
  return (
    <StyledFooter>
      <Result cardsStatuses={cardsStatuses} />
      <Progress
        cardsStatuses={cardsStatuses}
        answeredCardsStatuses={answeredCardsStatuses}
      />
    </StyledFooter>
  );
}
