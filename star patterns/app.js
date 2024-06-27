// 1. Square Star Pattern in Javascript
// var n = 6;
// document.write("NO.1 <br>");
// for (var i = 0; i < n; i++) {
//   for (var j = 0; j < n; j++) {
//     document.write("*");
//   }
//   document.write("<br>");
// }

// 2. Hollow Square Pattern
// document.write("NO.2 <br>");
// var n = 5;
// for (var i = 0; i <= n; i++) {
//   for (var j = 0; j <= n; j++) {
//     if (i == 0 || i == n || j == 0 || j == n) {
//       document.write("*");
//     } else {
//       document.write("&nbsp;");
//     }
//   }
//   document.write("<br>");
// }

// 3. Right Triangle Pattern in Javascript
// document.write("NO.3 <br>");
// var n = 5;
// for (var i = 0; i <= n; i++) {
//   for (var j = n; j > i; j++) {
//     document.write(" ");
//     }
//         for (var k = 0; k < i; k++) {
//           document.write("*");
//         }
//   document.write("<br>");
// }
// document.write("NO.4 <br>");

// 5. Downward Triangle Star Pattern
// for(var i=5;i>0;i--){
//   for(var j=0;j<i;j++){
//     document.write("*")
//   }
//   document.write("<br>")
// }

// 6. Hollow Triangle Star Pattern
// var n =5
// for(var i = 0; i <= n; i++){
//   for(var j = 0; j <= i; j++){
//     if( i==n||i==0||j==0||j==i){
//       document.write( "*")
//     }
//     else{
//       document.write("&nbsp;")

//     }
//     }
//     document.write("<br>")
//   }
// 10. Diamond Pattern in Javascript
n = 5;
for (var i = 0; i <= n; i++) {
  for (var j = 0; j <= i; j++) {
    document.write("*");
  }
  document.write("<br>");
}

for (var i = 0; i < n; i++) {
  for (var j = 5; j >= i; j--) {
    document.write("*");
  }
  document.write("<br>");
}

// // 11. Hollow Diamond Pattern
document.write("mera wala <br>");
n = 5;
for (var i = 0; i < n; i++) {
  for (var j = 0; j < i; j++) {
    if (j == 0 || j == n) {
      document.write("*");
    } else {
      document.write("&nbsp;&nbsp;");
    }
  }
  document.write("<br>");
}

for (var i = 0; i < n; i++) {
  for (var j = 5; j > i; j--) {
    if (i == 0 || i == j || j == 0 || j == n) {
      document.write("*");
    } else {
      document.write(" &nbsp;&nbsp;");
    }
  }
  document.write("<br>");
}

document.write("chat gpt wala <br>");

var n = 5;

// Upper part of the hollow diamond
for (var i = 0; i < n; i++) {
  // Printing leading spaces
  for (var j = 0; j < n - i - 1; j++) {
    document.write("&nbsp;&nbsp;");
  }
  // Printing stars and spaces inside
  for (var j = 0; j <= i; j++) {
    if (j == 0 || j == i) {
      document.write("* ");
    } else {
      document.write("&nbsp;&nbsp;");
    }
  }
  document.write("<br>");
}

// Lower part of the hollow diamond
for (var i = n - 1; i > 0; i--) {
  // Printing leading spaces
  for (var j = 0; j < n - i; j++) {
    document.write("&nbsp;&nbsp;");
  }
  // Printing stars and spaces inside
  for (var j = 0; j < i; j++) {
    if (j == 0 || j == i - 1) {
      document.write("* ");
    } else {
      document.write("&nbsp;&nbsp;");
    }
  }
  document.write("<br>");
}

// 12. Hourglass Star Pattern
// 13. Right Pascal Star Pattern
// 14. Left Pascal Star Pattern
// 15. Heart Star Pattern In JavaScript

var arr1 = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];
var arr2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
var multiple = [];
for (var i = 0; i < arr1.length; i++) {
  multiple[i] = [];
  for (var j = 0; j < arr2[i].length; j++) {
    multiple[i][j] = arr1[i][j] * arr2[j][i];
  }
 document.write(multiple);

  document.write("<br>");
}
var t = 5;

