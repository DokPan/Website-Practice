let N1 = 10;
let firstArray = Array.from({ length: N1 }, () => Math.floor(Math.random() * 101));

let secondArray = firstArray.filter(num => num % 2 !== 0);

console.log("Первый массив:", firstArray.join(", "));
document.write("Первый массив:", firstArray.join(", ") + "<br>");
console.log("Второй массив (нечетные числа):", secondArray.join(", "));
document.write("Второй массив (нечетные числа):", secondArray.join(", ") + "<br>");

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

array2.push(...array1);

array2.forEach((element, index) => {
    console.log(`Индекс ${index}: ${element}`);
	document.write(`Индекс ${index}: ${element}` + "<br>");
});

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let N2 = 3;

for (let i = 0; i < N2; i++) {
    array.pop();
}

console.log("Массив после удаления:", array.join(", "));
document.write("Массив после удаления:", array.join(", ") + "<br>");

let numbers = [5, 3, 8, 1, 2, 7];

let ascending = [...numbers].sort((a, b) => a - b);
console.log("Сортировка по возрастанию:", ascending.join(", "));
document.write("Сортировка по возрастанию:", ascending.join(", ") + "<br>");

let descending = [...numbers].sort((a, b) => b - a);
console.log("Сортировка по убыванию:", descending.join(", "));
document.write("Сортировка по убыванию:", descending.join(", ") + "<br>");
