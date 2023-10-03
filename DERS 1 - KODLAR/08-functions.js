// !!!!!!!!!!!!!!! BU DOSYAYI İŞLEMEDİK !!!!!!!!!!!!!!!!!!!!!
// SONRAKİ DERSİN KONUSUNA BİR BAKMAK İSTERSEN GÖZ ATABİLİRSİN

/* FONKSİYON BİLDİRİMİ (DECLARATION)
function functionName(arg1, arg2, ...) {
    fonksiyon çağırıldığında çalıştırılacak kod bloğu
} */

function greet(name) {
    console.log(`Merhaba, ${name}!`);
}
greet('John');  // Çıktı: Merhaba, John!


// ANONİM FONKSİYON İFADESİ (EXPRESSION)  
let greet2 = function(name) {
    console.log(`Merhaba, ${name}!`);
}
greet2('John');  // Çıktı: Merhaba, John!


// ANONİM SHORTHAND FONKSİYON İFADESİ
// argüman yoksa (), tek argüman varsa alttaki gibi, çok argüman varsa (arg1, arg2), ayrıca tek argüman varsa o da parantez içine alınabilir
let greet3 = name => {
    console.log(`Merhaba, ${name}!`);
}
greet3('John');  // Çıktı: Merhaba, John!


// FONKSİYONLARDA "RETURN"
function add(x, y) {
    return x + y;
    console.log("Bu satır çalışmayacak")
}
let sum = add(5, 10); 
console.log(sum);  // 15

