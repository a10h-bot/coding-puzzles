// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false
//method 1

function isPalindrome(str) {
  return [...str].reverse().join('') === str;
}
console.log(isPalindrome('aba'));


module.exports = isPalindrome;