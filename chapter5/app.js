// task_1
// sum of numbers
var num = 3;
var num_2 = 5;
var sumOfNumAndNum_2 = num+num_2;
document.write("sum of " + num + " and" + num_2 +" is " + sumOfNumAndNum_2);
// task_2
// subtraction
var subOfNumAndNum_2 = num_2-num;
document.write("<br>subtraction of " + num +" and " + num_2 +" is " +subOfNumAndNum_2 );
// multiplication
var multiplicationOfNumAndNum_2 = num*num_2;
document.write("<br>multiplication of " + num +" and " + num_2 +" is " +multiplicationOfNumAndNum_2);
// division
var divisionOfNumAndNum_2 = num / num_2;
document.write("<br>division of " + num +" and " + num_2 +" is " +divisionOfNumAndNum_2);
// modulus
var modulusOfNumAndNum_2 = num%num_2;
document.write("<br>modulus of " + num +" and " + num_2 +" is " + modulusOfNumAndNum_2);
// task_3
var mathematicalExpression ;
document.write("<br>Value after variable declaration is " + mathematicalExpression);
mathematicalExpression = 5;
document.write("<br>Initial Value: " + mathematicalExpression);
mathematicalExpression = ++mathematicalExpression ;
document.write("<br>Value after Increament is: " + mathematicalExpression);
mathematicalExpression = mathematicalExpression + 7;
document.write("<br>Value after addition is: " + mathematicalExpression);
mathematicalExpression = --mathematicalExpression;
document.write("<br>Value after decrement is: "+ mathematicalExpression);
mathematicalExpression = mathematicalExpression%3;
document.write("<br>The reminder is: " + mathematicalExpression);
// movie ticket
var movieTicketPrice = 600;
var movie5 = (movieTicketPrice * 5);
document.write("<br>Total cost of buy 5 tickets to a movie is " + movie5 + "PKR");
// table of 5
var numFive = 5;
var multiplySign = "*"
var equalSign = "="
var numOne = 1;
var numTwo = 2;
var numThree =3 ;
var numFour = 4;
var numFive = 5;
var numSix = 6;
var numSeven =7 ;
var numEight = 8;
var numNine = 9;
var numTen = 10;
document.write("<h1>TABLE OF 5</h1> ")
document.write( "<br>" +numFive + multiplySign + numOne  + equalSign + (numFive*numOne) );
document.write( "<br>" +numFive + multiplySign + numTwo  + equalSign + (numFive*numTwo) );
document.write( "<br>" +numFive + multiplySign + numThree  + equalSign + (numFive*numThree) );
document.write( "<br>" +numFive + multiplySign + numFour  + equalSign + (numFive*numFour) );
document.write( "<br>" +numFive + multiplySign + numFive  + equalSign + (numFive*numFive) );
document.write( "<br>" +numFive + multiplySign + numSix  + equalSign + (numFive*numSix) );
document.write( "<br>" +numFive + multiplySign + numSeven  + equalSign + (numFive*numSeven) );
document.write( "<br>" +numFive + multiplySign + numEight  + equalSign + (numFive*numEight) );
document.write( "<br>" +numFive + multiplySign + numNine  + equalSign + (numFive*numNine) );
document.write( "<br>" +numFive + multiplySign + numTen  + equalSign + (numFive*numTen) );
// currency exchange
var uSD1 = 104;
var sA1 = 28;
var quantityOfUSD = 10;
var quantityOfSA = 25;
document.write("<br>Total currency in PKR:" + (uSD1*quantityOfUSD)+(sA1*quantityOfSA)) ;
// task.10
var arithmaticNumber = 3;
var add5 = 5;
var multiplyBy10 = 10;
var divideBy2 = 2;
var add = arithmaticNumber+add5;
var multiple = arithmaticNumber*multiplyBy10;
var resultOfAdditionMultiplication = add+multiple;
var divide = resultOfAdditionMultiplication/divideBy2;
// var divide = arithmaticNumber/divideBy2;
// console.log(add+multiple+divide);
console.log(divide)
// Age Calculator
var currentYear = 2024;
var birthYear = 2000;
var result = currentYear-birthYear;
document.write("<br><h1>Age calculator</h1>")
document.write("<br>Current Year" + currentYear);
document.write("<br>Birth Year" + birthYear);
document.write("<br>Your Age is:  " +result);

