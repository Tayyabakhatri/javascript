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

var t = 5;
result = "";


