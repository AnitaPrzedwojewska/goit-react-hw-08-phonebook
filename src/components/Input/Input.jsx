import PropTypes from "prop-types";
import css from "./Input.module.css";

const Input = ({ id, name, children }) => {
  return (
    <input className={css.input} id={id} name={name}>
      {children}
    </input>
  );
};

Input.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Input;
