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
  n=5
  for(var i = 0; i <= n; i++){
    for(var j = 0; j<=i; j++){
      document.write("*")
    }
    document.write("<br>")
  }
  
  for(var i = 0; i<n; i++){
    for(var j = 5; j>i;j--){
      document.write("*")
    }
    document.write("<br>")
  }




// // 11. Hollow Diamond Pattern
n=5
  for(var i = 0; i <= n; i++){
    for(var j = 0; j<=i; j++){
      if(i==0||i==n||j==0||j==i){

        document.write("*")
      }
      else{
        document.write("&nbsp;")
      }
    }
    document.write("<br>")
  }
  
  for(var i = 0; i<n; i++){
    for(var j = 5; j>i;j--){
     if(i==0||i==j||j==0||j==n){
      document.write("*")
     }
     else{
      document.write(" &nbsp;")
     }
    }
    document.write("<br>")
  }
// 12. Hourglass Star Pattern
// 13. Right Pascal Star Pattern
// 14. Left Pascal Star Pattern
// 15. Heart Star Pattern In JavaScript

