import PropTypes from "prop-types";
import css from "./Label.module.css";

const Label = ({ htmlFor, children }) => {
  return (
    <label className={css.label} htmlFor={htmlFor}>
      {children}
    </label>
  );
};

Label.propTypes = {
  children: PropTypes.node.isRequired,
  htmlFor: PropTypes.string.isRequired,
};

export default Label;
