// Assignment code here
function generatePassword() {
  var passwordLength = parseInt(prompt("Select a number between 8 and 128 to set password length."))
  if (passwordLength < 8 || passwordLength > 128 || Number.isNaN(passwordLength)) {
    alert("Password length must be between 8 and 128 characters.")
    return null;
  }

  var hasUppercase = confirm("Select OK to include uppercase characters.")
  var hasLowercase = confirm("Select OK to include lowercase characters.")
  var hasNumber = confirm("Select OK to include numerical characters.")
  var hasSpecialCharacter = confirm("Select OK to include special characters.")

  if (!hasUppercase && !hasLowercase && !hasNumber && !hasSpecialCharacter ) {
    alert("Password must include uppercase, lowercase, numerical, or special characters.")
    return null;
  }

  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var number = "0123456789";
  var specialCharacter = "!@#$%^&*()";
  var chosenCharacters = "";
  var password = "";

  if (hasUppercase) {
    chosenCharacters += uppercase
  }

  if (hasLowercase) {
    chosenCharacters += lowercase
  }

  if (hasNumber) {
    chosenCharacters += number
  }

  if (hasSpecialCharacter) {
    chosenCharacters += specialCharacter
  }

  for(var i = 0; i < passwordLength; i++) {
    password += chosenCharacters.charAt(Math.floor (Math.random() * chosenCharacters.length))
  }

return password;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
