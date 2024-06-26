import { Helmet, HelmetProvider } from "react-helmet-async";

import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Phonebook - Login</title>
        </Helmet>
      </HelmetProvider>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
