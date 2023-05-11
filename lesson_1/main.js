// console.log("hello");
var fullName = "Huynh";
var age = 26;
// alert(fullName);
// alert(age);
/* Giới thiệu một số hàn built-in
    1. Alert
    2. console
    3. confirm
    4. promt
    5. Set timeout
    6. set interval
    */
var fullName = "Huynh";
// console.log(fullName);
// confirm(" Xác nhận bạn đủ tuổi?");
// prompt("Xác nhận bạn đủ tuổi?");
// setTimeout(function () {
//   alert("Delay 5 s");
// }, 1000);
// setInterval(function () {
//   console.log("Thông báo");
// }, 1000);

var a = 1;
var b = 2;
if (a == b) {
  console.log("yes");
}
if (a > 0 && b > 0) {
  // alert("a&b lon hon 0");
}
/** Toán tử số học
 + --> Cộng
 - --> Trừ
 * --> Nhân
 ** --> Lũy thừa
 / --> Chia
 % --> Chia lấy số dư
 ++ --> Tăng 1 giá trị số
 -- --> Giảm 1 giá trị số
 */
// Toán tử gán
/* Toán tử      Ví dụ      Tương đương
      =         x = y       x = y
      +=        x += y      x = x + y
      -=        x -= y      x = x - y
      *=        x *= y      x = x * y
      /=        x /= y      x = x / y
      **=       x **= y     x= x ** y
*/

//Toán tử ++ --
// prefix & Postfix

var a = 6;
//Việc 1: + 1 cho a, a = a + 1 => a=7
//Việc 2: Trả về a sau khi được + 1
var output = ++a;
console.log(output);

var b = 6;
//Việc 1: 'b copy', b copy = 6
//Việc 2: Trừ 1 của b, b = b -1 => b=5
//Việc 3: trả vê 'a copy'
var output = b--;
console.log(output);

/*
 * TOán tử logic
 * 1. && - And
 * 2. || - Or
 * 3. ! - Not
 */
var a = 1;
var b = 2;
var c = 3;
/* Kiểu dữ liệu trong JavaScript
1. Dữ liệu nguyên thủy - Primitive Data (lưu vào vùng nhớ, khi đổi giá trị thì sẽ tạo vùng nhớ khác)
  - Number
  - String
  - Boolean
  - Undefined
  - Null
  - Symbol
2. Dữ liệu phức tạp - Complex Data
  - Function
  - Object
*/
//Number type
var b = 1;
//String type
var fullName = "huy";
// Boolean type
var isSuccess = true;
//Undefine Type
var name;
//null type
var isNull = null; //nothing
//Symbol
var id = Symbol("id"); //unique
//funtion
var myFunction = function () {
  // alert("hi");
};
console.log(typeof mono);

myFunction();
//object type
var myObject = {
  name: "Huy",
  age: 18,
  address: "HCM",
  myFunction: function () {},
};
console.log("myObject: ", myObject);
//Toán tử so sánh
/**
 * * ===
 * !==
 *
 */
console.log(a == b);
//Hiểu hơn về câu lệnh điều kiện
// phép so sánh

var a = 1;
var b = 2;
// var result = a < b && a < 0;

// var result = undefined || null || null;
var result =
  ("A" && "B" && "") || (" " && {}) || ([] && false && 10) || (0 && null);
console.log("result: ", result);
if (result) {
  console.log("Điều kiện đúng!");
} else {
  console.log("Điều kiện sai!");
}
function showDialog() {
  alert("hello");
}
// showDialog(); thực thi hàm
function whiteLog() {
  var myString = "";
  for (var param of arguments) {
    myString += `${param} - `;
  }
  console.log(myString);
}
whiteLog("log 1", "log 2", "log 3");

// var isConfirm = confirm("dong y?");
// console.log(isConfirm);
function sum(a, b) {
  var result = a + b;
  console.log(result);
  return result;
}
sum(20, 10);
var fullName1 =
  "hoten thì 'bắt buộc' \\ hoten thì 'bắt buộc' \\ hoten thì 'bắt buộc' \\ hoten thì 'bắt buộc' \\";
console.log(fullName1);
var fullName2 = new String("hoTen"); // tạo như này sẽ thành Object

