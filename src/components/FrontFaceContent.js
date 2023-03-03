import { CgEditFlipV } from "react-icons/cg";
import styled from "styled-components";
import status from "../constants/cardStatusEnum";
import color from "../constants/colorsEnum";
import icon from "../constants/iconsEnum ";

const CardHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  font-size: 1.6rem;
  font-weight: 700;
  color: ${(props) => props.color};
  text-decoration: ${(props) => props.decorated && "line-through"};

  & > svg {
    width: 3rem;
    height: 2rem;
  }
`;

const Button = styled.button`
  width: 3rem;
  height: 3rem;
  padding: 0;
  border: none;
  background-color: transparent;

  & svg {
    width: 100%;
    height: 100%;
  }
`;

const FlipButton = styled(Button)`
  width: 2rem;
  height: 2rem;
  position: absolute;
  right: 1rem;
  bottom: 1rem;
`;

export default function FrontFaceContent({
  card,
  index,
  cardsStatuses,
  started,
  setStarted,
  setFlipped,
}) {
  const cardStatus = cardsStatuses[index];
  const cardIconKey = Object.keys(status).find(
    (key) => status[key] === cardStatus
  );
  const cardIcon = icon[cardIconKey];
  const cardColor = color[cardIconKey];

  if (started) {
    return (
      <>
        <span data-test="flashcard-text">{card.frontContent}</span>
        <FlipButton onClick={() => setFlipped(true)} data-test="turn-btn">
          <CgEditFlipV />
        </FlipButton>
      </>
    );
  }

  return (
    <CardHeading
      color={cardColor}
      decorated={cardStatus !== status.NOT_ANSWERED}
    >
      <span data-test="flashcard-text">{`Pergunta ${index + 1}`}</span>
      {cardStatus === status.NOT_ANSWERED ? (
        <Button onClick={() => setStarted(!started)} data-test="play-btn">
          {cardIcon}
        </Button>
      ) : (
        cardIcon
      )}
    </CardHeading>
  );
}
