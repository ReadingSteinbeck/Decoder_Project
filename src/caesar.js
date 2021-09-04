// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    //If the shift value is not present, equal to 0, less than -25, or greater than 25, the function should return false.
    encode ? (shift = shift) : (shift = -shift);
    if (!shift || shift == 0 || shift < -25 || shift > 25) return false;

    // array of alphabet
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    //input split and to lowercase
    const arrayInput = input.toLowerCase().split("");
    //console.log(arrayInput);

    //attempting to shift input
    //loop through arrayInput
    const decodeArray = [];
    arrayInput.forEach((letter) => {
      // pushes spaces numbers and punctuations to array
      if (!alphabet.includes(letter)) decodeArray.push(letter);
      //pushes letters only to array
      //still need to work on rap arounds
      if (alphabet.includes(letter)) {
        const alphaIndex = alphabet.indexOf(letter);
        const badIndex = alphaIndex + shift;
        if (badIndex > 25) {
          const newIndex = badIndex - alphabet.length;
          decodeArray.push(alphabet[newIndex]);
        }
        if (badIndex < 0) {
          const newIndex = alphabet.length + badIndex;
          decodeArray.push(alphabet[newIndex]);
        }
        if (badIndex <= 25 && badIndex >= 0)
          decodeArray.push(alphabet[badIndex]);
      }
    });

    //console.log(decodeArray.join(""));
    return decodeArray.join("");
  }

  return {
    caesar,
  };
})();
module.exports = { caesar: caesarModule.caesar };

// caesarModule.caesar("zzzzyyy", 3);
// caesarModule.caesar("thinkful", 3); //'wklqnixo'
// caesarModule.caesar("thinkful", -3); //'qefkhcri'
// caesarModule.caesar("This is a secret message!", 8); //> 'bpqa qa i amkzmb umaaiom!'
// caesarModule.caesar("BPQA qa I amkzmb umaaiom!", 8, false);
