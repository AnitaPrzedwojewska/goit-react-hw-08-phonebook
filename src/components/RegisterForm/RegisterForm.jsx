// import Modal from "../Modal/Modal";
import Form from "../Form/Form";
import PairLabelInput from "../PairLabelInput/PairLabelInput";
import Label from "../Label/Label";
import Input from "../Input/Input";
import Button from "../Button/Button";

const RegisterForm = () => {
  return (
    // <Modal>
      <Form>
        <PairLabelInput>
          <Label htmlFor='name'>Name</Label>
          <Input id='name' name='name'></Input>
        </PairLabelInput>
        <PairLabelInput>
          <Label htmlFor='email'>Email</Label>
          <Input id='email' name='email'></Input>
        </PairLabelInput>
        <PairLabelInput>
          <Label htmlFor='password'>Password</Label>
          <Input id='password' name='password'></Input>
        </PairLabelInput>
        <div >
          <Button type='submit'>Register</Button>
        </div>
      </Form>
    // </Modal>
  );
};

export default RegisterForm;
