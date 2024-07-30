// var today = new Date();
// var hours = today.getHours()%12;
// var minutes = today.getMinutes();
// var ampm ;
// if(hours>=12){
//     ampm= "AM";
// }
// else{
//     ampm = "PM"
// }
// document.write("The current time is:"+hours+":"+minutes+ampm)

// function factorial(){
//     var userInput = Number(prompt("enter any number for factorial:"));
//     if(userInput<0){
//         alert("error : factorial is not defined for negative number :")
//     }else{
//         var result = 1;
//         for (var i = 2 ; i<= userInput ; i++){
//             var result = result*i
//             console.log(result)

//         }

//     }
//     alert("the factorial of " + userInput + "is " + result)
// }
// factorial()

// var x = +prompt("enter num1")
// var y = +prompt("enter num2")
// console.log(Math.hypot(x,y))

// Certainly! Here are some logic questions related to functions in JavaScript:

// 1. **Function Basics:**
//    - Explain the difference between declaring a function using `function` declaration vs. `function` expression in JavaScript.

// 2. **Function Parameters:**
//    - Write a function `sumNumbers` that takes two parameters `a` and `b` and returns their sum. How would you call this function with arguments `3` and `7`?

// 3. **Function Scope:**
//    - What is the scope of variables declared inside a function using `var`, `let`, and `const`? How does it differ from variables declared outside of any function?

// 4. **Returning Values:**
//    - Write a function `multiplyByTwo` that takes a number as an argument and returns twice that number. How would you call this function with the argument `5` and log the result to the console?

// 5. **Anonymous Functions:**
//    - What are anonymous functions in JavaScript? Provide an example of an anonymous function and explain when you might use one.

// 6. **Function Composition:**
//    - Explain the concept of function composition in JavaScript. Provide an example where you compose two functions to achieve a specific result.

// 7. **Recursion:**
//    - What is recursion in the context of functions? Write a recursive function to calculate the factorial of a number.

// 8. **Callbacks:**
//    - What are callbacks in JavaScript? Provide an example of using a callback function in an asynchronous operation such as fetching data from an API.

// 9. **Arrow Functions:**
//    - How do arrow functions differ from regular functions in JavaScript? Provide an example where an arrow function would be more suitable than a regular function.

// 10. **Higher-Order Functions:**
//     - Explain what higher-order functions are and provide an example of using `map`, `filter`, or `reduce` functions in JavaScript.

// These questions cover various aspects of functions in JavaScript, from basic syntax and scope to advanced concepts like recursion and higher-order functions. They can be used to test understanding and proficiency in using functions effectively in JavaScript programming.

// var daysOfWeek = ["mon", "tues", "wed", "thur", "fri", "sat", "sun"];
// var check = prompt("enter any name of day", "eg ; mon,tues ...").toLowerCase()

// var flag = false;
// for (var i = 0; i < daysOfWeek.length; i++) {

//     if (check == daysOfWeek[i]) {
//         flag = true
//         break;
//     }
// }
//     if (flag) {
//         switch (check) {
//             case "sun":
//                 alert("sunday is a working day")
//                 break
//             case "sat":
//                 alert("saturday is a funday ")
//                 break
//             default:
//                 alert("working days :")
//                 break
//         }

//     }

//1 write a function that takes a name as an argument and returns a personalized greeting message
// var user = prompt("enter your name:")
// function greet (a){
// alert("hello  " + user)
// }
// greet(user)

//2 create afuntion that calculate the area of a rectangle given its width and height
// function area (a,b){
//     return a*b
// }
// alert("the area of rectangle is :" + area(23,2))

//3 write a function that converts celsius to fahrenheit

// function celsiusToFahrenheit(celsius) {
//     return celsius * 9/5 + 32;
// }

// // Example usage:
// let celsiusTemperature = 25;
// let fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
// console.log(`${celsiusTemperature}°C is equal to ${fahrenheitTemperature}°F`);

