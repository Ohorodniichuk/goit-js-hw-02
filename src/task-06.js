`use strict`;

let input;
const numbers = [];
let total = 0;

while (input !== null) {
  input = prompt(`Введите число!`);
  if (input === null) {
    break;
  }
  if (Number.isNaN(Number(input)) || input === '') {
    alert(`Было введено не число, попробуйте еще раз`);
  } else {
    numbers.push(input);
  }
}
if (numbers.length > 0) {
  for (let i of numbers) {
    total += Number(i);
  }
}

alert(`Общая сумма чисел равна ${total}`);
