// import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import HomePage from "./pages/HomePage/HomePage";
import Layout from "./pages/Layout/Layout";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App() {
  return (
    // <ChakraProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path='/login'
            element={
              <RestrictedRoute
                redirectTo='/contacts'
                component={<LoginPage />}
              />
            }
          />
          <Route
            path='/register'
            element={
              <RestrictedRoute
                redirectTo='/contacts'
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path='/contacts'
            element={
              <PrivateRoute redirectTo='/login' component={<ContactsPage />} />
            }
          />
        </Route>
      </Routes>
    // </ChakraProvider>
  );
}

export default App;
