// ANONİM FONKSİYON İFADESİ (EXPRESSION)  
let greet1 = function(name) {
    console.log(`Merhaba, ${name}!`);
}
greet1('John');  // Çıktı: Merhaba, John!


// ANONİM SHORTHAND FONKSİYON İFADESİ
// argüman yoksa (), tek argüman varsa alttaki gibi, çok argüman varsa (arg1, arg2), ayrıca tek argüman varsa o da parantez içine alınabilir
let greet2 = () => {
    console.log(`Merhaba, ${name}!`);
}
greet2('John');  // Çıktı: Merhaba, John!

let greet3 = name => {
    console.log(`Merhaba, ${name}!`);
}
greet3('John');  // Çıktı: Merhaba, John!

let greet4 = (name) => {
    console.log(`Merhaba, ${name}!`);
}
greet4('John');  // Çıktı: Merhaba, John!

let greet5 = (name, surname) => {
    console.log(`Merhaba, ${name} ${surname}!`);
}
greet5('John');  // Çıktı: Merhaba, John!

