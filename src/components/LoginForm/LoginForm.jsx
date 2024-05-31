import { NavLink } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { Input, Button } from "@chakra-ui/react";

import css from "./LoginForm.module.css";
// import Modal from '../Modal/Modal';
// import Button from "../Button/Button";
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

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <Form className={css.form} onSubmit={handleSubmit}>
        <PairLabelInput>
          <Label htmlFor='email'>Email</Label>
          <Input type='email' id='email' name='email'></Input>
        </PairLabelInput>
        <PairLabelInput>
          <Label htmlFor='password'>Password</Label>
          <Input type='password' id='password' name='password'></Input>
        </PairLabelInput>
        <div className={css.buttons}>
          <Button type='submit'>Log in</Button>
        </div>
      </Form>
      <div>
        <p>
          If you do not have an account yet, click{" "}
          <NavLink to='/register'>here</NavLink>.
        </p>
      </div>
    </>
  );
};

export default LoginForm;
