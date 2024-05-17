// task3
// var num1 = +prompt("enter you number");

// if (num1>=0){
//     alert("Its a positive number👩");
// }
// else{
//     alert("Its a negative number🙍‍♀️");
// }
// task4
// var userAlpha = prompt("typr any alphabet");
// let vowels = ["a", "e", "i" , "o","u"];
// if (vowels.includes(userAlpha)){
//     alert("true");
// }
// else{
//     alert("false");
// }
var userInput = +prompt("enter anything ,I will tell you what you have entered");
let alphabet =[1,2, 3 ,4 ,5 ,6, 7, 8 ,9, 10]
let speCharactors = ["!","@","#","$","%","^","&","*","(",")","?"]
if (alphabet.includes(userInput)){
    alert("its number");
}
else if(speCharactors.includes(userInput)){
    alert("its a special charactor");
}
else ("its alphabet");

