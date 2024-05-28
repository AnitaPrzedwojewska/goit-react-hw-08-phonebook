import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";

import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import Filter from "../../components/Filter/Filter";
import css from "./ContactsPage.module.css";

import { fetchContacts } from "../../redux/contacts/operation";
import { getContacts } from "../../redux/contacts/selectors";
import { getStatusApp } from "../../redux/statusApp/selectors";
// import { sortContacts } from "./utils/sortContacts";

const ContactsPage = () => {
  const { adding } = useSelector(getStatusApp);
  const { isLoading, error } = useSelector(getContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // useEffect(() => {
  //   const sortedContacts = sortContacts(contacts);
  // }, [contacts]);

  return (
    <div>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div className={css.container}>
        {adding && <ContactForm />}
        {/* <Subheading>
        <h2 className={css.subheading}>Contacts</h2>
        <Button>
          <Icon src={searchIcon} size="24" />
        </Button>
      </Subheading> */}
        {isLoading && !error && <p>Request in progress...</p>}
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};

export default ContactsPage;
