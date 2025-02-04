var num1 = Number(prompt("Введите первое число:"));
var num2 = Number(prompt("Введите второе число:"));
var num3 = Number(prompt("Введите третье число:"));

var min = Math.min(num1, num2, num3);

document.write("Минимальное число: " + min + "<br>");

var month = Number(prompt("Введите номер месяца (1-12):"));

if (month >= 1 && month <= 12) {
    var season;
    if (month == 12 || month <= 2) {
        season = "Зима";
    } else if (month >= 3 && month <= 5) {
        season = "Весна";
    } else if (month >= 6 && month <= 8) {
        season = "Лето";
    } else {
        season = "Осень";
    }
    document.write("Сезон: " + season + "<br>");
} else {
    document.write("Ошибка: такого месяца нет." + "<br>");
}

var year = Number(prompt("Введите год:"));
var month = Number(prompt("Введите номер месяца (1-12):"));

var isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

var daysInMonth;
if (month === 2) {
    daysInMonth = isLeap ? 29 : 28;
} else if ([4, 6, 9, 11].includes(month)) {
    daysInMonth = 30;
} else if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
    daysInMonth = 31;
} else {
    daysInMonth = null;
}

if (daysInMonth) {
    document.write("Год " + year + " " + (isLeap ? "високосный" : "не високосный") + "<br>");
    document.write("В месяце " + month + " дней: " + daysInMonth);
} else {
    document.write("Ошибка: некорректный номер месяца.");
}
