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
for (key in arrValue) {
    if (arrValue.hasOwnProperty(key)) {
        console.log(key + ": " + arrValue[key]);
    }
}
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