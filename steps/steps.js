// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.
// --- Examples
//   steps(2)
//       '#'
//       '##'
//   steps(3)
//       '#'
//       '##'
//       '###'
//   steps(4)
//       '#'
//       '##'
//       '###'
//       '####'

function steps(n) {
  for (let i = 1; i <= n; i++) {
    let x = '';
    for (let j = 1; j <= i; j++) {
      x += '#';
    }
    console.log(x);

  }
}
steps(7)


module.exports = steps;