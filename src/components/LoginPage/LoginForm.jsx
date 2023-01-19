import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";

const LoginForm = ({setIsLoggedIn, isLoggedIn}) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isEmailValid, setEmailValid] = useState(false);
  const [isPasswordValid, setPasswordValid] = useState(false);
  const [isFormValid, setFormValid] = useState(false);

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
    setEmailValid(enteredEmail.includes("@"));
  };
  const passwordChangeHandler = (e) => {
    setEnteredPassword(e.target.value);
    setPasswordValid(enteredPassword.trim().length > 6);
  };

  useEffect(() => {
    setFormValid(isEmailValid && isPasswordValid);
  }, [isEmailValid, isPasswordValid]);

  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoggedIn(true)
    localStorage.setItem('AUTH', JSON.stringify(true))
  };
  return (
    <Card>
      <form>
        <InputContainer>
          <label>Email</label>
          <StyledInput
            type="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            // onBlur={validateEmailHandler}
          />
        </InputContainer>
        <InputContainer>
          <label>Password</label>
          <StyledInput
            type="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            // onBlur={validatePasswordHandler}
          />
        </InputContainer>
        <BtnContainer>
          <Button
            bgColor={"success"}
            disabled={!isFormValid}
            onClick={submitHandler}
          >
            Login
          </Button>
        </BtnContainer>
      </form>
    </Card>
  );
};

export default LoginForm;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const StyledInput = styled.input`
  width: 350px;
  outline: none;
  padding: 3px;
  border: 1px solid lightgray;
  border-radius: 3px;
`;

const BtnContainer = styled.div`
  width: 100%;
  text-align: center;
`;
