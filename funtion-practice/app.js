// var today = new Date();
// var hours = today.getHours()%12;
// var minutes = today.getMinutes();
// var ampm ;
// if(hours>=12){
//     ampm= "AM";
// }
// else{
//     ampm = "PM"
// }
// document.write("The current time is:"+hours+":"+minutes+ampm)


// function factorial(){
//     var userInput = Number(prompt("enter any number for factorial:"));
//     if(userInput<0){
//         alert("error : factorial is not defined for negative number :")
//     }else{
//         var result = 1;
//         for (var i = 2 ; i<= userInput ; i++){
//             var result = result*i
//             console.log(result)

//         }

//     }
//     alert("the factorial of " + userInput + "is " + result)
// }
// factorial()


// var x = +prompt("enter num1")
// var y = +prompt("enter num2")
// console.log(Math.hypot(x,y))




// Certainly! Here are some logic questions related to functions in JavaScript:

// 1. **Function Basics:**
//    - Explain the difference between declaring a function using `function` declaration vs. `function` expression in JavaScript.

// 2. **Function Parameters:**
//    - Write a function `sumNumbers` that takes two parameters `a` and `b` and returns their sum. How would you call this function with arguments `3` and `7`?

// 3. **Function Scope:**
//    - What is the scope of variables declared inside a function using `var`, `let`, and `const`? How does it differ from variables declared outside of any function?

// 4. **Returning Values:**
//    - Write a function `multiplyByTwo` that takes a number as an argument and returns twice that number. How would you call this function with the argument `5` and log the result to the console?

// 5. **Anonymous Functions:**
//    - What are anonymous functions in JavaScript? Provide an example of an anonymous function and explain when you might use one.

// 6. **Function Composition:**
//    - Explain the concept of function composition in JavaScript. Provide an example where you compose two functions to achieve a specific result.

// 7. **Recursion:**
//    - What is recursion in the context of functions? Write a recursive function to calculate the factorial of a number.

// 8. **Callbacks:**
//    - What are callbacks in JavaScript? Provide an example of using a callback function in an asynchronous operation such as fetching data from an API.

// 9. **Arrow Functions:**
//    - How do arrow functions differ from regular functions in JavaScript? Provide an example where an arrow function would be more suitable than a regular function.

// 10. **Higher-Order Functions:**
//     - Explain what higher-order functions are and provide an example of using `map`, `filter`, or `reduce` functions in JavaScript.

// These questions cover various aspects of functions in JavaScript, from basic syntax and scope to advanced concepts like recursion and higher-order functions. They can be used to test understanding and proficiency in using functions effectively in JavaScript programming.





// var daysOfWeek = ["mon", "tues", "wed", "thur", "fri", "sat", "sun"];
// var check = prompt("enter any name of day", "eg ; mon,tues ...").toLowerCase()

// var flag = false;
// for (var i = 0; i < daysOfWeek.length; i++) {

//     if (check == daysOfWeek[i]) {
//         flag = true
//         break;
//     }
// }
//     if (flag) {
//         switch (check) {
//             case "sun":
//                 alert("sunday is a working day")
//                 break
//             case "sat":
//                 alert("saturday is a funday ")
//                 break
//             default:
//                 alert("working days :")
//                 break
//         }

//     }