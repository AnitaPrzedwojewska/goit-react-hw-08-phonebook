import PropTypes from "prop-types";
import css from "./PairLabelInput.module.css";

const PairLabelInput = ({ children }) => {
  return <div className={css.pair}>{children}</div>;
};

PairLabelInput.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PairLabelInput;
