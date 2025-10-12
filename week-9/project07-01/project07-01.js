"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-01

      Project to validate a form used for setting up a new account
      Author: Michelle Baird 
      Date:   October 11, 2025

      Filename: project07-01.js
*/

let signupForm = document.getElementById("signup");

signupForm.addEventListener("submit", function(e) {
   e.preventDefault();

let pwd = document.getElementById("pwd").value;
let feedback = document.getElementById("feedback");

// Regular expressions
let regex1 = /[A-Z]/;    // at least one uppercase
let regex2 = /\d/;       // at least one digit
let regex3 = /[!\$#%]/;  // one of ! $ # %

// Validation flow
  if (pwd.length < 8) {
    feedback.textContent = "Your password must be at least 8 characters.";
  } else if (!regex1.test(pwd)) {
    feedback.textContent = "Your password must include an uppercase letter.";
  } else if (!regex2.test(pwd)) {
    feedback.textContent = "Your password must include a number.";
  } else if (!regex3.test(pwd)) {
    feedback.textContent =
      "Your password must include one of the following: ! $ # %.";
  } else {
    signupForm.submit();
  }
});