// // 1. Displays current date & time
// function showDateTime() {
//   document.write(new Date() + "<br><br>");
// }
// showDateTime();

// // 2. Greets user using full name
// function greetUser(firstName, lastName) {
//   document.write("Hello " + firstName + " " + lastName + "<br><br>");
// }
// greetUser("Ali", "Khan");

// // 3. Adds two numbers
// function addNumbers(num1, num2) {
//   return num1 + num2;
// }
// document.write(addNumbers(5, 10) + "<br><br>");

// // 4. Calculator
// function calculator(num1, num2, operator) {
//   if (operator === "+") return num1 + num2;
//   if (operator === "-") return num1 - num2;
//   if (operator === "*") return num1 * num2;
//   if (operator === "/") return num1 / num2;
// }
// document.write(calculator(10, 5, "*") + "<br><br>");

// // 5. Squares a number
// function square(num) {
//   return num * num;
// }
// document.write(square(6) + "<br><br>");

// // 6. Factorial
// function factorial(num) {
//   let fact = 1;
//   for (let i = 1; i <= num; i++) {
//     fact *= i;
//   }
//   return fact;
// }
// document.write(factorial(5) + "<br><br>");

// // 7. Counting
// function showCounting(start, end) {
//   for (let i = start; i <= end; i++) {
//     document.write(i + " ");
//   }
//   document.write("<br><br>");
// }
// showCounting(1, 10);

// // 8. Hypotenuse (nested function)
// function calculateHypotenuse(base, perpendicular) {
//   function calculateSquare(num) {
//     return num * num;
//   }
//   let hypotenuse = Math.sqrt(
//     calculateSquare(base) + calculateSquare(perpendicular)
//   );
//   document.write("Hypotenuse is " + hypotenuse + "<br><br>");
// }
// calculateHypotenuse(3, 4);

// // 9. Area of rectangle
// function rectangleArea(width, height) {
//   return width * height;
// }
// document.write(rectangleArea(5, 8) + "<br>");
// let w = 6, h = 4;
// document.write(rectangleArea(w, h) + "<br><br>");

// // 10. Palindrome check
// function isPalindrome(str) {
//   let reverse = str.split("").reverse().join("");
//   return str === reverse;
// }
// document.write(isPalindrome("madam") + "<br><br>");

// // 11. Capitalize first letter of each word
// function titleCase(str) {
//   let words = str.split(" ");
//   for (let i = 0; i < words.length; i++) {
//     words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//   }
//   return words.join(" ");
// }
// document.write(titleCase("the quick brown fox") + "<br><br>");

// // 12. Longest word in string
// function longestWord(str) {
//   let words = str.split(" ");
//   let longest = "";
//   for (let word of words) {
//     if (word.length > longest.length) {
//       longest = word;
//     }
//   }
//   return longest;
// }
// document.write(longestWord("Web Development Tutorial") + "<br><br>");

// // 13. Count letter occurrences
// function countLetter(str, letter) {
//   let count = 0;
//   for (let char of str) {
//     if (char === letter) count++;
//   }
//   return count;
// }
// document.write(countLetter("JSResourceS.com", "o") + "<br><br>");

// // 14. Circle calculations
// function calcCircumference(radius) {
//   document.write("The circumference is " + (2 * Math.PI * radius) + "<br>");
// }
// function calcArea(radius) {
//   document.write("The area is " + (Math.PI * radius * radius) + "<br>");
// }
// calcCircumference(5);
// calcArea(5);
