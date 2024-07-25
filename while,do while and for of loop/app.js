// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19];
// while (arr.length !== 10) {
//   console.log(10);
//   break;
// }
// console.log(arr1)

// var num = 6;
// while (userInput !== num) {
//   var userInput = Number(prompt("enter any number"));
//   if (userInput < num) {
//     alert("hint: lower");
//   } else if (userInput > num) {
//     alert("hint: higher");
//   }
// }
// if (userInput === num) {
//   alert("correct");
// }

/*passward creation*/
// while (!newPassward) {
//   var newPassward = prompt("create a new passward: ");
//   if (newPassward.length === 8) {
//     if (newPassward.charCodeAt(65, 90)) {
//       if (newPassward.charCodeAt(97, 122)) {
//         if (newPassward.charCodeAt(48, 57)) {
//           if (newPassward.charCodeAt(33, 47)(58, 64)(91, 96)(123, 126)) {
//             alert("passward should contain atleast 1 special character");
//           }
//         } else {
//           alert("passward should contain atleast 1 number");
//         }
//       } else {
//         alert("passward should contain atleast 1 lowerrcase character");
//       }
//     } else {
//       alert("passward should contain atleast 1 uppercase character");
//     }
//   } else {
//     alert("passward should contain 8 characters: ");
//   }
// }
// if(!newPassward){
//     while (!newPassward) {
//         var newPassward = prompt("create a new passward: ");
//         if (newPassward.length === 8) {
//           if (newPassward.charCodeAt(65, 90)) {
//             if (newPassward.charCodeAt(97, 122)) {
//               if (newPassward.charCodeAt(48, 57)) {
//                 if (newPassward.charCodeAt(33, 47)(58, 64)(91, 96)(123, 126)) {
//                   alert("passward should contain atleast 1 special character");
//                 }
//               } else {
//                 alert("passward should contain atleast 1 number");
//               }
//             } else {
//               alert("passward should contain atleast 1 lowerrcase character");
//             }
//           } else {
//             alert("passward should contain atleast 1 uppercase character");
//           }
//         } else {
//           alert("passward should contain 8 characters: ");
//         }
//       }
// }else{
//     alert("correct")
// }

// var i = 1;
// while (i < 10) {
//   if (i !== 5) {
//     console.log(i);
//   }
//   i++;
// }
// var t = 1;
// while (t < 15) {
//   if (t !== 5) {
//     console.log(t);
//   }
//   t++;
// }
//jab 5th time loop chaly ga to condition galat hogi to while loop ki body execute nahi hogi ,i++
//  ho jaiga 6th  time condition sahi hogi to loop phir se chaly ga



//write a while loop in js that prints the number from 10 to 20 but skip the even num
//  var i = 20 
//  while(i<=40){
//   if(i%2!==0){
//     console.log(i)

//   }
//   i++
//  }

//  for(var i = 0 ; i <40; i++){
//   if(i%2!==0){
//     console.log(i)
//   }
//  }

 var i = 0
 sum=0 
 while(i<50){
  if(i%3===0||i%5===0){
   sum+=i
  }
  i++
  
 }
 console.log(sum)