var n = Number(prompt("Введите натуральное число:"));

if (n > 0 && Number.isInteger(n)) {
    var sum = 0;
    var count = 0;
    var num = n;

    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
        count++;
    }

    document.write("Число: " + n + "<br>");
    document.write("Количество цифр: " + count + "<br>");
    document.write("Сумма цифр: " + sum);
} else {
    document.write("Ошибка: введите натуральное число.");
}

document.write("<h2>Таблица умножения</h2>");
document.write("<table border='1' cellspacing='0' cellpadding='5'>");

for (var i = 1; i <= 10; i++) {
    document.write("<tr>");
    for (var j = 1; j <= 10; j++) {
        document.write("<td>" + (i * j) + "</td>");
    }
    document.write("</tr>");
}

document.write("</table>");

var a = Number(prompt("Введите число (a):"));
var x = Number(prompt("Введите степень (x, целое число):"));

if (Number.isInteger(x)) {
    var result = Math.pow(a, x);
    document.write(a + " в степени " + x + " = " + result);
} else {
    document.write("Ошибка: степень должна быть целым числом.");
}
