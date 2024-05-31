import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";

import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import Filter from "../../components/Filter/Filter";
// import css from "./ContactsPage.module.css";
import Button from "../../components/Button/Button";
import Icon from "../../components/Icon/Icon";
import addIcon from "../../assets/add-icon.svg";

import { fetchContacts } from "../../redux/contacts/operation";
import { getContacts } from "../../redux/contacts/selectors";
import { setAdding } from "../../redux/statusApp/statusAppSlice";
import { getStatusApp } from "../../redux/statusApp/selectors";
// import { sortContacts } from "./utils/sortContacts";

const ContactsPage = () => {
  const { adding, editing } = useSelector(getStatusApp);
  const { isLoading, error } = useSelector(getContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // useEffect(() => {
  //   const sortedContacts = sortContacts(contacts);
  // }, [contacts]);

  const handleOnAddContact = () => {
    dispatch(setAdding(true));
  };

  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Phonebook - My contacts</title>
        </Helmet>
      </HelmetProvider>
      <div>
        <div>
          <h2>My contacts</h2>
          {!adding && (
            <Button onClick={handleOnAddContact}>
              <Icon className={CSS.addIcon} src={addIcon} size='32' />
            </Button>
          )}
        </div>
        {(adding || editing) && <ContactForm />}
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
