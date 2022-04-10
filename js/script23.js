"use strict"

// to String

console.log(typeof (String(null))) // string

console.log(typeof (5 + '')) // string

const num = 5

console.log("https://vk.com/catalog/" + num)

const fontSize = 26 + 'px'

// to Number

console.log(typeof (Number('4'))) // number

console.log(typeof (+'5')) // number

console.log(typeof (parseInt("15px", 10))) // number

let answer = +prompt("Hello", "")

// to boolean

// 0, '', null, undefined, NaN  - false

let switcher = null

if (switcher) {
	console.log('Working...')
}

switcher = 1

if (switcher) {
	console.log('Working...')
}

console.log(typeof (Boolean('4')))  // boolean

console.log(typeof(!!"4444")) // boolean