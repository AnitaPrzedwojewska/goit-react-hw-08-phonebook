import { useSelector } from 'react-redux';

import css from './ContactList.module.css';
import Contact from './Contact/Contact';

import { getContacts, getFilter } from '../../redux/selectors';
import { filterContacts } from '../../utils/filterContacts';

const ContactList = () => {

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  console.log('ContactList - contacts', contacts);

  const filteredContacts = filterContacts(contacts, filter);

  console.log("ContactList - filteredContacts", filteredContacts);

  return (
    <>
      {filteredContacts.length == 0 ? (
        <p className={css.Info}>There are no matching contacts</p>
      ) : (
        <ul className={css.Contacts}>
          {filteredContacts.map(({ id, name, phone }) => (
            <Contact key={id} id={id} name={name} phone={phone} />
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;