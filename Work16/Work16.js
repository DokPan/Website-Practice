var inputString = prompt("Введите строку:");

for (var i = 0; i < inputString.length; i++) {
    document.write(inputString[i] + " - " + inputString.charCodeAt(i) + "<br>");
}

var mainString = prompt("Введите строку:");
var subString = prompt("Введите подстроку для поиска:");
var count = 0;
var pos = mainString.indexOf(subString);

while (pos !== -1) {
    count++;
    pos = mainString.indexOf(subString, pos + 1);
}

document.write("Подстрока встречается " + count + " раз(а).");

var mainString = prompt("Введите строку:").toLowerCase();
var subString = prompt("Введите подстроку для поиска:").toLowerCase();
var count = 0;
var pos = mainString.indexOf(subString);

while (pos !== -1) {
    count++;
    pos = mainString.indexOf(subString, pos + 1);
}

document.write("Подстрока встречается " + count + " раз(а)." + "<br>");

function calculator(a, b, operation) {
    var result;
    switch (operation) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
        case "x":
            result = a * b;
            break;
        case "/":
        case ":":
            result = b !== 0 ? a / b : "Ошибка: деление на ноль" + "<br>";
            break;
        case "%":
            result = b !== 0 ? a % b : "Ошибка: деление на ноль" + "<br>";
            break;
        default:
            return "Операция " + operation + " неизвестна" + "<br>";
    }
    return a + " " + operation + " " + b + " = " + result + "<br>";
}

var num1 = Number(prompt("Введите первое число:"));
var num2 = Number(prompt("Введите второе число:"));
var op = prompt("Введите операцию (+, -, *, x, /, :)");

document.write(calculator(num1, num2, op));
