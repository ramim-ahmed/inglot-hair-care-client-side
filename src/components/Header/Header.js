import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/INGLOT HAIR CARE.png";
import useAuth from "../../hooks/useAuth";
import { Container } from "../../Styles/Container";
const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <MainHeader>
      <Container>
        <Nav>
          <Brand>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </Brand>
          <NavList>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/explore">Explore</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              {user.email ? (
                <LogOutButton onClick={logOut}>Logout</LogOutButton>
              ) : (
                <Link to="/login">login</Link>
              )}
            </li>
          </NavList>
        </Nav>
      </Container>
    </MainHeader>
  );
};

export default Header;

const MainHeader = styled.header`
  box-shadow: inset 0 0 1px #000000;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  margin: 0 35px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 18px 0;
    height: 90px;
  }
`;

const Brand = styled.div`
  flex: 1;
  & img {
    width: 280px;
  }
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex: 1;
  & li {
    font-size: 16px;
    font-weight: 500;
    padding: 3px 9px;
  }

  @media (max-width: 768px) {
    & li {
      margin: 0 12px;
    }
  }
`;

const LogOutButton = styled.button`
  border: 0;
  outline: 0;
  background: transparent;
  padding: 4px 7px;
  font-size: 16px;
  background-color: #a90d90;
  color: white;
  cursor: pointer;
`;
