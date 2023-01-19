import React, { useRef, useState } from "react";
import { useEffect } from "react";
import Card from "../UI/Card/Card";

const Timer = () => {
  const [timer, setTimer] = useState(0);

  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
        setTimer((prev) => prev += 1);
    }, 1000);
  }, []);

  useEffect(() => {
    const id = setTimeout(() => {
      clearInterval(intervalRef.current);
    }, 60000);

    return () => {
        clearTimeout(id)
    };
  }, []);

  return (
    <Card>
      <h1>Timer:{timer}</h1>
    </Card>
  );
};

export default Timer;
