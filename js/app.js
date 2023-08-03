import triviaData from "./data.js"

const startBtn = document.getElementById("start");
// Save true/false status after the user answers
let userAnswers = [];
let currentQuestionIndex = 0;

let nextBtn;

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
        nextBtn = document.createElement("button");
        nextBtn.classList.add("next-btn");
        // conditional/ternary operator: condition ? expressionIfTrue : expressionIfFalse
        nextBtn.innerText = currentQuestionIndex >= triviaData.length - 1 ? "View Results" : "Next";
        nextBtn.disabled = true;
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
        showResults(triviaWrapper)
    }
};

function showNextQuestion() {
    /* if (currentQuestionIndex >= triviaData.length - 1) {
        showResults();
    } else {
        currentQuestionIndex++;
        showQuestion();
    } */
    currentQuestionIndex++;
    showQuestion();
}

// Enable the Next button after an answer is selected
function enableNextBtn() {
    nextBtn.disabled = false;
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
            selectedBtn.disabled = true;
            currentBtns[i].style.backgroundColor = "black";
        }
    }

    // Check if the user has answered the question already
    let answeredIndex = userAnswers.findIndex((answer) => answer.questionId === questionId);
    if (answeredIndex !== -1) {
        userAnswers[answeredIndex.answer = selectedAnswer];
    } else {
        userAnswers.push(selectedAnswer)
    }
    console.log(userAnswers)

    enableNextBtn();
}

// Show results after trivia is completed 
function showResults(triviaWrapper) {
    triviaWrapper.append(userAnswers);
}