"use strict";

// let x = 5;
// alert(x++); // 5
// alert(++x); // 6

// // [] + false - null + true

// console.log(typeof ([] + false)); // "false"
// console.log([] + false - null + true); // NaN

// let y = 1;
// let z = (y = 2);
// alert(z); // 2

// console.log([] + 1 + 2); //"12"

// alert("1"[0]); // 1

// console.log(2 && 1 && null && 0 && undefined); // null
// && запинается на false
// || запинается на true

// console.log(!!(1 && 2) == (1 && 2)); // false

// alert(null || (2 && 3) || 4); // 3

const a = [1, 2, 3];
const b = [1, 2, 3];

console.log(a == b); //false

alert(typeof +"Infinity"); // number Infinity

console.log("Ёжик" > "яблоко"); // false

console.log(0 || "" || 2 || undefined || true || false); // 2
