const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function wordToLetters(word) {
  let letter = "";
  let letters = [];
  for (let i = 0; i < word.length; i += 10) {
    letter = word.slice(i, i + 10);
    letters.push(letter);
  }
  return letters;
}

function binToMorze(str) {
  let morzeStr = "";
  let first;
  let second;
  let sum;
  for (let i = 0; i < str.length; i += 2) {
    first = str[i];
    second = str[i + 1];
    sum = first + second;
    if (sum === "10") morzeStr += ".";
    if (sum === "11") morzeStr += "-";
  }
  return morzeStr;
}

function decode(expr) {
  // write your solution here
  let letter = [];
  let letters = [];
  let morze;
  let outString = "";
  const words = expr.split("**********");
  words.forEach((word) => {
    letter = wordToLetters(word);
    letters.push(letter);
  });
  for (let i = 0; i < letters.length; i++) {
    letters[i].forEach((letter) => {
      morze = binToMorze(letter);
      outString += MORSE_TABLE[morze];
    });
    outString += " ";
  }

  return outString.trim();
}

module.exports = {
  decode,
};
