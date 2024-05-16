import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import css from './ContactForm.module.css';

import { regexpName, regexpPhone } from '../../constants/regexps';
import { getContacts } from '../../redux/selectors';
import { addContact } from '../../redux/contactsSlice';

const ContactForm = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);

  const handleSubmitContact = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const phone = event.target.phone.value;
    if (name.trim() === "" || phone.trim() === "") {
      alert("Name and phone must be completed");
      return;
    }
    if (!regexpName.test(name)) {
      alert(
        "The name is not correct. Name may contain only letters, apostrophe, dash and spaces."
      );
      return;
    }
    if (!regexpPhone.test(phone)) {
      alert(
        "The phone is not correct. Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      );
      return;
    }
    const newContact = { id: nanoid(), name, phone };
    console.log("handleSubmitContact - newContact: ", newContact);
    // if exists already the contact
    const existContact = contacts.find(
      (contact) => contact.name === newContact.name
    );

    if (existContact) {
      alert(`${newContact.name} is already in your contacts!`);
      return;
    }
    dispatch(addContact(newContact));
    event.currentTarget.reset();
  }

  const nameInputId = nanoid();
  const phoneInputId = nanoid();
  return (
    <form className={css.newContactForm} onSubmit={handleSubmitContact}>
      <div className={css.FormPair}>
        <label className={css.FormLabel} htmlFor={nameInputId}>
          Name:
        </label>
        <input
          className={css.FormInput}
          type='text'
          name='name'
          id={nameInputId}
          placeholder='enter the name'
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
      <div className={css.FormPair}>
        <label className={css.FormLabel} htmlFor={phoneInputId}>
          Phone:
        </label>
        <input
          className={css.FormInput}
          type='tel'
          name='phone'
          id={phoneInputId}
          placeholder='enter the phone number'
          title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
          required
        />
      </div>
      <button className={css.FormButton} type='submit'>
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;