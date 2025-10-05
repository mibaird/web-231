"use strict";

/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Michelle Baird
      Date:   October 3, 2025

      Filename: project06-03.js
*/

// To reference the "Same as Shipping Address" checkbox and handler
let useShip = document.getElementById("useShip");
useShip.addEventListener("click", copyShippingToBilling);

// To copy shipping to billing when the checkbox is checked
function copyShippingToBilling() {
  if (useShip.checked) {
    document.getElementById("firstnameBill").value = document.getElementById("firstnameShip").value;
    document.getElementById("lastnameBill").value = document.getElementById("lastnameShip").value;
    document.getElementById("address1Bill").value = document.getElementById("address1Ship").value;
    document.getElementById("address2Bill").value = document.getElementById("address2Ship").value;
    document.getElementById("cityBill").value = document.getElementById("cityShip").value;
    document.getElementById("countryBill").value = document.getElementById("countryShip").value;
    document.getElementById("codeBill").value = document.getElementById("codeShip").value;

// Match the selected state option by index
    document.getElementById("stateBill").selectedIndex =
      document.getElementById("stateShip").selectedIndex;
  }
}

// Select all text inputs from the form
let formElements = document.querySelectorAll("input[type='text']");

// Store number of field to loop through
let fieldCount = formElements.length;

// Reference the error box div
let errorBox = document.getElementById("errorBox");

// For each text input, show a message if it’s invalid
for (let i = 0; i < fieldCount; i++) {
  formElements[i].addEventListener("invalid", showValidationError);
}

// Show custom error message and prevent native browser response
function showValidationError(evt) {
  evt.preventDefault();

// show custom message
  errorBox.textContent = "Complete all highlighted fields";
}
