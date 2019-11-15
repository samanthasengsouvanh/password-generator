const specialChar = [
    "@",
    "%",
    "+",
    "\\",
    "/",
    "'",
    "!",
    "#",
    "$",
    "^",
    "?",
    ":",
    ",",
    ")",
    "(",
    "}",
    "{",
    "]",
    "[",
    "~",
    "-",
    "_",
    "."
];
const numericChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const lowerCaseChar = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
];
const upperCaseChar = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
];
let arrayToUse = [];


//This function is to prompt user for password options.
function getPasswordChoices() {

    const length = parseInt(prompt("How many characters would you like in your password?"));
    //Minimum character length for password
    if (length < 8) {
        alert("Password should be at least 8 characters");
        return;
    }
    //Maximum character length for password
    if (length > 128) {
        alert("Password length must be less than 129 characters");
    }
    //if Not a Number methis is true, user must provide correct length for password
    if (isNaN(length) == true) {
        alert("You should provide correct length for password");
    }
    //Confirming that the password includes one of each characters required
    const hasSpecialChar = confirm("Click ok to confirm incuding special characters");
    console.log("hasSpecialCharacter: " + hasSpecialChar);
    const hasNumericChar = confirm(" Click ok to confirm incuding numeric characters");
    const hasLowerCaseChar = confirm(" Click ok to confirm incuding lower case characters");
    const hasUpperCaseChar = confirm(" Click ok to confirm incuding upper case characters");

    //if each value is false, alert must prompt user to select at least one character type
    if (hasSpecialChar === false && hasNumericChar === false && hasLowerCaseChar === false && hasUpperCaseChar === false) {
        alert("You must select at least one character type");
    }
    if (hasSpecialChar){
        arrayToUse = arrayToUse.concat(specialChar);
        console.log(specialChar);
        console.log(arrayToUse)
    }
    if (hasNumericChar){
        arrayToUse = arrayToUse.concat(numericChar);
        console.log(arrayToUse)
    }
    if (hasLowerCaseChar){
        arrayToUse = arrayToUse.concat(lowerCaseChar)
        console.log(arrayToUse)
    }
    if (hasUpperCaseChar){
        arrayToUse = arrayToUse.concat(upperCaseChar)
        console.log(arrayToUse)
    }
    //value of each userOption
    const userOptions = {
        length: length,
        hasLowerCaseChar: hasLowerCaseChar,
        hasUpperCaseChar: hasUpperCaseChar,
        hasNumericChar: hasNumericChar,
        hasSpecialChar: hasSpecialChar,
    }
    //function method to randomize from the provided arrays
        const indexValue = Math.floor(Math.random * arrayToUse.length);

    //function method to generate password from password values
    function generatePassword() {
        const options = userOptions;
        console.log(options);
        // return options;

        //this holds the generated password
        let password = [];
        // console.log(generatePassword);

        //array to store types of characters to include in password
        let possibleChar = [];
        let guaranteedChar = [];

        if (options.hasSpecialChar) {
            possibleChar = getRandom(specialChar);
            guaranteedChar.push(getRandom(specialChar));

        }
        for (let i = 0; i < options.length; i++) {
            possibleChar = getRandom(possibleChar);
            password.push(possibleChar);
        }
        //Use at least one of the each guaranteed character in the password
        for (let i = 0; i < guaranteedChar.length; i++) {
            password[i] = guaranteedChar[i];
            return password.join("");
        }
    }

    generatePassword();
}