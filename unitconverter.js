//Conversion from Kilometre to any measurement feet, inches, metres and miles.

function converter(kilometre) {
  let feet = kilometre * 3280.84;
  let inches = kilometre * 39370.1;
  let metres = kilometre * 1000;
  let miles = kilometre * 0.621371;

  let measurement = {
    feet: feet,
    inch: inches,
    metre: metres,
    mile: miles,
  };
  return measurement;
}
console.log(converter(1));

//Create an array of negative, positive, decimals, integers, and then find the sum of the arrays

let list = [1, 2, 3, 4, 5];

function array(list) {
  for (let i = 0; i < list.length; i++) {
    sum = sum + list[i];
  }
  return sum;
}

console.log(array);
