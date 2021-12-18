// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var results = "";
  var numeric = window.confirm("Would you like numeric characters?");
  var upperCase = window.confirm("Would you like uppercase characters?");
  var lowerCase = window.confirm("Would you like lowercase characters?");
  var special = window.confirm("Would you like special characters?");


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

// returns random number from 0-9
function generateNumber() {
  var numberGenerated = Math.floor(Math.random() * 10);
  return numberGenerated;
}

function generateUpperCase() {
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var charactersLength = characters.length;
  var characterGenerated = characters.charAt(Math.floor(Math.random() * charactersLength));

  return characterGenerated;

}
function generateLowerCase() {
  var characters = "abcdefghijklmnopqrstuvwxyz";
  var charactersLength = characters.length;
  var characterGenerated = characters.charAt(Math.floor(Math.random() * charactersLength));

  return characterGenerated;
}
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

