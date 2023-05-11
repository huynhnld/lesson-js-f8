var courseApi = "http://localhost:3000/courses";

function start() {
  getCourses(renderCourses);
}
start();
// function

function getCourses(callback) {
  fetch(courseApi)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}

function renderCourses(courses) {
  var listCoursesBlock = document.querySelector("#list-course");
  var htmls = courses.map(function (course) {
    return `<li><h4>${course.name}</h4>
    <p>${course.description}</p>
    </li>`;
  });
  listCoursesBlock.innerHTML = htmls.join("");
}
