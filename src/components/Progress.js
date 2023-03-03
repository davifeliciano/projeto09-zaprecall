import styled from "styled-components";
import status from "../constants/cardStatusEnum";
import icon from "../constants/iconsEnum ";

const Container = styled.div`
  text-transform: uppercase;
`;

const ProgressIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  & svg {
    width: 23px;
    height: 23px;
  }
`;

export default function Progress({ cardsStatuses, answeredCardsStatuses }) {
  return (
    <Container>
      {`${answeredCardsStatuses.length}/${cardsStatuses.length} Concluídos`}
      <ProgressIcons>
        {answeredCardsStatuses.map((cardStatus) => {
          const cardIconKey = Object.keys(status).find(
            (key) => status[key] === cardStatus
          );
          return icon[cardIconKey];
        })}
      </ProgressIcons>
    </Container>
  );
}
