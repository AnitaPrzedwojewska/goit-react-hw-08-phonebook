import { Helmet, HelmetProvider } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";

import addIcon from "../../assets/add-icon.svg";
import Button from "../../components/Button/Button";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import Filter from "../../components/Filter/Filter";
import Icon from "../../components/Icon/Icon";
import css from "./ContactsPage.module.css";

import { getStatusApp } from "../../redux/statusApp/selectors";
import { setAdding } from "../../redux/statusApp/statusAppSlice";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const { adding, editing } = useSelector(getStatusApp);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch, editing]);

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
        <div className={css.myContacts}>
          <h2>My contacts</h2>
          {!adding && !editing && (
            <Button onClick={handleOnAddContact}>
              {/* Add new contact */}
              <Icon className={css.addIcon} src={addIcon} size='32' />
            </Button>
          )}
        </div>
        {(adding || editing) && <ContactForm />}
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};

export default ContactsPage;
