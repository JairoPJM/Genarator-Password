
// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var uppercaseList=["A", "B", "C", "D","E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var LowercaseList = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var numbersList = ["0","1","2","3","4","5","6","7","8","9"]
var SymbolsList=["!","@","#","$","%","^","&","*","(",")"]
var userPassword=[]


function start(){
var startQuestion=parseInt(window.prompt("choose a number between 8-128 for your password"))
if (isNaN(startQuestion)){window.alert("this is not a number, try again")}



var numberUsers=window.confirm("Do you want numbers in your password?")
var symbolsUsers=window.confirm("Do you want special characters in your password?")
var upperUsers=window.confirm("Do you want Uppercase letters in your password?")
var lowerUsers=window.confirm("Do you want lowercase letters in your password?")
}















// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
start();