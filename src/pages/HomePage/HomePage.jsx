import { Helmet, HelmetProvider } from "react-helmet-async";

const HomePage = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Phonebook</title>
        </Helmet>
      </HelmetProvider>
      <p>Welcome to the Phonebook App.</p>
      <p></p>
    </div>
  );
};

export default HomePage;
