"use strict";

let a = 5,
  b = a;

b = b + 5;

console.log(b); // 10
console.log(a); // 5

// const obj = {
//   a: 5,
//   b: 1,
// };

// const copy = obj; // Ссылка. Передача по ссылке

// copy.a = 10;

// console.log(copy); // { a: 10, b: 1}
// console.log(obj); // { a: 10, b: 1}

function copy(mainObj) {
  let objCopy = {};

  let key;
  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }
  return objCopy;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4,
  },
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

// console.log(newNumbers); 	// {a: 10, b: 5, c: {x: 10, y: 4}}
// console.log(numbers);  		// {a: 2, b: 5, c: {x: 10, y: 4}}

const add = {
  d: 17,
  e: 20,
};

console.log(Object.assign(numbers, add)); // {a: 2, b: 5, c: {x: 10, y: 4}, d: 17, e:20}

const clone = Object.assign({}, add);

clone.d = 20;

// console.log(add); // { d: 17, e: 20 }
// console.log(clone); // { d: 20, e: 20 }

const oldArray = ['a', 'b', 'c']
const newArray = oldArray.slice()

newArray[1] = 'fggfgdfgdgdg'
console.log(newArray)  // ['a', 'fggfgdfgdgdg', 'c']
console.log(oldArray)  // ['a', 'b', 'c']

const video = ['youtube', 'vimeo', 'rutube'],
	blogs = ['wordpress', 'livejournal', 'blogger'],
	internet = [...video, ...blogs, 'vk', 'facebook']

console.log(internet) // ['youtube', 'vimeo', 'rutube', 'wordpress', 'livejournal', 'blogger', 'vk', 'facebook']

function log(a, b, c) {
	console.log(a)
	console.log(b)
	console.log(c)
}

const num = [2, 5, 7]

log(...num) // 2 5 7

const array = ["a", "b"]

const newAarray = [...array]
console.log(newAarray)

const q = {
	one: 1,
	two: 2,
}

const newObj = { ...q }

console.log(newObj)









