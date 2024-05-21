// task1
// var alphabet = prompt("enter alphabet");
// if (alphabet.charCodeAt >=65 && alphabet.charCodeAt <=90){
//     alert("Its an Uppercase letter");
// }
// else if (alphabet<=97 && alphabet>=122){
//     alert("its a smallcase letter");
// }
// else if (alphabet>=48 && alphabet<=57){
//     alert("its a number")
// }
// else if ((alphabet>=32 && alphabet<=47)|| (alphabet<=58 && alphabet>=64)||(alphabet<=91&& alphabet>=96)||(alphabet<=123&& alphabet>=126)){
//     alert("its a puctuation mark")
// }

// var alphabet = prompt("Enter a single character:");

// if (alphabet.length !== 1) {
//     alert("Invalid input! Please enter a single character.");
// }
//  else {
//     var asciiCode = alphabet.charCodeAt(0);

//     if (asciiCode >= 65 && asciiCode <= 90) {
//         alert("It's an uppercase letter.");
//     } else if (asciiCode >= 97 && asciiCode <= 122) {
//         alert("It's a lowercase letter.");
//     } else if (asciiCode >= 48 && asciiCode <= 57) {
//         alert("It's a number.");
//     } else if ((asciiCode >= 32 && asciiCode <= 47) || 
//                (asciiCode >= 58 && asciiCode <= 64) || 
//                (asciiCode >= 91 && asciiCode <= 96) || 
//                (asciiCode >= 123 && asciiCode <= 126)) {
//         alert("It's a punctuation mark.");
//     } else {
//         alert("The character does not fall into any of the specified categories.");
//     }
// }




// task2
// let userInt = +prompt("enter your number");
// let userInt2 = +prompt("enter your second number");
// if (userInt>userInt2){
// alert("Greater number is "+userInt+" 👱‍♀️");
// }
// else if(userInt2>userInt){
//     alert("Greater number is "+userInt2+" 👱‍♀️");
// }
// also can do like this
// const num1 = parseInt(prompt("enter your first number"));
// const num2 = parseInt(prompt("enter your second number"));
// if(num1>=0 && num2>=0){
//     alert(num1+" and"+ num2 +" Both are Positive");
// }
// else if(num1<0 && num2<0){
//     alert(num1+" and"+ num2 +" Both are Negative");
// }
// else{
//     alert( "one is positive and other is negative");
// }




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
// var userAlphabet = prompt("Enter any alphabet");
// if (userAlphabet===a||userAlphabet===e||userAlphabet===i||userAlphabet===o||userAlphabet===u){
//     alert("its a vawel");
// }
// else{
//     alert("its a consonent");
// }
// var userInput = +prompt("enter anything ,I will tell you what you have entered");
// let number =[1,2, 3 ,4 ,5 ,6, 7, 8 ,9, 10]
// let speCharactors = ["!","@","#","$","%","^","&","*","(",")","?"]
// if (number.includes(userInput)){
//     alert("its number");
// }
// else if(speCharactors.includes(userInput)){
//     alert("its a special charactor");
// }
// else ("its alphabet");
// 
console.log("hello">"Hello");
// its a true
// because of unicodes . in unicodes h has a greater value then H
console.log("apple">"banana");
// its a false


// task5
// const correctPassward = 348906789
// const userPassward = +prompt("Enter your Passward👈:")
// if(userPassward ==="" || userPassward===null){
//     alert("Please Enter your passward")
// }
// else if (userPassward===correctPassward){
//     alert("Correct👌");
// }
// else{
//     alert("Incorrect")
// }
// task6

// var greetting;
// var hour = 13;
// if (hour<18){
// greetting="GoodDay";
// }
// else{
// greetting="GoodEvening";
// }
// alert(greetting);



// task7
// const time = prompt("Enter time : (e.g:19:00)");
// prompt se pehly + nahi lgana q k input type string hogi ,phir nechy hours and minutes men jo value store krai he us se pehle :parseInt ka yehi akm he k wo string ko number men convert kry
// more to this split is a method not a keyword .its is a method use to split a string into array eg "hello, world!"
// split will seperate the ["hello" "world"] and make it array using , as the seperator

// const hours = parseInt(time.split(":")[0]);
// const minutes = parseInt(time.split(":")[1]);
// if(hours>=6 && hours<12){
//     alert("Good Morning");
// }
// else if(hours>=12 && hours<18){
//     alert("Good Afternoon");
// }
// else if (hours>=18 && hours<24){
//     alert("Good evening ");
// }
// else if (hours>=21 && hours<24){
//     alert("Good Night");
// }


// practice 
// function assessNumber(a,b,c){
//     if (a>5||b<10||c===0){
//         return"condition A";
//     }
//     else if(a===b&&b===c){
//         return"condition B"
//     }
//     else if(!(a<0||b<0||c<0)){
//         return"condition C"
//     }
//     else{
//         return "conditionD"
//     }

// }
 


var userInput = +prompt("enter number")
if(userInput== null || ""){
    alert("please enter number")
}
else{
    if(userInput>5 && userInput<10){
        alert("condition A")
    }
    else if (userInput<0||userInput>20){
        alert("condition B")
    }
    else if(userInput==0 ){
        alert("condition c")
    }
}








