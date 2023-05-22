import {
  NavbarLogo,
  NavbarContainer,
  ButtonWrap,
  LoginButton,
  LogoutButton,
} from "./styled";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { User } from "@/interface/user";

const Navbar = () => {
  const [user, setUser] = useState<User | null>(null);
  const [userToken, setUserToken] = useState<string | null>(null);

  useEffect(() => {
    const userInfo = window.localStorage.getItem("userInfo");
    const token = window.localStorage.getItem("token");

    if (userInfo) {
      setUser(JSON.parse(userInfo) as User);
    }

    if (token) {
      setUserToken(token);
    }
  }, []);

  const handleLogout = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("userInfo");
    setUser(null);
    setUserToken(null);
  };

  return (
    <NavbarContainer>
      <NavbarLogo>What should I eat</NavbarLogo>
      <ButtonWrap>
        {!user?.name && !userToken && (
          <>
            <LoginButton to="/sign-up">Sign up</LoginButton>
            <LoginButton to="/login">Login</LoginButton>
          </>
        )}
        {user?.name && userToken && (
          <>
            <NavbarLogo>
              Hello! {user.name}{" "}
              <NavbarLogo>
                <Link to="/profile">My Profile</Link>
              </NavbarLogo>
              <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
            </NavbarLogo>
          </>
        )}
      </ButtonWrap>
    </NavbarContainer>
  );
};

export default Navbar;
