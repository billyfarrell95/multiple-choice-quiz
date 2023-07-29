import triviaData from "./data.js"

const startBtn = document.getElementById("start");

startBtn.addEventListener("click", startTrivia);

function startTrivia() {
    renderUI();
    startBtn.classList.toggle("hide-btn");
}

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
        console.log("That is correct");
    } else {
        console.log("That is incorrect");
    }
}