import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import "./App.css";
import LoginForm from "./components/LoginPage/LoginForm";
import HomePage from "./components/HomePage/HomePage";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [page, setPage] = useState(true)

  useEffect(() => {
    const result = localStorage.getItem("AUTH");
    setIsLoggedIn(!!result);
  }, []);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setPage={setPage}/>
      {isLoggedIn ? (
        <HomePage page={page}/>
      ) : (
        <LoginForm setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
      )}
    </>
  );
};

export default App;
