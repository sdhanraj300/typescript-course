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
//rest parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, current) => prev + current);
};
console.log(total(10, 2, 3, 4, 5));
const createError = (msg) => {
    throw new Error(msg);
};
const numberOrString = (value) => {
    if (isNumber(value)) {
        return `Your number is ${value}`;
    }
    return `Your string is ${value}`;
};
const isNumber = (value) => {
    return typeof value === "number";
};
