// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19];
// while (arr.length !== 10) {
//   console.log(10);
//   break;
// }
// console.log(arr1)

// var num = 6;
// while (userInput !== num) {
//   var userInput = Number(prompt("enter any number"));
//   if (userInput < num) {
//     alert("hint: lower");
//   } else if (userInput > num) {
//     alert("hint: higher");
//   }
// }
// if (userInput === num) {
//   alert("correct");
// }

/*passward creation*/
// while (!newPassward) {
//   var newPassward = prompt("create a new passward: ");
//   if (newPassward.length === 8) {
//     if (newPassward.charCodeAt(65, 90)) {
//       if (newPassward.charCodeAt(97, 122)) {
//         if (newPassward.charCodeAt(48, 57)) {
//           if (newPassward.charCodeAt(33, 47)(58, 64)(91, 96)(123, 126)) {
//             alert("passward should contain atleast 1 special character");
//           }
//         } else {
//           alert("passward should contain atleast 1 number");
//         }
//       } else {
//         alert("passward should contain atleast 1 lowerrcase character");
//       }
//     } else {
//       alert("passward should contain atleast 1 uppercase character");
//     }
//   } else {
//     alert("passward should contain 8 characters: ");
//   }
// }
// if(!newPassward){
//     while (!newPassward) {
//         var newPassward = prompt("create a new passward: ");
//         if (newPassward.length === 8) {
//           if (newPassward.charCodeAt(65, 90)) {
//             if (newPassward.charCodeAt(97, 122)) {
//               if (newPassward.charCodeAt(48, 57)) {
//                 if (newPassward.charCodeAt(33, 47)(58, 64)(91, 96)(123, 126)) {
//                   alert("passward should contain atleast 1 special character");
//                 }
//               } else {
//                 alert("passward should contain atleast 1 number");
//               }
//             } else {
//               alert("passward should contain atleast 1 lowerrcase character");
//             }
//           } else {
//             alert("passward should contain atleast 1 uppercase character");
//           }
//         } else {
//           alert("passward should contain 8 characters: ");
//         }
//       }
// }else{
//     alert("correct")
// }

// var i = 1;
// while (i < 10) {
//   if (i !== 5) {
//     console.log(i);
//   }
//   i++;
// }
// var t = 1;
// while (t < 15) {
//   if (t !== 5) {
//     console.log(t);
//   }
//   t++;
// }
//jab 5th time loop chaly ga to condition galat hogi to while loop ki body execute nahi hogi ,i++
//  ho jaiga 6th  time condition sahi hogi to loop phir se chaly ga

//write a while loop in js that prints the number from 10 to 20 but skip the even num
//  var i = 20
//  while(i<=40){
//   if(i%2!==0){
//     console.log(i)

//   }
//   i++
//  }

//  for(var i = 0 ; i <40; i++){
//   if(i%2!==0){
//     console.log(i)
//   }
//  }

// var i = 0;
// sum = 0;
// while (i < 50) {
//   if (i % 3 === 0 || i % 5 === 0) {
//     sum += i;
//   }
//   i++;
// }
// console.log(sum);

//the code will print the num decreasing by 2 and skip the multiple of 5
// for loop se bhi kia he ur while loop se bhi ,dono ko function se call kia he decrasing by 2 condition se ur skip multiple of5 if se
// function decreamentby2() {
//   for (var i = 50; i > 1; i = i - 2) {
//     console.log(i);
//   }
// }
// var result = decreamentby2();

// console.log(result);

// var i =50
// function skip (){
//     while(i >= 1 ){
//         if(i%5!==0){
//             console.log(i)
//         }
//         i = i - 2
//     }
// }
//  skip()
// var sum=0;
// var i = 1
// while (i <=  100){
//     if (i%2===0){
//         sum+=i
//     }
//     i++
// }
// console.log(sum)

// var userInput = Number(prompt("enter your age ,i will tell you how old you will be after 5 years!"))
// var age = userInput+5
// alert("your age after 5 years "+ age)
//doing this with while loop tell user their age after 10 years
// var name = prompt("enter your name: ")
// var age = parseInt(prompt("enter your age: "))
// var futureAge = age
// var i=0
// while(i<10){
//     futureAge++
//     i++
// }
// alert("your age after 5 years will be : "+futureAge)

//1 write a while loop that prints the number from 1 to 10
// var i = 1
// while(i<=10){
//     console.log(i)
//     i++
// }

//2 create a while loop that ask the user for input until they type "stop"
// var str = "stop"
// while(user!==str){
//     var user =prompt("type some thing")
// }

//3 create a while loop thay prints the even number from 1 to 20
// var i = 0
// while(i <= 20){
//     if(i%2===0){
//         console.log(i)
//     }
//     i++
// }

//4 write a while loop that calculate the factorial of a given number
// function factorial(n){
//     var result= 1
//     var i =1
//     while(i<= n){
//         result*=i
//         i++
//     }
//     return result;
// }
// var user =Number(prompt("enter number:"))
// var final= factorial(user)
// console.log(final)

//with for loop
// function factorial1(a){
// var result =1
// var i =1
// for (var i = 1 ; i <= a; i++){
//     result *=i
// }
// return result
// }
// var b =Number(prompt("enter number:"))
// var final1= factorial1(b)
// console.log(final1)

//5 write a while loop that stimulate a coin toss until the user gets head .
// var i = 1
// while(i>0){
//     var ran =Math.floor( Math.random()*2)
//     var toss;
//     if(ran===0){
//         toss = "tail"
//         alert("you got " + toss)
//     }else{
//         toss="head"
//        alert("congradulations you got " + toss)
//        break
//     }
//    i++
// }

// Write a JavaScript program that accept two integers and display the larger.
// var num1 = Number(prompt("neter number 1","0"))
// var num2 = Number(prompt("neter number 2","0"))
// var result =0;
// if (num1>num2){
// result=num1
// alert("largest number is : "+result)
// }else{
//     result=num2
//     alert("largest number is : "+result)
// }

// write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box
// with the specified sign.
// Sample numbers : 3, -7, 2
// Output : The sign is -

// var x = 2;
// var y = -7;
// var z = 4;
// if (x > 0 && y > 0 && z > 0) {
//   alert("the sign is +");
// } else if (x > 0 && y < 0 && z < 0) {
//   alert("the sign is +");
// }else if (x<0&& y<0 &&z>0){
//     alert("the sign is +")
// }else{
//     alert("the sign is - ")
// }

// Write a simple JavaScript program to join all elements of the following array into
// a string.
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"

// var colors = ["red", "green", "white", "black"];

// document.write(colors.toString() + "<br>");

// document.write(colors.join() + "<br>");
// document.write(colors.join("+") + "<br>");

// Write a JavaScript program to display the colors in the following way : 
// Here is the sample array: 
// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "]; 
// o = ["th","st","nd","rd"]
// Output 
// "1st choice is Blue ." 
// "2nd choice is Green." 
// "3rd choice is Red."
//  var colors = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "]; 
//  o = ["th","st","nd","rd"]
// alert("1"+ o[1]+ " choise is " + colors[0])
// alert("2"+ o[2]+ " choise is " + colors[1])
// alert("3"+ o[3]+ " choise is " + colors[2])