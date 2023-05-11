// console.log("hello");
// //HTML DOM
// console.log(document);
// //
// document.write("Xuất hiện ở cuối thẻ body");
// var headingNode = document.getElementById("heading");

// console.log({ element: headingNode });
// var headingNodes = document.querySelectorAll(".headingNodes");
// console.log(headingNodes[2]);

// var boxNode = document.querySelector(".box-1");
// // Cong viec 1: su dung toi 'boxNode'
// console.log(boxNode);
// //Cong Viec 2: Su dung toi cac li elements
// // la con của '.box-1'
// console.log(boxNode.getElementsByTagName("li"));
// console.log(boxNode.querySelector("p"));
// boxNode.setAttribute()

var heading = document.querySelector("h1");
heading.title = "title test";
heading.setAttribute("data-title", "F8 - Học lập trình để đi làm");
console.log(heading);
var link = document.querySelector("a");
console.log(link);
link.href = "https://fullstack.edu.vn/";
link.setAttribute("target", "_blank");

console.log(heading.innerText);
console.log(heading.innerHTML);
var courses = ["HTML & CSS", "Javascript", "PHP", "Java"];

function render(courses) {
  var newCourses = courses.map(function (course) {
    return `<li>${course}</li>`;
  });
  console.log(newCourses);
  var insertItem = document.querySelector("ul");
  console.log(insertItem);

  return (insertItem.innerHTML = newCourses.join(""));
}
render(courses);
var boxElement = document.querySelector(".box");
boxElement.style.width = "100px";
boxElement.style.height = "200px";
boxElement.style.backgroundColor = "red";
console.log(boxElement.style);
boxElement.classList.add("red");
console.log(boxElement.classList.contains("red"));

Object.assign(boxElement.style, {
  width: "200px",
  height: "100px",
  backgroundColor: "green",
});
console.log(boxElement.style.width);
