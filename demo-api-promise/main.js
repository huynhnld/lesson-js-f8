var users = [
  {
    id: 2,
    name: "Son Dang",
  },
  {
    id: 1,
    name: "Kien Dam",
  },
  {
    id: 3,
    name: "Hung Dam",
  },
  {
    id: 4,
    name: "Cao Dam",
  },
  //....
];
var comments = [
  {
    id: 1,
    user_id: 1,
    content: "Anh Son chua ra video :(",
  },
  {
    id: 2,
    user_id: 2,
    content: "Vua ra xong em oi!",
  },
  {
    id: 3,
    user_id: 1,
    content: "Cam on anh!",
  },
];
//1. Lay comments
//2. Tu comments lay ra user_id
//3. Tu user_id lay ra id tuong ung

//FAKE API

//Kien thuc can nam
//1. Array
//2. Function, callback
//3. Promise
//4. DOM
function getUsersByIds(userIds) {
  return new Promise(function (reslove) {
    var result = users.filter(function (user) {
      return userIds.includes(user.id);
    });
    reslove(result);
  });
}

function getComments() {
  return new Promise(function (reslove) {
    setTimeout(function () {
      reslove(comments);
    }, 1000);
  });
}
getComments()
  .then(function (comments) {
    var userIds = comments.map(function (comment) {
      return comment.user_id;
    });
    return getUsersByIds(userIds).then(function (users) {
      return {
        users: users,
        comments: comments,
      };
    });
  })
  .then(function (data) {
    var html = "";
    var commentsBlock = document.getElementById("comments");
    data.comments.map(function (comment) {
      var user = data.users.find(function (user) {
        return user.id === comment.user_id;
      });
      html += `<li>${user.name}: ${comment.content}</li>`;
    });
    commentsBlock.innerHTML = html;
  });
