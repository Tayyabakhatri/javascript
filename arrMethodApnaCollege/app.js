import {a} from "./file.js"
var arr = [1, 3, 2, 4, 5, 6, 7, 8, 90, 49, 69, 89, 99, 67, 40, 13, 54, 64, 21, 54, 75]
var newArr = arr.forEach((val) => {
    console.log(Math.floor(Math.sqrt(val)))
});
var filterArr = arr.filter((val) => {
    return val % 3 !== 0
})
console.log(filterArr)
var mapArr = arr.map((val) => {
    return val / 2
})
console.log(mapArr)
var reduceArr = arr.reduce((pre, cur) => {
    return pre + cur
})
console.log(reduceArr)
var student = {
    name: "tayyaba",
    father: "ghulam M"

}
var arrValue = Object.values(student)
var arr = arrValue.forEach(val => {
    console.log(val)
})
//using for in loop
// for (key in arrValue) {
//     if (arrValue.hasOwnProperty(key)) {
//         console.log(key + ": " + arrValue[key]);
//     }
// }
function Employee(name, father) {
    this.Name = name,
        this.fatherName = father
    this.getDetail = function () {
        return `my name is ${this.Name} and my father name is ${this.fatherName}`
    }
}
// console.log(Employee.getDetail())

let array = [
    new Employee("Tayyaba", "ghulam"), new Employee("fazila", "ghulam"), new Employee("kousar", "ghulam"), new Employee("aqsa", "ghulam")
]
for (let i = 0; i < array.length; i++) {
    console.log(array[i].Name)
}
let each = array.forEach((val) => {
    console.log(val.Name.toUpperCase())
})
let Map = array.map((val) => {
    console.log(val)
})

// optional chaining
let abc = new Employee("anum", "rasheed")
console.log(abc?.Name?.address?.area)
//destructuring
let obj = {
    Name: "Anum",
    father: "sadiq",
    age: 30,
    area: "nazimabad",
    color: ["orange", "purple", "blue"]

}
let { Name, color: [, , blue] } = obj
console.log(Name, blue)
//callBack functions
function hello() {
    // document.body.style.backgroundColor = color
    console.log("my")
}

function bye(callBack) {
    document.write("helo")
    callBack()
} 
bye(hello)
//spred operator 
let nums = [ 1,2,3,4,5,6,7,8,9,0];
let num2 = nums.slice(0)
let num3 = [].concat(nums)
let num4 =[...nums,5,5,6,9]
console.log(num4)
//iterators in array
let iter = nums[Symbol.iterator]()
console.log(iter.next())
iter.next()
iter.next()
console.log(iter.next().value)
console.log(iter.next().done
)
console.log("hetttyye")
console.log(iter.next())
//iterators in object



console.log(a)


