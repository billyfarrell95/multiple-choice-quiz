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
        for (let j = 0; i < triviaData[i].options.length; j++) {
            let newBtn = document.createElement("button");
            newBtn.innerText = triviaData[i].options[i];
            newQuestionWrapper.append(newBtn);
        }
    };
};