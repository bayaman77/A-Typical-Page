import React from "react";
import Timer from "../Timer/Timer";
import Users from "../Users/Users";

const HomePage = ({ page }) => {
  return <>
            {page ? <Users /> : <Timer />}
        </>;
};

export default HomePage;
