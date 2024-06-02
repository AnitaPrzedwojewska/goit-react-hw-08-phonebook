import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import noIcon from "../../assets/no-icon.svg";
import okIcon from "../../assets/ok-icon.svg";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import css from "./RegisterForm.module.css";

import { register } from "../../redux/auth/operation";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    // console.log("handleSubmitForm starts!");
    // console.log("RegisterForm - form: ", form);
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.pair}>
          <label className={css.label} htmlFor='name'>
            Name
          </label>
          <input className={css.input} type='text' id='name' name='name' />
        </div>
        <div className={css.pair}>
          <label className={css.label} htmlFor='email'>
            Email
          </label>
          <input className={css.input} type='email' id='email' name='email' />
        </div>
        <div className={css.pair}>
          <label className={css.label} htmlFor='password'>
            Password
          </label>
          <input
            className={css.input}
            type='password'
            id='password'
            name='password'
          />
        </div>
        <div className={css.buttons}>
          <NavLink className={css.link} to='/'>
            <Button className={css.button}>
              <Icon src={noIcon} size='24' />
              Cancel
            </Button>
          </NavLink>
          <Button className={css.button} type='submit'>
            <Icon src={okIcon} size='24' />
            Register
          </Button>
        </div>
      </form>
      <div>
        <p>
          If you already have an account, click{" "}
          <NavLink to='/login'>here</NavLink>.
        </p>
      </div>
    </>
  );
};

export default RegisterForm;
