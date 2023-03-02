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
`;

const Button = styled.button`
  width: 4rem;
  height: 4rem;
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
        {card.frontContent}
        <FlipButton onClick={() => setFlipped(true)}>
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
      <span>{`Pergunta ${index + 1}`}</span>
      {cardStatus === status.NOT_ANSWERED ? (
        <Button onClick={() => setStarted(!started)}>{cardIcon}</Button>
      ) : (
        cardIcon
      )}
    </CardHeading>
  );
}
