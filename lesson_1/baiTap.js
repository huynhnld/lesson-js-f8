//forEach, find, filter, some, every,reduce
// Array.prototype.forEach2 = function (callback) {
//   for (var index in this) {
//     if (this.hasOwnProperty(index)) {
//       console.log(index);
//       callback(this[index], index, this);
//     }
//   }
// };

// var courses = ["JavaScript", "PHP", "Ruby"];
// var output = courses.forEach2(function (course, index, array) {
//   console.log(course, index, array);
// });
// console.log(output);
//hasOwnProperty
//filter2
var courses = [
  { name: "JavaScript", coin: 680 },
  {
    name: "PHP",
    coin: 860,
  },
  { name: "Ruby", coin: 980 },
  { name: "Ruby2", coin: 980 },
];

Array.prototype.filter2 = function (callback) {
  var output = [];
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var result = callback(this[index], index, this);
      if (result) {
        output.push(this[index]);
      }
    }
  }
  return output;
};

var filterCourse = courses.filter2(function (course) {
  return course.coin > 700;
});
console.log(filterCourse);

Array.prototype.myFilter = function (cb) {
  var output = [];
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var result = cb(this[index], index, this);
      if (result) {
        output.push(this[index]);
      }
    }
  }
  return output;
};

//Expected results:

const numbers = [1, 2, 3, 4];

console.log(
  numbers.myFilter(function (number) {
    return number % 2 === 0;
  })
);
//Output: [2, 4]

console.log(
  numbers.myFilter(function (number, index) {
    return index % 2 === 0;
  })
);
//Output: [1, 3]

console.log(
  numbers.myFilter(function (number, index, array) {
    return array.length % 2 === 0;
  })
);
//Output: [1, 2, 3, 4]

//SOME=> chỉ cần đúng 1 phần tử, bỏ qua hết all phẩn tử còn lại và chốt là True
var courses2 = [
  { name: "JavaScript", coin: 680, isFinish: true },
  {
    name: "PHP",
    coin: 860,
    isFinish: true,
  },
  { name: "Ruby", coin: 980, isFinish: false },
  { name: "Ruby2", coin: 980, isFinish: true },
];
Array.prototype.some2 = function (callback) {
  var output = false;
  for (var index in this) {
    console.log(index);
    if (this.hasOwnProperty(index)) {
      if (callback(this[index], index, this)) {
        // return true;
        output = true;
        break;
      }
    }
  }
  return output;
};
var result = courses2.some2(function (course, index) {
  return course.isFinish;
});
console.log("result-some:", result);

Array.prototype.every2 = function (callback) {
  var output = true;
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      var result = callback(this[index], index, this);
      if (!result) {
        output = false;
        break;
      }
    }
  }
  return output;
};

var resultEvery = courses2.every2(function (course, index) {
  return course.isFinish;
});
console.log("result-every:", resultEvery);

// Array.prototype.mySome = function (cb) {
//   var result = false;
//   for (var index in this) {
//     if (this.hasOwnProperty(index)) {
//       if (cb(this[index], index, this)) {
//         result = true;
//         break;
//       }
//     }
//   }
//   return result;
// };

//Expected results:

// const numbers3 = [1, 3, 3, 5];

// console.log(
//   numbers3.mySome(function (number) {
//     return number % 2 === 0;
//   })
// );
// //Output: false

// console.log(
//   numbers3.mySome(function (number, index) {
//     return index % 2 === 0;
//   })
// );
// //Output: true

// console.log(
//   numbers3.mySome(function (number, index, array) {
//     return array.length % 2 === 0;
//   })
// );
//Output: true
