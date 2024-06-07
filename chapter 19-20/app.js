// var cities = ["karachi", "islamabad", "peshawar", "quetta", "lahore", "multan"]
// var userCity = prompt("enter your city:");
// var found = false;
// for (i = 0; i < cities.length; i++) {
//     if (cities[i] == userCity) {
//         found =true;
//         break
//     }
// }

// if(found){
//     alert("your city is found")
// }
// else{
//     alert("your city is not found")
// }

// nesting of loops
// var matrix=[[0,1,2,3],[4,5,6,7],[8,9,10,11]]
// for (var i=0;i<matrix.length;i++){
//     document.write(matrix[i].join( " ")+"<br>")
// }
// for (var i=0;i<matrix.length;i++){
//     for(j=0;j<matrix[i].length;j++){
//         document.write(matrix[i][j]+" ")
//     }
//     document.write("<br>")
// }

// star patterns
// Hollow Square Pattern
for (var i = 0; i < 5; i++) {
  for (var j = 0; j < 5; j++) {
    if (i === 0 || i === 5 - 1) {
      document.write("*");
    } else if (j === 0 || j === 5 - 1) {
      document.write("*");
    } else {
      document.write("&nbsp;&nbsp;");
    }
  }
  document.write("<br>");
}
// Right Triangle Pattern in Javascript
for (var i = 0; i < 1; i++) {
  document.write("*");
  document.write("<br>");
  for (var j = 0; j < 2; j++) {
    document.write("*");
  }
  document.write("<br>");
  for (var k = 0; k < 3; k++) {
    document.write("*");
  }
  document.write("<br>");
}

for (var i = 1; i <= 5; i++) {
  for (var j = 1; j <= i; j++) {
    document.write("?/");
  }
  document.write("<br>");
}

// for (var i=5;i>=0;i--){
//     for(var j=5;j<=i;j--){
//         document.write("*")
//     }
//     document.write("<br>")
// // }

// 1. Checking if a Number is in an Array
var num = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 18, 19, 20,
];

// var userNum=+prompt("enter any number");
// var flag=false;
// for(i=0;i<num.length;i++){
//     if(num[i]==userNum){
//         flag=true
//         break;
//     }
// }
// if(flag){
//     alert("your number is found")
// }
// else {
//     alert("your numbe ris not found")
// }

// array se sirf wohi values uthai hen jo multiples of two hen

// var multiplesOf2=[];
//     for(var i=0;i<num.length;i++){
//         if(num[i]%2==0){
//             multiplesOf2.push(num[i])
//         }
//     }
//     console.log(multiplesOf2)

// 2. Finding a Word in a Sentence
// var sentence="what is yor name";
// var splittedArr=sentence.split(" ")

// var flag=false;
// var userWord=prompt("enter a word you want:")
// for(i=0;i<splittedArr.length;i++){
//     if(splittedArr[i]==userWord){
//         flag=true
//         break;
//     }
// }
// if(flag){
//     alert("your word is found")
// }
// else{
//     alert("your word is not found")
// }

for (var i = 5; i >= 1; i--) {
  for (var j = 1; j <= i; j++) {
    document.write("*");
  }
  document.write("<br>");
}

for (var i = 10; i >= 1; i--) {
  for (var j = 1; j <= i; j++) {
    document.write("%");
  }
  document.write("<br>");
}
for (var i = 1; i <= 10; i++) {
  for (var j = 1; j <= i; j++) {
    document.write("%");
  }
  document.write("<br>");
}
var n = 5;
for (var i = 1; i < 6; i++) {
  document.write(n + "X" + i + "=" + `${n * i}`);
  document.write("<br>");
}
// document.write("time<br>");
// for (var i = 1; i <= 12; i++) {
//   for (var j = 1; j < 61; j++) {
//     document.write(i + ":" + j);
//     document.write(" ");
//     document.write("<br>");
//   }
//   document.write("<br>");
// }

//  pyramid

for (var i = 1; i <= 11; i++) {
  for (var j = 11; j > i; j--) {
    document.write(" &nbsp ");
  }
  for (var k = 1; k <= 2 * i - 1; k++) {
    document.write("*");
  }
  document.write("<br>");
}
for (var i = 11; i >= 1; i--) {
  for (var j = 1; j < i; j++) {
    document.write(" &nbsp ");
  }
  for (var k = 1; k <= 2 * i - 1; k++) {
    document.write("*");
  }
  document.write("<br>");
}

// dots patterns

for (var i = 1; i <= 10; i++) {
    for (var j = 1; j <= 10; j++) {
        if (i === 1 || i === 10 || j === 1 || j === 10) {
            document.write("*");
        } else {
            document.write("&nbsp");
        }
    }
    document.write("<br>");
}
   
    
