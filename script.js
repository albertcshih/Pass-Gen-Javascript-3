// Assignment code here
var alphaLow = "abcdefghijklmnopqrstuvwxyz";
var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numeric = "1234567890";
var symbols = "~!@#$%^&*()_+-=";
var lower;
var upper;
var numbers;
var special;


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  var password = "";
  // Prompt to ask to select password length between 8-128
  var length = prompt("How long would you like your password? Choose a number between 8 to 128");
  // Set specific criteria for passowrd length
  while (length < 8 || length > 128) {
    // Alert if criteria isnt met
    alert("Please enter a number between 8 and 128");
    length = prompt("How long would you like your password? Choose a number between 8 to 128");
  }
  // Confirmation per prompted criteria
  lower = confirm("Do you want Lower case letters?");
  upper = confirm("Do you want Upper case letters?");
  numbers = confirm("Do you want numbers?");
  special = confirm("Do you want speical characters?");

  var al;
  var au;
  var n;
  var s;
  


  while(password.length < length) {
    if (lower) {
      al = Math.floor(Math.random()*alphaLow.length);
      password += alphaLow.charAt(al);
    }
    if (upper) {
      au = Math.floor(Math.random()*alphaUpper.length);
      password += alphaUpper.charAt(au);
    }
    if (numbers) {
      n = Math.floor(Math.random()*numeric.length);
      password += numeric.charAt(n);
    }
    if (special) {
      s = Math.floor(Math.random()*symbols.length);
      password += symbols.charAt(s);
    }
  
  }
  return password;
}
    

 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
