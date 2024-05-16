import { useDispatch, useSelector } from 'react-redux';
import css from './contactList.module.css';
import { deleteContact } from '../../redux/contactsSlice';
import { getContacts, getFilter } from '../../redux/selectors';
import { filterContacts } from '../../utils/filterContacts';

export const ContactList = () => {

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = filterContacts(contacts, filter);

  return (
    <>
      {filteredContacts.length == 0 ? (
        <p className={css.Info}>There are no matching contacts</p>
      ) : (
        <ul className={css.Contacts}>
          {filteredContacts.map(({ id, name, phone }) => (
            <li className={css.Contact} key={id}>
              {name}, {phone}
              <button
                className={css.DeleteButton}
                type='button'
                onClick={() => {
                  dispatch(deleteContact(id));
                }}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};