for (var i = 0; i <= t; i++) {
  for (var j = 0; j <= i; j++) document.write("*");
  document.write("<br>");
}

// var city = ["karachi", "lahore", "peshawar", "sialkot", "quetta", "aibatabad"];
// var userCity = prompt("enter your city:");
// for (var i = 0; i < city.length; i++) {
//   if (userCity == city[i]) {
//     alert("your city is matched");
//     break;
//   }
// }
// if (userCity!= city[i]) {
//   alert("not found");
// }


// var city = ["karachi", "lahore", "peshawar", "sialkot", "quetta", "abbotabad"];
// var userCity = prompt("enter your city:")
// var flag = false
// for(var i = 0; i<city.length; i++){
//   if(userCity===city[i]){
//     alert("your city found")
//     flag = true
//     break;
//   }
// }
// if(userCity!==city[i]){
// alert("not found")
// }

//chapter 21 practice
//changing case
var userName = "tayyaba";
var changeCase = userName.toUpperCase();
console.log(changeCase)





var arr1 = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];
var arr2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
var multiple = [];
var result = "";

// Correct matrix multiplication logic
for (var i = 0; i < arr1.length; i++) {
  multiple[i] = [];
  for (var j = 0; j < arr2[0].length; j++) {
    var sum = 0;
    for (var k = 0; k < arr1[0].length; k++) {
      sum += arr1[i][k] * arr2[k][j];
    }
    multiple[i][j] = sum;
  }
  result += multiple[i].join(" ") + "<br>";
}

document.write(result);



// Define the input string.
// Initialize an empty result string.
// Loop through each character in the input string.
// For each character, check if it is lowercase. If so, convert it to uppercase.
// If the character is uppercase, convert it to lowercase.
// Append the converted character to the result string.
// Print the original and the changed case string.

// var userInput = prompt("enter any text");
// var userlength = userInput.length

// var result ;
// for(var i = 0 ; i < userlength ; i++ ){
//   if(userInput[i]== userInput[i].toLowerCase()){
//    result= userInput[i].toUpperCase()
//   }
//   else if(userInput[i]==userInput[i].toUpperCase()){
//     result=userInput[i].toLowerCase()
//   }
//   console.log(result);
// }



// write a program of changing case in to tilttle case
// var input = prompt("write a paragraph");
// var splitted = input.split(" ");
// var tlttleCase = [];
// for(var i = 0 ; i < splitted.length; i++){
//   var upper = splitted[i][0].toUpperCase();
//   var lower = splitted[i].slice(1).toLowerCase();
//   tlttleCase.push(upper+lower);
// }
// var result = tlttleCase.join(" ");
// console.log(result)



//task 1 game of head and tail
// var player1 = prompt("first player : Enter your name.")
// var player2 = prompt("second player : Enter your name.")
// var toss = prompt(player1+"what would you choose HEAD or TAIL?")
// var  randomNum = Math.random()*2
// var roundingNum = Math.floor(randomNum)
// if (toss = "head"&& roundingNum==1){
//   alert(player1+"you won")
// }
// else{
//   alert(player1+"you lose")
// }

//task 2 random passwar generator
// var userPassword = parseInt(prompt("enter length of the passward you want to generate"));
// var characters = "AZXCVBNMKJHGFDSQWERTYUIOPqwertyuioplkjhgfdsazxcvbnm1234567890!@#$%^&*()_+=-/.,<>?[]{};':"
// var passward = [];
// for ( var i = 0 ; i < userPassword;i++){
//   var randomchar = Math.floor(Math.random()*characters.length)
//   passward.push(characters[randomchar])
// }
// var result=passward.join("")
// document.write("passward: " +result)


//task 3 
var name1 = "Tayyaba";
// var position = [];
// for (var i = 0 ; i < name1.length; i++){
//   if (name1[i]== "a"){
//     position.push(i)
//   }
// }
// console.log(position)

var splitted = name1.split("")
console.log(splitted)
for( var i = 0 ; i <splitted.length; i++){
  if (splitted[i]=="a"){
    console.log(i)
  }
}





var fruits = ["mango" , "banana" , "peach" , "papaya"];
// var index= (fruits.indexOf("papaya"))
// console.log(index)