const lwChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const upChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const numericChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const specChar = ["!", "@", "#", "$", "%", "^", "&", "*"];

let arrayToUse = [];
let password = document.getElementById("Password");

function getPasswordChoices() {
    let p=0;
    let finalPassword = [];

    console.log("button");

    //const lwChar = document.getElementById(lwChar);
    //console.log(lwChar)
    if (document.getElementById("lwChar").checked){ {
        arrayToUse = arrayToUse.concat(lwChar);
        console.log(arrayToUse);

        let lowerChar = lwChar[Math.floor(Math.random() * lwChar.length)];

        finalPassword.push(lowerChar);

        p+=1
    }
    //const upChar = document.getElementById(upChar);
    //console.log(upChar)
    if (document.getElementById("upChar").checked) {
        arrayToUse = arrayToUse.concat(upChar)
        console.log(arrayToUse)

        let upperChar = upChar[Math.floor(Math.random() * upChar.length)];

        finalPassword.push(upperChar);

        p+=1
    }
    //const numericChar = document.getElementById(numericChar);
    //console.log(numericChar)
    if (document.getElementById("numericChar").checked) {
        arrayToUse = arrayToUse.concat(numericChar)

        let numChar = numericChar[Math.floor(Math.random() * numericChar.length)];

        finalPassword.push(numChar);

        p+=1
    }
    //const specChar = document.getElementById(specChar);
    //console.log(specChar)
    if (document.getElementById("specChar").checked) {
        arrayToUse = arrayToUse.concat(specChar)

        let specialChar = specChar[Math.floor(Math.random() * specChar.length)];

        finalPassword.push(specialChar);

        p+=1
    }
    const length = document.getElementById("length").value
    //Minimum character length for password
    if (length < 8) {
        alert("Password length must be greater than 8 characters");
    }
    //Maximum character length for password
    if (length > 128) {
        alert("Password length must be less than 129 characters");
    }
    //if Not a Number is true, user must provide correct length for password
    if (isNaN(length) == true) {
        alert("You should provide correct length for password");
    }

    for (let i = 0; i + p < length; i++) {

        //select random char from password array

        let passwordChar = arrayToUse[Math.floor(Math.random() * arrayToUse.length)];

        console.log(passwordChar);

        //push random char into final password

        finalPassword.push(passwordChar);
    }
    console.log(finalPassword);
    password.innerHTML = finalPassword.join("");


}
}
function copyPassword() {
const copiedPassword = document.getElementById("Password");
copiedPassword.select();
copiedPassword.setSelectionRange(0, 99999)
document.execCommand("copy");
}