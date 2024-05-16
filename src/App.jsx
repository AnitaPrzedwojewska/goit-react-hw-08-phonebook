import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
// import { INITIAL_FILTER } from "./constants/initial-contacts-state";
import { ContactForm } from "./components/ContactForm/contactForm";
import { Filter } from "./components/Filter/filter";
import { ContactList } from "./components/ContactList/contactList";
import { getContacts } from './redux/selectors';
import { saveContacts } from "./store/localStorage";

function App() {

  const contacts = useSelector(getContacts);

  useEffect(() => {
    saveContacts(contacts);
  }, [contacts]);

  // console.log('App - contacts: ', contacts);
  // console.log('App - filter: ', filter);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
}

export default App
