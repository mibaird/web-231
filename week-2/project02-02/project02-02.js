/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Michelle Baird
      Date:   August 19, 2025

      Filename: project02-02.js
 */

// declare global constants for the application
    function verifyForm() {
      const name = document.getElementById("name").value.trim();

      const email = document.getElementById("email").value.trim();

      const phone = document.getElementById("phone").value.trim();

  // conditional operator using the && operator
  (name && email && phone)
    ? window.alert("Thank you!")
    : window.alert("Please fill in all fields");
}

//  addEventListener to #submit and run verifyForm()
document.getElementById("submit").addEventListener("click", verifyForm);