//objects
var employee = {
    "Employee Name": "Muhammad",
    "Age": 26,
    "salary": 50000,
    "Residence": "Lyari ,Karachi",
    "Get Employee Data": function () {
        return `The Name of employee is ${employee["Employee Name"]} and Age is ${employee["Age"]}. he lives in ${employee["Residence"]} and his salary is ${employee["salary"]}`
    }
}
var objectKeys = Object.keys(employee)
console.log(objectKeys)
for (var i = 0; i < objectKeys.length; i++) {
    console.log(employee[objectKeys[i]])//ager keys ki value chahiye to [i] likhna pryga ..otherwise sirf keys la kr dega secondly ager dot notation se get kerty to error ata q k dot notation str nahi leta
}
console.log(employee["Get Employee Data"]())
var arr = [
    {
        "Employee Name": "Muhammad",
        "Age": 26,
        "salary": 50000,
        "Residence": "Lyari ,Karachi",
        "Get Employee Data": function () {
            return `The Name of employee is ${employee["Employee Name"]} and Age is ${employee["Age"]}. he lives in ${employee["Residence"]} and his salary is ${employee["salary"]}`
        }
    },
    {
        "Employee Name": "Muhammad",
        "Age": 26,
        "salary": 50000,
        "Residence": "Lyari ,Karachi",
        "Get Employee Data": function () {
            return `The Name of employee is ${employee["Employee Name"]} and Age is ${employee["Age"]}. he lives in ${employee["Residence"]} and his salary is ${employee["salary"]}`
        }
    },
    {
        "Employee Name": "Muhammad",
        "Age": 26,
        "salary": 50000,
        "Residence": "Lyari ,Karachi",
        "Get Employee Data": function () {
            return `The Name of employee is ${employee["Employee Name"]} and Age is ${employee["Age"]}. he lives in ${employee["Residence"]} and his salary is ${employee["salary"]}`
        }

    }
]
console.table(arr[1])
//loop on array of object 
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
function name(name, father, age) {
    this.firstName = name,
        this.father = father,
        this.age = age

}
var myName = new name("tayyaba", "ghulam", 20)
document.getElementById("my").innerHTML = "my name is " + myName.father + "."

var myObject = {
    firstName: "abx",
    lastName: "mno",
    a: function () {
        return this.firstName + this.lastName
    }
}
console.log(myObject.a())
var person = {
    "full name": function (city, country) {
        return this.firstName + this.lastName + "," + city + country
    }
}
var person1 = {
    firstName: "asd",
    lastName: "jgh"
}
console.log(person["full name"].call(person1, "karachi", "pakistan"))
console.log(person["full name"].apply(person1, ["karachi", "pakistan"]))
var person = {
    "full name": function (city,country) {
        return this.firstName + this.lastName +city+country
    }
}
var person1 = {
    firstName: "asd",
    lastName: "jgh"
}
console.log(person["full name"].call(person1,"karachi","pakistan")) // the difference bet apply and call is call accept parameter in str form and apply take parameters as array form
console.log(person["full name"].apply(person1["karachi","pakistan"]))//arrray fprm

var person0 = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
 var member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  var save = person0.fullName.bind(member);
  console.log(save())//bind method alwys return new bounded function so we save it and then call it 
  
  setTimeout(function() {
    console.log(person0.fullName.bind(member)());  // Call the bound function after 3 seconds
  }, 3000);
  

  