import { useState } from "react";

export default function CounterDisplay() {
  const [count, setCount] = useState(0);

  const handleInc = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDec = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={handleInc}>Increment</button>
      <button onClick={handleDec}>Decrement</button>
    </>
  );
}
