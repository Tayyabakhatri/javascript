// task1
var city = "karachi";
var cityName = prompt("Enter you City");
if (cityName == city){
    document.write("<h1>welcom to the city of light</h1>");
}
// // task 2
var genderM = "Male";
var genderF = "Female";
var userGender = prompt("Enter your gender");
if (userGender==genderF){
    document.write("Good Morning Ma'am");
}
if (userGender==genderM){
    document.write("Good Morning sir");
}
// task3
var trafficColor1 = ("red");
var trafficColor2 = ("yellow");
var trafficColor3 = ("green");
var userEnterColor = prompt("enter traffic color");
if (userEnterColor == trafficColor1){
    document.write("<h3>Must stop</h3>");
}
if (userEnterColor==trafficColor2){
    document.write("<h3>Ready to move</h3>");
}
if (userEnterColor==trafficColor3){
    document.write("<h3>Move now</h3>");
}
// task4
var carFuel = 5;      //liters
var fuelInUserCar = +prompt("Enter your Car fuel (in numbers)");
if (fuelInUserCar<carFuel){
    alert("please refill the fuel in your car");
    document.write("please refill the fuel in your car");
}
// task5
var a= 4;
var b = 82;
var c = 12;
if (++a ===5){
    alert("Given condition for variable is true");
}
if (b++ === 83){
    alert("Given condition for variable is true");
}
if (c++ ===13){
    alert("condition 1 is true");
}
if (c === 13 ){
    alert("condition 2 is true");
}
if (++c < 14){
    alert("condition 3 is true");
}
if (c===14){
    alert("condition 4 is true");
}
var materialCost = 20000;
var labourCost = 2000;
var totalCost = labourCost + materialCost;
if (totalCost ==materialCost+labourCost){
    alert("The cost equals");
}
if(true){
    alert("true");
}
if(false){
   alert("false")
}
if("car" < "cat"){ 
    alert("car is smaller than cat"); 
    } 
// task7
var secretNumRange = {min:1 ,max:10};
var userSecretNum = +prompt("Enter your secret number");
if (userSecretNum >= secretNumRange.min && userSecretNum <= secretNumRange.max){
    alert("Bingo! Correct answer");
}
else if (userSecretNum + 1 >= secretNumRange.min && userSecretNum + 1 <= secretNumRange.max){
    alert("Close enough to the correct answer");
    
}
else {
    alert("Sorry, wrong guess. Try again!");
}


