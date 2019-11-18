const numericChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

const specialChar = ["!", "@", "#", "$", "%", "^", "&", "*"
];

const lwChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];
const upChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

let arrayToUse = [];


//This function is to prompt user for password options.
function getPasswordChoices() {

    const length = parseInt(prompt("How many characters would you like in your password?")
    );
    //Minimum character length for password
    if (length < 8) {
        alert("Password should be at least 8 characters");
    }
    //Maximum character length for password
    if (length > 128) {
        alert("Password length must be less than 129 characters");
    }
    //if Not a Number is true, user must provide correct length for password
    if (isNaN(length) == true) {
        alert("You should provide correct length for password");
    }
    //Confirming that the password includes one of each characters required
    const hasSpecialChar = confirm("Click ok to confirm incuding special characters");
    console.log("hasSpecialCharacter: " + hasSpecialChar);
    const hasNumericChar = confirm(" Click ok to confirm incuding numeric characters");
    console.log("hasNumericChar: " + hasNumericChar);
    const hasLwChar = confirm(" Click ok to confirm incuding lower case characters");
    console.log("hasLwChar: " + hasLwChar);
    const hasUpChar = confirm(" Click ok to confirm incuding upper case characters");
    console.log("hasUpChar: " + hasUpChar);

    //if each value is false, alert must prompt user to select at least one character type
    if (hasSpecialChar === false && hasNumericChar === false && hasLwChar === false && hasUpChar === false) {
        alert("You must select at least one character type");
    }
    if (hasSpecialChar){
        arrayToUse = arrayToUse.concat(specialChar);
        console.log(specialChar);
        console.log(arrayToUse);
    }
    if (hasNumericChar){
        arrayToUse = arrayToUse.concat(numericChar);
        console.log(numericChar);
        console.log(arrayToUse);
    }
    if (hasLwChar){
        arrayToUse = arrayToUse.concat(lwChar)
        console.log(lwChar);
        console.log(arrayToUse);
    }
    if (hasUpChar){
        arrayToUse = arrayToUse.concat(upChar)
        console.log(upChar);
        console.log(arrayToUse);
    }

    //value of each userOption
    const userOptions = {
        length: length,
        hasLwChar: hasLwChar,
        hasUpChar: hasUpChar,
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
            possibleChar = possibleChar.concat(specialChar);
            guaranteedChar.push(concat(specialChar));
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