import { useState } from "react";

type CounterProps = {
  title?: string;
  children?: React.ReactNode;
};
const Counter = ({ title, children }: CounterProps) => {
  const [count, setCount] = useState<number>(1);
  return (
    <>
      count is {count}
      Hello {title}
      {children}
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  );
};

export default Counter;
