const quoteCon = document.getElementById("quote");
const resetBtn = document.getElementById("getData");

resetBtn.addEventListener("click", () => {
    getAdvice();
});


window.onload = () => {
    getAdvice();
};

function getAdvice() {
    fetch("https://api.adviceslip.com/advice").then(response => {
        return response.json();
    }).then(adviceData => {
        const adviceObj = adviceData.slip;
        quoteCon.innerHTML = `"${adviceObj.advice}"`
    });
};