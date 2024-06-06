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
for (var i=0;i<5;i++){
    for(var j=0;j<5;j++){
        if (i===0||i===5-1){
            document.write("*")
        }
        else if(j===0||j===5-1){
            document.write("*")
        }
        else{
            document.write("&nbsp;&nbsp;")
        }

            
    }
    document.write("<br>"); 
    
}
// Right Triangle Pattern in Javascript
for(var i=0;i<1;i++){
    document.write("*")
    document.write("<br>")
    for(var j=0 ;j<2;j++){
        document.write("*")
        
    }
    document.write("<br>")
    for(var k=0;k<3;k++){
        
        document.write("*")
    }
}


let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 0; j < n - i; j++) {
    string += " ";
    
  }
  
  // printing star
  for (let k = 0; k < i; k++) {
    string += "*";
    
  }
  
  string += "\n";
  
}

console.log(string);
 





// 1. Checking if a Number is in an Array
var num=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,18,19,20]

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




