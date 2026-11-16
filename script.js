let scoreDisplay = document.getElementById("score");
let questionDisplay = document.getElementById("question");
let feedback = document.getElementById("feedback");
let results = document.getElementById("results");
let finalScore = document.getElementById("finalScore");
let finalMessage = document.getElementById("finalMessage");
let restartButton = document.getElementById("restart");
let nextButton = document.getElementById("next");
let choicesBox = document.getElementById("choices");
let choiceButtons = document.querySelectorAll(".choice-btn");
let questionNumber = 0;
let score = 0;

let questions = [
  {
     question: "Sam jokes about Alex's haircut in the group chat. Alex laughs and jokes back about Sam's shoes. They both laugh at it",
    answer: "Teasing",
    explanation: "Both friends are laughing, equal in power, and nobody is hurt."
  },
  {
    question: "Two classmates argue loudly over who gets to use the last basketball at recess.",
    answer: "Conflict",
    explanation: "This is a one-time disagreement between equals, not repeated cruelty."
  },
  {
    question: "Every day at lunch, an older student takes Maya's seat and tells her nobody wants her there.",
    answer: "Bullying",
    explanation: "It is repeated, intentional, and involves a power imbalance."
  },
  {
    question: "Someone makes a fake account to post mean edits of a classmate every week.",
    answer: "Bullying",
    explanation: "Repeated online harassment aimed at hurting someone is cyberbullying."
  },
  {
    question: "Best friends disagree on which movie to watch and stop talking for an hour.",
    answer: "Conflict",
    explanation: "Friends can have disagreements without it being bullying."
  }
];
function showQuestion() {
  questionDisplay.textContent = questions[questionNumber].question;
  feedback.textContent = "";
  nextButton.style.display = "none";

  choiceButtons.forEach((btn) => {
    btn.disabled = false;
  });
}

choiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let playerAnswer = button.getAttribute("data-answer");
    let current = questions[questionNumber];

    choiceButtons.forEach((btn) => {
      btn.disabled = true;
    });

    if (playerAnswer === current.answer) {
      score++;
      scoreDisplay.textContent = "Score: " + score;
      feedback.textContent = "Correct! " + current.explanation;
    } else {
      feedback.textContent = "Not quite — it is " + current.answer + ". " + current.explanation;
    }

    nextButton.style.display = "inline-block";
  });
});

nextButton.addEventListener("click", () => {
  questionNumber++;

  if (questionNumber < questions.length) {
    showQuestion();
  } else {
    questionDisplay.textContent = "Quiz completed!";
    results.style.display = "block";
    finalScore.textContent = score + " / " + questions.length;

    if (score === questions.length) {
      finalMessage.textContent = "Perfect score! You know how to spot bullying and stand up for others!";
    } else if (score >= questions.length / 2) {
      finalMessage.textContent = "Nice work! Keep practising spotting the signs!";
    } else {
      finalMessage.textContent = "Good try! Give it another go!";
    }

    choicesBox.style.display = "none";
    nextButton.style.display = "none";
    feedback.style.display = "none";
    scoreDisplay.style.display = "none";
  }
});

restartButton.addEventListener("click", () => {
  score = 0;
  questionNumber = 0;

  scoreDisplay.textContent = "Score: 0";
  feedback.textContent = "";

  results.style.display = "none";
  choicesBox.style.display = "block";
  feedback.style.display = "block";
  scoreDisplay.style.display = "block";

  showQuestion();
});

showQuestion();
