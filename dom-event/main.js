//DOM events
// 1. Attribute events
// 2. Assign event using the element node
// h1Elements = document.querySelectorAll("h1");
// console.log("h1Elements: ", h1Elements);
// for (var i = 0; i < h1Elements.length; ++i) {
//   h1Elements[i].onclick = function (e) {
//     console.log(h1Elements[i]);
//   };
// }
// var inputValue;
// var inputElement = document.querySelector("select");
// inputElement.onchange = function (e) {
//   inputValue = e.target.value;
//   console.log(inputValue);
// };
var aElement = document.links;
for (var i = 0; i < aElement.length; ++i) {
  aElement[i].onclick = function (e) {
    if (!e.target.href.startsWith("https://f8.edu.vn")) {
      e.preventDefault();
    }
  };
}

var abc = document.querySelector("ul");
abc.onmousedown = function (e) {
  e.preventDefault();
};
