/*
Bir "a" değişkeni yaratın. Bu değişkenin mükemmel 
sayı olup olmadığını kontrol eden bir program yazın.
*/

let a = 33550336; // Kontrol etmek istediğiniz sayı
let toplam = 0;

for(let i = 1; i < a; i++) {
  if(a % i === 0) { // "i", "a" nın bir böleni mi?
    toplam += i; // Eğer öyleyse, toplama ekleyin
  }
}

if(toplam === a) { // Toplam "a" ya eşit mi?
  console.log(a + " bir mükemmel sayıdır."); 
} else {
  console.log(a + " bir mükemmel sayı değildir."); 
}  