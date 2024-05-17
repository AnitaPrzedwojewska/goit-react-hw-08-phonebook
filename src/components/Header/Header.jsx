import { useDispatch, useSelector } from "react-redux";

import css from "./Header.module.css";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import addIcon from "../../assets/add-icon.svg";

import { setAdding } from "../../redux/statusAppSlice";
import { getStatusApp } from "../../redux/selectors";

const Header = () => {
  const dispatch = useDispatch();
  const { adding } = useSelector(getStatusApp);

  const handleOnAddContact = () => {
    dispatch(setAdding(true));
  }

  return (
    <div className={css.header}>
      <h1 className={css.title}>Phonebook</h1>
      {!adding && <Button onClick={handleOnAddContact}>
        <Icon className={CSS.addIcon} src={addIcon} size='32' />
      </Button>}
    </div>
  );
};

export default Header;
