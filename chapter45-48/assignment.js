//
// done
//

// 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted.

// <!-- 5. Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser. -->

function decreaseCounter(a) {
  var resultElement = document.getElementById(a);
  var currentValue = Number(resultElement.innerHTML);
  if (currentValue > 0) {
    resultElement.innerHTML = currentValue-1;
  }
}
function increaseCounter(b){
    var resultElement=document.getElementById(b)
    var currentValue = Number(resultElement.innerHTML);
    resultElement.innerHTML=currentValue+1
}