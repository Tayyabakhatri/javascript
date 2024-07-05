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

// var toDay = new Date();
// var date = toDay.getDate()
// var days = ["mon","tues","wed","thur","fri","sat","sun"]
// console.log(date);
// if(date < 16 ){
//     alert("First fifteen days of the month")
// }
// else{
//     alert("Last days of the month")
// }



// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

var toDay = new Date ();
document.write("Current Date :"+toDay+"<br>")
var milisec = toDay.getTime()
document.write("Elapsed miliseconds since  jan 1 ,1970 :" +milisec +"<br>")
var minutes = toDay.getTime()/60000
//60 sec * 1000 millisec
var conmin = minutes
document.write("Elapsed minutes since  jan 1 ,1970 :"+minutes)


// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.


var today = new Date ();
var hours = today.getHours()%12;
var min = today.getMinutes();
var ampm =hours>=12? "AM" :"PM" ;
document.write("<br>"+ "The current time is :"+ +hours+":"+min+ampm);
// if(hours>=12){
//     ampm="Am"
//     console.log(hours+min)
// }

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

var lastDate = new Date("2020,12,31")
document.write("<br>"+"later date: "+lastDate)



// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

var ramadan= new Date ("june 18 2015");
var today = new Date();
var passedDays = today-ramadan
var daysDifference = Math.floor(passedDays/(1000*60*60*24))
alert("Number of days past since 1st Ramadan: " + daysDifference);


// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

var currentTime=new Date ();
var hourAhead = currentTime.setHours();
console.log(currentTime)
