// Örnek 3 -> 10'dan geriye sayan bir program yazın
// 0 olmasın
// for(let i = 10; i > 0; i--) {
//     console.log(i)
// }



// SONRAKİ SORU 3-a
// argüman olarak bir sayı alan ve bu sayıdan geriye sayan fonksiyonu yazın.
// function countDown(n) {
//     for(let i = n; i > 0; i--) {
//         console.log(i)
//     }
// }
// countDown(150)

// SONUNCU 3-b
// 2 argüman alan bir fonksiyon. ilk argüman başlangıç sayısı, ikinci argüman bitiş sayısı
// başlangıç sayısı > bitiş sayısı varsayalım
// başlangıç sayısından bitiş sayısına geri geri sayan fonksiyonu
// function countDown(n, e) {
//     for (let i = n; i >= e; i--) {
//         console.log(i)
//     }
// }
// countDown(7, 4)

// SORU 4
// Örnek -> kullanıcıdan ismini isteyen ve bir sayı isteyen, 
// ardından kullanıcının ismini o sayı defa yazan program
// const prompt = require("prompt-sync")()
// let number = Number(prompt("isminizin kaç kez tekrarlanacağını seçiniz: "))
// let isim = prompt("isminizi giriniz: ")

// for (let i = 0; i < number; i++) {
//     console.log(isim)
// }

// let i = 0
// while (i < number) {
//     console.log(isim)
//     i++
// }




// for'la veya -> kullanıcıdan istenen sayı kadar tekrarlancak
// forun içinde ise -> kullanıcıdan istenen isim yazılacak












// Örnek -> Aldığı argümanın faktöriyelini return eden fonksiyonu yazın. -> 5! = 5*4*3*2*1, 3! = 3*2*1

// Örnek aldığı argüman asal ise true, değil ise false dönen fonksiyon
// asal olmak, kendinden ve birden başka böleni olmamak demektir
// 6 % 2 = 0 -> asal değil
// 7 % 2 = 1, 7 % 3 = 1, 7 % 4 = 3, 7 % 5 = 2, 7 % 6 = 1, 7 % 8 = 7... -> asal

/// ----------------------- ÖDEVİN KALANI -------------------------------

// Örnek
// argüman alarak aldığı sayı uzunluğunda dik üçgen çizen fonksiyonu yazın.
// döngüler ve repeat()
/*

*
**          -> argüman 3 ise
***


*
**
***          -> argüman 6 ise
****       
*****
******

*/


// Örnek
// ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
// birden fazla "o" harfi içeren şirketleri başka bir array'e koyup o arrayi ekrana yazdırın


// Örnek -> argüman olarak verilecek array içindeki en büyük sayıyı bulan fonksiyon
// max() gibi fonksiyonlar KULLANILMAYACAK


// Örnek 
// argüman olarak sayı alan ve bu sayı uzunluğunda yazıyla İKİZKENAR üçgen çizdiren fonksiyon
/*

  *
 ***        -> argüman 3 olunca
*****



     *
    ***
   *****
  *******             -> argüman 6 olunca
 *********
***********

*/







