import { useDispatch } from "react-redux";

import PropTypes from "prop-types";
import editIcon from "../../../assets/edit-icon.svg";
import deleteIcon from "../../../assets/delete-icon.svg";
import Button from "../../Button/Button";
import Icon from "../../Icon/Icon";
import css from "./Contact.module.css";

import { deleteContact } from "../../../redux/contacts/operation";
import { setEditing } from "../../../redux/statusApp/statusAppSlice";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleEditContact = (id) => {
    dispatch(setEditing(id));
  }

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.contact} key={id}>
      <div className={css.pair}>
        <span className={css.name}>{name}</span>
        <span className={css.phone}>{number}</span>
      </div>
      <Button
        className={css.deleteButton}
        type='button'
        onClick={() => {
          handleEditContact(id);
        }}>
        <Icon src={editIcon} size='24' />
      </Button>
      <Button
        className={css.deleteButton}
        type='button'
        onClick={() => {
          handleDeleteContact(id);
        }}>
        <Icon src={deleteIcon} size='24' />
      </Button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};

export default Contact;
