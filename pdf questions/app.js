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
for (var i =1 ; i<16;i++){
    console.log(i)
}
// #2 — Print the numbers from 12 to 24
for (var i = 12 ;i <25;i++){
    console.log(i)
}


// #3 — Print the ODD numbers from 7 to 31

for(var i = 7 ; i < 31; i++){
    if(i%2!=0){
        console.log(i)
    }
}

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


