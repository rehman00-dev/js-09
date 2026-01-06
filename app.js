// 1
function showDateTime() {
  document.write(new Date());
}
showDateTime();

// 2
function greetUser(firstName, lastName) {
  document.write("Hello " + firstName + " " + lastName);
}
greetUser("Ali", "Khan");

// 3
function addNumbers(num1, num2) {
  return num1 + num2;
}
document.write(addNumbers(5, 10));

// 4
function calculator(num1, num2, operator) {
  if (operator === "+") return num1 + num2;
  if (operator === "-") return num1 - num2;
  if (operator === "*") return num1 * num2;
  if (operator === "/") return num1 / num2;
}
document.write(calculator(10, 5, "*"));

// 5
function square(num) {
  return num * num;
}
document.write(square(6));

// 6
function factorial(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
}
document.write(factorial(5));

// 7
function showCounting(start, end) {
  for (let i = start; i <= end; i++) {
    document.write(i + " ");
  }
}
showCounting(1, 10);

// 8
function calculateHypotenuse(base, perpendicular) {
  function calculateSquare(num) {
    return num * num;
  }
  let hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
  document.write("Hypotenuse is " + hypotenuse);
}
calculateHypotenuse(3, 4);

// 9
function rectangleArea(width, height) {
  return width * height;
}
document.write(rectangleArea(5, 8));
let w = 6, h = 4;
document.write(rectangleArea(w, h));

// 10
function isPalindrome(str) {
  let reverse = str.split("").reverse().join("");
  return str === reverse;
}
document.write(isPalindrome("madam"));

// 11
function titleCase(str) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}
document.write(titleCase("the quick brown fox"));

// 12
function longestWord(str) {
  let words = str.split(" ");
  let longest = "";
  for (let word of words) {
    if (word.length > longest.length) longest = word;
  }
  return longest;
}
document.write(longestWord("Web Development Tutorial"));

// 13
function countLetter(str, letter) {
  let count = 0;
  for (let char of str) {
    if (char === letter) count++;
  }
  return count;
}
document.write(countLetter("JSResourceS.com", "o"));

// 14
function calcCircumference(radius) {
  document.write("The circumference is " + (2 * Math.PI * radius));
}
function calcArea(radius) {
  document.write("The area is " + (Math.PI * radius * radius));
}
calcCircumference(5);
calcArea(5);
