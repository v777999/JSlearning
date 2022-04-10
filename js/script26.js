"use strict";

const box = document.getElementById("box"),
	btns = document.getElementsByTagName("button"),
	circles = document.getElementsByClassName("circle"),
	wrapper = document.querySelector(".wrapper"),
	hearts = wrapper.querySelectorAll(".heart"),
	oneHeart = wrapper.querySelector(".heart");

console.dir(box);

// box.style.backgroundColor = "blue";
// box.style.width = "500px";

let myWidth = 700;
box.style.cssText = `background-color: green; width: ${myWidth}px`;

btns[1].style.borderRadius = "25px";
circles[0].style.backgroundColor = "red";

// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = "blue";
// }

hearts.forEach((item) => {
  item.style.backgroundColor = "blue";
});

const div = document.createElement("div"); // создан но не появился
// const text = document.createTextNode("Тут был я");

div.classList.add("black");

wrapper.append(div);
// wrapper.prepend(div);

// hearts[0].before(div);
// hearts[2].after(div);

//document.querySelector(".circleWrapper").append(div);

// circles[0].remove();

hearts[0].replaceWith(circles[0]);

div.innerHTML = "<h1>Hello World</h1>";

//div.textContent = "Hello";

div.insertAdjacentHTML("afterend", "<h2>Helloooo</h2>");
