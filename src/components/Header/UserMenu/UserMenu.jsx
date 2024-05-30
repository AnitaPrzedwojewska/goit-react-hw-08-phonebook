import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

import loginIcon from "../../../assets/login-icon.svg";
import logoutIcon from "../../../assets/logout-icon.svg";
import Button from "../../Button/Button";
import Icon from "../../Icon/Icon";

const UserMenu = () => {
  const { user, isLoggedIn } = useAuth();
  console.log("UserMenu - user: ", user);

  return (
    <div>
      {isLoggedIn ? (
        <>
          <p>{user.email}</p>
          <Button>
            <Icon src={logoutIcon} size='24'></Icon>Log out</Button>
        </>
      ) : (
        <>
          <NavLink to='/login'>
              <Button>
                <Icon src={loginIcon} size='24'></Icon>Log in</Button>
          </NavLink>
        </>
      )}
    </div>
  );
};

export default UserMenu;
