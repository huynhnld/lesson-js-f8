const btn = document.getElementById("btn"); // Lấy thẻ button
console.log(btn);
let colorIndex = 0; // Khởi tạo màu đầu tiên cho button

btn.addEventListener("click", () => {
  const colors = ["green", "blue", "yellow"]; // Khai báo mảng các màu
  btn.style.color = colors[colorIndex]; // Thiết lập màu cho button
  colorIndex = (colorIndex + 1) % colors.length; // Chuyển sang màu tiếp theo

  // Sau 3 giây, đổi màu button lại thành màu #fff hoặc #333
  setTimeout(() => {
    if (colorIndex === 2) {
      colorIndex = 0;
    }
    btn.style.color = colors[colorIndex];
  }, 3000);
});
var json = '["javaScript","PHP"]';
var json2 = '{"name":"Son Dang","age":18}';
var a = '"asfsad"';
console.log(JSON.parse(json2));
// 1. Pending
// 2. Fullfilled
// 3. Reject

var promise = new Promise(
  //Excutor: Gọi ngay fucn này
  function (reslove, reject) {
    //logic
    //Thành công: gọi hàm reslove()
    //Thất bại: gọi hàm reject()
    reslove();
  }
);
promise
  .then(function () {
    return 1;
  })
  .then(function (data) {
    console.log(data);
    return 2;
  })
  .then(function (data) {
    console.log(data);
    return 3;
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function () {
    console.log("Failure");
  })
  .finally(function () {
    console.log("Done");
  });

function sleep(ms) {
  return new Promise(function (reslove) {
    setTimeout(reslove, ms);
  });
}

sleep(1000)
  .then(function () {
    console.log(1);
    return sleep(1000);
  })
  .then(function () {
    console.log(2);
    return sleep(1000);
  })
  .then(function () {
    console.log(3);
    return sleep(1000);
  })
  .then(function () {
    console.log(4);
    return sleep(1000);
  });

function notHell(value) {
  return new Promise(function (reslove) {
    reslove(value);
  });
}
notHell(1)
  .then(function (value) {
    return value + 1;
  })
  .then(function (value) {
    return value + 1;
  })
  .then(function (value) {
    return value + 1;
  })
  .then(function (value) {
    console.log("value + 1: ", value + 1);
  });

var promise2 = Promise.reject("error");
promise2
  .then(function (result) {
    console.log(result);
  })
  .catch(function (err) {
    console.log(err);
  });

var promise3 = new Promise(function (reslove, reject) {
  setTimeout(function () {
    reslove([1]);
  }, 1000);
});
var promise4 = new Promise(function (reslove, reject) {
  setTimeout(function () {
    reject("co lỗi");
  }, 1000);
});
Promise.all([promise3, promise4])
  .then(function ([re1, re2]) {
    console.log(re1.concat(re2));
  })
  .catch(function (err) {
    console.log(err);
  });
