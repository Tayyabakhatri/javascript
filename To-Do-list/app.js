var list = document.getElementById("ul")

var data = document.getElementById("input")
function abc() {
    if (data.value == "") {
        Swal.fire({
            title: "You are trying to save Empty place",
            icon: "warning"

        });
    } else {
        var text = data.value
        var ul = document.getElementById("ul")
        var li = document.createElement("li")
        var content = document.createTextNode(text)
        li.appendChild(content)
        li.setAttribute("type", "square")
        var delBtn = document.createElement("div")
        delBtn.innerHTML = '<i class="fa-regular fa-circle-xmark fa-2xs" style="color: #adb1b8;"></i>';
        li.appendChild(delBtn)
        delBtn.setAttribute("onclick", "removeLi(event)")
        delBtn.className = "deleteBtn"
        li.className = "listItems"
        ul.appendChild(li)
        var edit = document.createElement("div")
        edit.innerHTML = ' <i class="fa-solid fa-pen-to-square fa-2xs" style="color:  #adb1b8;"></i>'
        li.appendChild(edit)
        edit.className = "editBtn"
        edit.setAttribute('onclick', 'editNote(event)')
        data.value = ""

    }
}
function editNote(event) {

    var edit = prompt("edit Note:", event.target.parentNode.parentNode.firstChild.nodeValue)
    if (edit == "") {
        Swal.fire({
            title: "You are trying to save Empty place",
            icon: "warning"

        });
    } else {

        event.target.parentNode.parentNode.firstChild.nodeValue = edit
    }
}
function removeLi(event) {
    event.target.closest("li").remove();
    //also can do this
    // event.target.parentNode.parentNode.remove()
}
function delAll() {
    list.innerHTML = ""
}
// var a = document.getElementById("input")
function stylingInput() {
    data.className = "inputfield"
}
stylingInput()