// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"
function maxChar(str) {
  let charObj = {};
  let max = 0;
  let maxCharObj = {
    element: null,
    count: 0
  }
  for (let i = 0; i < str.length; i++) {
    if (charObj[str[i]] === undefined) {
      charObj[str[i]] = 1;
    }
    else {
      charObj[str[i]]++;
    }
  }
  for (let key in charObj) {
    if (maxCharObj.count < charObj.key)
      maxCharObj.count = charObj.key;
  }
  return maxCharObj.count;
}
console.log(maxChar("abcccccccd"));
// console.log(maxChar('apple 1231111'));


