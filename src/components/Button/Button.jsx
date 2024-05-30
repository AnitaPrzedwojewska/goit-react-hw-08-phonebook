import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({ children, type='button', onClick=null }) => {
  return (
    <button className={css.button} type={type} onClick={onClick ? onClick : null}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button