var firstName = "Ho";
var lastName = "Ten";
console.log(`Điền '${firstName}' và '${lastName}' vào ô trống!`);

var myString3 = "Học JS JS JS tại F8!";
console.log(myString3.indexOf("JS"));
console.log(myString3.slice(4));
console.log(myString3.replace(/JS/g, "JavsScript"));
console.log(myString3.replace("JS", "JavsScript"));
console.log(myString3.toLocaleUpperCase());
var milion = 1e6;

console.log(milion);
function isNumber(value) {
  // console.log(isNaN(value));
  if (isNaN(value) === false && typeof value === "number") {
    return true;
  } else {
    return false;
  }
}
console.log(isNumber(999));
console.log(isNumber(23 / "abc"));
console.log(isNumber(NaN));
console.log(isNumber("999"));
console.log(isNumber("abc"));

var languages = ["eng", "viet", "chinese"];
console.log(languages.toString());
console.log(languages.pop()); // xóa phần tử cúi mãng và trả về phần tử đã xóa
console.log(languages.push("france")); // thêm phần tử cúi mãng và trả về mảng sau khi được thêm
console.log(languages.unshift("new3")); // thêm phần tử đầu mãng và trả về mảng.length đã thêm
console.log(languages.unshift("new2")); // thêm phần tử đầu mãng và trả về mảng.length đã thêm
console.log("languages-before: ", languages);
languages.splice(1, 2); //Cắt phần tử tại vị trí index = 1 (đặt con trỏ vào languages[1]) và xóa đi 2 phần tử của mảng tại vị trí đó.

languages.splice(1, 0, "abc"); //CHÈN phần tử "abc" tại vị trí index = 1 (đặt con trỏ vào languages[1]) và không xóa đi phần tử nào (0) của mảng và chỉ thêm "abc" tại vị trí đó.

console.log("languages-after: ", languages);
console.log(languages.join(" - "));
var lang2 = ["vn", "sos", "html"];
console.log(languages.concat(lang2));
console.log(languages);
console.log(languages.slice(-3, -1)); //
console.log(languages.slice(1, 2)); //Cắt phần tử từ vị trí index = 1 và dừng cắt tại index=2
function getLastElement(array) {
  var lastEl = array.pop();
  array.push(lastEl);
  console.log(lastEl);
  return lastEl;
}

// Ví dụ sử dụng
var animals = ["Monkey", "Tiger", "Elephant"];
// var result = getLastElement(animals);
var result = getFirstElement(animals);

console.log(result); // Expected: "Elephant"
console.log(animals);

function getFirstElement(array) {
  var firstEl = array.shift();
  array.unshift(firstEl);
  console.log(firstEl);
  return firstEl;
}
var emailKey = "email";
var myInfo = {
  name: "huy",
  age: 18,
  address: "hcm",
  [emailKey]: "huy2@.gmail.com",
  getName: function () {
    return this.name;
  },
};
//Functione => phương thức / method
// Others => Thuộc tính / propertise
console.log(myInfo.getName());

// myInfo.email = "huy@.gmail.com"; cách 1
// myInfo["my-email"] = "huy@.gmail.com"; // cách 2 thêm key mới
// console.log(myInfo["my-email"]);
// console.log(myInfo.age);
function User(firstName, lastName, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;
  this.getName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}
User.prototype.className = "F8";
var author = new User("Huy", "Le", "Avatar1");
var user = new User("Vu", "Nguyen", "Avatar2");
author.title = "chia sẽ dạo F8";
user.comment = "ok nha admin";
console.log(author);
console.log(user);

function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

// Ví dụ khi sử dụng
//Đối tượng DATE
var student = new Student("Long", "Bui");
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
console.log(date, day, year, month);
//Math object
/* -Math.PI
-math.round() => làm tròn xuống / lên
-math.abs() => Lấy giá trị tuyệt đối
-Math.ceil() => làm tròn trên
-Math.floor() => làm tròn dưới
-Math.random() => tạo ra dãy số thập phân ngẫu nhiên
-Math.min()
-Math.max()
*/
var getRandomItem = function (array) {
  var index = (array.length += 1);
  console.log("index:", index);
  var random = Math.floor(Math.random() * index);
  console.log(array[random]);
  return array[random];
};
var string = [
  1, 2, 323, 434, 21, 1231, 25, 2345, 235, 2, 34, 234, 23, 23, 423, 4, 42, 34,
  2323, 456, 346, 5434,
];
getRandomItem(string);

