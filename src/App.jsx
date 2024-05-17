import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import css from './App.module.css';
import Header from './components/Header/Header';
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";

import { getStatusApp, getContacts } from "./redux/selectors";
import { saveContacts } from "./store/localStorage";
import { sortContacts } from "./utils/sortContacts";

function App() {

  const {adding} = useSelector(getStatusApp);
  const contacts = useSelector(getContacts);

  useEffect(() => {
    const sortedContacts = sortContacts(contacts);
    saveContacts(sortedContacts);
  }, [contacts]);

  return (
    <div className={css.container}>
      <Header />
      {adding && <ContactForm />}
      {/* <Subheading>
        <h2 className={css.subheading}>Contacts</h2>
        <Button>
          <Icon src={searchIcon} size="24" />
        </Button>
      </Subheading> */}
      <Filter />
      <ContactList />
    </div>
  );
}

export default App
