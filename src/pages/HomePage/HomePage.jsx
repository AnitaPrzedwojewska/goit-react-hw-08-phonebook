import { Helmet, HelmetProvider } from "react-helmet-async";
import { Heading } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Phonebook</title>
        </Helmet>
      </HelmetProvider>
      <Heading>Welcome to the Phonebook App.</Heading>
      <p></p>
    </div>
  );
};

export default HomePage;
