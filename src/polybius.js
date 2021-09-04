// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const encodeObject = {
    a: 11,
    b: 21,
    c: 31,
    d: 41,
    e: 51,
    f: 12,
    g: 22,
    h: 32,
    i: 42,
    j: 42,
    k: 52,
    l: 13,
    m: 23,
    n: 33,
    o: 43,
    p: 53,
    q: 14,
    r: 24,
    s: 34,
    t: 44,
    u: 54,
    v: 15,
    w: 25,
    x: 35,
    y: 45,
    z: 55,
  };

  const decodeObject = Object.fromEntries(
    Object.entries(encodeObject).map((value) => value.reverse())
  );
  //fixing 42 to i/j
  decodeObject[42] = "i/j";
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  function polybius(input, encode = true) {
    // your solution code here
    //encoding
    const finalArray = [];
    const arrayInput = input.toLowerCase().split("");
    const evenCheckArray = [];
    if (encode) {
      arrayInput.forEach((letter) => {
        if (letter === " ") finalArray.push(letter);
        if (alphabet.includes(letter)) {
          finalArray.push(encodeObject[letter]);
        }
      });
    }
    //decoding
    else {
      arrayInput.forEach((letter) => {
        //if (letter === " ") finalArray.push(letter);
        //check if input is even in length
        if (letter !== " ") evenCheckArray.push(letter);
      });
      let previousNumber;
      let equation = 0;
      input = input.toLowerCase();
      [...input].forEach((num) => {
        if (num === " ") finalArray.push(num);

        if (equation === 1 && previousNumber !== " ") {
          const newIndex = `${previousNumber}${num}`;
          finalArray.push(decodeObject[newIndex]);
          equation = 0;
        } else {
          equation = 1;
        }
        // console.log(
        //   `newIndex=${previousNumber}${num}    equation= ${equation}`
        // );
        previousNumber = num;
      });
    }
    if (evenCheckArray.length % 2 === 1) return false;

    //console.log(finalArray.join(""));
    return finalArray.join("");
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