//4 write a function that reverse a given string

// var userInput = prompt("enter your name :")
// function rev (a){
//     return a.split("").reverse().join("")
// }
// console.log(rev(userInput))

//5 create a function that takes an array of numbers and return the sum of its elements

// var arr = [1,2,3,4,5,6,7,8,9]
// function arrSum (a){
//     var sum =0;
//     var i = 0
//     while(i<a.length){
//         sum+=a[i]
//         console.log(sum)
//     }
//     i++
//    return sum
// }
// var result = arrSum(arr)
// console.log(result)

//6 write a function that uses a while loop to calculate the sum of num from 1 to given number
// var user = parseInt(prompt("enter the number:"))
// function add (input){
//     var i = 1
//     var sum =0;
// while(i<input){
// sum+=i
// console.log(sum)
// }
// i++
// }
// console.log(add(user))

//write a js function that remove all vowels fron input
// var userInput = prompt("enter any sentence:");
// function removeVowel(a) {
//   return a.replace(/[aeiouAEIOU]/g, "");
// }

// console.log(removeVowel(userInput));

// removing duplicate numbers
// var userNum = prompt("enter your number:");
// var array = userNum.split("");

// function duplicateNum(user) {
//   var result = [];
//   for (var i = 0; i < user.length; i++) {
//     if (!result.includes(user[i])) {
//       result.push(user[i]);
//     }
//   }
//   return result;
// }
// var final = duplicateNum(array);
// console.log(final);

// 1.// Write a JavaScript function that returns a passed string with letters in
// alphabetical order.
// var user = prompt("enter any sentence")
// function alphabetical_order (str){
// return str.split("").sort().join("")
// }
// var result = alphabetical_order(user)
// console.log(result)

//2  Write a JavaScript function that accepts a string as a parameter and counts the
// number of vowels within the string.

// var user = prompt("enter your srt");
// function numOfVowels(input) {
//   var vowels = "aeiouAEIOU";
//   var count = 0;
//   for (var i = 0; i < input.length; i++) {
//     if (vowels.indexOf(input[i]) !== -1) {
//       count += 1;
//     }
//   }
//   return count;
// }
// console.log(numOfVowels("tayyaba"));

//3.   Write a JavaScript function that accepts a string as a parameter and converts the
// first letter of each word of the string in upper case.
// function titleCase(str) {
//   var spl = str.split(" ");
//   for (var i = 0; i < spl.length; i++) {
//    spl[i]=spl[i][0].toUpperCase() + spl[i].slice(1).toLowerCase();

//   }
//   return spl.join(" ")
// }
// console.log(titleCase("my name is tayyaba"))

// Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

// var today = new Date();

// var dd = today.getDate();
// var mm = today.getMonth() + 1;
// var yyyy = today.getFullYear();
// if (dd < 10) {
//   dd = "0" + dd;
// }

// if (mm < 10) {
//   mm = "0" + mm;
// }
// today = mm + "-" + dd + "-" + yyyy;
// document.write(today);
// today = mm + "/" + dd + "/" + yyyy;
// document.write(today);
// today = dd + "-" + mm + "-" + yyyy;
// document.write(today);
// today = dd + "/" + mm + "/" + yyyy;

//  Write a JavaScript program to calculate number of days left until next Christmas.

var today = new Date();
var mili = today.getTime();
var Christmas = new Date("2024 11 25");
var chrismili = Christmas.getTime();
var def = chrismili - mili;
var con = Math.floor(def / (1000 * 60 * 60 * 24));
console.log(con);

// JavaScript Basic : Exercise-10 with Solution
// Write a JavaScript program to calculate multiplication and division of two
// numbers (input from user).
// Sample Form:
function multi (){
num1 = document.getElementById("firstnum").value
num2 = document.getElementById("secondnum").value
document.getElementById("result").innerHTML=num1*num2
}
