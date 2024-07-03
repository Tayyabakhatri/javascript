var today = new Date();
var hours = today.getHours()%12;
var minutes = today.getMinutes();
var ampm ;
if(hours>=12){
    ampm= "AM";
}
else{
    ampm = "PM"
}
document.write("The current time is:"+hours+":"+minutes+ampm)