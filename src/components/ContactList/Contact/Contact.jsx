import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import css from './Contact.module.css';

import { deleteContact } from '../../../redux/contactsSlice';

const Contact = ({id, name, phone}) => {
  const dispatch = useDispatch();

  return (
    <li className={css.contact} key={id}>
      {name}, {phone}
      <button
        className={css.deleteButton}
        type='button'
        onClick={() => {
          dispatch(deleteContact(id));
        }}>
        Delete
      </button>
    </li>
  );
}

Contact.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  phone: PropTypes.string
}

export default Contact;