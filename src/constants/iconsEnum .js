import {
  BsPlay,
  BsFillXCircleFill,
  BsFillQuestionCircleFill,
  BsFillCheckCircleFill,
} from "react-icons/bs";
import color from "./colorsEnum";

const icon = Object.freeze({
  NOT_ANSWERED: <BsPlay color={color.NOT_ANSWERED} />,
  NO_RECALL: <BsFillXCircleFill color={color.NO_RECALL} />,
  SOME_RECALL: <BsFillQuestionCircleFill color={color.SOME_RECALL} />,
  FULL_RECALL: <BsFillCheckCircleFill color={color.FULL_RECALL} />,
});

export default icon;
