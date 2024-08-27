var arr=[1,3,2,4,5,6,7,8,90,49,69,89,99,67,40,13,54,64,21,54,75]
var newArr = arr.forEach((val)=> {
   console.log( Math.floor(Math.sqrt(val)))
});
var filterArr = arr.filter((val)=>{
    return val%3!==0
})
console.log(filterArr)
var mapArr = arr.map((val)=>{
    return val/2
})
console.log(mapArr)
var reduceArr = arr.reduce((pre,cur)=>{
    return pre+cur
})
console.log(reduceArr)