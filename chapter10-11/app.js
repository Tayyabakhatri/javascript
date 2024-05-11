// task1
// var city = "karachi";
// var cityName = prompt("Enter you City");
// if (cityName == city){
//     document.write("<h1>welcom to the city of light</h1>");
// }
// // // task 2
// var genderM = "Male";
// var genderF = "Female";
// var userGender = prompt("Enter your gender");
// if (userGender==genderF){
//     document.write("Good Morning Ma'am");
// }
// if (userGender==genderM){
//     document.write("Good Morning sir");
// }
// // task3
// var trafficColor1 = ("red");
// var trafficColor2 = ("yellow");
// var trafficColor3 = ("green");
// var userEnterColor = prompt("enter traffic color");
// if (userEnterColor == trafficColor1){
//     document.write("<h3>Must stop</h3>");
// }
// if (userEnterColor==trafficColor2){
//     document.write("<h3>Ready to move</h3>");
// }
// if (userEnterColor==trafficColor3){
//     document.write("<h3>Move now</h3>");
// }
// // task4
// var carFuel = 5;      //liters
// var fuelInUserCar = +prompt("Enter your Car fuel (in numbers)");
// if (fuelInUserCar<carFuel){
//     alert("please refill the fuel in your car");
//     document.write("please refill the fuel in your car");
// }
// // task5
// var a= 4;
// var b = 82;
// var c = 12;
// if (++a ===5){
//     alert("Given condition for variable is true");
// }
// if (b++ === 83){
//     alert("Given condition for variable is true");
// }
// if (c++ ===13){
//     alert("condition 1 is true");
// }
// if (c === 13 ){
//     alert("condition 2 is true");
// }
// if (++c < 14){
//     alert("condition 3 is true");
// }
// if (c===14){
//     alert("condition 4 is true");
// }
// var materialCost = 20000;
// var labourCost = 2000;
// var totalCost = labourCost + materialCost;
// if (totalCost ==materialCost+labourCost){
//     alert("The cost equals");
// }
// if(true){
//     alert("true");
// }
// if(false){
//    alert("false")
// }
// if("cat" < "car"){ 
//     alert("cat is smaller than car"); 
//     } 
// // task7
// var secretNumRange = {min:1 ,max:10};
// var userSecretNum = +prompt("Enter your secret number");
// if (userSecretNum >= secretNumRange.min && userSecretNum <= secretNumRange.max){
//     alert("Bingo! Correct answer");
// }
// else if (userSecretNum + 1 >= secretNumRange.min && userSecretNum + 1 <= secretNumRange.max){
//     alert("Close enough to the correct answer");
    
// }
// else {
//     alert("Sorry, wrong guess. Try again!");
// }
// task10
// var tem1 = 10;
// var tem2 = 20;
// var tem3 = 30;
// var tem4 = 40;
// var result;
// var userInputTem = prompt("enter temperature");
// if (userInputTem>tem4){
//     result=("It is too hot Outside");
// }
// if (userInputTem>tem3 && userInputTem<tem4){
//    result=("The weather today is normal");
// }
//  if (userInputTem>=tem2 && userInputTem<tem3){
//     result=("Today's weather is cool");
// }
// if (userInputTem>=tem1 && userInputTem<tem2){
//    result=("OMG! Today's weather is so cool");
// }
// alert(result);
// task11
// calculator
// var firstNum = prompt("enter first number");
// var operator = prompt("operator");
// var secondNum = prompt("enter second number");
// var result;
// if (operator == "+"){
//     result = (firstNum+secondNum);
// }
// if (operator == "-"){
//     result = (firstNum-secondNum);
// }
// if (operator == "*"){
//     result = (firstNum*secondNum);
// }
// if (operator == "/"){
//     result = (firstNum/secondNum);
// }
// alert(result);
// Get the current date and time
var today = new Date();

// Get the day of the week (0-6, where 0 is Sunday and 6 is Saturday)
var day = today.getDay();

// Array of day names
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Display the current day
console.log("Today is: " + daylist[day] + ".");

// Get the current hour, minute, and second
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

// Determine if it's AM or PM
var prepand = (hour >= 12) ? " PM " : " AM ";

// Convert 24-hour format to 12-hour format
hour = (hour >= 12) ? hour - 12 : hour;

// Check for special cases when hour is 0
if (hour === 0 && prepand === ' PM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Noon';
    } else {
        hour = 12;
        prepand = ' PM';
    }
}

// Check for special cases when hour is 0
if (hour === 0 && prepand === ' AM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Midnight';
    } else {
        hour = 12;
        prepand = ' AM';
    }
}

// Display the current time
console.log("Current Time: " + hour + prepand + " : " + minute + " : " + second); 









