// Assignment Code

generateBtn = document.querySelector("#generate");
console.log(generateBtn);

var pLc = "abcdefghijklmnopqrstuvwxyz";

var pUc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var pSpec = "#$%&()*+<=>?@";

var pNum = "0123456789";

// My work Section
function start() {
  console.log("Button Clicked");
  var fun = prompt("Would you like to generate a password? Type yes or no.");
  if (fun === "yes") {
  } else {
    alert("Try again");
    return start();
  }
}

function generatePassword() {
  var passChar = "";
  let passLength = Number(
    prompt(
      "Let's choose between 8 and 128 characters, how long would you like your password to be?"
    )
  );
  if (passLength < 8 || passLength > 128) {
    alert("Try again");
    return generatePassword();
  } else {
    var lowCase = window.confirm(
      "Would you like to use lower case characters?"
    );
    if (lowCase) {
      passChar += pLc;
    }
    var uppCase = window.confirm(
      "Would you like to use upper case characters?"
    );
    if (uppCase) {
      passChar += pUc;
    }
    var specCharacters = window.confirm(
      "Would you like to use special characters?"
    );
    if (pSpec) {
      passChar += pSpec;
    }
    var numbers = window.confirm("Would you like to use numbers?");
    if (pNum) {
      passChar += pNum;
    }

    if (
      lowCase === false &&
      uppCase === false &&
      specCharacters === false &&
      numbers === false
    ) {
      alert("Please choose a character type.");
      start();
    }
  }
  var passWrd = "";
  for (var i = 0; i < passLength; i++) {
    passWrd += passChar.charAt(Math.floor(Math.random() * passChar.length));
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
