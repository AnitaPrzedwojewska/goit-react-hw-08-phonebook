import { NavLink } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

import css from "./Header.module.css";

// import { getStatusApp } from "../../redux/statusApp/selectors";
// import { setAdding } from "../../redux/statusApp/statusAppSlice";
import UserMenu from "./UserMenu/UserMenu";

const Header = () => {
  // const dispatch = useDispatch();
  // const { adding } = useSelector(getStatusApp);

  // const handleOnAddContact = () => {
  //   dispatch(setAdding(true));
  // };

  return (
    <div className={css.header}>
      <NavLink className={css.link} to='/'>
        <h1 className={css.title}>Phonebook</h1>
      </NavLink>
      <UserMenu />
      {/* {!adding && (
        <Button onClick={handleOnAddContact}>
          <Icon className={CSS.addIcon} src={addIcon} size='32' />
        </Button>
      )} */}
    </div>
  );
};

export default Header;
