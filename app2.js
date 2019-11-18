const lwChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];
const upChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

const numericChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

const specChar = ["!", "@", "#", "$", "%", "^", "&", "*"
];

let arrayToUse = [];

function getPasswordChoices(){
    const length = parseInt(prompt("How many characters would you like in your password?"))
    //Minimum character length for password
    if (length < 8) {
    }
    //Maximum character length for password
    if (length > 128) {
        alert("Password length must be less than 129 characters");
    }
    //if Not a Number is true, user must provide correct length for password
    if (isNaN(length) == true) {
        alert("You should provide correct length for password");
    }
    const lwChar = document.getElementById(lwChar);
    console.log(lwChar)
    if (lwChar){
        arrayToUse = arrayToUse.concat(lwChar)
        console.log(arrayToUse)
    }
    const upChar = document.getElementById(upChar);
    console.log(upChar)
    if (upChar){
        arrayToUse = arrayToUse.concat(upChar)
        console.log(arrayToUse)
    }
    const numericChar = document.getElementById(numericChar);
    console.log(numericChar)
    if (numericChar){
        arrayToUse = arrayToUse.concat(numericChar)
    }
    const specChar = document.getElementById(specChar);
    console.log(specChar)
    if (specChar){
        arrayToUse = arrayToUse.concat(specChar)
    }
}
