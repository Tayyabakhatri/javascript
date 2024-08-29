//1
var a = document.getElementById("main-content");
//2
var b = document.children[0].children[1].children[0].children[2];
console.log(b)
var c = b.children;
console.log(c)
var d = document.getElementById("first-name");
d.value = "Tayyaba"
var e = document.getElementById("last-name")
e.value = "khatri"
var f = document.getElementById("email")
f.value = "Tayyabakhatri@gmail.com"


var g = document.children[0].children[1].children[0].children[1].nodeType
console.log(g)
var save = document.children[0].children[1].children[0].children[2].childNodes[1] //storing element in var and then use it
var h = save.nodeType
console.log(h)
var i = save.innerHTML = "updated text"
var save2 = document.children[0].children[1].children[0].children[2] //same
var j = save2.lastChild // elenent child bhi dekh skty hen
var k = save2.firstChild
console.log(j)
console.log(k)
var l = save2.children[1].nextElementSibling// ager sirf next sibling likhengy to text btainga because of junkartifacts
console.log(l)
var m = save2.children[1].previousElementSibling
console.log(m)
var n= f.parentElement
var o =f.parentElement.nodeType
console.log(n)
console.log(o)
//practice
var a = document.getElementById("p").style.margin
console.log(a)
var b = document.getElementById("p").className+=" para"
console.log(b)

