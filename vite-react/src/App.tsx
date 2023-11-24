import {
  useState,
  useEffect,
  useCallback,
  MouseEvent,
  KeyboardEvent,
  useMemo,
  useRef,
} from "react";
interface User {
  id: number;
  name: string;
}

type fibFunc = (n: number) => number;

const fib: fibFunc = (n) => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

const myNum: number = 37;

export default function App() {
  const [count, setCount] = useState<number>(1);
  const [users, setUser] = useState<User[] | null>(null);
  useEffect(() => {
    console.log("Mounting");
    console.log("Users", ":,", users);
    return () => console.log("Unmounting");
  }, [users]);
  const addTwo = useCallback(
    (
      e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
    ): void => setCount(count + 2),
    [count]
  );

  const inputRef = useRef<HTMLInputElement>(null);
  console.log(inputRef?.current);
  console.log(inputRef.current?.value);
  const result: number = useMemo<number>(() => fib(myNum), [myNum]);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={addTwo}>Add</button>
      <h2>{result}</h2>
      <input ref={inputRef} type="text" name="" id="" />
    </>
  );
}
