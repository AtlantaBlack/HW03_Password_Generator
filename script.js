// Assignment Code
var generateBtn = document.querySelector("#generate");


// set the four arrays needed
// const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// const upperCase = lowerCase.map(function (e) {
//     return e.toUpperCase();
// });
// const numerals = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// const specialChars = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '?'];


const passOptions = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    num: "0123456789",
    special: "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"
}

let userPass = "";
const passCharSet = [];
    

// code for generating the password starts here
function generatePassword() {

    // create the password Length
    var userInput = prompt("How many characters long?\n(Enter a number between 8 and 128)");
        // exit out if user presses cancel
        if (userInput === null) {
            return;
        }

    // if user input is empty, not a number, under 8, or over 128, send up an alert to redo
    var passLength = parseInt(userInput);
        if (!userInput || isNaN(userInput) || passLength < 8 || passLength > 128) {
            alert("Please choose a number between 8 and 128.");
        }

    // ask user if they want lowercase, uppercase, numeric or special characters

    // If yes, add corresponding object string to userPass variable. 

    // At the same time, add one random character from that string to the passCharSet array (for shuffling later). This is to make sure final password contains at least one of each selected character type
    let getLowerCase = window.confirm("Password to contain lowercase letters?");
        if (getLowerCase) {
            userPass += passOptions.lowercase;
            passCharSet.push(getRandomChar(passOptions.lowercase));
        } 

        console.log(userPass);
        console.log(passCharSet);

    let getUpperCase = window.confirm("Password to contain UPPERCASE letters?")
        if (getUpperCase) {
            userPass += passOptions.uppercase;
            passCharSet.push(getRandomChar(passOptions.uppercase));
        }

        console.log(userPass);
        console.log(passCharSet);

    let getNumerals = window.confirm("Password to contain numeric numbers? (0-9)")
        if (getNumerals) {
            userPass += passOptions.num;
            passCharSet.push(getRandomChar(passOptions.num));
        }

        console.log(userPass);
        console.log(passCharSet);

    let getSpecials = window.confirm("Password to contain special characters? (eg. ? ! @ $)")
        if (getSpecials) {
            userPass += passOptions.special;
            passCharSet.push(getRandomChar(passOptions.special));
        }

        console.log(userPass);
        console.log(passCharSet);

    if (!passCharSet.length >= 1) {
        alert("Uh oh, something's amiss!\n\nPlease choose at least one (1) character type to include in your password.");
    }
        

function getRandomChar(fromString){
    return fromString[Math.floor(Math.random() * fromString.length)];
    }

}

// console.log(stringGen(passLength));


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
} 


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);







// var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// var uppercase = lowercase.toUpperCase();
// var numerals = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// var specialChars = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '?'];
