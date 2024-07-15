// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

function power(a, b) {
  var result = a ** b;
  console.log(result);
}
power(3, 4);

// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.

var year = prompt("enter any year :");
switch (year) {
  case "2014":
    console.log("leap year ");
    break;
  case "2016":
    console.log("leap year ");
  case "2020":
    console.log("leap year ");
    break;
  default:
    "its not a leap year";
}



// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

var sides1 = Number(prompt("enter first side degree"));
var sides2 = Number(prompt("enter second side degree"));
var sides3 = Number(prompt("enter third side degree"));
function findingS(sides1, sides2, sides3) {
  var s = (sides1 + sides2 + sides3) / 2;
  return s;
}
var foundS = findingS(sides1, sides2, sides3);
// console.log(foundS)

function area(foundS) {
  var findingArea =
    foundS * (foundS - sides1) * (foundS - sides2) * (foundS - sides3);
  return findingArea;
}
var result = area(foundS);
console.log(result);
