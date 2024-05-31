// import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";

import noIcon from "../../assets/no-icon.svg";
import okIcon from "../../assets/ok-icon.svg";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import css from "./ContactForm.module.css";

// import { regexpName, regexpPhone } from "../../constants/regexps";
import { getContacts } from "../../redux/contacts/selectors";
import { addContact } from "../../redux/contacts/operation";
import { setAdding } from "../../redux/statusApp/statusAppSlice";

const ContactForm = () => {
  const dispatch = useDispatch();

  const { contacts } = useSelector(getContacts);

  const handleSubmitContact = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const number = event.target.number.value;
    console.log('name / number : ', name, ' / ', number);
    if (name.trim() === "" || number.trim() === "") {
      alert("Name and phone number must be completed");
      return;
    }
    const existContact = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (existContact) {
      alert(`${name} is already in your contacts!`);
      return;
    }
    dispatch(addContact({name:name, number:number}));
    event.currentTarget.reset();
    dispatch(setAdding(false));
  };

  const handleCancel = () => {
    dispatch(setAdding(false));
  };

  // const nameInputId = nanoid();
  // const numberInputId = nanoid();
  return (
    <form className={css.form} onSubmit={handleSubmitContact}>
      <div className={css.pair}>
        <label className={css.label} htmlFor='name'>
          Name:
        </label>
        <input
          className={css.input}
          type='text'
          name='name'
          id='name'
          placeholder='enter the name'
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
      <div className={css.pair}>
        <label className={css.label} htmlFor='number'>
          Phone number:
        </label>
        <input
          className={css.input}
          type='tel'
          name='number'
          id='number'
          placeholder='enter the phone number'
          title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
          required
        />
      </div>
      <div className={css.buttons}>
        <Button className={css.button} type='submit'>
          <Icon src={okIcon} size='24' />
          Add
        </Button>
        <Button className={css.button} onClick={handleCancel}>
          <Icon src={noIcon} size='24' />
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
