// Assignment Code
var generateBtn = document.querySelector("#generate");
// Adding all normal characters
var characters = "abcdefghijklmnopqrstuvwxyz1234567890";
// Adding all special characters
var specialCharacters = "~`!@#$%^&*()_+-={}|[]:<>?,./";
// Converting all characters to uppercase and using it seperately
var upperCharacters = characters.toUpperCase();
// Combining all characters including upper case and special characters
var allCharacters = characters + specialCharacters + upperCharacters;

var generatePassword = function(){
  var specChar = window.confirm("Would you like to include special characters? Click cancel for no.");
  var caseChar = window.confirm("Would you like your password to be case sensitive? Click cancel for no.");
  var numChar  = window.prompt("How many characters would you like to use? (128 max)");

// This conditional statement confines numChar to 8 - 128 and generates a random
// number between 8 - 128 if no imput is entered

  if (!numChar){
    var numChar = Math.floor(Math.random() * (128 - 8) + 8);
  } else if (numChar < 8){
    var numChar = 8;
  } else if (numChar > 128){
    var numChar = 128;
  }

// This function generates a string of random characters the length of numChar

  function genChar(numChar){
    var result = '';
    for ( var i=0; i<numChar; i++ ){

// The conditional statement uses the information gathered from the prompts
// to select from the available characters    

    if (!specChar && !caseChar){        
        result += characters.charAt(Math.floor(Math.random() * 
        characters.length));          
    }

    else if (specChar && !caseChar){          
        result += (characters+specialCharacters).charAt(Math.floor(Math.random() * 
        (characters+specialCharacters).length));           
    }

    else if (!specChar && caseChar){          
        result += (characters+upperCharacters).charAt(Math.floor(Math.random() * 
        (characters+upperCharacters).length));           
    }

    else {          
        result += allCharacters.charAt(Math.floor(Math.random() * 
        allCharacters.length));           
    }
    }
    return result;
  };

  return genChar(numChar);
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
