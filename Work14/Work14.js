function factorialRecursive(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorialRecursive(n - 1);
}

var num = Number(prompt("Введите число для вычисления факториала:"));
if (num >= 0 && Number.isInteger(num)) {
    document.write(num + "! = " + factorialRecursive(num) + "<br>");
} else {
    document.write("Ошибка: введите неотрицательное целое число." + "<br>");
}
function factorialLoop(n) {
    var result = 1;
    for (var i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
var num = Number(prompt("Введите число для вычисления факториала:"));
if (num >= 0 && Number.isInteger(num)) {
    document.write(num + "! = " + factorialLoop(num) + "<br>");
} else {
    document.write("Ошибка: введите неотрицательное целое число." + "<br>");
}

function formatTime(seconds) {
    var minutes = Math.floor(seconds / 60);
    var sec = seconds % 60;
    return minutes + ":" + (sec < 10 ? "0" : "") + sec;
}
var seconds = Number(prompt("Введите количество секунд:"));
if (seconds >= 0 && Number.isInteger(seconds)) {
    document.write(seconds + " – " + formatTime(seconds) + "<br>");
} else {
    document.write("Ошибка: введите неотрицательное целое число." + "<br>");
}

function getFormattedDate() {
    var date = new Date();
    var day = String(date.getDate()).padStart(2, "0");
    var month = String(date.getMonth() + 1).padStart(2, "0");
    var year = date.getFullYear();
    
    var daysOfWeek = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
    var dayOfWeek = daysOfWeek[date.getDay()];

    return day + "." + month + "." + year + ", " + dayOfWeek;
}
document.write(getFormattedDate());
