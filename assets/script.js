function generatePassword() {
  const passwordLength = parseInt(prompt("Enter a number between 8 and 128 to set password length."));
  const isValidLength = passwordLength >= 8 && passwordLength <= 128 && !Number.isNaN(passwordLength);

  if (!isValidLength) {
    alert("Password length must be between 8 and 128 characters.");
    return null;
  }

  const hasUppercase = confirm("Select OK to include uppercase characters.");
  const hasLowercase = confirm("Select OK to include lowercase characters.");
  const hasNumber = confirm("Select OK to include numerical characters.");
  const hasSpecialCharacter = confirm("Select OK to include special characters.");
  
  const noCharacterTypesSelected = !hasUppercase && !hasLowercase && !hasNumber && !hasSpecialCharacter;

  if (noCharacterTypesSelected) {
    alert("Password must include uppercase, lowercase, numerical, or special characters.");
    return null;
  }

  const characterSets = [
    hasUppercase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : '',
    hasLowercase ? "abcdefghijklmnopqrstuvwxyz" : '',
    hasNumber ? "0123456789" : '',
    hasSpecialCharacter ? "!@#$%^&*()" : ''
  ];

  const chosenCharacters = characterSets.join('');
  let password = '';

  for (let i = 0; i < passwordLength; i++) {
    password += chosenCharacters.charAt(Math.floor(Math.random() * chosenCharacters.length));
  }

  return password;
}

const generateBtn = document.querySelector("#generate");

function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);