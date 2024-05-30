import PropTypes from "prop-types";
import css from "./Form.module.css";

const Form = ({ onSubmit, children }) => {
  return (
    <form className={css.form} onSubmit={onSubmit}>
      {children}
    </form>
  )
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export default Form;