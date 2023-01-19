import React from "react";
import styled from "styled-components";
import Button from "../UI/Button/Button";

const Header = ({ isLoggedIn, setIsLoggedIn, setPage }) => {
  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.clear();
  };

const openUserPageHandler = () => {
  setPage(true)
}
const openTimerPageHandler = () => {
  setPage(false)
}

  return (
    <StyledHeader>
      <h1>A Typical Page</h1>
      {isLoggedIn && (
        <Navigation>
          <Button onClick={openUserPageHandler}>Users</Button>
          <Button onClick={openTimerPageHandler}>Timer</Button>
          <Button onClick={logoutHandler}>Logout</Button>
        </Navigation>
      )}
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  background-color: #741088;
  padding: 15px 20px;
  color: white;
  display: flex;
  justify-content: space-between;
`;

const Navigation = styled.div`
  width: 28%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
