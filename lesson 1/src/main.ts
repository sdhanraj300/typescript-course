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
