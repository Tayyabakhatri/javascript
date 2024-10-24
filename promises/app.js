let weather = false


 new Promise ((resolve,reject)=>{
    if(weather){
        resolve("chalo")
    }else{
        reject("rehne do")
    }
})
.then((message)=>{
    console.log(message)
})
.catch((err)=>{
    console.log(err)
})
async function myFunc(para1) {
    para1()
    console.log("name")
}
 function awaitFunc(){
    setTimeout(()=>{
        console.log("hello")
    } , 5000)
}
myFunc(awaitFunc)