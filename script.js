
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// variables for the options, you take away from the array
var numbersQuestion;
var symbolsQuestion;
var upperQuestion;
var lowerQuestion;



function generatePassword(){


// first user inputs
var startQuestion=parseInt(window.prompt("choose a number between 8-128 for your password"))
if (isNaN(startQuestion)||(startQuestion<8||startQuestion>128)){window.alert("This does not meet the requirements"); return}



var numbersQuestion=window.confirm("do you want numbers in your password?")
var symbolsQuestion=window.confirm("do you want symbols in your password?")
var upperQuestion=window.confirm("do you want uppercase letters in your password?")
var lowerQuestion=window.confirm("do you want lowercase letters in your password?")
if(numbersQuestion+symbolsQuestion+upperQuestion+lowerQuestion==false){
  window.alert("You must choose one for your password, try again")
  return
};
var numbers = ["0","1","2","3","4","5","6","7","8","9"]
var symbols=["!","@","#","$","%","^","&","*","(",")"]
var upperCase=["A", "B", "C", "D","E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var userPassword=[]


if (numbersQuestion===true){
  userPassword=userPassword.concat(numbers)
}
if (symbolsQuestion===true){
  userPassword=userPassword.concat(symbols)
}
if (upperQuestion===true){
  userPassword=userPassword.concat(upperCase)
}
if (lowerQuestion===true){
  userPassword=userPassword.concat(lowerCase)
}

var newPassword=[]
for (var i=0;i<startQuestion;i++){
var random=userPassword[Math.floor(Math.random()*userPassword.length)]
newPassword+=random}
return newPassword;
}


// Add event listener to generate button

// Add event listener to generate button


generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}