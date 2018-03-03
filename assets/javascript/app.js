var queryURL = "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple";

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
  $("<img>").attr('src', response.data[20].images.original.url).appendTo("body");
});









for (i = 0; i < pickedWordArray.length; i++) {
  // if guessedLetter === arr[i]
  if (letterGuessed === pickedWordArray[i]) {
    // replace placeholder[i] with guessedLetter
    pickedWordPlaceholder[i] = letterGuessed;
    // console.log(pickedWordPlaceholder);
    button.classList.add("btn-success");
  }
}

function resetButtons() {
  var letterButtons = document.getElementsByClassName("button-class");
  //console.log("hit");
  for (var i = 0; i < letterButtons.length; i++) {
    letterButtons[i].classList.remove("btn-success");
    letterButtons[i].classList.remove("btn-danger");
  }
}
