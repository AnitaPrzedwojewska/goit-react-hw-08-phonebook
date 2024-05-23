import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import css from './App.module.css';
import Header from './components/Header/Header';
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";

import { getStatusApp, getContacts } from "./redux/selectors";
import { fetchContacts } from './redux/operation';
// import { sortContacts } from "./utils/sortContacts";

function App() {

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
    <div className={css.container}>
      <Header />
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
  );
}

export default App
