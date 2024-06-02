import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import loginIcon from "../../../assets/login-icon.svg";
import logoutIcon from "../../../assets/logout-icon.svg";
import Button from "../../Button/Button";
import Icon from "../../Icon/Icon";
import css from "./UserMenu.module.css";

import useAuth from "../../../hooks/useAuth";
import { logOut } from "../../../redux/auth/operation";

const UserMenu = () => {
  const { user, isLoggedIn } = useAuth();
  // console.log("UserMenu - user: ", user);
  const dispatch = useDispatch();

  const handleLogOutClick = () => {
    dispatch(logOut());
  };

  return (
    <div>
      {isLoggedIn ? (
        <div className={css.menu}>
          <p>Hi, {user.name}</p>
          <NavLink className={css.link} to='/'>
            <Button onClick={handleLogOutClick}>
              {/* Logout */}
              <Icon src={logoutIcon} size='32'></Icon>
            </Button>
          </NavLink>
        </div>
      ) : (
        <>
          <NavLink className={css.link} to='/login'>
            <Button>
              {/* Login */}
              <Icon src={loginIcon} size='32'></Icon>
            </Button>
          </NavLink>
        </>
      )}
    </div>
  );
};

export default UserMenu;
