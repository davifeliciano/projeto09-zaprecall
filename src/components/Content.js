import { useState } from "react";
import styled, { keyframes } from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import cards from "../data/cards.json";
import status from "../constants/cardStatusEnum";
import Card from "./Card";

const fadeIn = keyframes`
  from {
    opacity: 0;
    margin-right: 100vw;
  }
`;

const Container = styled.div`
  display: ${(props) => (props.started ? "flex" : "none")};
  flex-direction: column;
  width: 100vw;
  height: 100svh;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  flex-grow: 1;
  padding-inline: 4rem;
  padding-bottom: 4rem;
  overflow-y: scroll;

  animation-name: ${fadeIn};
  animation-duration: 500ms;
  animation-timing-function: ease;
  animation-fill-mode: forwards;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default function Content({ started }) {
  const [cardsStatuses, setCardsStatuses] = useState(
    Array(cards.length).fill(status.NOT_ANSWERED)
  );
  const [answeredCardsStatuses, setAnsweredCardsStatuses] = useState([]);

  return (
    <Container started={started}>
      <CardsContainer>
        <Header />
        {cards.map((card, index) => (
          <Card
            key={index}
            card={card}
            index={index}
            cardsStatuses={cardsStatuses}
            setCardsStatuses={setCardsStatuses}
            answeredCardsStatuses={answeredCardsStatuses}
            setAnsweredCardsStatuses={setAnsweredCardsStatuses}
          />
        ))}
      </CardsContainer>
      <Footer
        cardsStatuses={cardsStatuses}
        answeredCardsStatuses={answeredCardsStatuses}
      />
    </Container>
  );
}
