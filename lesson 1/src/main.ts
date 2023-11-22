let stringArr: string[] = ["one", "two", "three"];
let guitars = ["strat", "tele", 512];
let numbers: number[] = [1, 2, 3, 4, 5];

stringArr.push("four");

let myObj: object = {};

myObj = [1, 2, 3, 4, 5];

const obj = {
  prop1: "value1",
  prop2: "value2",
  prop3: 42,
};

type Guitarist = {
  name: string;
  active: boolean;
  albums: (string | number)[];
};

let evh: Guitarist = {
  name: "Eddie Van Halen",
  active: true,
  albums: ["Van Halen I", "Van Halen II", 1984],
};
