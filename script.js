// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){

  // Prompts the user to write what they want the password to be 
  var userInput = window.prompt("How long do you want your password to be ?" + '\n' +"chose a number 8-128")

  var passwordLength = parseInt(userInput)

  if(isNaN(passwordLength)){
    window.alert("That is not a number")
    return
  }



  if(passwordLength<8||passwordLength>128){
    window.alert("That number is either too big or too small")
    return
  }
var userNumbers=window.confirm("Do you want numbers in your password?")
var userSymbols=window.confirm("Do you want special characters in your password?")
var userUpper=window.confirm("Do you want Uppercase letters in your password?")
var userLower=window.confirm("Do you want lowercase letters in your password?")



// function randomLowerCase(){
//   const numberList = ("abcdefghijklmnopqrstuvwxyz");
//   return numberList[Math.floor(Math.random()*numberList.length)];
// };
// function randomUpperCase(){
//   const numberList = ("ABCDEFGHIJKLMNOPQRSUVWXYZ");
//   return numberList[Math.floor(Math.random()*numberList.length)];
// };
// function randomSpecialSym(){
//   const numberList = (",!@#$%^&*()");
//   return numberList[Math.floor(Math.random()*numberList.length)];
// };
// function randomNumbers(){
//   const numberList = ("0123456789");
//   return numberList[Math.floor(Math.random()*numberList.length)];
// };
var upperList=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerList = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var numberList = ["0","1","2","3","4","5","6","7","8","9"]
var symbolList=["!","@","#","$","%","^","&","*","(",")"]
var optionsCart=[]


if (userUpper==true){
  optionsCart=optionsCart.concat(upperList);
}
if (userSymbols==true){
  optionsCart=optionsCart.concat(numberList);
}
if(userNumbers==true){
  optionsCart=optionsCart.concat(symbolList);
}
if (userLower==true){
  optionsCart=optionsCart.concat(lowerList);
}
if(optionsCart.length===0){
  optionsCart.push(window.alert("NO OPTIONS WERE CHOSEN"))
}

var generatedPassword = "";

while(userInput<optionsCart.length){
  var random = Math.floor(Math.random()*optionsCart.length);
  
}

  return generatedPassword;

}

  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

// getting random values function
