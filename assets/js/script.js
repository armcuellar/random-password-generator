// Assignment Code
var generateBtn = document.querySelector("#generate");

// list of possible characters to include in password
var generateNumber = "0123456789";
var generateUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var generateLowerCase = "abcdefghijklmnopqrstuvwxyz";
var generateSpecial = "!@#$%^&*()[]{}";


function generatePassword() {
  // resets results when generating new password
  var charactersIncluded = "";
  var results = "";

  // Calls password length function and return valid length number
  var validLength = passwordLength();

  // ask for criteria
  var numeric = window.confirm("Would you like to include numeric characters?");
  var upperCase = window.confirm("Would you like to include uppercase characters?");
  var lowerCase = window.confirm("Would you like to include lowercase characters?");
  var special = window.confirm("Would you like to include special characters?");


  // if numeric is true then add numbers to password
  if (numeric) {
    charactersIncluded = charactersIncluded + generateNumber;
  }
  // if upperCase is true then add uppercase characters to password
  if (upperCase) {
    charactersIncluded = charactersIncluded + generateUpperCase;
  }
  // if lowerCase is true then add lowercase characters to password
  if (lowerCase) {
    charactersIncluded = charactersIncluded + generateLowerCase;
  }
  // if special is true add special characers to password
  if (special) {
    charactersIncluded = charactersIncluded + generateSpecial;
  }

  // creates a loop to add one random character from the character list at a time until desired length
  for (i = 0; i < validLength; i++) {
    var charactersLength = charactersIncluded.length;
    var characterGenerated = charactersIncluded.charAt(Math.floor(Math.random() * charactersLength));

    // if no criteria selected break the loop 
    if (charactersIncluded === "") {
      window.alert("No Criteria Selected");
      window.alert("Please select at least one criteria");
      break;
    }
    // generates a random characters and adds it resulted password
    else {
      results = results + characterGenerated
    }
  }

  // displays alert of password created
  window.alert("The password you created is: " + results)

  // returns the complete password generated
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

  // return value back to passwordLength
  return askLength;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);