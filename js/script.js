"use strict";

let number = 5;
const leftBorderWidth = 1;

number = 10;
console.log(number);

const obj = {
  a: 50,
};

obj.a = 10;

console.log(obj);

console.log(nameMan);
var nameMan = "Ivan";

nameMan = "Alex";

const men = {
  name: "John",
  age: 23,
  isMarried: false,
};

console.log(men.name);
//console.log(men["name"]);

let arr = ["plum.png", "orange.jpg", 6, "apple.bmp", {}, []];
console.log(arr[1]);

// const result = confirm("Are you here?");
// console.log(result);

// const answer = +prompt("Вам есть 18?", "21");
// console.log(typeof(answer) + " " + answer);

// const answers = [];

// answers[0] = prompt('Whats your name?', '');
// answers[1] = prompt('Whats your second name?', '');
// answers[2] = prompt('How are you old?', '');

// // document.write(answers);
// console.log(typeof answers + " " + answers);

// console.log(typeof (null));  //object -

const category = 'toys';

console.log('https://someurl.com/' + category + '/' + '4'); // https://someurl.com/toys/4
console.log(`https://someurl.com/${category}/5`);	// https://someurl.com/toys/5

const user = "Ivan";
alert(`Hello, ${user}`);

console.log('array' + " - object"); // array - object
console.log(4 + +" - object"); // Nan; + Унарный плюс
console.log(4 + " - object"); // 4 - object
console.log(4 + +"5");  // 9

let incr = 10, // присваивание значения
	decr = 10;

// incr++; // постфиксные значения
// decr--;

// console.log(incr); // 11
// console.log(decr); // 9

// ++incr; // префиксные значения
// --decr;

console.log(incr++); // 10 Сначала выводится значение а потом уже выполняется операция
console.log(decr--); // 10
console.log(incr); // 11
console.log(decr); // 9

console.log(++incr); // 11 Сначала выполняетсяя операция и потом выводится значение
console.log(--decr); // 9

console.log(5 % 2); // 1 остаток от деления

console.log(2 * 4 == 8); // true Сравнение по значению
console.log(2 * 4 == '8'); // true

console.log(2 * 4 === 8); // true Сравнение по значению и типу данных
console.log(2 * 4 === '8'); // false

// && - И 
// || - или

let isChecked = true,
	isClosed = true;

console.log(isChecked && isClosed); // true
console.log(isChecked || isClosed); // true

isClosed = false;
console.log(isChecked && isClosed); // false
console.log(isChecked || isClosed); // true

isChecked = false;
console.log(isChecked && isClosed); // false
console.log(isChecked || isClosed); // false

// "!" отрицание
console.log(isChecked || !isClosed); // true

console.log(2 + 2 * 2); // 6