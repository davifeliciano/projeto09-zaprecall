import styled, { keyframes } from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

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

  animation-name: ${fadeIn};
  animation-duration: 500ms;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
`;

export default function Content({ started }) {
  return (
    <Container started={started}>
      <CardsContainer>
        <Header />
      </CardsContainer>
      <Footer />
    </Container>
  );
}
