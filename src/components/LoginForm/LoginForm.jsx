import { NavLink } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { Input } from "@chakra-ui/react";

import css from "./LoginForm.module.css";
// import Modal from '../Modal/Modal';
import Button from "../Button/Button";
import Form from "../Form/Form";
// import Input from "../Input/Input";
import Label from "../Label/Label";
import PairLabelInput from "../PairLabelInput/PairLabelInput";

import { logIn } from "../../redux/auth/operation";

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const login = form.elements.login.value;
    const password = form.elements.password.value;
    console.log(
      "LoginForm - handleSubmit - login/password: ",
      login,
      "/",
      password
    );
    dispatch(
      logIn({
        login: login,
        password: password,
      })
    );
    form.reset();
  };

  return (
    <>
      <Form className={css.form} onSubmit={handleSubmit}>
        <PairLabelInput>
          <Label htmlFor='login'>Login</Label>
          <Input id='login' name='login'></Input>
        </PairLabelInput>
        <PairLabelInput>
          <Label htmlFor='password'>Password</Label>
          <Input id='password' name='password'></Input>
        </PairLabelInput>
        <div className={css.buttons}>
          <Button type='submit'>Login</Button>
        </div>
      </Form>
      <div>
        <p>
          If you do not have an account yet, click <NavLink to='/register'>here</NavLink>.
        </p>
      </div>
    </>
  );
};

export default LoginForm;
