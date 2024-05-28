import { useSelector } from "react-redux";

import Contact from "./Contact/Contact";
import css from "./ContactList.module.css";

import { getContacts } from "../../redux/contacts/selectors";
import { getFilter } from "../../redux/filters/selectors";
import { filterContacts } from "../../utils/filterContacts";

const ContactList = () => {
  const { contacts } = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = filterContacts(contacts, filter);

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
