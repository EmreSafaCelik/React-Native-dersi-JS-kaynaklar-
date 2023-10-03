/*
4 farklı sayı değişkeni yaratın. Bu değişkenler bir dörtgenin kenar uzunluklarını temsil edecek.
Bu değişkenlerin değerlerine göre temsil edilen dörtgenin kare mi, dikdörtgen mi yoksa
sıradan bir dörtgen mi olduğunu kontrol edip ekrana yazdırın. Değişkenler için özel durumları
dikkate alın ve uygun mesajlar verin. (değerlerin bazılarının 0 veya negatif olması gibi)
*/
// Kenar uzunluklarını temsil eden değişkenleri tanımlıyoruz
let a = 5;
let b = 5;
let c = 5;
let d = 5;

// Değerlerin geçerliliğini kontrol ediyoruz (0 veya negatif olup olmadığını)
if (a <= 0 || b <= 0 || c <= 0 || d <= 0) {
    console.log("Kenar uzunlukları 0 veya negatif olamaz.");
} else {
    // Kenarların uzunluklarına göre dörtgenin tipini belirliyoruz
    if (a == b == c == d) {
        console.log("Bu bir karedir.");
    } else if (a === c && b === d) { // İsimlendirme kuralına uyulduğunu varsaydım
        console.log("Bu bir dikdörtgendir.");
    } else {
        console.log("Bu sıradan bir dörtgendir.");
    }
}
