// Assignment Code
var generateBtn = document.querySelector("#generate");

// ----------------------

var first = prompt(
  "Would you like to generate a password? Please type Yes or No."
);
if (first === "Yes") {
} else {
  prompt("Try again. Please type Yes or No.");
}

// ----------------------

var passLength = Number(
  prompt(
    "Please input the numerical length of your password. You can choose from 8-128 characters."
  )
);
if (passLength >= 8 && passLength <= 128) {
} else {
  prompt("Error, you need to select the CORRECT length of your password. ");
}

// ----------------------

var charType = prompt(
  "Please input the characters you wish to include. (lowercase, uppercase, numeric, and/or special characters) Example: Ph!4Y)snR9"
);
if (charType == "") {
  alert("You need to select the characters you wish to include. ");
} else {
}

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
