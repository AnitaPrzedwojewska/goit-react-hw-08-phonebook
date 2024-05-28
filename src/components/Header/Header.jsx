import { useDispatch, useSelector } from "react-redux";

import addIcon from "../../assets/add-icon.svg";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import css from "./Header.module.css";

import { getStatusApp } from "../../redux/statusApp/selectors";
import { setAdding } from "../../redux/statusApp/statusAppSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { adding } = useSelector(getStatusApp);

  const handleOnAddContact = () => {
    dispatch(setAdding(true));
  };

  return (
    <div className={css.header}>
      <h1 className={css.title}>Phonebook</h1>
      {!adding && (
        <Button onClick={handleOnAddContact}>
          <Icon className={CSS.addIcon} src={addIcon} size='32' />
        </Button>
      )}
    </div>
  );
};

export default Header;
