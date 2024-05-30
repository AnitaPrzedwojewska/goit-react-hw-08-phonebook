import PropTypes from "prop-types";
import css from "./Input.module.css";

const Input = ({type='text', id, name }) => {
  return <input className={css.input} type={type} id={id} name={name} />;
};

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Input;
