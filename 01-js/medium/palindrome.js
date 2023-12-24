/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const cleanString = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let j = cleanString.length - 1;

  for (let i = 0; i < cleanString.length / 2; i++) {
    if (cleanString[i] !== cleanString[j]) {
      return false;
    }
    j--;
  }

  return true;
}

module.exports = isPalindrome;
