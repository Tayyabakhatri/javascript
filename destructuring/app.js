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
//Rest parameter
function abc(a, b, ...arr) {
    let result=[]
    arr.forEach((key)=> {
       result.push( a + b * key)//demas rule
    })
    return result
}
let fun = abc(2,3,4,5,1,2)
console.log(fun)