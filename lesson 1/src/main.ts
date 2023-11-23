// let stringArr: string[] = ["one", "two", "three"];
// let guitars = ["strat", "tele", 512];
// let numbers: number[] = [1, 2, 3, 4, 5];

// stringArr.push("four");

// let myObj: object = {};

// myObj = [1, 2, 3, 4, 5];

// const obj = {
//   prop1: "value1",
//   prop2: "value2",
//   prop3: 42,
// };

// interface Guitarist {
//   name: string;
//   active?: boolean;
//   albums: (string | number)[];
// }

// let evh: Guitarist = {
//   name: "Eddie Van Halen",
//   active: true,
//   albums: ["Van Halen I", "Van Halen II", 1984],
// };

// const logGuitarist = (guitarist: Guitarist) => {
//   return `${guitarist.name} is ${guitarist.active ? "active" : "not active"}`;
// };
// console.log(logGuitarist(evh));

// enum Grade {
//   U,
//   D,
//   C,
//   B,
//   A,
// }
// console.log(Grade.C)

//Type Aliases
type stringOrNumber = string | number;
type stringOrNumberArr = (string | number)[];

type Guitarist = {
  name?: string;
  guitars: stringOrNumber;
  albums: stringOrNumberArr;
};

let userName: "John" | "Jane" | "Joe";
userName = "Jane";

const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};
logMsg("i am bad");
logMsg(add(1, 2));

type MathFunction = (a: number, b: number) => number;
let subtract: MathFunction = function (c, d) {
  return c - d;
};

const addAll = function (a: number, b: number, c?: number): number {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

console.log(addAll(1, 2, 3));
console.log(addAll(1, 2));

//rest parameters
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, current) => prev + current);
};

console.log(total(10, 2, 3, 4, 5));

const createError = (msg: string): never => {
  throw new Error(msg);
};

const numberOrString = (value: string | number): string => {
  if (isNumber(value)) {
    return `Your number is ${value}`;
  }
  return `Your string is ${value}`;
};

const isNumber = (value: any): boolean => {
  return typeof value === "number";
};
