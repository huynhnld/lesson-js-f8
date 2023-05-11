var courses = ["javaScript", "PHP", "Ruby"];

// Array.prototype.map2 = function (callback) {
//   var output = [],
//     arrLength = this.length;
//   for (var i = 0; i < arrLength; ++i) {
//     var result = callback(this[i], i);
//     output.push(result);
//   }
//   return output;
// };
// var htmls = courses.map2(function (course) {
//   return `<h2>${course}</h2>`;
// });

// console.log(htmls.join(""));

// Array.prototype.myMap = function (cb) {
//   var output = [],
//     arrLength = this.length;
//   for (i = 0; i < arrLength; ++i) {
//     result = cb(this[i], i);
//     output.push(result);
//   }
//   return output;
// };

// Expected results
// const numbers = [1, 2, 3];

// console.log(
//   numbers.myMap(function (number) {
//     return number * 2;
//   })
// );
// Output: [2, 4, 6]

// console.log(
//   numbers.myMap(function (number, index) {
//     return number * index;
//   })
// ); // Output: [0, 2, 6]
