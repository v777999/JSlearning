"use strict";

const str = "teSt";
const arr = [1, 2, 4];

console.log(str.length);
console.log(arr.length);

// console.log(str[2]);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

const fruit = "Some fruit";
console.log(fruit.indexOf("fruit")); //
console.log(fruit.indexOf("quit")); // -1

const logg = "Hello world";
console.log(logg.slice(6, 11));  //world
console.log(logg.slice(6));  //world
console.log(logg.slice(-5, -1)); //worl

console.log(logg.substring(6, 11));  //world

console.log(logg.substr(6, 5));  //world

const num = 12.2;
console.log(Math.round(num));  //12

const test = "12.2px";
console.log(parseInt(test)); //12
console.log(parseFloat(test)); //12.2

