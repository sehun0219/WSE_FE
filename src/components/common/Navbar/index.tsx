import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  background-color: #282c34;
`;

const NavbarLogo = styled.div`
  color: #61dafb;
  font-size: 1.5em;
`;
const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const LoginButton = styled(Link)`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #61dafb;
  color: #282c34;
  font-size: 1em;
  cursor: pointer;

  &:hover {
    background-color: #21a1c1;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLogo>What should I eat</NavbarLogo>
      <ButtonWrap>
        <LoginButton to="/sign-up">sign up</LoginButton>
        <LoginButton to="/login">Login</LoginButton>
      </ButtonWrap>
    </NavbarContainer>
  );
};

export default Navbar;
