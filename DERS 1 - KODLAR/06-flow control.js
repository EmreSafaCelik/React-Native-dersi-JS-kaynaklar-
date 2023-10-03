/* IF İLE AKIŞ KONTROLÜ
if (conditional) {
    conditional sağlanıyorsa çalıştırılacak statement bloğu
} else {
    conditional sağlanmıyorsa çalıştırılacak statement bloğu
}*/

let temperature = 20;
console.log("Derece 20".toUpperCase())
if (temperature < 30) {
    console.log("Bugün çok sıcak değil");
}

temperature = 35;
console.log("Derece 35".toUpperCase())
if (temperature < 30) {
    console.log("Bugün çok sıcak değil");
} else {
    console.log("Bugün çok sıcak");
}

temperature = 30;
console.log("Derece 30".toUpperCase())
if (temperature < 20) {
    console.log("Bugün soğuk");
} else if (temperature < 30) {
    console.log("Bugün sıcak değil");
} else {
    console.log("Bugün sıcak");
}

// !!!!!!!!!!!!!!! BU DOSYADA SONRASINI İŞLEMEDİK !!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!! SONRAKİ DOSYAYA GEÇİN !!!!!!!!!!!!!!!!!!!!!!!!!!!
/* SWITCH İLE AKIŞ KONTROLÜ 
switch (değişken) {
    case değer:
        değişken==değer ise çalıştırılacak statement bloğu
        break;
    case değer2:
        değişken==değer2 ise çalıştırılacak statement bloğu
        break;
    default:
        değişken yazılı değerlerden herhangi birine eşit değil ise çalıştırılacak statement bloğu
}
*/
let day = 4;
console.log("switch örnek1".toUpperCase())
switch (day) {
    case 0:
        console.log("Pazartesi");
        break;
    case 1:
        console.log("Salı");
        break;
    case 2:
        console.log("Çarşamba");
        break;
    case 3:
        console.log("Perşembe");
        break;
    case 4:
        console.log("Cuma");
        break;
    case 5:
        console.log("Cumartesi");
        break;
    case 6:
        console.log("Pazar");
        break;
    default:
        console.log("Bilinmeyen gün");
}


console.log("switch örnek2".toUpperCase())
let fruit = "elma";
switch (fruit) {
    case "muz":
        console.log("Ben muzum");
        break;
    case "elma":
        console.log("Ben elmayım");
        // break eksik olduğu için, portakal da çalışacak
    case "portakal":
        console.log("Ben portakalım");
        break;
    case "mango":
        console.log("Ben mangoyum");
        break;
    default:
        console.log("Listede değilim");
}


// TERNARY OPERATOR -> SHORTHAND (KISA) IF
let age = 15;
console.log("ternary operator örnek1".toUpperCase())
let voteEligibility = (age >= 18) ? "Oy kullanabilir" : "Oy kullanamaz";
console.log(voteEligibility);  // Çıktı: Oy kullanamaz

// ternary operatör ile birden fazla statement çalıştırmak
console.log("ternary operator örnek2".toUpperCase())
age >= 18 ? console.log("Oy kullanabilir") : (console.log("Oy kullanamaz"), console.log(`Oy kullanabilmesine ${18-age} sene var.`));