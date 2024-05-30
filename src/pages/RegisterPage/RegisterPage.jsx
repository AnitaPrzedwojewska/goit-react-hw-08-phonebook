import { Helmet, HelmetProvider } from "react-helmet-async";

import RegisterForm from "../../components/RegisterForm/RegisterForm";

const RegisterPage = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Phonebook - Register</title>
        </Helmet>
      </HelmetProvider>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
