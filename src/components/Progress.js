import styled from "styled-components";
import {
  BsFillCheckCircleFill,
  BsFillQuestionCircleFill,
  BsFillXCircleFill,
} from "react-icons/bs";
import color from "../constants/colorsEnum";

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

export default function Progress() {
  return (
    <Container>
      4/4 Concluídos
      <ProgressIcons>
        <BsFillCheckCircleFill color={color.FULL_RECALL} />
        <BsFillQuestionCircleFill color={color.SOME_RECALL} />
        <BsFillXCircleFill color={color.NO_RECALL} />
      </ProgressIcons>
    </Container>
  );
}
