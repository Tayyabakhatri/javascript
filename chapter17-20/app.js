// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)
// var multidimensionalArray =[[],[],[]];


// 2. Declare and initialize a multidimensional array
// representing the following matrix:
// var multidimensionalArray2 =[[0,1,2,3],[1,0,1,2],[2,1,0,1]];


// 3. Write a program to print numeric counting from 1 to 10.
// for(var i=1 ; i<=10;i++){
//     document.write("<h2>"+i+"<br>");
// }

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.
// var num1 = +prompt("Enter anumber to show its multiplication number");
// var num2 = +prompt("Enter length multiplication table");
// for(var i=1; i<=num2; i++){
//     document.write(num1 + "X"+ i + "=" +num1*i+"<br>")
// }


// 5. Write a program to print items of the following array
// using for loop:
// var fruits = ["apple", "banana", "mango", "orange",
//     "strawberry"]
//     for(var i=0; i<fruits.length; i++){
//         document.write(fruits[i]+"<br>");
//     }
//     for(var i=0; i<fruits.length; i++){
//         document.write("Element at Index "+i +" "+fruits[i]+"<br>")
//     }


//     6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// a.
var count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
document.write("question 6 a<br>")
for (var i=1; i<=15; i++){
    document.write(i+"<br>"+"<hr>")
}
document.write("question 6 b<br>")
// b.
for(var i = 10 ; i>=1; i--){
    document.write(i+"<br>"+"<hr>")
}
document.write("question 6 c<br>")
for (var i=0; i<=20; i++){
    if(i%2==0){
        document.write(i+"<br>"+"<hr>"  )
    }
}
document.write("question 6 d<br>")
for (var i=0; i<=20; i++){
    if(i%2!=0){
        document.write(i+"<br>"+"<hr>"  )
    }
}  

document.write("question 6 e<br>")
for (var i=0; i<=20; i++){
    if(i%2==0){
        document.write(i+"k"+"<br>"+"<hr>"  )
    }
}


// 7. You have an array

// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not.
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome to our ABC bakery.What do you want to order maam/sir?")
if(A.includes(userInput)){

    alert(userInput+" is available at index "+`${A.indexOf(userInput)}`+" in our bakery")
}
else if (!A.includes(userInput)){
    alert(userInput+" is not available "+"in our bakery")
}

// 8. Write a program to identify the largest number in the
// given array.
var num = [24, 53, 78, 91, 12];
var largestNum = num[0];
for(var i=0; i<num.length;i++){
    if(num[i]>largestNum){
        console.log(largestNum =num[i])
    }
}

   





// 9. Write a program to identify the smallest number in the
// given array.
var numArr= [24, 53, 78, 91, 12]
var smallestNum = numArr[0]
for(var i=0; i<numArr.length; i++){
    if(numArr[i]<smallestNum){
        console.log(smallestNum=numArr[i])
    }
}

// 10. Write a program to print multiples of 5 ranging 1 to
// 100

// for(var i=1 ; i<=100 ;i++){
//     if(i%5==0){
//         document.write("<br>"+i)
//     }
// }







