const prompt = require('prompt-sync')(); // indirdikten sonra dosyada kullanma

// TEK PARAMETRELİ (ARGÜMANLI) FONKSİYONLAR
function functionName(n) {
    return n * n
}
let number = prompt("karesini almak istediğiniz sayıyı giriniz: ")
console.log(functionName(number)) 


// Örnek 1
function returnCircleArea(r) {
    let area = Math.PI * r * r
    return area
}
console.log(returnCircleArea(10))

// Örnek 2 
// çiftMi(n) fonksiyonu n çift ise true, tek ise false döner
// 12 % 2 === 0 -> çift
// 17 % 2 === 1 -> tek
function çiftMi(n) {
    if (n % 2 == 0) {
        return true
    } else {
        return false
    }
}
console.log(çiftMi(5))
console.log(çiftMi(6))




// Örnek 4 - santigrat -> fahrenhayt çevirme fonksiyonu
// fahrenhayt = (santigrat * 9/5) + 32
// argüman santigrat cinsinden sayı olacak, 
// fonksiyon fahrenhayt cinsinden sayı dönecek

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
console.log(celsiusToFahrenheit(50))