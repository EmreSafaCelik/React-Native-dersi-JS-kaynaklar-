const prompt = require('prompt-sync')();
// 1- Kullanıcıdan üç farklı sayı alın, 3ünü çarpıp ekrana yazdırın
let sayi1 = prompt("birinci sayıyı giriniz:") // girdi almak için
let sayi2 = prompt("ikinci sayıyı giriniz: ") // "4"
let sayi3 = prompt("üçüncü sayıyı giriniz: ") // "5"
console.log(sayi1 * sayi2 * sayi3)


// 2- Kullanıcıdan boy ve kilo bilgisini alın, ardından beden kitle indeksini bulun
// Beden Kitle İndeksi = Kilo / (Boy * Boy) -> Kullanıcı boyu metre cinsinden, 1.83 gibi, yazıcak. Kilo kg cinsinden.
let kilo = prompt("kilonuzu giriniz ")
let boy = prompt("boyunuzu giriniz ")
console.log(kilo / (boy * boy))

// 3- Bir aracın bir kilometrede ne kadar tl yaktığını ve kaç kilometre yol yaptığı bilgilerini kullanıcıdan 
// alıp ne kadar harcandığını hesaplayın ve ekrana yazdırın

let herKMdeKacTL = prompt("arabanızın her bir kilometrede kaç TL yaktığını giriniz: ")
let katedilenYolKacKM = prompt("toplamda ne kadar yol katettiğinizi giriniz: ")
console.log(herKMdeKacTL * katedilenYolKacKM)

// 4- Kullanıcıdan isim, soyisim ve telefon numarası bilgisini alıp bu bilgileri ekrana yazdırın
let isim = prompt("isminizi giriniz: ")
let soyisim = prompt("soyisminizi giriniz: ")
let telno = prompt("telefon numaranızı giriniz: ")
console.log(isim + " " + soyisim + " " + telno)

// 5- Kullanıcıdan boy ve kilo bilgisini alın, kullanıcının beden kitle indeksini bulun ve
// eğer indeks değeri 18.5 altındaysa ekrana "zayıf", 18.5-25 arasındaysa "ortalama", 
// 25-30 arasındaysa "kilolu", 30'un üzerindeyse "fazla kilolu" yazdırın
let boy1 = prompt("boyunuzu giriniz: ")
let kilo1 = prompt("kilonuzu giriniz: ")
let bki = kilo1 / (boy1 * boy1)
if (bki < 18.5) {
    console.log("zayıf")
} else if (18.5 < bki < 25) {
    console.log("ortalama")
} else if (25 < bki < 30) {
    console.log("kilolu")
} else {
    console.log("fazla kilolu")
}


// 6- Kullanıcıdan 3 sayı alın ve en büyük sayıyı ekrana yazdırın
let sayı1 = prompt("ilk sayıyı giriniz: ")
let sayı2 = prompt("ikinci sayıyı giriniz: ")
let sayı3 = prompt("üçüncü sayıyı giriniz: ")
if (sayı1 > sayı2 && sayı1 > sayı3) {
    console.log(sayı1)
} else if (sayı2 > sayı1 && sayı2 > sayı3) {
    console.log(sayı2)
} else {
    console.log(sayı3)
}

// 7- Kullanıcıdan vize1, vize2, final notlarını alın. Toplam nota vizeler 30%ar, final 40% etki edecek.
/* Ekrana: 
    -Toplam not 90'dan yüksekse "AA"  
    -Toplam not 85'ten yüksek 90'dan düşükse "BA"  
    -Toplam not 80'den yüksek 85'ten düşükse "BB"  
    -Toplam not 75'ten yüksek 80'den düşükse "CB"  
    -Toplam not 70'ten yüksek 75'ten düşükse "CC"  
    -Toplam not 65'ten yüksek 70'ten düşükse "DC" 
    -Toplam not 60'tan yüksek 65'ten düşükse "DD" 
    -Toplam not 55'ten yüksek 60'dan düşükse "FD"  
    -Toplam not 55'ten düşükse FF yazdırın   */
let vize1 = prompt("1. vize notlarınızı giriniz: ")
let vize2 = prompt("2. vize notlarınızı giriniz: ")
let final = prompt("final notunuzu giriniz: ")
let toplamNot = vize1 * (3/10) + vize2 * (3/10) + final * (4/10)
if (toplamNot > 90) {
    console.log("AA")
} else if (toplamNot > 85) {
    console.log("BA")
} else if (toplamNot > 80) {
    console.log("BB")
} else if (toplamNot > 75) {
    console.log("CB")
} else if (toplamNot > 70) {
    console.log("CC")
} else if (toplamNot > 65) {
    console.log("DC")
} else if (toplamNot > 60) {
    console.log("DD")
} else if (toplamNot > 55) {
    console.log("FD")
} else {
    console.log("FF")
}


// -------------------------- SONRASI SONRAKİ DERSLERİN KONUSU --------------------------------

// 8- 1'den 100'e kadar olan sayılardan kullanıcıdan alınacak sayıya tam bölünenleri ekrana yazdırın

// BONUS- Kullanıcıdan iki sayı isteyin ve bu sayıların değerlerini birbirleri ile değiştirin

let number1 = prompt() // 5
let number2 = prompt() // 10

let geciciDegisken = number2
console.log(`number1: ${number1} - number2: ${number2} - geciciDegisken: ${geciciDegisken}`)
number2 = number1 // 5
console.log(`number1: ${number1} - number2: ${number2} - geciciDegisken: ${geciciDegisken}`)
number1 = geciciDegisken // 10
console.log(`number1: ${number1} - number2: ${number2} - geciciDegisken: ${geciciDegisken}`)
