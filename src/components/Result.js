import styled from "styled-components";

const ResultHeading = styled.span`
  font-weight: 700;
`;

export default function Result() {
  return (
    <>
      <ResultHeading>🥳 Parabéns!</ResultHeading>
      <span>Você não esqueceu de nenhum flashcard!</span>
    </>
  );
}
