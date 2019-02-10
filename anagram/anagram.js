// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(str1, str2) {
  return [...str1.trim()].length === [...str2.trim()].length && [...str1.trim()].sort().every((value, index) => value === [...str2.trim()].sort[index])

}



console.log(anagrams('rail safety', 'fairy tales'));
console.log(anagrams('RAIL! SAFETY!', 'fairy tales'));
console.log(anagrams('hello   ', '  hello'));



module.exports = anagrams;
let a = [5, 8, 9];
let b = [5, 8, 9];
console.log(a === b);
