// Array of special characters to be included in password
const specialCharacters = [
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
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
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
const upperCasedCharacters = [
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
];

// Function to prompt user for password options
function getPasswordOptions() { 
var passwordLength = parseInt(prompt('Please enter the length of your password (between 8 and 128 characters'));

//input validation
if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert ("Please enter a valid password length between 8 and 128 characters");
    return null;
}

//prompt to confirm character types

var includeLowercase = confirm("Include lowercase characters?");
var includeUppercase = confirm("Include uppercase characters?");
var includeNumbers = confirm("Include numeric characters?");
var includeSpecial = confirm("Include special characters?");

if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecial) {
  alert('Please select at least one character type to generate your password');
  return null;  
  }

  return {
    length: passwordLength, 
    includeLowercase: includeLowercase, 
    includeUppercase: includeUppercase,
    includeNumbers: includeNumbers,
    includeSpecial: includeSpecial
  };
}

// Function for getting a random element from an array
function getRandom(arr) { 
  var getIndex = [Math.floor(Math.random() * arr.length)];
  return arr[getIndex];
}

// Function to generate password with user input
function generatePassword(options) {
let charactersInput = [];
  if (options.includeLowercase) {
  charactersInput = charactersInput.concat(lowerCasedCharacters);
  }
  if (options.includeUppercase) {
  charactersInput = charactersInput.concat(upperCasedCharacters);
  }
  if (options.includeNumbers) {
  charactersInput = charactersInput.concat(includeNumbers);
  }
  if (options.includeSpecial) {
  charactersInput = charactersInput.concat(includeSpecial);
  }
  if (charactersInput.length === 0) {
    alert('Please select at least one character type to generate your password');
    return null;
  }

  let password = '';
  for (let i =0; i < options.length; i++) {
    password +- getRandom(charactersInput);
  }

  return password;
}


// Write password to the #password input
function writePassword() {
  var password = getPasswordOptions();

  if (options) {
  var password = generatePassword(options);
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
  }
}

// Get references to the #generate element
const generateBtn = document.querySelector('#generate');

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

writePassword();