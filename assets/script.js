// Assignment code here
function generatePassword() {
  var passwordLength = parseInt(prompt("Password length must be greater than 8 characters and less than 128 characters."))
  if (passwordLength < 8 || passwordLength > 128 || Number.isNaN(passwordLength)) {
    alert("Password length does meet criteria.")
    return null;
  }

  var hasUppercase = confirm("Include uppercase characters?")
  var hasLowercase = confirm("Include lowercase characters?")
  var hasNumber = confirm("Include number characters?")
  var hasSpecialCharacter = confirm("Includes special characters?")

  if (!hasUppercase && !hasLowercase && !hasNumber && !hasSpecialCharacter ) {
    alert("Please choose at least one uppercase, lowercase, number, or special character.")
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
