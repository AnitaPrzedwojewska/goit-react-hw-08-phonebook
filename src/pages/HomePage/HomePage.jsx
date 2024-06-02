import { Helmet, HelmetProvider } from "react-helmet-async";

import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Phonebook</title>
        </Helmet>
      </HelmetProvider>
      <div className={css.home}>
        <h2 className={css.title}>Welcome to the Phonebook App</h2>
        <p className={css.text}>
          Phonebook is an application
          <br />
          that allows you to store and manage your contacts.
          <br />
          You can add, update, delete and search them.
        </p>
        <p className={css.text}>The application requires login.</p>
      </div>
    </div>
  );
};

export default HomePage;
