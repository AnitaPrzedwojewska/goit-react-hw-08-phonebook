import { useDispatch } from 'react-redux';

// import Modal from "../Modal/Modal";
import Form from "../Form/Form";
import PairLabelInput from "../PairLabelInput/PairLabelInput";
import Label from "../Label/Label";
import Input from "../Input/Input";
import Button from "../Button/Button";

import { register } from '../../redux/auth/operation';

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
    // <Modal>
    <Form onSubmit={handleSubmit}>
      <PairLabelInput>
        <Label htmlFor='name'>Name</Label>
        <Input type='text' id='name' name='name' />
      </PairLabelInput>
      <PairLabelInput>
        <Label htmlFor='email'>Email</Label>
        <Input type='email' id='email' name='email' />
      </PairLabelInput>
      <PairLabelInput>
        <Label htmlFor='password'>Password</Label>
        <Input type='password' id='password' name='password' />
      </PairLabelInput>
      <div>
        <Button type='submit'>Register</Button>
      </div>
      {/* <div>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' name='name' />
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' name='email' />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' name='password' />
      </div>
      <div>
        <button type='submit'>Register</button>
      </div> */}
    </Form>
    // </Modal>
  );
};

export default RegisterForm;
