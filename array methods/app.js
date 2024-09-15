var colorNames =[[123,567,[1,2,3,"happy"],890],"Yellow","Blue","Green","Black","White","Brown"];
// console.log(colorNames.pop()) 
// is terha array dobara show nahi kry ga 
// sirf value btaiga
// or
// colorNames.pop()
// console.log(colorNames)
// colorNames.shift()
// console.log(colorNames.shift())
// colorNames.push("sky blue")
// console.log(colorNames)
// colorNames[10]="siyan"
// colorNames[9]="merjenta"
// console.log(colorNames)
// colorNames.unshift("lavender")
// console.log(colorNames)

// console.log(colorNames.slice(0,2))
// slice copy kry ga sirf
// console.log(colorNames.slice(2,5))
// console.log(colorNames.slice(0,1))
// console.log(colorNames.slice(6))
// console.log(typeof colorNames.slice(2,5))
// console.table(colorNames.splice(0,0))
// console.table(colorNames)
// console.log(colorNames.length)
// console.log(colorNames.splice(-5,2))
// value - men dene se is ka behaviour reverse hoga jese brown =1 whte=2 and so on ,then jaha pr desire index hoga wahin se delete add krna stat kr dega.- men 0 se start nahi ho rha 
console.log(colorNames.splice(3,0,"Tayyaba","Khatri"))
// here it will show empty array because we havent removed any element
console.log(colorNames)
// here it will show updated array

// 2D Arrays
// var matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// console.log(matrix[1][2])
// console.log(colorNames[0][2][3][2])



