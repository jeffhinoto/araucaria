let timeRemaining = 0;
let timerInterval = null;

function startTimer(duration) {
    clearInterval(timerInterval); // Reseta qualquer timer ativo
    timeRemaining = duration;

    // Muda a cor de fundo para verde
    document.body.style.backgroundColor = "green";
    document.getElementById("timer-label").style.display = "block";

    updateTimerDisplay();

    // Inicia a contagem regressiva
    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            document.body.style.backgroundColor = "black";
            document.getElementById("timer-label").style.display = "none";
        }
    }, 1000);
}

function updateTimerDisplay() {
    document.getElementById("time").textContent = timeRemaining;
}
 