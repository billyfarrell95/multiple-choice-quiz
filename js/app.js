import triviaData from "./data.js"

const startBtn = document.getElementById("start");
// Save true/false status after the user answers
let userAnswers = [];

startBtn.addEventListener("click", initializeTrivia);

// Initialize trivia
function initializeTrivia() {
    renderUI();
    startBtn.classList.toggle("hide-btn");
}

// Render UI based on data.js and add event listeners to the question choice buttons
function renderUI() {
    const triviaWrapper = document.getElementById("trivia-wrapper");
    for (let i = 0; i < triviaData.length; i++) {
        let newH2 = document.createElement("h2");
        newH2.innerText = triviaData[i].question;
        let newQuestionWrapper = document.createElement("div");
        newQuestionWrapper.classList.add("question-wrapper");
        triviaWrapper.append(newQuestionWrapper);
        newQuestionWrapper.append(newH2);
        for (let j = 0; j < triviaData[i].options.length; j++) {
            let newBtn = document.createElement("button");
            newBtn.innerText = triviaData[i].options[j];
            newBtn.setAttribute("data-question-id", triviaData[i].id);
            newQuestionWrapper.append(newBtn);

            newBtn.addEventListener("click", checkAnswerSelection)
        }
    };
};

// Check if answer is correct based on ID pulled from data.js
function checkAnswerSelection(e) {
    const selectedBtn = e.target;
    const selectedAnswer = selectedBtn.innerText;
    const questionId = selectedBtn.getAttribute("data-question-id");

    let currentQuestion;
    for (let i = 0; i < triviaData.length; i++) {
        if (triviaData[i].id.toString() === questionId) {
            currentQuestion = triviaData[i];
        }
    }

    if (selectedAnswer === currentQuestion.answer) {
        userAnswers.push("true");
        console.log(userAnswers);
    } else {
        userAnswers.push("false");
        console.log(userAnswers);
    }
}