// npm install prompt-sync
const prompt = require('prompt-sync')();

const name = prompt('Bir sayı giriniz: ');
console.log(Number(name) + Number(name));
