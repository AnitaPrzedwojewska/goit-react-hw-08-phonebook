import { useAuth } from "hooks";

const UserMenu = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      {isLoggedIn ? (
        <>
          <p>mango@mail.com</p>
          <button>Logout</button>
        </>
      ) : (
        <button>Login</button>
      )}
    </div>
  );
};

export default UserMenu;
