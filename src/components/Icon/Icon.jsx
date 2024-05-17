import PropTypes from 'prop-types';
import css from './Icon.module.css';

const Icon = ({src, size=16}) => {
  return (
    <img className={css.icon} src={src} width={`${size}px`} />
  )
}

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.string
}

export default Icon;