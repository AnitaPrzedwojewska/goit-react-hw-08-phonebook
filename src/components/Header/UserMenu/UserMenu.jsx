import { NavLink } from "react-router-dom";
import { useDispatch } from 'react-redux';

import loginIcon from "../../../assets/login-icon.svg";
// import logoutIcon from "../../../assets/logout-icon.svg";
import Button from "../../Button/Button";
import Icon from "../../Icon/Icon";

import useAuth from "../../../hooks/useAuth";
import { logOut } from '../../../redux/auth/operation';

import { IconButton } from '@chakra-ui/react';
import { TbLogout2 } from "react-icons/tb";

const UserMenu = () => {
  const { user, isLoggedIn } = useAuth();
  // console.log("UserMenu - user: ", user);
  const dispatch = useDispatch();

  const handleLogOutClick = () => {
    dispatch(
      logOut()
    )
  }

  return (
    <div>
      {isLoggedIn ? (
        <>
          <p>{user.email}</p>
          <NavLink to='/'>
            <IconButton
                isRound={true}
                variant='solid'
                colorScheme='teal'
                aria-label='Done'
                fontSize='20px'
                icon={<TbLogout2 />}
                onClick={handleLogOutClick}
              />
              Log out
            {/* <Button onClick={handleLogOutClick}>
              <Icon src={logoutIcon} size='24'></Icon>Log out
            </Button> */}
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to='/login'>
            <Button>
              <Icon src={loginIcon} size='24'></Icon>Log in
            </Button>
          </NavLink>
        </>
      )}
    </div>
  );
};

export default UserMenu;
