/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Michelle Baird
      Date:   August 29, 2025

      Filename: project02-04.js
 */

// --- Prices and Tax ---
const CHICKEN_PRICE = 10.95;

const HALIBUT_PRICE = 13.95;

const BURGER_PRICE = 9.95;

const SALMON_PRICE = 18.95;

const SALAD_PRICE = 7.95;

const SALES_TAX = 0.07;

// Function to display a numeric value as a text string in the format $##.##
function formatCurrency(value) {
  return "$" + value.toFixed(2);
}

// Run calcTotal() whenever a menu item is clicked
document.getElementById("chicken").addEventListener("click", calcTotal);

document.getElementById("halibut").addEventListener("click", calcTotal);

document.getElementById("burger").addEventListener("click", calcTotal);

document.getElementById("salmon").addEventListener("click", calcTotal);

document.getElementById("salad").addEventListener("click", calcTotal);

function calcTotal() {
  // cost variable start from value zero
  let cost = 0;

  // read variables equal to checkbox elements
  const buyChicken = document.getElementById("chicken").checked;

  const buyHalibut = document.getElementById("halibut").checked;

  const buyBurger = document.getElementById("burger").checked;

  const buySalmon = document.getElementById("salmon").checked;

  const buySalad = document.getElementById("salad").checked;

  // add prices if checked, cost variable
  cost += buyChicken ? CHICKEN_PRICE : 0;

  cost += buyHalibut ? HALIBUT_PRICE : 0;

  cost += buyBurger ? BURGER_PRICE : 0;

  cost += buySalmon ? SALMON_PRICE : 0;

  cost += buySalad ? SALAD_PRICE : 0;

  // shows food total
  document.getElementById("foodTotal").innerHTML = formatCurrency(cost);

  // compute tax, tax variable
  const tax = cost * SALES_TAX;

  // shows tax
  document.getElementById("foodTax").innerHTML = formatCurrency(tax);

  // total = cost + tax, total cost variable
  const totalCost = cost + tax;

  // shows total bill
  document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
}
