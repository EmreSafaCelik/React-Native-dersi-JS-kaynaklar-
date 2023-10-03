const prompt = require('prompt-sync')(); // indirdikten sonra dosyada kullanma
// BKİ = Kilo / (Boy * Boy) 
// 18.5 küçükse zayıf
// 21'le 18.5 arası normal
// 25le 21 arası kilolu
// 25 üstü fazla kilolu

function calculateAge() {
    const birthYear = prompt("Doğum yılınızı giriniz: ")
    const currentYear = prompt("Bulunduğumuz yılı giriniz: ")
    return Number(currentYear) - Number(birthYear)
}

let age = calculateAge()

if (age < 18) {
    console.log("Ehliyeti olamaz")
} else if (age < 21) {
    console.log("21'den küçük 18'den büyük")
} else {
    console.log("21'den büyük")
}












