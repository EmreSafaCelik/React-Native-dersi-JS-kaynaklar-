const prompt = require('prompt-sync')();

function convertToEuro(tl) {
    return tl / 29;
}

function convertToDollar(tl) {
    return tl / 26;
}

let tl = prompt('TL bazında bir para miktarı girin: ');
let currency = prompt('Bu parayı hangi birime çevirmek istersiniz? (euro/dolar) ');

if (currency === 'euro') {
    console.log(convertToEuro(Number(tl)) + ' Euro');
} else if (currency === 'dolar') {
    console.log(convertToDollar(Number(tl)) + ' Dolar');
} else {
    console.log('Geçersiz birim');
}