function run(a) {
  var b;
  if (a % 3 == 0) {
    b = 1;
  }
  if (a % 5 == 0) {
    b = 2;
  }
  if (a % 15 == 0) {
    b = 3;
  }
  return b;
}
console.log(run(3)); // 1
console.log(run(5)); // 2
console.log(run(15)); // 3
//Câu lệnh rẽ nhánh - Switch

var date = "5";
switch (date) {
  case 2:
    console.log("Hom nay la thu 2");
    break;
  case 3:
    console.log("Hom nay la thu 3");
    break;
  case 4:
    console.log("Hom nay la thu 4");
    break;
  case 5:
    console.log("Hom nay la thu 5");
    break;
  case "5":
    console.log("Hom nay la thu 5");
    break;
}
//Toán tử ba ngôi - Ternary operator
// VÒNG LẶP FOR
for (var i = 1; i <= 10; i++) {
  console.log(i);
}
var getRandNumbers = function (min, max, length) {
  var arr = [];
  for (var i = 1; i <= length; i++) {
    var random = Math.floor(Math.random() * (max - min + 1) + min);
    arr.push(random);
    console.log(arr);
  }
  return arr;
};

console.log("Kết Quả: ", getRandNumbers(1, 5, 6));

function getTotal(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
    console.log(sum);
  }
  return sum;
}
var num = [1, 2, 3];
console.log("SUM: ", getTotal(num));

var orders = [
  {
    name: "Khóa học HTML - CSS Pro",
    price: 3000000,
  },
  {
    name: "Khóa học Javascript Pro",
    price: 2500000,
  },
  {
    name: "Khóa học React Pro",
    price: 3200000,
  },
];

var getTotal = function (arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i].price;
    console.log(sum);
  }
};

// Expected results:
getTotal(orders); // Output: 8700000

var myInfo = {
  name: "huy",
  age: 18,
  address: "hcm",
};
//for in
for (var key in myInfo) {
  console.log(myInfo[key]);
}
function run(object) {
  var content = [];
  for (var key in object) {
    content.push(`Thuộc tính ${key} có giá trị ${object[key]}`);
  }
  return content;
}
console.log(run({ name: "Nguyen Van A", age: 16 }));
//for ... of loop
var languages2 = ["java", "PHP", "ruby"];
for (var value of languages2) {
  console.log(value);
}

for (var value of Object.values(myInfo)) {
  console.log(value);
}
for (var value of Object.keys(myInfo)) {
  console.log(value);
}
//do / while loop
var i = 0;
do {
  i++;
  console.log(i);
} while (i < 10);
//vong lap long nhau
var myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
for (var i = 0; i < myArr.length; i++) {
  for (var j = 0; j < myArr[i].length; j++) {
    console.log(myArr[i][j]);
  }
}
// 1. Xác định điểm dừng
// 2. Logic handle => tạo ra điểm dừng
/* Array methods:
  forEach() => duyệt qua từng phần tử của mảng
  every() => trả về giá trị Boolean=> kiểm tra từng phần tử thỏa mản điều kiện gì đó.
  some()=> trả về Boolean=> kiểm tra từng phần tử nếu có true thì ko cần check các ptu còn lại.
  find()=> trả về chỉ 1 phần tử có điều kiện đúng đầu tiên.
  filter() => trả về chỉ danh sách các phần tử có điều kiện đúng.
  map() => xử lý từng thành phần của mãng áp dụng cho rendering
  reduce() => tính tổng giá trị của các key chung của các phần tử mảng cộng dồn vào 1 biến tích trữ đến khi hết phần tử trong mảng.
*/
var courses = [
  {
    id: 1,
    name: "JavaScript",
    coin: 70,
  },
  {
    id: 2,
    name: "PHP",
    coin: 70,
  },
  {
    id: 3,
    name: "Ruby",
    coin: 70,
  },
  {
    id: 4,
    name: "HTML - CSS",
    coin: 70,
  },
  {
    id: 5,
    name: "ReactJS",
    coin: 100,
  },
  {
    id: 6,
    name: "VueJS",
    coin: 100,
  },
];
// var isFree = courses.every(function (course, index) {
//   return course.coin === 0;
// });
var isFree = courses.filter(function (course, index) {
  return course.coin === 70;
});
console.log(isFree); // Call back được gọi lại

