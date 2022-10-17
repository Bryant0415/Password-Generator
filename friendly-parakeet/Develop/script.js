
// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max){
  if(!max) {
    max = min;
    min = 0;
  }

  var rand = Math.random();
  return Math.floor(min * (1 - rand) + rand * max);
}

function getRandomItem(list) {
  return list[randomInt(0, list.length - 1)];
}


//Function created to prompt password length
function generatePassword() {
  var userInput = window.prompt("Please enter a password length between 8 and 128 characters");

  if(isNaN(userInput) || userInput > 128 || userInput < 8){
    window.alert("That is not a valid entry. The password length must be a number between 8 and 128");
    return;
  } else {
    window.alert ("Your password will have " + userInput +" characters");
  }

  var wantsNumbers = window.confirm("Would you like to include numbers?");
  var wantsSymbols = window.confirm("Would you like to include special characters?");
  var wantsLowercase = window.confirm("Would you like to include lowercase letters?");
  var wantsUppercase = window.confirm("Would you like to include uppercase letters?");

  var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialChar = ["!", "%", "@", "#", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
  var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var optionsCart = [];

  if(wantsNumbers === true){
    optionsCart.push(number);
  }
  if(wantsSymbols=== true){
    optionsCart.push(specialChar);
  }
  if(wantsLowercase === true){
    optionsCart.push(alphaLower);
  }
  if(wantsUppercase === true){
    optionsCart.push(alphaUpper);
  }

  if(optionsCart.length === 0) {
    optionsCart.push(specialChar);
  }

    var generatedPassword = "";

    for (var i = 0; i < userInput; i++){
      var randomList = getRandomItem(optionsCart);
      var randomChar = getRandomItem(randomList);
      generatedPassword += randomChar;
    }
    return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);