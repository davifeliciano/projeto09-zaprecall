import { useState } from "react";
import styled from "styled-components";
import status from "../constants/cardStatusEnum";
import color from "../constants/colorsEnum";
import FrontFaceContent from "./FrontFaceContent";

const StyledCard = styled.div`
  width: 100%;
  min-width: 32rem;
  max-width: 40rem;
  perspective: 50cm;
  background-color: transparent;
  filter: drop-shadow(0 4px 5px rgba(0, 0, 0, 0.15));
  transition: all 500ms ease;
`;

const CardContent = styled.div`
  width: 100%;
  height: ${(props) => (props.started ? "16rem" : "6.5rem")};
  transform-style: preserve-3d;
  transform: ${(props) => props.flipped && "rotateX(180deg)"};
  position: relative;
  transition: all 500ms ease;
`;

const CardFace = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem 2.2rem;
  background-color: ${(props) => (props.started ? "#ffffd4" : "white")};
  border-radius: 5px;
  font-size: 1.8rem;
  position: absolute;
  backface-visibility: hidden;
  transform-origin: center;
  transition: all 500ms ease;
`;

const FrontFace = CardFace;
const BackFace = styled(CardFace)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: rotateX(180deg);
`;

const StatusButtonsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
  width: 100%;
  height: 3.7rem;
`;

const StatusButton = styled.button`
  width: 100%;
  height: 100%;
  padding-inline: 1rem;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.color};
  font-size: 1.2rem;
  color: white;
`;

export default function Card({
  card,
  index,
  cardsStatuses,
  setCardsStatuses,
  answeredCardsStatuses,
  setAnsweredCardsStatuses,
}) {
  const [started, setStarted] = useState(false);
  const [flipped, setFlipped] = useState(false);

  function setCurrentCardStatus(cardStatus) {
    const updatedCardsStatuses = [...cardsStatuses];
    updatedCardsStatuses[index] = cardStatus;
    setCardsStatuses(updatedCardsStatuses);
    setAnsweredCardsStatuses([...answeredCardsStatuses, cardStatus]);
    setStarted(false);
    setFlipped(false);
  }

  return (
    <StyledCard>
      <CardContent started={started} flipped={flipped}>
        <FrontFace started={started}>
          <FrontFaceContent
            card={card}
            index={index}
            cardsStatuses={cardsStatuses}
            started={started}
            setStarted={setStarted}
            setFlipped={setFlipped}
          />
        </FrontFace>
        <BackFace started={started}>
          {card.backContent}
          <StatusButtonsGrid>
            <StatusButton
              color={color.NO_RECALL}
              onClick={() => setCurrentCardStatus(status.NO_RECALL)}
            >
              Não lembrei
            </StatusButton>
            <StatusButton
              color={color.SOME_RECALL}
              onClick={() => setCurrentCardStatus(status.SOME_RECALL)}
            >
              Quase não lembrei
            </StatusButton>
            <StatusButton
              color={color.FULL_RECALL}
              onClick={() => setCurrentCardStatus(status.FULL_RECALL)}
            >
              Zap!
            </StatusButton>
          </StatusButtonsGrid>
        </BackFace>
      </CardContent>
    </StyledCard>
  );
}
