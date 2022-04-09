"use strict";

let str = "some"
let strObj = new String(str)

// console.log(typeOf(str))  //string
// console.log(typeOf(strObj))   // object

// console.dir([1, 2, 3]) // Array(3) 0: 1 1: 2 2: 3

const soldier = {
	health: 400,
	armor: 100,
	sayHello: function () {
		console.log("Hello")
	}
}

// const john = {
// 	health: 100
// }

const john = Object.create(soldier)

// john.__proto__ = soldier // старый формат

// Object.setPrototypeOf(john, soldier)

console.log(john) // health: 100
console.log(john.armor) // 100
john.sayHello()