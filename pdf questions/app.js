// var dishes = prompt("enter any 5 dishes name you like the most")
// var dish1 = console.log(dishes.split(","),("  ")[0])
// var dish2 = console.log(dishes.split(","),("  ")[1])
// var dish3 = console.log(dishes.split(","),("  ")[2])
// var dish4 = console.log(dishes.split(","),("  ")[3])
// var dish5 = console.log(dishes.split(","),("  ")[4])

// loops
// var colors = ["blue","pink","brown","brown","black","purple","black","white","brown","brown"]

// console.log(colors.lastIndexOf("brown"));
// var userInput =[ prompt("enter your favourite colors:"),
// prompt("enter your favourite colors:"),
// prompt("enter your favourite colors:")
// ]
// console.log(userInput[1]);
// console.log(userInput)
// var ques1 = +prompt("2+2=");
// var ans = [ques1,ques2,ques3];
// if(ques1===4){
//     console.log("go ahead");
// }
// else{
//     console.log("danger")
// }
// var ques2 = prompt("what is next to 'r' in alphabets");
// if(ques2=="s"){
//     console.log("keep going");
// }
// else{
//     console.log("noooooooo");
// }
// var ques3 = prompt("do you know java script?");
// if (ques3== "yes"){
//     console.log("done")
// }
// else{
//     console.log("you failed")
// }

// #1 — Print the numbers from 0 to 15
// for (var i =1 ; i<16;i++){
//     console.log(i)
// }
// #2 — Print the numbers from 12 to 24
// for (var i = 12 ;i <25;i++){
//     console.log(i)
// }

// #3 — Print the ODD numbers from 7 to 31

// for(var i = 7 ; i < 31; i++){
//     if(i%2!=0){
//         console.log(i)
//     }
// }

// #4 — Print the EVEN numbers from 10 to -20
for(var i = 10; i >= -20; i--){
    if (i%2==0){
        console.log(i)
    }
   
}

// #5 — Iterate through all numbers from 1 to 45. Print the following:

// For multiples of 3 print “Fizz”
// For multiples of 5 print “Buzz”
// For multiples of 3 and 5 print “FizzBuzz”

for (var i =1; i <=45; i++){
    if(i%3==0 && i%5==0){
        console.log("FIZZBUZZ")
    }
    else if(i%3==0){
        console.log("FIZZ")
    }
    else if(i%5==0){
        console.log("BUZZ")
    }
}

// #6 — Print all the elements of the following array
var thisIsAnArray = ["element1", "element2", "element3", "element4"];
for (var i = 0 ; i < thisIsAnArray.length;i++){
    console.log(thisIsAnArray[i])
}

// #7 — Calculate the sum of all the numbers in the following array
var numbersArray = [1,13,22,123,49]
var sum =0;
for (var i = 0 ; i < numbersArray.length; i++){
    sum = sum + numbersArray[i];
}
console.log(sum)

// table
var userNum = +prompt("enter your number:");
var timesTable = +prompt("how much time you want this table?");
for(i = 1 ;i<=timesTable;i++){
    document.write(userNum+"X"+i+ "="+userNum*i+"<br>")
}

// Write a JavaScript program that accept two integers and display the larger.
// var num_1 = prompt("enter first number:");
// var num_2 = prompt("enter second number:");
// if(num_1>num_2){
//     console.log(num_1);
// }
//  else if (num_2>num_1){
//     console.log(num_2);
// }
// else {
//     console.log("both are same")
// }

// Write a simple JavaScript program to join all elements of the following array into
// a string.

// var colors = ["red","black","green","white"]
// colors.join()
// document.write(colors)

// document.write("<br>"+colors.toString())
//  document.write("<br>"+colors.join("-"))

//  Write a JavaScript program to sort the items of an array.
//  var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
//  arr1.sort()
//  console.log(arr1)

//  Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will
// check if the current number is odd or even, and display a message to the screen.

// for(i=0; i<=15;i++){
//     if(i%2==0){
//         console.log(i+" is an even number")
//     }
//     else if(i%2!=0){
//         console.log(i+" is an odd Number ")
//     }
// }

// **Project Idea:** Text Reverser and Word Counter

// **Description:** A simple tool that takes a string of text as input and provides two functionalities:
// 1. Reverse the text.
// 2. Count the number of words in the text.

// var userInput = prompt("write any thing you want");
// var splittedArr = userInput.split(" ");
// console.log(splittedArr);
// var reversedArr=splittedArr.reverse();
// console.log(reversedArr)
// console.log(reversedArr.length);

// 2. **Menu for Options:**
//    - Display a menu with options to reverse the text or count the words.
//    - Prompt the user to choose an option.
// var userInput = prompt("enter your text here");
// splittedArr = userInput.split("").reverse();
// document.write(splittedArr)

