/*
* Author: Nolan Hunt <noahunt@ucsc.edu>
* Created: May 6th
* License: Public Domain
*/

let numbersArray = [5, 12, 8, 9.999, -10];

function doMultiplication(x) {
  let result = x * 2;
  return result;
}

//test function//
console.log(doMultiplication(5));
console.log(doMultiplication(12));

let mapResults1 = numbersArray.map(doMultiplication);
console.log("Results 1:", mapResults1);

let mapResults2 = numbersArray.map(function(x) {
  let result = x * x;
  return result;
});
console.log("Results 2:", mapResults2);