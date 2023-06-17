// Assignment Code

let generateBtn = document.querySelector("#generate");
console.log(generateBtn);

const pLc = "abcdefghijklmnopqrstuvwxyz";

const pUc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const pSpec = "#$%&()*+<=>?@";

const pNum = "0123456789";

let allChar = "";

// My work Section
function start() {
  console.log("Button Clicked");
  var fun = prompt("Would you like to generate a password? Type yes or no.");
  if (fun === "yes") {
  } else {
    alert("Try again");
    return start();
  }
  generatePassword();
}

function generatePassword() {
  var passLength = prompt(
    "Between 8 and 128 characters, how long would you like your password to be?"
  );
  if (passLength < 8 && passLength > 128 && isNaN(parseInt(passLength))) {
    alert("Please enter a number from 8 to 128.");
    generatePassword();
  } else {
    var lowerCase = window.confirm(
      "Would you like to use lower case characters?"
    );
    if (lowerCase) {
      allChar += pLc;
    }
    var upperCase = window.confirm(
      "Would you like to use upper case characters?"
    );
    if (upperCase) {
      allChar += pUc;
    }
    var specialCharacters = window.confirm(
      "Would you like to use special characters?"
    );
    if (pSpec) {
      allChar += pSpec;
    }
    var numbers = window.confirm("Would you like to use numbers?");
    if (pNum) {
      allChar += pNum;
    }

    if (
      lowerCase === false &&
      upperCase === false &&
      specialCharacters === false &&
      numbers === false
    ) {
      alert("Please select at least one character type.");
      start();
    }
  }
  var passWrd = "";
  for (var i = 0; i < passLength; i++) {
    passWrd += allChar.charAt(Math.floor(Math.random() * allChar.length));
  }
  return passWrd;
}

function writePassword() {
  start();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(generateBtn);
