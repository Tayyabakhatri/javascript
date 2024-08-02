//
// done
//

// 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted.

// <!-- 5. Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser. -->

// maam tayyaba solution
var counter = 0;
function increase() {
  document.getElementById("result").innerText = counter++;
}
function decrease() {
  if (counter < 0) {
    counter = 0;
  }
  document, (getElementById("result").innerText = counter--);
}

// my solution
function decreaseCounter(a) {
  var resultElement = document.getElementById(a);
  var currentValue = Number(resultElement.innerHTML);
  if (currentValue > 0) {
    resultElement.innerHTML = currentValue - 1;
  }
}
function increaseCounter(b) {
  var resultElement = document.getElementById(b);
  var currentValue = Number(resultElement.innerHTML);
  resultElement.innerHTML = currentValue + 1;
}

// read more /read less

function expendedContractedText() {
  var contractedText =
    "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Magni ess dolore, tempora molestiae hic quisquam fuga delectus repellendus dolor fugit quo laudantium incidunt dolorum quae nesciunt sint, a ea suscipit.";
  var expentdedText =
    "oremLorem ipsum dolor sit amet consectetur adipisicing elit. Magni ess dolore, tempora molestiae hic quisquam fuga delectus repellendus dolor fugit quo laudantium incidunt dolorum quae nesciunt sint, a ea suscipit. oremLorem ipsum dolor sit amet consectetur adipisicing elit. Magni ess dolore, tempora molestiae hic quisquam fuga delectus repellendusoremLorem ipsum dolor sit amet consectetur adipisicing elit. Magni ess dolore, tempora molestiae hic quisquam fuga delectus repellendusoremLorem ipsum dolor sit amet consectetur adipisicing elit. Magni ess dolore, tempora molestiae hic quisquam fuga delectus repellendusoremLorem ipsum dolor sit amet consectetur adipisicing elit. Magni ess dolore, tempora molestiae hic quisquam fuga delectus repellendusoremLorem ipsum dolor sit amet consectetur adipisicing elit. Magni ess dolore, tempora molestiae hic quisquam fuga delectus repellendus";
  var text = document.getElementById("para1");
  var anchore = document.getElementById("anc");
  if (text.innerText == contractedText) {
    text.innerText = expentdedText;
    anchore.innerText = "read less";
  } else {
    text.innerText = contractedText;
    anchore.innerText = "read more";
  }
}

// maam tayyaba
// function expandAndStrech() {
//   var fullText =
//     "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit aperiam atque perferendis aliquam doloremque voluptas tempora recusandae deleniti, quisquam iusto officia porro similique incidunt? Pariatur excepturi repellendus quis deleniti odio vitae id beatae distinctio aliquam exercitationem impedit quibusdam, eum maxime porro fugiat, est ex quasi, qui reprehenderit natus nesciunt ab! Quaerat, non. Debitis soluta alias hic fugit autem quibusdam id magnam atque ipsum provident? Deleniti, velit, aut numquam harum sint dicta quam recusandae at, officia cumque repellendus nam tempore dolore. Incidunt soluta sed odit adipisci, reiciendis suscipit tenetur quod fugiat illo perspiciatis impedit distinctio labore maiores provident officiis quis enim doloribus ullam, nam optio culpa exercitationem rerum quia. Saepe odit eligendi facilis esse doloribus quia quos sunt facere aut obcaecati.";
//   var shortText =
//     "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit aperiam atque perferendis aliquam doloremque voluptas tempora recusandae deleniti, quisquam iusto officia porro similique incidunt? Pariatur excepturi repellendus quis deleniti odio vitae id beatae distinctio aliquam exercitationem impedit quibusdam, eum maxime porro fugiat, est ex quasi,";
//   var paraText = document.getElementById("para");
//   var button = document.getElementById("btn");

//   if (paraText.innerText == shortText) {
//     paraText.innerText = fullText;
//     button.innerText = "Read less";
//   } else {
//     paraText.innerText = shortText;
//     button.innerText = "Read More";
//   }
// }

function a(){
  var divi = document.getElementById("d")
  divi.className="div"
}
