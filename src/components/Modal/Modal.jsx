import css from './Modal.module.css';
import PropTypes from 'prop-types';

const Modal = ({children}) => {
  return (
    <div className={css.modal}>
      <div className={css.modalContent}>
        {children}
      </div>
    </div>
  )
}

Modal.propTypes = {
  children: PropTypes.node.isRequired
}

export default Modal;