// var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// for (var i = 0; i <= num.length; i++) {
//   console.log(num[i]);
//   if (i == 7) {
//     continue;
//   }
// }

// chapter case change
// var cities = [
//   "karachi",
//   "hyderabad",
//   "quetta",
//   "murree",
//   "islamabad ",
//   "lahore",
// ];
// var userCity = prompt("Enter your city:  ").toLowerCase();
// for (var i = 0; i < cities.length; i++) {
//   if (cities[i] === userCity) {
//     alert("Your city " + userCity + " " + " is available at " + i);
//   }
// }

// var mySentence =
//   "I am here learning javascript .i have learnt all other languages ";
// for (var i = 0; i < mySentence.length; i++) {
//   if (mySentence.slice(i, i + 4) === "here") {
//     var change = mySentence.slice(0, i) + "there" + mySentence.slice(i + 4);
//     console.log(change);
//   }
// }

// var name = "tayyaba";
// var count = 0;
// for (var i = 0; i < name.length; i++) {
//   if (name[i] === "a") {
//     count++;
//     if (count === 2) {
//       document.write(i);
//     }
//   }
// }
// document.write("<br>");

// var mySentence =
//   "I am here learning javascript .i have learnt all other languages ";
// var cha = mySentence.indexOf("I am here");
// // console.log(cha)
// if (cha !== -1) {
//   document.write(
//     mySentence.slice(0, cha) + "we are there" + mySentence.slice(i + 2)
//   );
// }

// console.log(mySentence.replace("here", "tayyaba"));

// console.log(mySentence.charAt(5));
// console.log(mySentence.slice(0, 9));
// document.write("<br>");
// alert(Math.floor(Math.random() * 2));
// var user = Number(prompt("enter a number your want to create a passward: "))
// var char = "zxcvbnmlkjhgfdsaqwertyuiopZXCVBNMLKJHGFDSAQWERTYUIOP`!@#$%^&*()_+=-0987654321~,.;'[]{}\|?><"
// passward = []
// for (var i = 0 ; i < user; i++ ){
//    var random=Math.floor(Math.random()*char.length)
//    passward.push(char[random])
// }
//  var result = passward.join("")
// document.write(result)

// var today = new Date ().getTime()
// console.log(today/(1000*60*60*24*365))

// function daysUntilEvent (){
//   var userDate = prompt("enter your date :" )
//   var user = new Date (userDate)
//   if (isNaN(user.getTime())){
//     return "invalid date format"
//   }
//   var today = new Date ().getTime()
//   var deff = user- today
//   var mul = Math.round(deff/ (1000*60*60*24))
//   return mul;

// }
// console.log(daysUntilEvent())

// var userConfirm = confirm("do you want to delete this item:");
// if (userConfirm) {
//   console.log("item delete");
// } else {
//   console.log("action cancelled");
// }




// Swal.fire({
//   title: "Submit your Github username",
//   input: "text",
//   inputAttributes: {
//     autocapitalize: "off"
//   },
//   showCancelButton: true,
//   confirmButtonText: "Look up",
//   showLoaderOnConfirm: true,
//   preConfirm: async (login) => {
//     try {
//       const githubUrl = `
//         https://api.github.com/users/${login}
//       `;
//       const response = await fetch(githubUrl);
//       if (!response.ok) {
//         return Swal.showValidationMessage(`
//           ${JSON.stringify(await response.json())}
//         `);
//       }
//       return response.json();
//     } catch (error) {
//       Swal.showValidationMessage(`
//         Request failed: ${error}
//       `);
//     }
//   },
//   allowOutsideClick: () => !Swal.isLoading()
// }).then((result) => {
//   if (result.isConfirmed) {
//     Swal.fire({
//       title: `${result.value.login}'s avatar`,
//       imageUrl: result.value.avatar_url
//     });
//   }
// });


// var a =-9*3
// console .log(a)
// var b = "value is " +50
// console.log(b)

// Read in two numbers and display the larger.

// function input(){
//   var input = Number(document.getElementById("input1").value)
//   var input2 = Number(document.getElementById("input2").value)

//   if(isNaN(input)|| isNaN(input2)){
//     document.getElementById("result").innerHTML="enter avalid number"
//   }else{

//     if (input>input2)
//      document.getElementById("result").innerHTML=input+" is greater number"
//     else if(input<input2){
//       document.getElementById.innerHTML=input2+ " is greater number "
//     }else{
//       document.getElementById("result").innerHTML="both are same"
//     }
//   }
// }


function abc(){
   var a = document.getElementById("div")
   var b = a.children[1].style.backgroundColor="red"
   var c= a.children[2].style.color="pink"
    
}
abc()
