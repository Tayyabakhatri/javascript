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
var obj = Object.values(employee)
for (var i = 0; i < obj.length; i++) {
    if (Array.isArray(obj[i])) {
        console.log(obj[i])//is men array aiga 
        for (var key of obj[i]) {//is men arraya ki values print ho kr aigi
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
console.log(entries); //har key value ka array return kr rh he 

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
document.getElementById("my").innerHTML = "my father name is " + myName.father + "."

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
    // console.log(employeeData.hasOwnProperty("employee Age"))
    // console.log(employeeData.hasOwnProperty("language"))
    // console.log("toString" in employeeData) // in operator will reture true for both direct and prototype chain but hasOwnProperty check for only direct Property
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
    EmployeeInfo.prototype.getDetail = function () {
        return `Name: ${this.employeeName} ${this.employeeLastName}, Age: ${this.employeeAge}, Gender: ${this.employeeGender}, City: ${this.employeeCity}, Country: ${this.employeeCountry}, Language: ${this.language}`;
    } //ye  Employee funtion k proto type me save hojaiga , is se hoga ye k memory men space kam reserve hogi ur ek cheez ki zaroorat jab bar bar he to isy ek jagah bna kr rkh do 
}
var employee1 = new EmployeeInfo("Tayyaba", "Khatri", 25, "Female", "karachi", "pakistan")
console.log(EmployeeInfo.prototype.getDetail())//yaha hm ne reference de diya he 
console.log(employee1)
console.log(employee1 = Object.entries(employee1))//this will sort prooerties in proper way as they are but make an array 
//
function Student(name, father, age, city, country, religion) {
    this.Name = name,
        this.FatherName = father,
        this.Age = age,
        this.city = city,
        this.Country = country,
        this.Religion = religion
    Student.prototype.getDetail = function () {
        return `the name of student is ${this.Name}`
    }
}
var student1 = new Student("tayyaba")
console.log(Student.prototype.getDetail())
console.log(student1)
//object men prototype men save nahi hi rha ,constructor function men ho rha he
//jab bhi constructor function bnai gy to us arrguments normal functions ki terha nahi dety new key word use krty hen us se value dete
function Numbers(a,b,c,d) {
    num1=a+b,
    num2=a-b,
    num3=c*d,
    num4=c/d,
    Numbers.prototype.operations=function(){
        return num1,num2,num3,num4
    }
} 
   
var con = new Numbers(2,8,90,6)

console.log(Numbers.prototype.operations());





