import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import css from './App.module.css';
import ContactForm from "./components/ContactForm/ContactForm";
// import Subheading from './components/Subheading/Subheading';
// import Button from './components/Button/Button';
// import Icon from './components/Icon/Icon';
// import searchIcon from './assets/search-icon.svg';
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";

import { getStatusApp, getContacts } from "./redux/selectors";
import { saveContacts } from "./store/localStorage";
import Header from './components/Header/Header';

function App() {

  const {adding} = useSelector(getStatusApp);
  const contacts = useSelector(getContacts);

  useEffect(() => {
    saveContacts(contacts);
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
