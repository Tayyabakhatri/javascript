//destructuring of array 
//nested destructuring of array
let arr = [1, 2, 3, 4, ["a", "b", "c"]]
let [v1, v2, v3, v4, [, a]] = arr
console.log(a)
// destructuring of object
let myObject = {
    name: "Tayyaba",
    fathet: "ghulam muhammad",
    fun: {
        age: 20,
        female: true
    }
}
let { fathet: father } = myObject//can change the key name 
console.log(father)
let { fun: { age } } = myObject// destructuring of nested object
console.log(age)
