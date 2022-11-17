// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){

  // Prompts the user to write what they want the password to be 
  var userInput = window.prompt("How long do you want your password to be ?" + '\n' +"chose a number 8-128")
  //User is choosing a number if it doesn't meet the criteria it returns and ends prompt with "that is not a number"
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



function randomLowerCase(){
  const numberList = ("abcdefghijklmnopqrstuvwxyz");
  return numberList[Math.floor(Math.random()*numberList.length)];
};
function randomUpperCase(){
  const numberList = ("ABCDEFGHIJKLMNOPQRSUVWXYZ");
  return numberList[Math.floor(Math.random()*numberList.length)];
};
function randomSpecialSym(){
  const numberList = (",!@#$%^&*()");
  return numberList[Math.floor(Math.random()*numberList.length)];
};
function randomNumbers(){
  const numberList = ("0123456789");
  return numberList[Math.floor(Math.random()*numberList.length)];
};

var optionsCart=[]



if(userNumbers===true){
  optionsCart.push(randomNumbers())
}
if(userSymbols===true){
  optionsCart.push(randomSpecialSym())
}
if(userUpper===true){
  optionsCart.push(randomUpperCase())
}
if(userLower===true){
  optionsCart.push(randomLowerCase())
} 


for (var i=0;i<passwordLength;i++){
   getValue()+optionsCart[i]++;
}




var generatedPassword = ""
  
  
    return generatedPassword
  }


  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);




// getting random values function
