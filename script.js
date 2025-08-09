let questions = [
  //["what color is the sky", ["blue", "red", "green", "orange"]],   //["q", ["r", "w", "w", "w"]],
  ["Wie viele Nachbarländer hat Deutschland", ["9", "8", "10", "11"]],
  ["Die Erde hat einen Durchmesser von ...", ["12000km", "8000km", "6000km", "14000km"]],
  ["Wie viele Länder hat Europa", ["47", "20", "51", "88"]],
];

let questionInOrder;
let rightAnswer;
let questionNumber = 0;


function generateNewQuestion() {
  let pickedQuestion = questionInOrder[questionNumber];
  let answers = [...pickedQuestion[1]];
  answers = shuffleArray(answers);
  rightAnswer = pickedQuestion[1][0];
  questionNumber++;
  if(questionNumber >= questions.length){
    questionNumber = 0;
    questionInOrder = shuffleArray([...questions]);
  }
  document.getElementById("question").innerHTML = pickedQuestion[0];
  document.getElementById("answer1").innerHTML = answers[0];
  document.getElementById("answer2").innerHTML = answers[1];
  document.getElementById("answer3").innerHTML = answers[2];
  document.getElementById("answer4").innerHTML = answers[3];
}

function checkAnswer(clickedElement) {
  if (clickedElement.innerHTML == rightAnswer) {
    document.getElementById("ergebniss").innerHTML = "Richtig";
    generateNewQuestion();
  } else {
    document.getElementById("ergebniss").innerHTML = "Falsch, Richtig wäre " + rightAnswer;
    generateNewQuestion();
  }
}
window.onload = function () {
  questionInOrder = shuffleArray([...questions]);
  generateNewQuestion();
  document.getElementById("answer1").addEventListener("click", function () {
    checkAnswer(this);
  });
  document.getElementById("answer2").addEventListener("click", function () {
    checkAnswer(this);
  });
  document.getElementById("answer3").addEventListener("click", function () {
    checkAnswer(this);
  });
  document.getElementById("answer4").addEventListener("click", function () {
    checkAnswer(this);
  });
};


//points, timer , random fragen (nicht doppelt)

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}