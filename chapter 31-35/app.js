// 1. Write a program that displays current date and time in
// your browser.


var today = new Date();
document.write(today)
document.write("<hr>")
// 2. Write a program that alerts the current month in words.
// For example December.


// var today = new Date();
// var month = today.getMonth();
// var months =["jan","feb","mar","Apr","May","june","july","aug","sep","oct","nov","dec"]
// alert("Current month :"+ months[month])


document.write("<hr>")
// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.


// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var today = new Date();
// var day = today.getDay();
// var str = day.toString()
// alert(days[str])

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.
// var days = new Date();
// var day = days.getDay();
// var allDays = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]
// console.log(allDays[day])
// if(day=="sunday" && days=="sunday"){
//     alert("its a funday")
// }



// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”

var toDay = new Date();
var month = toDay.getMonth();
var months = ["jan","feb","mar","apr","may","june","july","aug","sep","oct","nov","dec"]
var date = toDay.getDate()
var days = ["mon","tues","wed","thur","fri","sat","sun"]
console.log(month);