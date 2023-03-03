import {
  BsPlay,
  BsFillXCircleFill,
  BsFillQuestionCircleFill,
  BsFillCheckCircleFill,
} from "react-icons/bs";
import color from "./colorsEnum";

const icon = Object.freeze({
  NOT_ANSWERED: <BsPlay color={color.NOT_ANSWERED} />,
  NO_RECALL: <BsFillXCircleFill color={color.NO_RECALL} data-test="no-icon" />,
  SOME_RECALL: (
    <BsFillQuestionCircleFill
      color={color.SOME_RECALL}
      data-test="partial-icon"
    />
  ),
  FULL_RECALL: (
    <BsFillCheckCircleFill color={color.FULL_RECALL} data-test="zap-icon" />
  ),
});

export default icon;
