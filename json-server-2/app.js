var courseApi = "http://localhost:3000/course";

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

function createCourse(formData) {
  var options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };
  fetch(courseApi, options);
}
function renderCourses(courses) {
  var listCoursesBlock = document.querySelector("#list-courses");
  var htmls = courses.map(function (course) {
    return `<li class="course-item-${course.id}">
      <h3>${course.name}</h3>
      <p>${course.description}</p>
      <button onclick="handleDeleteCourse(${course.id})">Delete</button>
      <button onclick="handleEditCourse(${course.id})">Edit</button>
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
function handleDeleteCourse(id) {
  var courseItem = document.querySelector(".course-item-" + id);
  var options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(courseApi + "/" + id, options)
    .then(function (response) {
      return response.json();
    })
    .then(function () {
      if (courseItem) {
        courseItem.remove();
      }
    });
}
function handleEditCourse(id) {
  var createBtn = document.querySelector("#create");
  var editBtn = document.querySelector("#edit");
  createBtn.classList.add("hidden");
  editBtn.classList.remove("hidden");
  var courseItem = document.querySelector(".course-item-" + id);
  var contentName = courseItem.querySelector("h3").textContent;
  var contentDescription = courseItem.querySelector("p").textContent;
  document.querySelector('input[name="name"]').value = contentName;
  document.querySelector('input[name="description"]').value =
    contentDescription;

  editBtn.onclick = function () {
    createBtn.classList.remove("hidden");
    editBtn.classList.add("hidden");
    var contentNameEdit = document.querySelector('input[name="name"]').value;
    var contentDescriptionEdit = document.querySelector(
      'input[name="description"]'
    ).value;
    var formDataEdit = {
      name: contentNameEdit,
      description: contentDescriptionEdit,
    };
    var options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataEdit),
    };
    fetch(courseApi + "/" + id, options)
      .then(function (response) {
        return response.json();
      })
      .then(function () {
        document.querySelector('input[name="name"]').value = "";
        document.querySelector('input[name="description"]').value = "";
        courseItem.querySelector("h3").textContent = contentName;
        courseItem.querySelector("p").textContent = contentDescription;
      });
  };
}
