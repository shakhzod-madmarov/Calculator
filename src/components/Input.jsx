import { Textfit } from "react-textfit";
import "./input.css";

export const Input = ({ value }) => {
  return (
    <Textfit className="inputField" mode="single" max={70}>
      {value}
    </Textfit>
  );
};
