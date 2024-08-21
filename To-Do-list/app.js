function abc() {
    var data = document.getElementById("input")
    var text = data.value
    var ul = document.getElementById("ul")
    var li = document.createElement("li")
    var content = document.createTextNode(text)
    li.appendChild(content)
    li.setAttribute("type", "square")

    li.className = "listItems"
    ul.appendChild(li)
    data.value = ""
}




function stylingInput() {
    var a = document.getElementById("input")
    a.className = "inputfield"
}
stylingInput()