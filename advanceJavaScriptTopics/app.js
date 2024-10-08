//rest parameter
// function ab(...arry) {
//     let newArr = []
//     newArr.push(arry.filter((val) => {
//         return val % 2 == 0
//     }))
// console.log(newArr)
    //         sum =0
    // for (let num of arry) {
    //     sum += num
    // }
    // console.log(sum)
// }
// ab(2, 3, 4, 5)
let person = { name: "Alice", age: 25 };

let jsonString = JSON.stringify(person, null, 2); // Adds indentation

console.log(jsonString);
// Outputs:
// {
//   "name": "Alice",
//   "age": 25
// }

