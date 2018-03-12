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

// var queryURL =
//   "https://opentdb.com/api.php?amount=" +
//   questionNum +
//   "&category=" +
//   questionCat +
//   "9&difficulty=" +
//   questionDif +
//   "&type=multiple";

// var sports = 21;
// var computers = 18;
// var music = 12;
// var videoGames = 15;

// var difEasy = "easy";
// var difMedium = "medium";
// var difHard = "hard";

// var quesTen = 10;
// var quesFifteen = 15;
// var quesTwenty = 20;
var triviaQuestion;
var correctAnswer;
var incorrectAnswers;
var questionCount = 0;
var resultsArr;
var response;

function triviaGame() {
  var queryURL = "https://opentdb.com/api.php?amount=20&type=multiple";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    resultsArr = response.results
    console.log(response)

    printQuestion()
  });
};

function printQuestion() {
  $("#question").html(resultsArr[questionCount].question);
  $("#answer-A").html(resultsArr[questionCount].correct_answer);
  $("#answer-B").html(resultsArr[questionCount].incorrect_answers[0]);
  $("#answer-C").html(resultsArr[questionCount].incorrect_answers[1]);
  $("#answer-D").html(resultsArr[questionCount].incorrect_answers[2]);
  run();
}


//triviaGame();
$("#answer-A").click(function () {
  $("#answer-A").addClass("btn-success");
  stop();
  $("#question-timer").html("<h1>" + "correct!" + "</h1>");
});

$("#answer-B").click(function () {
  $("#answer-B").addClass("btn-danger");
  $("#answer-A").addClass("btn-success");
  stop();
  $("#question-timer").html("<h1>" + "incorrect!" + "</h1>");
});

$("#answer-C").click(function () {
  $("#answer-C").addClass("btn-danger");
  $("#answer-A").addClass("btn-success");
  stop();
  $("#question-timer").html("<h1>" + "incorrect!" + "</h1>");
});

$("#answer-D").click(function () {
  $("#answer-D").addClass("btn-danger");
  $("#answer-A").addClass("btn-success");
  stop();
  $("#question-timer").html("<h1>" + "incorrect!" + "</h1>");
});





function resetButtons() {
  var answerButtons = $(".answerBtn");
  //console.log("hit");
  for (var i = 0; i < answerButtons.length; i++) {
    answerButtons[i].classList.remove("btn-success");
    answerButtons[i].classList.remove("btn-danger");
  };
};

function pickGame() {
  $("#sports").on("click", function () {
    $("body").css("backgroundImage", "url(./assets/images/sports.jpg)");
    questionCat = 21;
  });

  $("#music").on("click", function () {
    $("body").css("background-image", "url(./assets/images/music.jpg)");
    questionCat = 12;
  });

  $("#video-games").on("click", function () {
    $("body").css("background-image", "url(./assets/images/videogames.jpg)");
    questionCat = 15;
  });

  $("#computers").on("click", function () {
    $("body").css("background-image", "url(./assets/images/computer.jpg)");
    questionCat = 18;
  });

  $("#reset-button").on("click", function () {
    $("body").css("background-image", "url(./assets/images/trivia.jpg)");
  });
};

pickGame();

var number = 30;

function nextQuestion() {
  run();
  questionCount++;
  printQuestion();
  resetButtons();
};

// function restartGame() {
//   triviaGame();
//   resetButtons();
//   stop();
// }
//  Variable that will hold our interval ID when we execute
//  the "run" function
var intervalId;

//  When the stop button gets clicked, run the stop function.
$("#stop").on("click", stop);

//  When the resume button gets clicked, execute the run function.
$("#start-button").on("click", triviaGame);

$("#next-question").on("click", nextQuestion);

// $("#reset-button").on("click", restartGame);

//  The run function sets an interval
//  that runs the decrement function once a second.
//  *****BUG FIX********
//  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
  number = 30;
  $("#question-timer").html("<h1>" + 30 + "</h1>");
};

//  The decrement function.
function decrement() {
  //  Decrease number by one.
  number--;

  //  Show the number in the #show-number tag.
  $("#question-timer").html("<h1>" + number + "</h1>");

  //  Once number hits zero...
  if (number === 0) {
    $("#question-timer").html("<h1>" + "time's up!" + "</h1>");
    $("#answer-A").addClass("btn-success");
    //  ...run the stop function.
    stop();
  }
};

//  The stop function
function stop() {
  //  Clears our intervalId
  //  We just pass the name of the interval
  //  to the clearInterval function.
  clearInterval(intervalId);
};