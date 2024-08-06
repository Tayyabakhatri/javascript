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
      religion
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
// function displayFormData() {
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var address = document.getElementById("address").value;
//     var PhoneNumber = document.getElementById("Phone-number").value;
//     var religion = document.getElementById("religion").value;
//     var formData = {
//       name,
//       email,
//       address,
//       PhoneNumber,
//       religion
//     };
//     document.getElementById("form-data").innerHTML = `
//       <p>Form Data</p>
//       <p>Name: ${formData.name}</p>
//       <p>Email: ${formData.email}</p>
//       <p>Address: ${formData.address}</p>
//       <p>Phone number: ${formData.PhoneNumber}</p>
//       <p>Religion: ${formData.religion}</p>
//     `;
//     return false; // Prevent form submission
//   }