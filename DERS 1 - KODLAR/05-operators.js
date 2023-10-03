// ARİTMETİK OPERATÖRLER 
let a = 10;
let b = 3;

// çift taraflı
console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.3333333333333335
console.log(a % b); // 1
// tek taraflı
console.log(a++); // 10 (bu statement çalıştıktan sonra artacak)
console.log(a); // 11 -> arttı
console.log(++b); // 4 (bu statement çalışmadan önce artacak)


// ATAMA OPERATÖRLERİ
let c = 10;  // atama
c += 5;  // c = c + 5; c artık 15
c -= 3;  // c = c - 3; c artık 12
c *= 3;  // c = c * 3; c artık 36
// atama operatörü kalan çift taraflı aritmatik operatörler ile beraber de kullanabilir


// KIYAS OPERATÖRLERİ
let d = 10;
let e = '10';

console.log(d == e); // true, çünkü değerde aynılar
console.log(d === e); // false, çünkü tipte farklılar
console.log(d != e); // false
console.log(d !== e); // true
console.log(d > e); // false
console.log(d < e); // false
console.log(d >= e); // true
console.log(d <= e); // true


// MANTIKSAL OPERATÖRLER
let f = 10;
let g = 20;

console.log(f > 5 && g > 10); // true 
console.log(f > 15 || g > 10); // true -> sadece biri doğru ise
// Windows altGR + tire (-) -> |
// Mac option + tire (-) -> |
console.log(!(f > 15)); // true
console.log(!true) // false

// STRING OPERATORÜ
let text1 = "Merhaba";
let text2 = "Dünya";

console.log(text1 + " " + text2); // Çıktı: Merhaba Dünya