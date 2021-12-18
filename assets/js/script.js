// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // resets results when generating new password
  var results = "";

  // Calls password length function and return valid length number
  var validLength = passwordLength();
  console.log(validLength);

  // ask for criteria
  var numeric = window.confirm("Would you like numeric characters?");
  var upperCase = window.confirm("Would you like uppercase characters?");
  var lowerCase = window.confirm("Would you like lowercase characters?");
  var special = window.confirm("Would you like special characters?");

  // generates random characters
  if (numeric) {
    results = results + generateNumber();
  }
  if (upperCase) {
    results = results + generateUpperCase();
  }
  if (lowerCase) {
    results = results + generateLowerCase();
  }
  if (special) {
    results = results + generateSpecial();
  }

  if (results === "") {
    window.alert("No Criteria Selected");
  }
  return results;

}

// Function to ask for password length
var passwordLength = function () {
  correctLength = false;

  //validates for a correct value 
  while (correctLength === false) {
    var askLength = window.prompt("How long would you like your password? enter a value from 8 to 128")

    if (askLength < 8) {
      window.alert("Password length is too short please select a number between 8 and 128.")
    }
    else if (askLength > 128) {
      window.alert("Password length is too long please select a number between 8 and 128.")
    }
    // test whether the prompt is a number
    else if (isNaN(askLength)) {
      window.alert("Please enter a valid number.")
    }
    else {
      correctLength = true;
    }
  }

  // console log to see value
  console.log(askLength);

  // return value back to passwordLength
  return askLength;

}

// generates random number from 0-9
function generateNumber() {
  var numberGenerated = Math.floor(Math.random() * 10);
  return numberGenerated;
}

// generates random uppercase characters
function generateUpperCase() {
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var charactersLength = characters.length;
  var characterGenerated = characters.charAt(Math.floor(Math.random() * charactersLength));

  return characterGenerated;

}
// generates random lowercase characters
function generateLowerCase() {
  var characters = "abcdefghijklmnopqrstuvwxyz";
  var charactersLength = characters.length;
  var characterGenerated = characters.charAt(Math.floor(Math.random() * charactersLength));

  return characterGenerated;
}
// generates random special character
function generateSpecial() {
  var characters = "!@#$%^&*()[]{}";
  var charactersLength = characters.length;
  var characterGenerated = characters.charAt(Math.floor(Math.random() * charactersLength));

  return characterGenerated;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

