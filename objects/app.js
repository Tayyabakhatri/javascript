//objects
var employee = {
    "Employee Name": "Muhammad",
    "Age": 26,
    "salary": 50000,
    "Residence": ["lyari", "pakistan"],
    "Get Employee Data": function () {
        return `The Name of employee is ${employee["Employee Name"]} and Age is ${employee["Age"]}. he lives in ${employee["Residence"]} and his salary is ${employee["salary"]}`
    }
}
//ager object ki keys pr array ho ur us ki valuse bhi print krwani hon to esy kren gy
var obj= Object.values(employee)
for(var i =0 ; i <obj.length;i++){
    if(Array.isArray(obj[i])){
        console.log(obj[i])//is men array aiga 
        for(var key of obj[i]){//is men arraya ki values print ho kr aigi
            console.log(key)
        }
    }
}//


for (var key in employee) {
    console.log(employee[key])// yahan ager ham console.log(employee.key) likhen gy to undefine aiga q k jab variable se kuch lety hen to []use kerny hoty hen .
}
//mwthods of objects

var entries = Object.create(employee)//create method create an object 
var entries = Object.entries(employee)//entries method bring key/value pair of object 
var entries = Object.values(employee)//value method bring key value of the object
console.log(entries)
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
function Name(name, father, age) {
    this.firstName = name,
        this.father = father,
        this.age = age

}
var myName = new Name("tayyaba", "ghulam", 20)
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
    "full name": function (city, country) {
        return this.firstName + this.lastName + city + country
    }
}
var person1 = {
    firstName: "asd",
    lastName: "jgh"
}
console.log(person["full name"].call(person1, "karachi", "pakistan")) // the difference bet apply and call is call accept parameter in str form and apply take parameters as array form
console.log(person["full name"].apply(person1["karachi", "pakistan"]))//arrray fprm

var person0 = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

var member = {
    firstName: "Hege",
    lastName: "Nilsen",
}
var save = person0.fullName.bind(member);
console.log(save())//bind method alwys return new bounded function so we save it and then call it 

setTimeout(function () {
    console.log(person0.fullName.bind(member)());  // Call the bound function after 3 seconds
}, 3000);


var myFunction = {
    myName: "tayyaba",
    myFatherName: "ghulam muhammad",
    age: 25,
    myfunc: (city, country) => {
        return city + country.toUpperCase()
    }
}
console.log(myFunction.myfunc("karachi", "pakistan"))

function employeeInfo(firstName, lastName, age, gender, city, country) {
    var employeeData = {
        "Employee Name": firstName,
        "employee LastName": lastName,
        "employee Age": age,
        "employee gender": gender,
        "empoyee city": city,
        "employee country": country,
        "language": "english"//default values
    }
    return employeeData
}
var employee1 = new employeeInfo("Tayyaba", "Khatri", 25, "Female", "karachi", "pakistan")
console.log(employee1)
function EmployeeInfo(firstName, lastName, age, gender, city, country) {

    this.employeeName = firstName,
        this.employeeLastName = lastName,
        this.employeeAge = age,
        this.employeegender = gender,
        this.empoyeecity = city,
        this.employeecountry = country,
        this.language = "english"//default values
}
var employee1 = new EmployeeInfo("Tayyaba", "Khatri", 25, "Female", "karachi", "pakistan")
console.log(employee1 = Object.entries(employee1))//this will sort prooerties in proper way as they are but make an array 
//
function Student(name, father, age, city, country, religion) {
    this.Name = name,
        this.FatherName = father,
        this.Cge = age,
        this.city = city,
        this.Country = country,
        this.Religion = religion

} var userData = prompt("enter your name")
var student1 = new Student(userData)
console.log(student1)
