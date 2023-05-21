var courseApi = "http://localhost:3000/courses";
function start() {
  getCourses(renderCourses);
  handleCreateForm();
}
start();
function getCourses(callback) {
  fetch(courseApi)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}
function createCourse(formData, callback) {
  var option = {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(courseApi, option)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}
function handleDeleteCourse(id) {
  var option = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(courseApi + "/" + id, option)
    .then(function (response) {
      return response.json();
    })
    .then(function () {
      var courseItem = document.querySelector(".course-item-" + id);
      if (courseItem) {
        courseItem.remove();
      }
    });
}
function renderCourses(courses) {
  var listCoursesBlock = document.querySelector("#list-courses");
  var htmls = courses.map(function (course) {
    return `<li class="course-item-${course.id}">
            <h1>${course.name}</h1>
            <p>${course.description}</p>
            <button onclick="handleDeleteCourse(${course.id})">Xóa</button>
            <button onclick="handleEditCourse(${course.id})">Sửa</button>
        </li>`;
  });
  listCoursesBlock.innerHTML = htmls.join("");
}
function handleCreateForm() {
  var createBtn = document.querySelector("#create");
  createBtn.onclick = function () {
    var name = document.querySelector('input[name="name"]').value;
    var description = document.querySelector('input[name="description"]').value;
    var formData = {
      name: name,
      description: description,
    };
    createCourse(formData, function () {
      getCourses(renderCourses);
    });
  };
}
