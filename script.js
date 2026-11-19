// 1. Greeter
let studentName = prompt("Enter your name:");
let yearLevel = prompt("Enter your year level (e.g., 1st, 2nd, 3rd, 4th):");
console.log(`Welcome, ${studentName}! You are a ${yearLevel}-year student.`);

// 2. Rectangle
let length = Number(prompt("Enter the length of the rectangle:"));
let width = Number(prompt("Enter the width of the rectangle:"));
let area = length * width;
let perimeter = 2 * (length + width);
console.log(`Area: ${area}, Perimeter: ${perimeter}`);

// 3. Odd or Even
let num = Number(prompt("Enter a number to check if it is odd or even:"));
if (num % 2 === 0) {
  console.log(`${num} is even.`);
} else {
  console.log(`${num} is odd.`);
}

// 4. Largest of Two
let firstNum = Number(prompt("Enter the first number:"));
let secondNum = Number(prompt("Enter the second number:"));
if (firstNum > secondNum) {
  console.log(`${firstNum} is larger.`);
} else if (secondNum > firstNum) {
  console.log(`${secondNum} is larger.`);
} else {
  console.log("Both numbers are equal.");
}
