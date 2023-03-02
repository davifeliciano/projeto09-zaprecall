import styled from "styled-components";
import Logo from "./Logo";
import Title from "./Title";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  height: 6rem;
  margin-top: 4rem;
  margin-bottom: 5rem;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Title>ZapRecall</Title>
    </StyledHeader>
  );
}
