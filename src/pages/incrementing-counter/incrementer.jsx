import { useState, useEffect } from "react";

function Incrementer({ maxValue }) {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (maxValue < 1000) {
        setCounter((counter) => counter + 1);
      } else if (maxValue > 1000 && maxValue < 10000) {
        setCounter((counter) => counter + 10);
      } else if (maxValue > 10000) {
        setCounter((counter) => counter + 50);
      }
    }, 1);
    if (counter > maxValue) {
      clearInterval(interval);
      setCounter(maxValue);
    }
    return () => clearInterval(interval);
  }, [counter]);
  return <div>{counter}</div>;
}

export default Incrementer;
