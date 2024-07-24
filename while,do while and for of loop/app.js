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
while (!newPassward){
    var newPassward = prompt("create a new passward: ")
    if(newPassward.length!==8){
        alert("passward should contain 8 characters: ")
    }
       if(!newPassward.charCodeAt(65,90)){
        alert("passward should contain atleast 1 uppercase character")
       }else{
        alert("there is a upper case ")
    }
    // else{
    //     alert("length is correct :")
    // }
    
    
    
    
}
