import triviaData from "./data.js";

const startBtn = document.getElementById("start");
const restartBtn = document.getElementById("restart-btn");

// Save the user answer to an array
let userAnswers = [];

// Save the index of the current question
let currentQuestionIndex = 0;

let nextBtn;

startBtn.addEventListener("click", initializeTrivia);
restartBtn.addEventListener("click", handleRestartQuiz);

// Initialize trivia
function initializeTrivia() {
    showQuestion();
    startBtn.classList.toggle("hide-btn");
    restartBtn.classList.toggle("hide-btn")
    userAnswers = [];
}

// Render UI based on data.js and add event listeners to the question choice buttons
function showQuestion() {
    const triviaWrapper = document.getElementById("trivia-wrapper");
    const triviaWrapperFooter = document.createElement("div");
    triviaWrapperFooter.classList.add("trivia-wrapper-footer");
    triviaWrapper.append(triviaWrapperFooter);
    // Clear previous question
    triviaWrapper.innerHTML = "";

    let questionStatusElement = document.createElement("span");
    questionStatusElement.innerText = currentQuestionIndex + 1 + " out of " + triviaData.length;

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
        triviaWrapperFooter.append(questionStatusElement);
        triviaWrapperFooter.append(nextBtn);
        triviaWrapper.append(triviaWrapperFooter)
        newQuestionWrapper.append(newH2);

        for (let i = 0; i < triviaData[currentQuestionIndex].options.length; i++) {
            let newBtn = document.createElement("button");
            newBtn.classList.add("option-btn");
            newBtn.innerText = triviaData[currentQuestionIndex].options[i];
            newBtn.setAttribute("data-question-id", triviaData[currentQuestionIndex].id);
            newQuestionWrapper.append(newBtn);
    
            newBtn.addEventListener("click", checkAnswerSelection);
        };
    
        // Next button event listener
        nextBtn.addEventListener("click", showNextQuestion);

        // Show results if all the question have been answered
    } else {
        showResults(triviaWrapper)
    }
};

function showNextQuestion() {
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

    currentBtns.forEach((btn) => {
        if (btn !== selectedBtn) {
            btn.classList.remove("selected");
        }
    });

    selectedBtn.classList.add("selected");

    // Check if the user has answered the question already
    let answeredIndex = userAnswers.findIndex((answer) => answer.questionId === questionId);
    if (answeredIndex !== -1) {
        userAnswers[answeredIndex].answer = selectedAnswer;
    } else {
        userAnswers.push({questionId, answer: selectedAnswer})
    }

    console.log(userAnswers)

    // Call the function to enable the "Next" button after an answer is select
    enableNextBtn();
}

function calculateScore() {
    let score = 0;
    for (let i =0; i < triviaData.length; i++) {
        if (userAnswers[i] && userAnswers[i].answer === triviaData[i].answer) {
            score++
        }
    }
    return score;
}

// Show results after trivia is completed 
function showResults(triviaWrapper) {
    // Calculate Score
    const score = calculateScore();
    for (let i = 0; i < triviaData.length; i++) {
        let newP = document.createElement("p");
        newP.classList.add("results-question");
        newP.innerText = triviaData[i].question;
        triviaWrapper.append(newP);

        let newList = document.createElement("ul");
        newList.classList.add("results-list")

        // Loop through question answers (4 in this  case)
        for (let j = 0; j < 4; j++) {
            let newLi = document.createElement("li");
            newLi.innerText = triviaData[i].options[j];

            // Add CSS class to correct answer
            if (triviaData[i].options[j] == triviaData[i].answer) {
                newLi.classList.add("correct-answer");
            }

            if (triviaData[i].options[j] == triviaData[i].answer && triviaData[i].options[j] != userAnswers[i].answer) {
                newLi.innerText += " (Correct Answer)"
            }

            // Add CSS class to incorrect answer, if applicable
            if (userAnswers[i] && userAnswers[i].answer === triviaData[i].options[j] && userAnswers[i].answer !== triviaData[i].answer) {
                newLi.classList.add("incorrect-answer");
                newLi.innerText += " (Your Answer)";
            }

            // Add the <li> to the list
            newList.append(newLi);

            // Add the list to the DOM after each <p> that holds the answer
            newP.insertAdjacentElement("afterend", newList);
        }

    };

    // Render the result elements to the DOM
    let scoreElement = document.createElement("p");
    scoreElement.classList.add("results-score");
    scoreElement.innerText = "You scored " + score.toString() + " out of " + triviaData.length + " correctly. Check your answers below.";
    let legendWrapper = document.createElement("div");
    legendWrapper.classList.add("legend-wrapper");
    let legendCorrectSpan = document.createElement("span");
    let legendIncorrectSpan = document.createElement("span");
    legendCorrectSpan.innerText = "Correct";
    legendIncorrectSpan.innerText = "Incorrect";
    legendWrapper.append(legendCorrectSpan);
    legendWrapper.append(legendIncorrectSpan);
    triviaWrapper.insertAdjacentElement("afterbegin", scoreElement);
    scoreElement.insertAdjacentElement("afterend", legendWrapper);
}

// Restart quiz -- clear trivia wrapper and reset quiz status variables
function handleRestartQuiz() {
    userAnswers = [];
    currentQuestionIndex = 0;
    const triviaWrapper = document.getElementById("trivia-wrapper");
    while (triviaWrapper.firstChild) {
    triviaWrapper.removeChild(triviaWrapper.firstChild)
    }
    showQuestion();
}