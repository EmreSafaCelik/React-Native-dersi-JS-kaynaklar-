const prompt = require('prompt-sync')();

let number1 = prompt('Bir sayı girin: ');
let number2 = prompt('Bir başka sayı girin: ');
let operation = prompt('Bir işlem seçin (+, -, *, /): ');

number1 = Number(number1);
number2 = Number(number2);

if (operation === '+') {
    console.log(number1 + number2);
} else if (operation === '-') {
    console.log(number1 - number2);
} else if (operation === '*') {
    console.log(number1 * number2);
} else if (operation === '/') {
    console.log(number1 / number2);
} else {
    console.log('Geçersiz işlem');
}
