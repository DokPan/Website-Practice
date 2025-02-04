var a = 10;
var b = 15;
document.write("Переменная a: " + a + "<br>");
document.write("Переменная b: " + b + "<br>");
document.write("Сумма: " + (a + b) + "<br>");

window.alert("Hello World");

var имя = window.prompt("Введите ваше имя");
document.write("Добро пожаловать, " + имя + "!" + "<br>");

var num1 = 10;
var num2 = 20;
var result = confirm("Вывести максимум?");
if (result) {
    document.write("Максимум: " + Math.max(num1, num2));
} else {
    document.write("Минимум: " + Math.min(num1, num2));
}
