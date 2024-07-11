// 1. Write a program that displays current date and time in
// your browser.

var today = new Date();
document.write(today);
document.write("<hr>");
// 2. Write a program that alerts the current month in words.
// For example December.

// var today = new Date();
// var month = today.getMonth();
// var months =["jan","feb","mar","Apr","May","june","july","aug","sep","oct","nov","dec"]
// alert("Current month :"+ months[month])

document.write("<hr>");
// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var today = new Date();
// var day = today.getDay();
// var str = day.toString()
// alert(days[str])

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.
// var days = new Date();
// var day = days.getDay();
// var allDays = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]
// console.log(allDays[day])
// if(day=="sunday" && days=="sunday"){
//     alert("its a funday")
// }

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”

// var toDay = new Date();
// var date = toDay.getDate()
// var days = ["mon","tues","wed","thur","fri","sat","sun"]
// console.log(date);
// if(date < 16 ){
//     alert("First fifteen days of the month")
// }
// else{
//     alert("Last days of the month")
// }

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

var toDay = new Date();
document.write("Current Date :" + toDay + "<br>");
var milisec = toDay.getTime();
document.write("Elapsed miliseconds since  jan 1 ,1970 :" + milisec + "<br>");
var minutes = toDay.getTime() / 60000;
//60 sec * 1000 millisec
var conmin = minutes;
document.write("Elapsed minutes since  jan 1 ,1970 :" + minutes);

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

var today = new Date();
var hours = today.getHours() % 12;
var min = today.getMinutes();
var ampm = hours >= 12 ? "AM" : "PM";
document.write("<br>" + "The current time is :" + +hours + ":" + min + ampm);
// if(hours>=12){
//     ampm="Am"
//     console.log(hours+min)
// }

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

var lastDate = new Date("2020,12,31");
document.write("<br>" + "later date: " + lastDate);

// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

// var ramadan= new Date ("june 18 2015");
// var today = new Date();
// var passedDays = today-ramadan
// var daysDifference = Math.floor(passedDays/(1000*60*60*24))
// alert("Number of days past since 1st Ramadan: " + daysDifference);

document.write("<hr>");
// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

var decEnd = new Date("12 5 2015");
var decEndSec = new Date("12 5 2015").getTime() / (1000 * 60);
var decStrSec = new Date("1 1 2015").getTime() / (1000 * 60);
var diff = decEndSec - decStrSec;
document.write(
  "On reference date :" +
    decEnd +
    "<br>" +
    diff +
    " seconds has passed since beginning of 2015"
);

document.write("<hr>");
// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

document.write("<hr>");
// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

// var userTime = prompt("how many years you want to goback:")
// var date = new Date ();
// var yearsAgo = new Date(date.getTime()-userTime * 365 * 24* 60 *60 *1000)
// alert(date+"100 years Back it was :"+ yearsAgo)

document.write("<hr>");
// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.
// var userInput = prompt("enter your date of birth ","mm-dd-yy");
// var userDate = new Date (userInput).getTime()/(1000*60*60*24*365);
// var userYear = userDate.getFullYear();
// var todayYear = today.getFullYear();
// var yearDiff = todayYear-userYear
// var today = new Date ().getTime()/(1000*60*60*24*365);
// var diff =Math.floor((today-userDate))
// document.write("Your Age is :"+diff+"<br>"+"your birthday year is :")

document.write("<hr>");

// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surchargeky

// var name = prompt("enter your name :");
var units = 410;
var chargesPerUnit = 20;
var currentMonth = new Date();
var month = currentMonth.getMonth();
var amountWithinDueDte = units * chargesPerUnit;
var surCharges = 350;
var grossAmount = amountWithinDueDte + surCharges;
document.write(
  name +
    "<br>" +
    "current Month :" +
    month +
    "<br>" +
    "Number of units :" +
    units +
    "<br>" +
    "Charges per Unit :" +
    chargesPerUnit +
    "<br>" +
    "Net amount payable (with in due date): " +
    amountWithinDueDte +
    "<br>" +
    "Late payment surcharges :" +
    surCharges +
    "<br>" +
    "Gross amount Payable (After due Date: " +
    grossAmount
);

// chapter 35-38

document.write("<hr>");
document.write("chapter 35-38");
document.write("<br>");
// 1. Write a function that displays current date & time in your
// browser.
function currentDate() {
  var today = new Date();
  document.write(today);
}
currentDate();

// 2. Write a function that takes first & last name and then it
// greets the user using his full name.

// var firstName = prompt("enter your first name :")
// var lastName = prompt("enter your last name :")
// function greetUser (){
//   alert("hellow👋  " + firstName +" "+ lastName)
// }
// greetUser()

document.write("<br>");
document.write("<hr>");
// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

