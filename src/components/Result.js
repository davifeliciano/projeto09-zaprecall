import styled from "styled-components";
import status from "../constants/cardStatusEnum";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

const ResultHeading = styled.span`
  font-weight: 700;
`;

export default function Result({ cardsStatuses }) {
  if (cardsStatuses.some((cardStatus) => cardStatus === status.NOT_ANSWERED)) {
    return <></>;
  }

  if (cardsStatuses.some((cardStatus) => cardStatus === status.NO_RECALL)) {
    return (
      <Container data-test="finish-text">
        <ResultHeading>😓 Putz...</ResultHeading>
        <span>Ainda faltam alguns... Mas não desanime!</span>
      </Container>
    );
  }

  return (
    <Container data-test="finish-text">
      <ResultHeading>🥳 Parabéns!</ResultHeading>
      <span>Você não esqueceu de nenhum flashcard!</span>
    </Container>
  );
}
