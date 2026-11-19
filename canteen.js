// Level 1 – Setup and Variables
const CANTEEN_NAME = 'SHC Canteen';
const PRICE_ADOBO = 85;
const PRICE_PANCIT = 60;
const PRICE_BURGER = 95;
const PRICE_ICED_TEA = 30;

console.log(`Welcome to ${CANTEEN_NAME}!`);

// Level 2 – User Input
let customerName = prompt("Enter your name:");

let menuMessage = `=== ${CANTEEN_NAME.toUpperCase()} MENU ===
1 - Chicken Adobo Meal (PHP 85)
2 - Pancit Canton (PHP 60)
3 - Burger Steak Meal (PHP 95)
4 - Iced Tea (PHP 30)

Enter the item code (1 to 4):`;

let itemCode = Number(prompt(menuMessage));
let quantity = Number(prompt("Enter quantity:"));
let isStudent = confirm("Are you an SHC student?");

// Level 3 – Conditionals & Validation
let itemName = "";
let unitPrice = 0;
let isValid = true;

switch (itemCode) {
  case 1:
    itemName = "Chicken Adobo Meal";
    unitPrice = PRICE_ADOBO;
    break;
  case 2:
    itemName = "Pancit Canton";
    unitPrice = PRICE_PANCIT;
    break;
  case 3:
    itemName = "Burger Steak Meal";
    unitPrice = PRICE_BURGER;
    break;
  case 4:
    itemName = "Iced Tea";
    unitPrice = PRICE_ICED_TEA;
    break;
  default:
    alert("Invalid item code.");
    document.getElementById("receipt").textContent = "Invalid item code.";
    isValid = false;
}

// Validate quantity only if item code was valid
if (isValid && (!Number.isInteger(quantity) || quantity <= 0)) {
  alert("Invalid quantity. Please enter a whole number greater than 0.");
  document.getElementById("receipt").textContent = "Invalid quantity.";
  isValid = false;
}

// Proceed only if inputs are valid
if (isValid) {
  // Level 4 – Operators and Computation
  let subtotal = unitPrice * quantity;
  let discountRate = 0;

  if (isStudent && subtotal >= 200) {
    discountRate = 0.15;
  } else if (isStudent) {
    discountRate = 0.10;
  } else if (!isStudent && subtotal >= 200) {
    discountRate = 0.05;
  } else {
    discountRate = 0;
  }

  let discountAmount = subtotal * discountRate;
  let totalDue = subtotal - discountAmount;
  let customerType = isStudent ? 'Student' : 'Guest';
  let discountPercent = discountRate * 100;

  // Level 6 – Challenge Option 1: Cash and Change
  let cashPaid = Number(prompt(`Total due is PHP ${totalDue.toFixed(2)}. Enter amount paid:`));
  let paymentSummary = "";

  if (cashPaid < totalDue) {
    let amountNeeded = totalDue - cashPaid;
    paymentSummary = `Cash Paid:   PHP ${cashPaid.toFixed(2)}\nBalance Due: PHP ${amountNeeded.toFixed(2)} more needed`;
  } else {
    let change = cashPaid - totalDue;
    paymentSummary = `Cash Paid:   PHP ${cashPaid.toFixed(2)}\nChange:      PHP ${change.toFixed(2)}`;
  }

  // Level 5 – Output with Template Literals
  let receiptText = `========= ${CANTEEN_NAME.toUpperCase()} =========
Customer:    ${customerName} (${customerType})
Item:        ${itemName}
Unit Price:  PHP ${unitPrice.toFixed(2)}
Quantity:    ${quantity}
Subtotal:    PHP ${subtotal.toFixed(2)}
Discount:    ${discountPercent}% (PHP ${discountAmount.toFixed(2)})
TOTAL DUE:   PHP ${totalDue.toFixed(2)}
${paymentSummary}
===============================
Thank you for your order!`;

  document.getElementById("receipt").textContent = receiptText;
}
