import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import './App.css';
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";

import { getContacts } from './redux/selectors';
import { saveContacts } from "./store/localStorage";

function App() {

  const contacts = useSelector(getContacts);

  useEffect(() => {
    saveContacts(contacts);
  }, [contacts]);

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
