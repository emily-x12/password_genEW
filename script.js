// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
]


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  function generatePassword() {
    var password = prompt("Please choose a special character to include in your password")
    if (specialCharacters.index){
      password = specialCharacters.index
      confirm("You selected" + specialCharacters.index)
      
    } 
    var password = prompt("Please include a at least one lowercase letter")
    if (lowerCasedCharacters.index) {
    password = lowerCasedCharacters.index
    confirm("You selected" + lowerCasedCharacters.index)
    }
    var password = prompt("Please include a at least one uppercase letter")
    if (upperCasedCharacters.index) {
      password = upperCasedCharacters.index
      confirm("You Selected" + upperCasedCharacters.index)

    }
    var password = prompt("Please include a at least one numeric character")
    if (numericCharacters.index) {
      password = numericCharacters.index
      confirm("You Selected" + numericCharacters.index)
    }

    
  }
  var passwordText = document.querySelector("#password");



  passwordText.value = password;

}

  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



