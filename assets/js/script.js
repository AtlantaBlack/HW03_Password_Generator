// Assignment Code
var generateBtn = document.querySelector("#generate");

// set the variables globally so they can be used by the functions following 

// group the four needed strings together under an object named 'passOptions'
const passOptions = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    num: "0123456789",
    special: "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"
}

// set beginning empty values for userPass and passCharSet
// userPass: string to add passOption values to
// passCharSet: array to generate the password from
let userPass = "";
let passCharSet = [];

// add some default clear functions for userPass and passCharSet
function clearPassInputs() {
    userPass = "";
    passCharSet = [];
}

// code for generating the password starts here
function generatePassword() {

    // first clear the values in case userPass and passCharSet already contain something
    if (userPass || passCharSet) {
        clearPassInputs();
    }

    // ask user to define the password length
    let userInput = prompt("How many characters long?\n(Enter a number between 8 and 128)");
        // exit out if user presses cancel
        if (userInput === null) {
            return;
        }

    // if user input is empty, not a number, under 8, or over 128, send up an alert to redo
    //NB: make sure to add return before calling generatePassword function, else the password generator continues and also incorrectly generates pass at the end
    let passLength = parseInt(userInput);
        if (!userInput || isNaN(userInput) || passLength < 8 || passLength > 128) {
            alert("Please choose a number between 8 and 128.");
            return generatePassword();
        }

    // function to return a random character from the value of the corresponding object key
    function getRandomChar(fromString) {
        return fromString[Math.floor(Math.random() * fromString.length)];
    }

    // ask user for included password options (lower, upper, num, special chars)
    // If YES to any q, add corresponding object string to userPass variable. 
    // ALSO, add one random character from that string to the passCharSet array (for shuffling later). This is to ensure final pass contains at least one of each selected char type
    let getLowerCase = window.confirm("Password to contain any lowercase characters?");
        if (getLowerCase) {
            userPass += passOptions.lowercase;
            passCharSet.push(getRandomChar(passOptions.lowercase));
        } 

    let getUpperCase = window.confirm("Password to contain any UPPERCASE characters?")
        if (getUpperCase) {
            userPass += passOptions.uppercase;
            passCharSet.push(getRandomChar(passOptions.uppercase));
        }

    let getNumerals = window.confirm("Password to contain any numeric characters? (0-9)")
        if (getNumerals) {
            userPass += passOptions.num;
            passCharSet.push(getRandomChar(passOptions.num));
        }

    let getSpecials = window.confirm("Password to contain any special characters? (eg. ? ! @ $)")
        if (getSpecials) {
            userPass += passOptions.special;
            passCharSet.push(getRandomChar(passOptions.special));
        }

    // if user hasn't selected any character types with which to populate their password, display an alert so they know what they did wrong
    if (!passCharSet.length) {
        alert("Uh oh, something's gone awry!\n\n" + "Please choose at least one (1) character type to include in your password.");
        return generatePassword();
    } 
    
    // while the length of passCharSet array is less than user-requested password length, pull random values from the userPass string (beefed up with all specified pass options) until passLength number is satisfied
    while (passCharSet.length < passLength) {
        passCharSet.push(getRandomChar(userPass));
    }

    // BELOW: Fisher-Yates shuffle algorithm
    // example: user chooses 43 character password:

    // i = 43 -1 (42 is the last character's index number in the array of length 43);
    // if 'i' is over 0 (ie 42 > 0), then
    // 'i' minus 1 each time <----- go as a loop
    // set variable 'swapIndex' = randomise X 43 (array length)
    // set a variable named 'temporary' to be the same as an index of passCharSet

    // let the passCharSet index be overridden by the randomised passCharSet index
    // set the randomised passCharSet index to match and override the temporary variable
    // since temp = passCharSet[i], the randomised passCharSet index is now the new [i]
    // continue until there are no old 'i's left
    for (let i = passCharSet.length - 1; i > 0; i--) {
        const swapIndex = Math.floor(Math.random() * (i + 1));
        const temp = passCharSet[i];

        passCharSet[i] = passCharSet[swapIndex];
        passCharSet[swapIndex] = temp;
    };

    //when for loop is completed, password is generated. Display an alert for the user
    alert("Your password has been successfully generated!\n\n" + passCharSet.join("") + "\n\nIt will be displayed in the text area once this alert box is closed.");

    // this makes the password (joined without spaces) show up in the text area
    return passCharSet.join("");  
}


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    // if the user exits out of the password generator then some text will be displayed in the text area
    if (!password) {
        passwordText.value = "No password was generated";
    };

} 


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
