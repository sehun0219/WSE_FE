import { useContext } from "react";
import {
  NavbarLogo,
  NavbarContainer,
  ButtonWrap,
  LoginButton,
  LogoutButton,
} from "./styled";
import { Link } from "react-router-dom";
import { UserContext } from "@/store/UserContext";

const Navbar = () => {
  const userContext = useContext(UserContext);

  if (!userContext) {
    return <div>Loading...</div>;
  }
  const { user, token, logout } = userContext;

  const handleLogout = () => {
    logout();
  };

  return (
    <NavbarContainer>
      <NavbarLogo>What should I eat</NavbarLogo>

      <ButtonWrap>
        {!user?.name && !token && (
          <>
            <LoginButton to="/sign-up">Sign up</LoginButton>
            <LoginButton to="/login">Login</LoginButton>
          </>
        )}
        {user?.name && token && (
          <>
            <NavbarLogo>Hello! {user.name} </NavbarLogo>
            <Link to="/profile">My Profile</Link>
            <Link to="/user-info">User Info</Link>
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
          </>
        )}
      </ButtonWrap>
    </NavbarContainer>
  );
};

export default Navbar;
