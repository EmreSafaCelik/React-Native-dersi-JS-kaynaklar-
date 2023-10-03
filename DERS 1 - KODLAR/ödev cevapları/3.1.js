/*
2 değişkene farklı sayılar atayıp % / ++ -- operatörlerini deneyin. Farklı durumlarda nasıl
davrandıklarını anlamaya çalışın. (isterseniz += gibi atama operatörlerini de test edin.)
*/

// Değişkenleri tanımlama
let a = 10;
let b = 5;

// Modulus operatörü: Bu operatör, bir sayının diğer sayıya bölümünden kalanı döndürür.
console.log(a % b); // 0, çünkü 10, 5'e tam bölünüyor
console.log(a % 3); // 1, çünkü 10, 3'e bölündüğende kalan 1 oluyor.

// Bölme operatörü: Bu operatör, bir sayının diğer sayıya bölüm sonucunu verir.
console.log(a / b); // 2, çünkü 10'un 5'e bölümü 2'dir
console.log(a / 3); // 3.33333, çünkü 10'un 3'e bölümü 3.33333'tür

// Artırma operatörü: Bu operatör, değişkenin değerini bir artırır.
console.log(a++); // 10, çünkü a'nın değeri ifade değerlendirildikten sonra artırılıyor
console.log(a); // 11, çünkü a'nın değeri bir önceki ifadede artırıldı

console.log(++b); // 6, çünkü b'nin değeri ifade değerlendirilmeden önce artırılıyor
console.log(b); // 6, çünkü b'nin değeri bir önceki ifadede artırıldı

// Azaltma operatörü: Bu operatör, değişkenin değerini bir azaltır.
console.log(a--); // 11, çünkü a'nın değeri ifade değerlendirildikten sonra azaltılıyor
console.log(a); // 10, çünkü a'nın değeri bir önceki ifadede azaltıldı

console.log(--b); // 4, çünkü b'nin değeri ifade değerlendirilmeden önce azaltılıyor
console.log(b); // 4, çünkü b'nin değeri bir önceki ifadede azaltıldı

// Atama operatörleri: Bu operatörler, bir değişkenin değerini günceller.
a += 3; // a'nın yeni değeri 13
console.log(a);

b -= 2; // b'nin yeni değeri 3
console.log(b);
