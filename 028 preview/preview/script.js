"use strict";

const btns = document.querySelectorAll("button"),
  overlay = document.querySelector(".overlay");

// btn.onclick = function () {
//   alert("Click");
// };

// let i = 0;

const deleteElement = (e) => {
  //e.target.remove();
  console.log(e.currentTarget);
  console.log(e.type);
  // i++;
  // if (i == 1) {
  // 	btn.removeEventListener("click", deleteElement);
  // }
};

// btn.addEventListener("mouseenter", (event) => {
//   console.log(event.target);
//   event.target.remove();
//   //alert("Hover");
// });

// btn.addEventListener("click", deleteElement);
// overlay.addEventListener("click", deleteElement);

btns.forEach((btn) => {
  btn.addEventListener("click", deleteElement, {once: true});
});

// btn.addEventListener("click", () => {
//   alert("Second Click");
// });

const link = document.querySelector("a");

link.addEventListener("click", function (event) {
  event.preventDefault();

  console.log(event.target);
});
