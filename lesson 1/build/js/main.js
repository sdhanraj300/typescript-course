"use strict";
// let stringArr: string[] = ["one", "two", "three"];
// let guitars = ["strat", "tele", 512];
// let numbers: number[] = [1, 2, 3, 4, 5];
let userName;
userName = "Jane";
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg("i am bad");
logMsg(add(1, 2));
let subtract = function (c, d) {
    return c - d;
};
const addAll = function (a, b, c) {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
console.log(addAll(1, 2, 3));
console.log(addAll(1, 2));
