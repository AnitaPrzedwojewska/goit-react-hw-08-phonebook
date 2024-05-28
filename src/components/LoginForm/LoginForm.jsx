import css from './LoginForm.module.css';
import Modal from '../Modal/Modal';
import Form from '../Form/Form';
import PairLabelInput from '../PairLabelInput/PairLabelInput';
import Label from '../Label/Label';
import Input from '../Input/Input';
import Button from '../Button/Button';

const LoginForm = () => {
  return (
    // <Modal>
      <Form className={css.form}>
        <PairLabelInput >
          <Label htmlFor="login">Login</Label>
          <Input id="login" name="login"></Input>
        </PairLabelInput>
        <PairLabelInput>
          <Label htmlFor="password">Password</Label>
          <Input className={css.input} id="password" name="password"></Input>
        </PairLabelInput>
        <div className={css.buttons}>
          <Button type="submit">Login</Button>
        </div>
      </Form>
    // </Modal>
  );
}

export default LoginForm;