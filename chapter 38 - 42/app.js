// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

// function power(a, b) {
//   var result = a ** b;
//   console.log(result);
// }
// power(3, 4);

// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.

// var year = prompt("enter any year :");
// switch (year) {
//   case "2014":
//     console.log("leap year ");
//     break;
//   case "2016":
//     console.log("leap year ");
//   case "2020":
//     console.log("leap year ");
//     break;
//   default:
//     "its not a leap year";
// }

// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

// var sides1 = Number(prompt("enter first side degree"));
// var sides2 = Number(prompt("enter second side degree"));
// var sides3 = Number(prompt("enter third side degree"));
// function findingS(sides1, sides2, sides3) {
//   var s = (sides1 + sides2 + sides3) / 2;
//   return s;
// }
// var foundS = findingS(sides1, sides2, sides3);
// // console.log(foundS)

// function area(foundS) {
//   var findingArea =
//     foundS * (foundS - sides1) * (foundS - sides2) * (foundS - sides3);
//   return findingArea;
// }
// var result = area(foundS);
// console.log(result);

// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.

// var sub1 = Number(prompt("Enter marks of mathematics:"));
// var sub2 = Number(prompt("Enter marks of urdu:"));
// var sub3 = Number(prompt("Enter marks of scince:"));

// function main(a, b, c) {
//   var sum = a + b + c;
//   return sum;
// }
// var result = main(sub1, sub2, sub3);
// // console.log(result)

// //for average
// function average(result) {
//   var aver = result / 3;
//   return aver;
// }
// var a = average(result);
// // console.log(a)

// //for percentage
// function percentage (result){
//   var totalMarks= 300
// var per = (result/totalMarks)*100
// return per
// }
// var percent =Math.round( percentage(result))
// console.log("percentage: "+percent + "%")

// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.

// function noVowelStr(str) {
//   return str.replace(/[aeiouAEIOU]/g, "");
// }
// var userInput = prompt("enter string");
// var result = noVowelStr(userInput);
// console.log(result);

// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence
// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.

// function countSuccessiveVowels(sentence) {
//     // Define the vowels
//     var vowels = ["a", "e", "i", "o", "u"];

//     // Initialize a counter for occurrences
//     var count = 0;

//     // Convert sentence to lowercase to make the check case-insensitive
//     sentence = sentence.toLowerCase();

//     // Iterate through the sentence
//     for (var i = 0; i < sentence.length ; i++) {
//       var char1 = sentence[i];
//       var char2 = sentence[i + 1];

//       // Check if both characters are vowels using a switch statement
//       switch (true) {
//         case (vowels.includes(char1) && vowels.includes(char2)):
//           count++;
//           break;
//       }
//     }

//     // Return the count of occurrences
// return count;
//   }

//   // Example usage
//   var user = prompt("Pleases read this application and give me gratuity")
//   var result = countSuccessiveVowels(user);
//   console.log("Occurrences of two successive vowels:"+ result);

// Prompt the user for input
// var user = prompt(
//   "Enter any sentence and I will count the occurrences of any two vowels in succession in a line of text"
// );

// // Define the vowels
// var vowels = ["a", "e", "i", "o", "u"];

// // Initialize a counter for the occurrences of two successive vowels
// var count = 0;

// // Loop through the user input to check for successive vowels
// for (var i = 0; i < user.length - 1; i++) {
//   var char1 = user[i].toLowerCase();
//   var char2 = user[i + 1].toLowerCase();

//   // Check if both characters are vowels
//   if (vowels.includes(char1) && vowels.includes(char2)) {
//     count++;
//   }
// }

// // Output the result
// console.log("Occurrences of two successive vowels:", count);

// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.

// 1 km == 1000metre
// function meter (user){
// var met = 1000
// var result = user*met
// return result
// }
// var user = prompt("enter distance in km")
// var final1 = meter(user)
// console.log(final1)

// 1km === 3280.84feet
//1km==1000m
//1meter === 3.28084feet
// function feet(user2) {
//   var feet = 3280.84;
//   var result2 = user2 * feet;
//   return result2;
// }
// var user2 = prompt("enter distance in km");
// console.log(user2 + "kilometer is equal to " + feet(user2) + "feets");

//1km == 1000m
//1m == 100cm
//100*1000==100000
//1km==100000cm
// var user3 = prompt("enter distance in km")
// function kmToCm(user3){
// var cm = 100000
// var final3 = user3*cm
// return final3
// }

// console.log(user3+"kilometer is equal to " + kmToCm(user3)+ "centimeters")

//km in to inches
//1km == 1000m
//1m == 39.37 inches
//1000*39.37==39370
// var user4 = prompt("enter distance in km")
// function inches(inc){
//     var inches = 39370
// return inc*inches
// }
// console.log(user4+" kilometer is equal to " + inches(user4)+ " inches")

//9.Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour

function overTime(hours) {
  var hrLimit = 40;
  if (hours >= hrLimit) {
    var extraHours = Math.abs(hrLimit - hours);
    var payForExtraHr = extraHours * 12;

    console.log(
      "extra hours:  " +
        extraHours +
        "Payment for extra hours worked : " +
        payForExtraHr
    );
  } else if (hours < hrLimit) {
    var noExtrahr = "haven't done any extra hour: ";
    console.log(noExtrahr)
  }
}

var hrWorked = prompt("how many hours you worked?");
overTime(hrWorked);
