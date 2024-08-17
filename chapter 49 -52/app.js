// 1. Create a signup form and display form data in your web
// page on submission.

// console.log(name)
function name() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var address = document.getElementById("address").value;
  var PhoneNumber = document.getElementById("Phone-number").value;
  var religion = document.getElementById("religion").value;
  var formData = {
    name,
    email,
    address,
    PhoneNumber,
    religion,
  };
  document.getElementById("form-data").innerHTML = `
      <p>Form Data</p>
      <p>Name: ${formData.name}</p>
      <p>Email: ${formData.email}</p>
      <p>Address: ${formData.address}</p>
      <p>Phone number: ${formData.PhoneNumber}</p>
      <p>Religion: ${formData.religion}</p>
    `;
  return false; // Prevent form submission
}

//   2. Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed.

function expendContractText() {
  var shortText =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro earum nihil quia rem quam eum, id alias delectus debitis recusandae ad deserunt velit culpa repellat quas cum nulla odio facilis?";
  var longText =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro earum nihil quia rem quam eum, id alias delectus debitis recusandae ad deserunt velit culpa repellat quas cum nulla odio facilis? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro earum nihil quia rem quam eum, id alias delectus debitis recusandae ad deserunt velit culpa repellat quas cum nulla odio facilis?";
  var text = document.getElementById("para");
  var button = document.getElementById("btn");
  if (text.innerHTML == shortText) {
    text.innerHTML = longText;
    button.innerHTML = "Read less";
  } else {
    text.innerHTML = shortText;
    button.innerHTML = "Read more";
  }
}
function s(){
  var sty = document.getElementById("btn")
  sty.className="btn1"
}
