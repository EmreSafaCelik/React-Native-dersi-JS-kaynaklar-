// NORMAL FONKSİYON   
function greet(name) {
    console.log(name)
}

greet("emre") // emre
greet("safa") // safa
greet(4) // 4








// ANONİM FONKSİYON   
let greet1 = function(name) {
    console.log(`Merhaba, ${name}!`);
}
greet1('John');  // Çıktı: Merhaba, John!
greet1('emre');  // Çıktı: Merhaba, emre!







// ANONİM SHORTHAND FONKSİYON İFADESİ
// argüman yoksa (), tek argüman varsa alttaki gibi, çok argüman varsa (arg1, arg2), ayrıca tek argüman varsa o da parantez içine alınabilir
let greet2 = (name) => {
    console.log(`Merhaba, ${name}!`);
}
greet2('John');  // Çıktı: Merhaba, John!





let greet3 = (name, surname) => {
    console.log(`Merhaba, ${name}!`);
}
greet3('John');  // Çıktı: Merhaba, John!

let greet4 = () => {
    console.log('Merhaba');
}
greet4();  // Çıktı: Merhaba



let greet5 = (name, surname) => {
    console.log(`Merhaba, ${name} ${surname}!`);
}
greet5("Emre", "Safa");  // Çıktı: Merhaba, John!

// iki argüman alıp toplamını yazdıran fonksiyon
toplam(4, 6) // 10

