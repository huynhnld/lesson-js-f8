var courseApi = "http://localhost:3000/course";

function start() {
  getCourses(renderCourses);
  handleCreateForm();
}
start();
function getCourses(callback) {
  fetch(courseApi, callback)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}
function createCourse(formData, callback) {
  var options = {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(courseApi, options)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
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
      document.querySelector('input[name="name"]').value = "";
      document.querySelector('input[name="description"]').value = "";
    });
  };
}
function handleDeleteCourse(id) {
  var courseItem = document.querySelector(".course-item-" + id);
  var options = {
    method: "DELETE",
    header: {
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
        document.querySelector('input[name="name"]').value = "";
        document.querySelector('input[name="description"]').value = "";
      }
    });
}

function handleEditCourse(id) {
  var courseItem = document.querySelector(".course-item-" + id);
  var contentName = courseItem.querySelector("h3").textContent;
  var contentDescription = courseItem.querySelector("p").textContent;
  var createBtn = document.querySelector("#create");
  var editBtn = document.querySelector("#edit");
  document.querySelector('input[name="name"]').value = contentName;
  document.querySelector('input[name="description"]').value =
    contentDescription;
  createBtn.classList.add("hidden");
  editBtn.classList.remove("hidden");

  editBtn.onclick = function () {
    createBtn.classList.remove("hidden");
    editBtn.classList.add("hidden");
    var nameEditted = document.querySelector('input[name="name"]').value;
    var descriptionEditted = document.querySelector(
      'input[name="description"]'
    ).value;
    var formData2 = {
      name: nameEditted,
      description: descriptionEditted,
    };
    console.log("formData2:", formData2);
    var options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData2),
    };
    fetch(courseApi + "/" + id, options)
      .then(function (response) {
        return response.json();
      })
      .then(function () {
        courseItem.querySelector("h3").textContent = nameEditted;
        courseItem.querySelector("p").textContent = descriptionEditted;
        document.querySelector('input[name="name"]').value = "";
        document.querySelector('input[name="description"]').value = "";
      });
  };
}
