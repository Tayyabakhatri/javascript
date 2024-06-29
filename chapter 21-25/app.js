// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// var userFirstName = prompt("hey 👋, Enter your first name:")
// var userlastName = prompt("hey 👋, Enter your last name:")
// var firstNameTittled = userFirstName[0].toUpperCase() +userFirstName.slice(1).toLowerCase();
// var lastNameTittled = userlastName[0].toUpperCase ()+userlastName.slice(1).toLowerCase();
// alert(firstNameTittled+" "+lastNameTittled)

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// var userFavMobile = prompt("Enter you favourite mobile phone :")
// var strLength = userFavMobile.length;
// document.write("My favourite mobile phone is "+userFavMobile+" srting Length is "+strLength)

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

// document.write("<br><br>")
// var name = "pakistan";
// var index = name.indexOf("n")
// document.write("Index of 'n' in the string "+name+" is "+index)

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.
// var greet = "hello world";
// var findingIndex = greet.lastIndexOf("l")
// document.write("string: " + greet+"<br>")
// document.write("last index of 'l' :" + findingIndex)

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

//method 1
// var word = "pakistani";
// var charOfIndex3 = word[3]
// document.write("string: " + word +"<br>" +`${"character at index 3 :" + charOfIndex3}`);

//method 2
// var word = "pakistani";
// var findingChar = word.charAt(3)
// document.write("string: " + word +"<br>" +`${"character at index 3 :" + findingChar}`);

//method 3
// var word = "pakistani";
// index = word.slice(3,4)
// document.write("string: " + word +"<br>" +`${"character at index 3 :" + index}`);

// 6. Repeat Q1 using string concat() method.
//1.  Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

//  var userFirstName = prompt("hey 👋, Enter your first name:")
//  var userlastName = prompt("hey 👋, Enter your last name:")
//  var firstNameTittled = userFirstName[0].toUpperCase() +userFirstName.slice(1).toLowerCase();
//  var lastNameTittled = userlastName[0].toUpperCase ()+userlastName.slice(1).toLowerCase();
//  var concatenat = firstNameTittled.concat(lastNameTittled)
//  document.write(concatenat)

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.
var city1 = "Hyderabad";
for (var i = 0; i < city1.length; i++) {
  if (city1.slice(i, i + 5) == "Hyder") {
    var replace = city1.replace("Hyder", "Islam");
  }
}
console.log(replace);
document.write("city: " + city1 + "<br>" + "After replacement: " + replace);

document.write("<br><br><br>");

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
var message =
  "“Ali and Sami are best friends.They play cricket and football together.";

for (var i = 0; i < message.length; i++) {
  if (message.slice(i, i + 3) == "and") {
    var replacedWord = message.replace("and", "&");
  }
}
document.write(
  "original message : " + message + "<br>" + "Replaced message :" + replacedWord
);

document.write("<br><br><br>");
//  9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser

var str = "472";
var strIntoNum = Number(str);
document.write(
  "value: " +
    str +
    "<br>" +
    "type: " +
    typeof str +
    "<br>" +
    "value: " +
    strIntoNum +
    "<br>" +
    "type:" +
    typeof strIntoNum
);

document.write("<br><br>");
// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

// var input = prompt("write any thing and i will convert it in to UPPER CASE ");
// var convert = input.toUpperCase();
// document.write("user input: " + input + "<br>" + "upper case: " + convert);

// 11. Write a program that takes user input. Convert and
// show the input in title case.
// var userInput = prompt("write what you want :");
// var splittedInput = userInput.split(" ");
// var finish = [];
// for (var i = 0; i < splittedInput.length; i++) {
//   finish.push(splittedInput[i][0].toUpperCase() + splittedInput[i].slice(1).toLowerCase());
    
// }
// var result = finish.join(" ")
// document.write("user input "+userInput+"<br>"+"Title case : " +result)


// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// var num = 35.36 ;
// var intoNum = num.toString();
// for(var i = 0 ; i < intoNum.length; i++){
//     if(intoNum.slice(i,i+1)=="."){
//         var result=intoNum.replace(".","")
//     }
// }
// document.write("Number:"+intoNum+"<br>"+"Result: "+result)

// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

// var userName = prompt("enter your user name: ")
// for(var i = 0 ; i < userName.length;i++){
//     if(userName[i]==33||44||46||64){
//         alert("enter valid username ")
//         break;
//     }
// }


// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. 

var userInput = prompt("Enter your favourite fruit")
A = ["cake", "apple pie", "cookie", "chips", "patties"]
