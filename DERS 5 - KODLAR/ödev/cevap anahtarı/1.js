const prompt = require('prompt-sync')();

function checkNumber(n) {
    if (n > 0) {
        console.log("pozitif");
    } else if (n < 0) {
        console.log("negatif");
    } else {
        console.log("nötr");
    }
}

let number = prompt('Bir sayı girin: ');
checkNumber(Number(number));
