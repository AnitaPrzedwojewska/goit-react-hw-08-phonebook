import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Contact from "./Contact/Contact";
import css from "./ContactList.module.css";

import { fetchContacts } from "../../redux/contacts/operation";
import { getContacts } from "../../redux/contacts/selectors";
import { getStatusApp } from "../../redux/statusApp/selectors";
import { getFilter } from "../../redux/filters/selectors";
import { filterContacts } from "../../utils/filterContacts";

const ContactList = () => {
  const dispatch = useDispatch();
  const { editing } = useSelector(getStatusApp);

  const { contacts } = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = filterContacts(contacts, filter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch, editing]);

  return (
    <>
      {filteredContacts.length == 0 ? (
        <p className={css.Info}>There are no matching contacts</p>
      ) : (
        <ul className={css.Contacts}>
          {filteredContacts.map(({ id, name, number }) => (
            <Contact key={id} id={id} name={name} number={number} />
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;
