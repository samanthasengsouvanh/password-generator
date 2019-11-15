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
      //This function is to prompt user for password options.
      function getPasswordChoices(){
          
          const length = parseInt(prompt("How many characters would you like in your password?"));
            //Minimum character length for password
          if(length < 8){
              alert("Password should be at least 8 characters");
              return;
          } 
          if(length > 15){
              alert("Password length must be less than 16 characters");
          }
          if(isNaN(length) == true){
              alert("You should provide length for password");
          }
          const hasSpecialChar = confirm("Click ok to confirm incuding special characters");
          console.log("hasSpecialCharacter: "+hasSpecialChar);
          const hasNumericChar = confirm(" Click ok to confirm incuding numeric characters");
          const hasLowerCaseChar = confirm(" Click ok to confirm incuding lower case characters");
          const hasUpperCaseChar = confirm(" Click ok to confirm incuding upper case characters");
          if(hasSpecialChar === false && hasNumericChar === false && hasLowerCaseChar === false && hasUpperCaseChar ===false){
              alert("You must select at least one character type");
          }
          var userOptions = {
              length: length,
              hasLowerCaseChar: hasLowerCaseChar,
              hasUpperCaseChar: hasUpperCaseChar,
              hasNumericChar: hasNumericChar,
              hasSpecialChar: hasSpecialChar,
          }
          return userOptions;
      }
      function getRandom(arrayToUse){
          const indexValue = Math.floor(Math.random * arrayToUse.length);
          const randomChar = arrayToUse[indexValue];
          return randomChar;
      }

      function generatePassword(){
          const options = getPasswordChoices();
          console.log(options);
          //this holds the generated password
          const password = []
          // array to store types of characters to include in password
          const possibleChar = [];
          const guaranteedCharr = [];

          if(options.hasSpecialChar){
              possibleChar = possibleChar.concat(specialChar);
              guaranteedChar.push(getRandom(specialChar));
          }
          for(const i=0; i<options.length; i++){
              const possibleChar = getRandom(possibleChar);
              password.push(possibleChar);
          }
          //Use at least one of the each guaranteed character in the password
          for(const i=0; i<guaranteedChar.length; i++){
              password[i] = guaranteedChar[i];
          }
          return password.join("");
      }
      generatePassword();