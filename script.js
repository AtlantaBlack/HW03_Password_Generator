// Assignment Code
var generateBtn = document.querySelector("#generate");


// set the four arrays needed
const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const uppercase = lowercase.map(function (e) {
    return e.toUpperCase();
});
const numerals = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specialChars = [']', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '?'];


// code for generating the password starts here
function generatePassword() {
        
    // create the password Length
    var userInput = prompt("How many characters long?\n(Enter a number between 8 and 128)");
        // exit out if user presses cancel
        if (userInput === null) {
            return;
        };

        // if user input is empty, not a number, under 8, or over 128, send up an alert to redo
    var passLength = parseInt(userInput);
        if (!userInput || isNaN(userInput) || passLength < 8 || passLength > 128) {
            alert("Please choose a number between 8 and 128.");
            generatePassword();
        };

    var userLCase = confirm("Do you want to use lowercase letters?");
        alert(userLCase);


};


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
