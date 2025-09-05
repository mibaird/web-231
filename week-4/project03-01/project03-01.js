/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Michelle Baird
      Date:   September 3, 2025

      Filename: project03-01.js
*/

// Get all checkboxes with class "menuItems"
const menuItems = document.getElementsByClassName("menuItems");

// Add click listeners to checkboxes
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", calcTotal);
}

// Calculate total cost of selected items
function calcTotal() {
  let orderTotal = 0;

  // Loop through menu items
  for (let i = 0; i < menuItems.length; i++) {
    if (menuItems[i].checked) {
      orderTotal += Number(menuItems[i].value);
    }
  }

  document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}

// Function to display a numeric value as a text string in the format $##.##
function formatCurrency(value) {
  return "$" + value.toFixed(2);
}