// var input1 = Number(prompt("enter first number "))
// var input2 = Number(prompt("enter second  number "))
// function addition (input1,input2){
//   var add = input1+input2
//   document.write("The addition of two numbers is :" + add);

// }
// addition(input1,input2)

document.write("<br>");
document.write("<hr>");

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

// var val1 = Number(prompt("enter first  number :"))
// var operator = prompt("which mathematical operation you want to perform:","+,-,*,/")
// var val2 = Number(prompt("enter second  number :"))
// var result;
// function calculator (val1,operator,val2){
//   if(operator== "+"){
// result= "The sum of " + val1 + " and " + val2 + " is " + (val1+val2)
//   }
//   else if(operator=="-"){
//     result="The subtraction  of " + val1 + " and " + val2 + " is " + (val1-val2)
//   }
//   else if(operator=="/"){
//     result= "The division of " + val1 + " and " + val2 + " is " + (val1/val2);
//   }
//   else if(operator=="*"){
//     result= "The multiplication of " + val1 + " and " + val2 + " is " + (val1*val2)
//   }

// document.write(result)
// }
// calculator(val1,operator,val2)

// 5. Write a function that squares its argument.
// var num = Number(prompt("enter number for squares"))
// function squares (num){
//   console.log(num*num)
// }
// squares(num)

//or

// function square(userInput) {
//   var userInput ;
//  var result =  userInput * userInput;
//   document.write("The square of a number " +userInput +" is == " +result)
// }
// square( userInput = Number(prompt("enter number: ")))

// document.write("<br>")
// document.write("<hr>")
// // 6. Write a function that computes factorial of a number

// var num1= Number(prompt("enter number for factorization"))
// function squares (num1){
//  var factors =[];
//  var divisor = 2;

//  for( var i =0 ; i <= divisor ; i++){
//   if(num1%divisor==0){
//     factors.push(divisor);
//     num1=num1/divisor
//    }
//    else{
//     divisor++;
//    }
//   }
// document.write("the factors of " + num1 + " is :" +factors)
//  }

// squares(num1)

// miss umra

// function factorial() {
//   var userInput = Number(prompt("enter any number for factorial:"));
//   if (userInput < 0) {
//     alert("error : factorial is not defined for negative number :");
//   } else {
//     var result = 1;
//     for (var i = 2; i <= userInput; i++) {
//       var result = result * i;
//       console.log(result);
//     }
//   }
//   alert("the factorial of " + userInput + "is " + result);
// }
// factorial();

// 7. Write a function that take start and end number as inputs
// & display counting in your browser.

// function counting() {
//   var userInput1 = Number(prompt("enter start  number "));
//   var userInput2 = Number(prompt("enter end  number "));
//   for (var i = userInput1; i <= userInput2; +i++) {
//     document.write(i);
//     document.write("<br>");
//   }
// }
// document.write(counting());

// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

// i. Arguments as value
// function area (width,height){
// var area = width*height
// return area
// }
// console.log("The area of right angle triangle " +area(4,5))

// ii. Arguments as variables
// function area (){
// var width = Number(prompt("enter width of a rectangle "))
// var height= Number(prompt("enter height of a rectangle"))
// var result = width*height
// return result;
// }

// console.log(area())

// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

// var word =prompt("enter any palindrame word :")
// var splittedArr = word.split();
// var rev = splittedArr.reverse()
// var str = rev.join()
// function palindrame (){
//   if (str != word){
//     document.write("its not a palindrame word :")
//   }else{
//     document.write("its palindrame word")
//   }
// }
// palindrame()

// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

// var userInput = prompt("write any sentence") ;
// function titleCase (){
//   var splittedArr = userInput.split(" ");
//   var result = [];
//   for ( var i = 0 ; i < splittedArr.length ; i++ ){
//     var word = splittedArr[i][0].toUpperCase() + splittedArr[i].slice(1).toLowerCase()
//     result.push(word);

//   }
//   return result.join(" ");
// }

// document.write("Example string :" + userInput + "<br>" + "expected output : "+titleCase())

// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

// var userInput = prompt(
//   "write any sentence . I will find the longest word in the sentence."
// );
// function longestWord() {
//   var splittedArr = userInput.split(" ");
//   var result;
//   for (var i = 0; i <= splittedArr.length; i++) {
//     if (splittedArr[i] > splittedArr[i]) {
//       var word = splittedArr[i];
//       result.push(word);
//     }
//   }
//   return result.join(" ");
// }
// longestWord();

// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

function checkingLetter(str, letter) {
  var str = prompt("enter one sentence:");
  var letter = prompt("enter one letter you want to find in string :");

  for (var i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      console.log("The letter " + letter +" in the sentence : " + str + " is occured " +i + "times");
      break;
    }
  }
}
checkingLetter()



// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2