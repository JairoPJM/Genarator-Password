// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
//gets a random number with .random

//is choosing the numbers
function randomInt(min,max){
if (!max) {
  max=min
  min=0
}
var rand = Math.random()
return Math.floor(min*(1-rand)+rand*max)
}

function getRandomItem(list){
  return list[randomInt(0,list.length)]
}

function generatePassword(){

// Prompts the user to write what they want the password to be 
var userInput = window.prompt("How long do you want your password to be ?" + '\n' +"chose a number 8-128")
//User is choosing a number if it doesn't meet the criteria it returns and ends prompt with "that is not a number"
var passwordLength = parseInt(userInput)

if(isNaN(passwordLength)) {
  window.alert("that is not a number!")
  return
}

// this prompts the user to give a number be
if(passwordLength<8 || passwordLength>128){
  window.alert("Password length must be 8 and 128 numbers")
  return
}


//The prompts asking what variables you want in your password
var userWantsNumbers = window.confirm("Would you like to include numbers in your password")
var userWantsSymbols = window.confirm("Would you like to include special characters in your password")
var userWantsLowerCase = window.confirm("Would you like to include lowercase in your password")
var userWantsUpperCase = window.confirm("Would you like to include uppercase in your password")
// All the variables in an array

var upperList=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerList = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var numberList = ["0","1","2","3","4","5","6","7","8","9"]
var symbolList=["!","@","#","$","%","^","&","*","(",")"]
var optionsCart=[]


if (userWantsUpperCase==true){
  optionsCart.push(upperList)
}
if (userWantsSymbols==true){
  optionsCart.push(symbolList)
}
if(userWantsNumbers==true){
  optionsCart.push(numberList)
}
if (userWantsLowerCase==true){
  optionsCart.push(lowerList)
}
if(optionsCart.length===0){
  optionsCart.push(window.alert("NO OPTIONS WERE CHOSEN"))
}

var generatedPassword = ""

for (var i =0;i<passwordLength;i++){
  var randomList=getRandomItem(optionsCart)
  var randomChar= getRandomItem(randomList)
  generatedPassword +=randomChar

  }
  return generatedPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

