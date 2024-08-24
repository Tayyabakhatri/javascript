//1
var a = document.getElementById("main-content");
//2
var b = document.children[0].children[1].children[0].children[2];
console.log(b)
var c = document.children[0].children[1].children[0].children[2].children;
console.log(c)
var d = document.getElementById("first-name");
d.value="Tayyaba"
var e = document.getElementById("last-name")
e.value="khatri"
var f= document.getElementById("email")
f.value="Tayyabakhatri@gmail.com"


var g = document.children[0].children[1].children[0].children[1].nodeType
console.log(g)

var h = document.children[0].children[1].children[0].children[2].childNodes[1].nodeType
console.log(h)
var i = document.children[0].children[1].children[0].children[2].childNodes[1].innerHTML="updated text"
