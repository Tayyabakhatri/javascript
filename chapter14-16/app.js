// 1. Declare an empty array using JS literal notation to store
// student names in future.
var stdName = ['string 1', 'string2'];
// 2. Declare an empty array using JS object notation to store
// student names in future.
var studName = { name: "", };
// 3. Declare and initialize a strings array.
var strArray = [];
// 4. Declare and initialize a numbers array
var iniArray = [1, 2, 3]

// 5. Declare and initialize a boolean array
var bolArray = [true, false];

// 6. Declare and initialize a mixed array.
var mixArray = ["string", 25, true, "srtring2"];
// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser
// var qualifications = ['SSC', 'HSC', 'BCS',
//     'BS', 'BCOM', 'MS', 'M.Phil.', 'PhD'];
//     document.write("1)"+qualifications[0]);
//     document.write("<br>2)" +qualifications[1]);
//     document.write("<br>3)"+ qualifications[2]);
//     document.write("<br>4)"+ qualifications[3]);
//     document.write("<br>5)"+qualifications[4]);
//     document.write("<br>6)"+qualifications[5]);
//     document.write("<br>7)"+qualifications[6],"<br>8)"+qualifications[7]);
//     // alse can do this
//     document.write("<h1>Qualifications</h1>","1)"+qualifications[0],"<br>2)"+qualifications[1],"<br>3)"+qualifications[2],"<br>4)"+qualifications[3],"<br>5)"+qualifications[4],"<br>6)"+qualifications[5],"<br>7)"+qualifications[6],"<br>8)"+qualifications[7]);


//  8.   Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students
// var studentName = ['Michael','john','Tony'];
// var stdScore = [320, 230,480];
// var totalMarks=[500];
// document.write("<br><br><br> Score of  "+studentName[0]+"  is  "+stdScore[0]+"  percentage  "+(stdScore[0]/totalMarks)*100+"%",
// "<br> Score of  "+studentName[1]+"  is  "+stdScore[1]+"  percentage  "+ ((stdScore[1]/totalMarks)*100 +"%"),
// "<br> Score of  "+studentName[2]+ "  is  "+stdScore[2]+"  Percentage  "+ ((stdScore[2]/totalMarks)*100 + "%"));

// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// Arrays | JAVASCRIPT
// Page 3 of 6
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.



// Initialize an array with color names. Display the array
// elements in your browser.
var colorsName = ["blue ", "Green", "Yellow", "Orange", "Purple", "white", "Grey", "Pink", "black", "siyan"];
// document.write(colorsName +"<br><br>");

// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// var userColor = prompt("Which color you want to add ?");
// colorsName[0]=userColor
// document.write("<br>"+colorsName+"<br><br>");

// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// colorsName.push(userColor);
// document.write("<br>"+colorsName);


// c.

// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// colorsName=[0][1]=[",marine blue", "ice blue"]
// document.write("<br>"+colorsName)


// .d
// d. Delete the first color in the array. Display the updated
// array in your browser.
// colorsName.shift();
// document.write(colorsName);




// .e
// var delColor=colorsName.pop()
// document.write(colorsName)
// console.log(delColor)
// // pop will delete only last value of the array ,how to delete first value?
// .f
// var desiredColor = prompt("enter your desired color:");
// var desiredIndex = prompt("on which index you would like to add this?");
// colorsName[desiredIndex]=(desiredColor);
// document.write(colorsName);

// .g
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// Arrays | JAVASCRIPT
// Page 3 of 6
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser

// var desiredDelIndex = +prompt("provide index numbers :");
// var desiredDelColor = +prompt("how many colors do you want to delete?");
// colorsName.splice(desiredDelIndex,desiredDelColor);
// document.write(colorsName)
// splice method takes two arguments 1)The index at which to start deleting elements(in this case desiredDelIndex )
// 2) The number of elements to delete(in this case desiredDelColor)

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

// var stdNumbers = [230,320,480,120]
// document.write("<br> numbers of students"+stdNumbers)
// stdNumbers.sort()
// document.write("<br> sorting in acsending order"+stdNumbers);
// sort is used to sort the data alphabatically or numerically in acsending order


// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array

var cities = ["Karachi", "Lahore", "Islamabad", "quetta", "peshawar"];
// first three elements
var selectedCities = cities.slice(0, 3);
console.log(selectedCities);
// last three elements
selectedCities = cities.slice(-3);
console.log(selectedCities);
// middle cities
selectedCities = cities.slice(1, 4);
console.log(selectedCities);
// specific citeis
selectedCities = [cities[1], cities[4]];
console.log(selectedCities)




// 12. Write a program to create a single string from the
// below mentioned array:
var arr = ["This", "is", "my", "cat"]
document.write("<br>" + arr)
arr.join("");
console.log("<br>" + arr);



// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored.
// var devices = [];
// devices.push("Keyboard");
// devices.push("mouse");
// devices.push("printer");
// devices.push("monitor");
// console.log(devices[0])
// console.log(devices[1])
// console.log(devices[2])
// console.log(devices[3])
// devices.push("keyboard", "monitor","mouse ","printer");
// console.log(devices)

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)
var devices = []
devices.push("Keyboard");
devices.push("mouse");
devices.push("printer");
devices.push("monitor");
 console.log(devices.pop());
 console.log(devices.pop());
 console.log(devices.pop());
 console.log(devices.pop());

//  here we can use loop method for grtting values without removing values .since we havent learned that so i have used pop 


// 15. Write a program to store phone manufacturers (Apple,
    // Samsung, Motorola, Nokia, Sony & Haier) in an array.
    // Display the following dropdown/select menu in your
    // browser using document.write() method:
var  phoneManufacturers= ["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
document.write("<br><br> <select>")
for (var i = 0; i < phoneManufacturers.length; i++) {
    document.write('<option value="' + phoneManufacturers[i] + '">' + phoneManufacturers[i] + '</option>');
}
document.write('</select>');






