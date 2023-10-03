const prompt = require('prompt-sync')();

// Örnek 1: Bir sayının karesini hesaplayan bir fonksiyon
function square(number) {
    return number * number;
}
console.log(square(5));  // Çıktı: 25
let userNumber = prompt("Karesini almak istediğiniz sayıyı giriniz: ")
console.log(square(userNumber))

// Örnek 2: Bir kelimenin uzunluğunu hesaplayan bir fonksiyon
function getLength(word) {
    return word.length;
}
console.log(getLength("Merhaba"));  // Çıktı: 7
console.log(getLength(prompt("Uzunluğunu ölçmek istediğiniz yazıyı giriniz: "))); // Değişkene atayıp yazmakla aynı şey, sadece girilen değeri daha sonra kullanamıyoruz. (bir değişkene atamadığımız için)

// Örnek 3: Bir sayının pozitif olup olmadığını kontrol eden bir fonksiyon
function isPositive(number) {
    return number > 0;
}
console.log(isPositive(-7));  // Çıktı: false
console.log(isPositive(3));   // Çıktı: true
let userNumber1 = prompt("Pozitif mi kontrol etmek istediğiniz sayıyı giriniz: ")
console.log(isPositive(userNumber1));  
console.log(isPositive(prompt("Pozitif mi kontrol etmek istediğiniz sayıyı giriniz: ")));  

