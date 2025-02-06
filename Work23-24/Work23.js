document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementById("player")) {
        let playerName = localStorage.getItem("playerName");
        if (!playerName) window.location.href = "Work23.2.html";

        document.getElementById("player").innerText = playerName;
        startGame();
    }
});
let score = 0;
let timeLeft = 30;
let interval;

function startGame() {
    updateTarget();
    interval = setInterval(updateTimer, 1000);
}

function updateTarget() {
    let target = document.getElementById("target");
    let gameArea = document.querySelector(".game-container");

    let maxX = gameArea.clientWidth - target.clientWidth;
    let maxY = gameArea.clientHeight - target.clientHeight;

    let randomX = Math.floor(Math.random() * maxX);
    let randomY = Math.floor(Math.random() * maxY);

    target.style.left = randomX + "px";
    target.style.top = randomY + "px";
    target.onclick = function() {
        score++;
        document.getElementById("score").innerText = score;
        updateTarget();
    };
}

function updateTimer() {
    timeLeft--;
    document.getElementById("timer").innerText = `00:${timeLeft < 10 ? "0" + timeLeft : timeLeft}`;
    
    if (timeLeft <= 0) {
        clearInterval(interval);
        saveScore();
    }
}

function saveScore() {
    let playerName = localStorage.getItem("playerName");
    let scores = JSON.parse(localStorage.getItem("scores")) || [];
    scores.push({ name: playerName, score: score });
    localStorage.setItem("scores", JSON.stringify(scores));
    window.location.href = "Work23.3.html";
}

function exitGame() {
    clearInterval(interval);
    saveScore();
}
