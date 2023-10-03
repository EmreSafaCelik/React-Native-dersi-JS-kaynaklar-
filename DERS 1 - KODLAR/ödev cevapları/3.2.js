/*
3 değişkene farklı sayılar atayıp aralarından en büyük olanı bulan programı yazın.
*/
let a = 7;  // Değişken a'ya bir değer atayın
let b = 20;  // Değişken b'ye bir değer atayın
let c = 15;  // Değişken c'ye bir değer atayın

let enBuyuk;  // En büyük sayıyı depolamak için bir değişken oluşturun

// Eğer a, b ve c'den büyükse
if(a > b && a > c) {
    enBuyuk = a;
} 
// Eğer b, a ve c'den büyükse
else if(b > a && b > c) {
    enBuyuk = b;
} 
// Eğer c, a ve b'den büyükse
else {
    enBuyuk = c;
}

console.log("En büyük sayı: " + enBuyuk);  // En büyük sayıyı yazdırın
