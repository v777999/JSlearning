"use strict";

const arr = [2, 13, 26, 8, 10];

arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
	return a - b;
}

// arr[99] = 0;
// console.log(arr.length); // 5 // 100
// console.log(arr); // [ 2, 3, 6, 8, 10, <94 empty items>, 0]

//arr.pop();
//console.log(arr); // [1,2,3,6]

// arr.push(10);
// console.log(arr); // [1,2,3,6,10]

// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }

// for (let value of arr) {
// 	console.log(value);
// }

// arr.forEach(function (item, i, arr) {
//   console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join("; "));

