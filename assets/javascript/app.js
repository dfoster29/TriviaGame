//assinging variables so users can selected a desired category, difficulty, and # of questions

// select either 10, 15, or 20 questions
var questionNum = ;

// select easy, medium, or hard level of difficulty
var questionDif = ;

// select the topic of the questions
var questionCat = ;

// the url with the variables so it pulls the correct questions
var queryURL = "https://opentdb.com/api.php?amount=" + questionNum + "&category=" + questionCat + "9&difficulty=" + questionDif + "&type=multiple";



$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
  $("<img>").attr('src', response.data[20].images.original.url).appendTo("body");
});





    button.classList.add("btn-success");




function resetButtons() {
  var letterButtons = document.getElementsByClassName("button-class");
  //console.log("hit");
  for (var i = 0; i < letterButtons.length; i++) {
    letterButtons[i].classList.remove("btn-success");
    letterButtons[i].classList.remove("btn-danger");
  }
}
