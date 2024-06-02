import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import css from "./ContactForm.module.css";
import noIcon from "../../assets/no-icon.svg";
import okIcon from "../../assets/ok-icon.svg";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";

import { addContact, editContact } from "../../redux/contacts/operation";
import { getContacts } from "../../redux/contacts/selectors";
import { getStatusApp } from "../../redux/statusApp/selectors";
import { setAdding, setEditing } from "../../redux/statusApp/statusAppSlice";

const ContactForm = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector(getContacts);
  const { editing } = useSelector(getStatusApp);

  const currentContact = editing
    ? contacts.find((contact) => contact.id === editing)
    : { id: null, name: "", number: "" };

  const [name, setName] = useState(currentContact.name);
  const [number, setNumber] = useState(currentContact.number);

  const handleSubmitContact = (event) => {
    event.preventDefault();
    if (name.trim() === "" || number.trim() === "") {
      alert("Name and phone number must be completed");
      return;
    }
    if (editing) {
      dispatch(
        editContact({ id: currentContact.id, name: name, number: number })
      );
      dispatch(setEditing(null));
    } else {
      const existContact = contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      );
      if (existContact) {
        alert(`${name} is already in your contacts!`);
        return;
      }
      dispatch(addContact({ name: name, number: number }));
      dispatch(setAdding(false));
    }
    event.currentTarget.reset();
  };

  const handleCancel = () => {
    dispatch(setAdding(false));
    dispatch(setEditing(false));
  };

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
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder='enter the name'
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
      <div className={css.pair}>
        <label className={css.label} htmlFor='number'>
          Number:
        </label>
        <input
          className={css.input}
          type='tel'
          name='number'
          id='number'
          value={number}
          onChange={(event) => setNumber(event.target.value)}
          placeholder='enter the phone number'
          title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
          required
        />
      </div>
      <div className={css.buttons}>
        <Button className={css.button} onClick={handleCancel}>
          <Icon src={noIcon} size='24' />
          Cancel
        </Button>
        <Button className={css.button} type='submit'>
          <Icon src={okIcon} size='24' />
        {editing ? 'Save' : 'Add'}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
