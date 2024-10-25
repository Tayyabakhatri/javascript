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
//passing Array in resolved promise
let count= [6,7,8,9,10];
let myPromise=new Promise( (resolved,rejected)=>{
if(true){
  resolved(count)
}
})
.then((mesg)=>{
  let a =  Array.isArray(mesg)
    console.log(a);
    mesg.forEach(element => {
        let b = element
        console.log(b)
    });

})
//passing objectsin promise 
new Promise((resolved, rejected)=>{
    let obj ={name:"Tayyaba",Age:25};
    return rejected(obj)
}).then((name)=>{
    console.log({name})
}).catch(({name,Age,})=>{     //destructuring
    console.log(name,Age)
})
    

