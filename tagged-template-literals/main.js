function highlight([first, ...strings], ...values) {
  return values
    .reduce(
      (acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()],
      [first]
    )
    .join("");
}

var course = "PHP";
var brand = "F8";
var htmls = highlight`Học lập trình ${course} tại ${brand}!`;
console.log("htmls:", htmls);
