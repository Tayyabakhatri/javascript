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
var movie5 = movieTicketPrice * 5;
document.write("<br>Total cost of buy 5 tickets to a movie is " + movie5 + "PKR");
// table of 5
var tableNum = 9;
var initialNum = 1 ;
var operatorSign = "X";
var equalSign = "=";

document.write(
"<br> <h1>Table of any number</h1>" +tableNum + operatorSign + initialNum++ + equalSign +tableNum*1 +   
"<br>" +tableNum + operatorSign + initialNum++ + equalSign + tableNum*2+
"<br>" +tableNum + operatorSign + initialNum++ + equalSign + tableNum*3+
"<br>" +tableNum + operatorSign + initialNum++ + equalSign + tableNum*4+
"<br>" +tableNum + operatorSign + initialNum++ + equalSign + tableNum*5+
"<br>" +tableNum + operatorSign + initialNum++ + equalSign + tableNum*6+
"<br>" +tableNum + operatorSign + initialNum++ + equalSign + tableNum*7+
"<br>" +tableNum + operatorSign + initialNum++ + equalSign + tableNum*8+
"<br>" +tableNum + operatorSign + initialNum++ + equalSign + tableNum*9+
"<br>" +tableNum + operatorSign + initialNum++ + equalSign + tableNum*10);

// currency exchange
var uSD1 = 104;
var sA1 = 28;
var quantityOfUSD = 10;
var quantityOfSA = 25;
var uSDinToPKr = uSD1*quantityOfUSD
var sAinToPKR = sA1*quantityOfSA
document.write("<br> <h1>Exchange Rate</h1>" +"Total currency in PKR:", + uSDinToPKr+sAinToPKR) ;
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
// shopping cart
var item1Price = 650;
var qtyOfItem1 = 3;
var totalPriceOfItem1 = item1Price*qtyOfItem1;

var item2Price = 100;
var qtyOfItem2 = 7;
var totalPriceOfItem2 = item2Price*qtyOfItem2;
var shippingCharges = 100;
var totalPrice = totalPriceOfItem1+ totalPriceOfItem2 + shippingCharges;
// console.log (totalPriceOfItem2);
document.write("<br>Total cost of your order is:", + totalPrice);
// marksheet
var totalMarks = 980;
var marksObtained = 804;
var percentage = marksObtained/totalMarks*100;
document.write ("<h1>Marksheet</h1>" , "Total marks:" +totalMarks , "<br>obtained marks:" + marksObtained,  "<br>percentage ", + percentage);
// life time supply calculator
var favSnack = "junoon";
var currentAge = 20 ;
var estimatedAge =80;
var restAge = estimatedAge-currentAge;
var snackPerDay = 5;
var oneYear = 365*5;
var restYear = oneYear*estimatedAge;
document.write("<h1> Lifetime supply calculator</h1>" ,"Favourite snack: "+favSnack + "<br>Current Age: "+ currentAge + "<br>estimated Maximum Age: "+restAge+ "<br> Amount Of snacks per day: " + snackPerDay +"<br>You will need "+ restYear + " to last you until the ripe old age of "+ estimatedAge);
// conversion formula
var celsiusTemprature = 25;
var farenhietTemprature = 70;
var celConversion = celsiusTemprature*9/5+32
var farConversion = (farenhietTemprature-32)*5/9
document.write("<br>"+"<h1>Conversion fomulas</h1>"+celsiusTemprature+"oC is "+celConversion+"o"+"F", "<br>"+farenhietTemprature+"oF is "+farConversion +"o"+"C");
// Geometrizer
var radiusOfaCircle = 20;
var pie = 3.142;
var circumferences = 2*pie*radiusOfaCircle;
var area = pie*radiusOfaCircle^(2);
document.write("<br><h1>Geometry</h1>Radius Of a circle is "+radiusOfaCircle,"<br>Circumferences Of a circle is "+circumferences,"<br>The area is "+ area);






