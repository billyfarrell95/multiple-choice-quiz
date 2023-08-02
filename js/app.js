import triviaData from "./data.js"

const startBtn = document.getElementById("start");
// Save true/false status after the user answers
let userAnswers = [];
let currentQuestionIndex = 0;

startBtn.addEventListener("click", initializeTrivia);

// Initialize trivia
function initializeTrivia() {
    showQuestion();
    startBtn.classList.toggle("hide-btn");
    userAnswers = [];
}

// Render UI based on data.js and add event listeners to the question choice buttons
function showQuestion() {
    const triviaWrapper = document.getElementById("trivia-wrapper");
    // Clear previous question
    triviaWrapper.innerHTML = "";

    if (currentQuestionIndex < triviaData.length) {
        let newH2 = document.createElement("h2");
        newH2.innerText = triviaData[currentQuestionIndex].question;
        let newQuestionWrapper = document.createElement("div");
        newQuestionWrapper.classList.add("question-wrapper");
        let nextBtn = document.createElement("button");
        nextBtn.innerText = "Next";
        triviaWrapper.append(newQuestionWrapper);
        triviaWrapper.append(nextBtn);
        newQuestionWrapper.append(newH2);

        for (let i = 0; i < triviaData[currentQuestionIndex].options.length; i++) {
            let newBtn = document.createElement("button");
            newBtn.innerText = triviaData[currentQuestionIndex].options[i];
            newBtn.setAttribute("data-question-id", triviaData[currentQuestionIndex].id);
            newQuestionWrapper.append(newBtn);
    
            newBtn.addEventListener("click", checkAnswerSelection);
        };
    
        // Next button event listener
        nextBtn.addEventListener("click", showNextQuestion);

    } else {
        console.log("done")
    }
};

function showNextQuestion() {
    currentQuestionIndex++;
    showQuestion();
}

// Check if answer is correct based on ID pulled from data.js
function checkAnswerSelection(e) {
    const selectedBtn = e.target;
    const selectedAnswer = selectedBtn.innerText;
    const questionId = selectedBtn.getAttribute("data-question-id");


    let currentBtns = document.querySelectorAll(".question-wrapper button");
    selectedBtn.classList.add("selected");
    for (let i = 0; i < currentBtns.length; i++) {
        if (!currentBtns[i].classList.contains("selected")) {
            currentBtns[i].style.backgroundColor = "black"
        }
    }

    // select current buttons in the DOM here

    let currentQuestion;
    for (let i = 0; i < triviaData.length; i++) {
        if (triviaData[i].id.toString() === questionId) {
            currentQuestion = triviaData[i];
        }
    }

    if (selectedAnswer === currentQuestion.answer) {
        userAnswers.push("true");
        console.log(userAnswers);
        // Code to control button behavior after an answers is clicked here
    } else {
        userAnswers.push("false");
        console.log(userAnswers);
        // Code to control button behavior after an answers is clicked here
    }
}