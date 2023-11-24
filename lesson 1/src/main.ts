// // // // // // let stringArr: string[] = ["one", "two", "three"];
// // // // // // let guitars = ["strat", "tele", 512];
// // // // // // let numbers: number[] = [1, 2, 3, 4, 5];

// // // // // // stringArr.push("four");

// // // // // // let myObj: object = {};

// // // // // // myObj = [1, 2, 3, 4, 5];

// // // // // // const obj = {
// // // // // //   prop1: "value1",
// // // // // //   prop2: "value2",
// // // // // //   prop3: 42,
// // // // // // };

// // // // // // interface Guitarist {
// // // // // //   name: string;
// // // // // //   active?: boolean;
// // // // // //   albums: (string | number)[];
// // // // // // }

// // // // // // let evh: Guitarist = {
// // // // // //   name: "Eddie Van Halen",
// // // // // //   active: true,
// // // // // //   albums: ["Van Halen I", "Van Halen II", 1984],
// // // // // // };

// // // // // // const logGuitarist = (guitarist: Guitarist) => {
// // // // // //   return `${guitarist.name} is ${guitarist.active ? "active" : "not active"}`;
// // // // // // };
// // // // // // console.log(logGuitarist(evh));

// // // // // // enum Grade {
// // // // // //   U,
// // // // // //   D,
// // // // // //   C,
// // // // // //   B,
// // // // // //   A,
// // // // // // }
// // // // // // console.log(Grade.C)

// // // // // //Type Aliases
// // // // // type stringOrNumber = string | number;
// // // // // type stringOrNumberArr = (string | number)[];

// // // // // type Guitarist = {
// // // // //   name?: string;
// // // // //   guitars: stringOrNumber;
// // // // //   albums: stringOrNumberArr;
// // // // // };

// // // // // let userName: "John" | "Jane" | "Joe";
// // // // // userName = "Jane";

// // // // // const add = (a: number, b: number): number => {
// // // // //   return a + b;
// // // // // };

// // // // // const logMsg = (message: any): void => {
// // // // //   console.log(message);
// // // // // };
// // // // // logMsg("i am bad");
// // // // // logMsg(add(1, 2));

// // // // // type MathFunction = (a: number, b: number) => number;
// // // // // let subtract: MathFunction = function (c, d) {
// // // // //   return c - d;
// // // // // };

// // // // // const addAll = function (a: number, b: number, c?: number): number {
// // // // //   if (typeof c !== "undefined") {
// // // // //     return a + b + c;
// // // // //   }
// // // // //   return a + b;
// // // // // };

// // // // // console.log(addAll(1, 2, 3));
// // // // // console.log(addAll(1, 2));

// // // // // //rest parameters
// // // // // const total = (a: number, ...nums: number[]): number => {
// // // // //   return a + nums.reduce((prev, current) => prev + current);
// // // // // };

// // // // // console.log(total(10, 2, 3, 4, 5));

// // // // // const createError = (msg: string): never => {
// // // // //   throw new Error(msg);
// // // // // };

// // // // // const numberOrString = (value: string | number): string => {
// // // // //   if (isNumber(value)) {
// // // // //     return `Your number is ${value}`;
// // // // //   }
// // // // //   return `Your string is ${value}`;
// // // // // };

// // // // // const isNumber = (value: any): boolean => {
// // // // //   return typeof value === "number";
// // // // // };

// // // // type One = string;
// // // // type Two = string | number;
// // // // type Three = "hello";

// // // // let a: One = "hello";
// // // // let b = a as Two;
// // // // let c = a as Three;

// // // // let d = <One>"hello";

// // // // const concat = (a: number, b: number, c: "add" | "concat"): number | string => {
// // // //   if (c === "add") {
// // // //     return a + b;
// // // //   }
// // // //   return "" + a + b;
// // // // };

// // // // console.log(concat(3, 4, "add"));
// // // // console.log(concat(1, 5, "concat"));

// // // // 10 as unknown as string;

// // // // const img = document.querySelector("img")!;
// // // // const myImg = document.getElementById("myImg")! as HTMLImageElement;
// // // // img.src;
// // // // myImg.src;

// // // class Coder {
// // //   name: String;
// // //   constructor(name: String) {
// // //     this.name = name;
// // //   }
// // // }

// // // interface Musician {
// // //   name: string;
// // //   instrument: string;
// // //   play(action: string): string;
// // // }

// // // class Guitarist implements Musician {
// // //   name: string;
// // //   instrument: string;
// // //   constructor(name: string, instrument: string) {
// // //     this.name = name;
// // //     this.instrument = instrument;
// // //   }
// // //   play(action: string): string {
// // //     return `${this.name} is ${action} the ${this.instrument}`;
// // //   }
// // // }

// // // const Page = new Guitarist("Page", "Guitar");
// // // console.log(Page.play("shredding"));

// // // class Peeps {
// // //   static count: number = 0;
// // //   static getCount(): number {
// // //     return Peeps.count;
// // //   }
// // //   public id: number;
// // //   constructor(public name: string) {
// // //     this.name = name;
// // //     Peeps.count++;
// // //     this.id = Peeps.count;
// // //   }
// // // }
// // // const John = new Peeps("John");
// // // console.log(John.id);

// // //Index signatures

// // interface TransactionObj {
// //   Pizza: number;
// //   Books: number;
// //   Job: number;
// // }

// // const todayTransactions: TransactionObj = {
// //   Pizza: -10,
// //   Books: -20,
// //   Job: 100,
// // };

// //generics

// const echo = <T>(arg: T): T => {
//   return arg;
// };

// interface HasID {
//   id: number;
// }

// const processUser = <T extends HasID>(user: T): T => user;

//utility types
//partial

interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};
