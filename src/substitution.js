// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  let alphabetArray;
  let cipherArray;
  function substitution(input, alphabet, encode = true) {
    if (!alphabet) return false;
    if (alphabet.length !== 26) return false;
    const solutionArray = [];
    const duplicateCheckArray = [];
    const inputArray = input.toLowerCase().split("");

    if (encode) {
      alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
      cipherArray = alphabet.toLowerCase().split("");
    } else {
      alphabetArray = alphabet.toLowerCase().split("");
      cipherArray = "abcdefghijklmnopqrstuvwxyz".split("");
    }
    // your solution code here
    //forEach loop for duplicate check
    cipherArray.forEach((char) => {
      if (!duplicateCheckArray.includes(char)) duplicateCheckArray.push(char);
    });
    if (duplicateCheckArray.length !== alphabet.length) return false;

    inputArray.forEach((char) => {
      if (char === " ") solutionArray.push(char);
      if (alphabetArray.includes(char)) {
        const alphaIndex = alphabetArray.indexOf(char);
        solutionArray.push(cipherArray[alphaIndex]);
      }
    });
    //console.log(solutionArray.join(""));
    return solutionArray.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
