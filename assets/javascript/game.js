//assinging variables so users can selected a desired category, difficulty, and # of questions

// select either 10, 15, or 20 questions
// var questionNumArr = [10, 15, 20];

// select easy, medium, or hard level of difficulty
// var questionDifArr = ["easy", "medium", "hard"];

// select the topic of the questions
// categoriess
// video games = 15
// music = 12
// sports = 21
// computers = 18
// var questionCatArr = [];

// the url with the variables so it pulls the correct questions
var queryURL =
  "https://opentdb.com/api.php?amount=" +
  questionNum +
  "&category=" +
  questionCat +
  "9&difficulty=" +
  questionDif +
  "&type=multiple";

var questionNum = "";
var questionCat = "";
var questionDif = "";



function triviaGame() {
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    ;
  });
}

// button.classList.add("btn-success");

// function resetButtons() {
//   var letterButtons = document.getElementsByClassName("button-class");
//   //console.log("hit");
//   for (var i = 0; i < letterButtons.length; i++) {
//     letterButtons[i].classList.remove("btn-success");
//     letterButtons[i].classList.remove("btn-danger");
//   }
// }


$("#sports").on("click", function () {
  $("body").css("backgroundImage", "url(./assets/images/sports.jpg)");
});

$("#music").on("click", function () {
  $("body").css("background-image", "url(./assets/images/music.jpg)");
});

$("#video-games").on("click", function () {
  $("body").css("background-image", "url(./assets/images/videogames.jpg)");
});

$("#computers").on("click", function () {
  $("body").css("background-image", "url(./assets/images/computer.jpg)");
});

$("#reset-button").on("click", function () {
  $("body").css("background-image", "url(./assets/images/trivia.jpg)");
});