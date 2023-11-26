import PropTypes from "prop-types";
import { ButtonRed, ButtonWhite } from "./style";

function Button({ children, red }) {
  return (
    <>
      {red ? (
        <ButtonRed>{children}</ButtonRed>
      ) : (
        <ButtonWhite>{children}</ButtonWhite>
      )}
    </>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  red: PropTypes.node.isRequired
};

export default Button;