const sports = [
  {
    name: "Bóng rổ",
    like: 6,
  },
  {
    name: "Bơi lội",
    like: 5,
  },
  {
    name: "Bóng đá",
    like: 10,
  },
];

var getMostFavoriteSport = function (array) {
  var mostSport = [];
  array.filter(function (item, index) {
    var sportLike = item.like;
    console.log(item.like);
    if (sportLike > 5) {
      mostSport.push(item);
    }
  });
  return mostSport;
};

// Kỳ vọng
console.log(getMostFavoriteSport(sports));
// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]

function courseHandler(course, index) {
  return {
    id: course.id,
    name: `Khóa học: ${course.name}`,
    coin: course.coin,
    coinText: `Giá: ${course.coin}`,
    index: index,
    originArray: course,
  };
}
var newCourses = courses.map(courseHandler);
console.log("newCourses: ", newCourses);

var i = 0;
// function coinHandler(accumulator, currentValue) {
//   i++;
//   var total = accumulator + currentValue.coin;
//   // console.table({
//   //   "Lượt chạy: ": i,
//   //   "Biến tích trữ: ": accumulator,
//   //   "Giá khóa học: ": currentValue.coin,
//   //   "Giá tích trữ được: ": total,
//   // });
//   // console.log(currentValue);
//   // console.log(currentIndex);
//   return total;
// }
// var totalCoin = courses.reduce(function (accumulator, currentValue) {
//   return accumulator + currentValue.coin;
// }, 0); // số 0 là initial value
console.log("Tổng giá: ", totalCoin);

var totalCoin = courses.reduce(function (total, course) {
  return total + course.coin;
}, 0);
console.log(totalCoin);
var sports2 = [
  {
    name: "Bơi lội",
    gold: 11,
  },
  {
    name: "Boxing",
    gold: 3,
  },
  {
    name: "Đạp xe",
    gold: 4,
  },
  {
    name: "Đấu kiếm",
    gold: 5,
  },
];

var getTotalGold = function (array) {
  var totalCoin = array.reduce(function (a, b) {
    return a + b.gold;
  }, 0);
  return totalCoin;
};

// Expected results:
console.log(getTotalGold(sports2)); // Output: 23

// Flat= "Làm phẳng" mảng từ Depth array=" Mảng sâu"
var depthArray = [1, 2, [(3, 4)], 5, 6, [7, 8, 9]];
var flatArray = depthArray.reduce(function (flatOut, depthItem) {
  return flatOut.concat(depthItem);
}, []);
console.log("flatArray: ", flatArray);

//Lấy ra các khóa học và đưa vào 1 mảng mới

var topics = [
  {
    topic: "FrontEnd",
    courses: [
      {
        id: 1,
        title: "HTML, CSS",
      },
      {
        id: 2,
        title: "JavaScript",
      },
    ],
  },
  {
    topic: "BackEnd",
    courses: [
      {
        id: 1,
        title: "PHP",
      },
      {
        id: 2,
        title: "NodeJS",
      },
    ],
  },
];
var newCourses = topics.reduce(function (courses, topic) {
  return courses.concat(topic.courses);
}, []);
// console.log("newCourses: ", newCourses);
var htmls = newCourses.map(function (course) {
  return `
  <div>
  <h2>${course.title}</h2>
  <p>ID: ${course.id}</p>
  </div>`;
});
console.log(htmls.join(""));

// Bài tập REDUCE tính điểm IMDB trung bình của film đạo diễn... kia

