document.addEventListener("DOMContentLoaded", function () {
  let playerName = localStorage.getItem("playerName");
  if (!playerName) window.location.href = "Work23.2.html";
  document.getElementById("player").innerText = playerName;
});
    // Инициализация игры
let score = 0;
let timeLeft = 0;
let interval;
let isPaused = false;

updateTarget();
startGame();
function startGame() {
  interval = setInterval(updateTime, 1000);
}

function updateTime() {
  if (!isPaused) {
    timeLeft++;
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    document.getElementById("timer").innerText = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  }
}

document.getElementById("target").addEventListener("click", function (e) {
  if (!isPaused) {
    if (e.button === 0) {
      score += 5;
    } else if (e.button === 2) {
      score += 10;
    }
    document.getElementById("score").innerText = score;
    updateTarget();
  }
});
function updateTarget() {
  let target = document.getElementById("target");
  let gameArea = document.querySelector(".game-container");

  let maxX = gameArea.clientWidth - target.clientWidth;
  let maxY = gameArea.clientHeight - target.clientHeight;

  let randomX = Math.floor(Math.random() * maxX);
  let randomY = Math.floor(Math.random() * maxY);

  target.style.left = randomX + "px";
  target.style.top = randomY + "px";
}

function togglePause() {
  if (isPaused) {
    isPaused = false;
    document.getElementById("pause-message").classList.add("hidden");
    startGame();
} else {
    isPaused = true;
    document.getElementById("pause-message").classList.remove("hidden");
    clearInterval(interval);
  }
}

document.addEventListener("keydown", function (e) {
  if (e.code === "Space") {
    togglePause();
  }
});
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
