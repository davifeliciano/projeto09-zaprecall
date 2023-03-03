import styled from "styled-components";
import status from "../constants/cardStatusEnum";

const ResultHeading = styled.span`
  font-weight: 700;
`;

export default function Result({ cardsStatuses }) {
  if (cardsStatuses.some((cardStatus) => cardStatus === status.NOT_ANSWERED)) {
    return <></>;
  }

  if (cardsStatuses.some((cardStatus) => cardStatus === status.NO_RECALL)) {
    return (
      <>
        <ResultHeading>😓 Putz...</ResultHeading>
        <span>Ainda faltam alguns... Mas não desanime!</span>
      </>
    );
  }

  return (
    <>
      <ResultHeading>🥳 Parabéns!</ResultHeading>
      <span>Você não esqueceu de nenhum flashcard!</span>
    </>
  );
}