var watchList = [
  {
    Title: "Inception",
    Year: "2010",
    Rated: "PG-13",
    Released: "16 Jul 2010",
    Runtime: "148 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer: "Christopher Nolan",
    Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    Language: "English, Japanese, French",
    Country: "USA, UK",
    imdbRating: "8.8",
    imdbVotes: "1,446,708",
    imdbID: "tt1375666",
    Type: "movie",
  },
  {
    Title: "Interstellar",
    Year: "2014",
    Rated: "PG-13",
    Released: "07 Nov 2014",
    Runtime: "169 min",
    Genre: "Adventure, Drama, Sci-Fi",
    Director: "Christopher Nolan",
    Writer: "Jonathan Nolan, Christopher Nolan",
    Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: "English",
    Country: "USA, UK",
    imdbRating: "8.6",
    imdbVotes: "910,366",
    imdbID: "tt0816692",
    Type: "movie",
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    Rated: "PG-13",
    Released: "18 Jul 2008",
    Runtime: "152 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer:
      "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    Language: "English, Mandarin",
    Country: "USA, UK",
    imdbRating: "9.0",
    imdbVotes: "1,652,832",
    imdbID: "tt0468569",
    Type: "movie",
  },
  {
    Title: "Batman Begins",
    Year: "2005",
    Rated: "PG-13",
    Released: "15 Jun 2005",
    Runtime: "140 min",
    Genre: "Action, Adventure",
    Director: "Christopher Nolan",
    Writer:
      "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    Language: "English, Urdu, Mandarin",
    Country: "USA, UK",
    imdbRating: "8.3",
    imdbVotes: "972,584",
    imdbID: "tt0372784",
    Type: "movie",
  },
  {
    Title: "Avatar",
    Year: "2009",
    Rated: "PG-13",
    Released: "18 Dec 2009",
    Runtime: "162 min",
    Genre: "Action, Adventure, Fantasy",
    Director: "James Cameron",
    Writer: "James Cameron",
    Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    Language: "English, Spanish",
    Country: "USA, UK",
    imdbRating: "7.9",
    imdbVotes: "876,575",
    imdbID: "tt0499549",
    Type: "movie",
  },
];
console.log("watchList: ", watchList);
var calculateRating = function (arr) {
  var listFilm = arr.filter(function (film, index) {
    return film.Director === "Christopher Nolan";
  });
  console.log("listFilm.length: ", listFilm.length);
  var totalImdb = listFilm.reduce(function (total, film) {
    return total + parseFloat(film.imdbRating, 10);
  }, 0);
  console.log("totalImdb: ", totalImdb);
  var absImdb = totalImdb / listFilm.length;
  console.log("absImdb: ", absImdb);
  return absImdb;
};
// Expected results
console.log(calculateRating(watchList)); // Output: 8.675

// Array.prototype.reduce2 = function (callback, result) {
//   let i = 0;
//   if (arguments.length < 2) {
//     i = 1;
//     result = this[0];
//   }
//   for (; i < this.length; i++) {
//     result = callback(result, this[i], i, this);
//   }
//   return result;
// };

Array.prototype.reduce2 = function (callback, result) {
  let i = 0;
  if (arguments.length < 2) {
    i = 1;
    result = this[0];
  }
  for (; i < this.length; i++) {
    result = callback(result, this[i], i, this);
  }
  return result;
};

const numbers3 = [1, 2, 3, 4, 5];
const result3 = numbers3.reduce2((total, number) => {
  return total + number;
});
console.log(result3);

// Expected results:
var arr = [
  ["name", "Sơn Đặng"],
  ["age", 18],
  // ["name", "Sơn Đặng 2"],
  // ["age", 183],
];
function arrToObj(ar) {
  return ar.reduce((bienTichLuy, giaTriHienTai) => {
    return { ...bienTichLuy, [giaTriHienTai[0]]: giaTriHienTai[1] };
  }, {});
}
console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }
//callback?
//là hàm (function) được truyền qua đối số khi gọi hàm khác
//là hàm (function) và được truyền qua đối số
// Được gọi lại (trong hàm nhận đối số)

function myFunction2(value) {
  console.log(typeof value);
  value("abc");
}
function myCallback2(value) {
  console.log(value);
}
myFunction2(myCallback2);

function sumCb(a, b) {
  return a + b;
}
function subCb(a, b) {
  return a - b;
}
function multiCb(a, b) {
  return a * b;
}
function divCb(a, b) {
  return a / b;
}

function caculate(a, b, cb) {
  return cb(a, b);
}
console.log("sum: ", caculate(1, 2, subCb));
// Expected results
// caculate(1, 2, sumCb) // Output: 3
// caculate(1, 2, subCb) // Output: -1
// caculate(1, 2, multiCb) // Output: 2
// caculate(3, 1, divCb) // Output: 3
