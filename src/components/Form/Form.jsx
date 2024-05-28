import PropTypes from "prop-types";
import css from "./Form.module.css";

const Form = ({ children }) => {
  return (
    <form className={css.form}>
      {children}
    </form>
  )
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Form;