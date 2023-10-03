const prompt = require('prompt-sync')()
// for (let i = 0; i <= 5; i++){
//     console.log(`${i} * ${i} = ${i * i}`)
// } 

// /*
// 0 * 0 = 0
// 1 * 1 = 1
// 2 * 2 = 4
// 3 * 3 = 9
// 4 * 4 = 16
// 5 * 5 = 25
// */

// const countries = ['Finlandiya', 'İsviçre', 'Amerika', 'Türkiye', 'Grönland']
// const newArr = []
// for(let i = 0; i < countries.length; i++){
//   newArr.push(countries[i].toUpperCase())
// } // ["FINLANDIYA", "İSVIÇRE", "AMERIKA", "TÜRKIYE", "GRÖNLAND"]

// // const numbers = [1, 2, 3, 4, 5]
// // const newArr1 = []
// // for(let i = 0; i < numbers.length; i++){
// //   newArr1.push( numbers[i] ** 2)
// // }
// // console.log(newArr1)  // [1, 4, 9, 16, 25]

// // Örnek 2 -> Bir sayı arrayi oluşturup içindekilerin toplamını ekrana yazdırın 
// // içerdiği konular: değişkenler, for döngüsü, toplama
// // const numbers = [1, 2, 3, 4, 5]
// // let sum = 0
// // for(let i = 0; i < numbers.length; i++){

// // }

// // SONRAKİ SORU
// // 10000e kadar olan sayılardan 63'e tam bölünenleri ekrana yazdırın
// for(let j = 0; j < 10000; j++) {
//   if ( j % 63 === 0) {
//     console.log(j)
//   }
// }

// argüman olarak verilecek array içindeki bütün sayıların toplamını dönen fonksiyon
// let i = 0
// let sum = 0
// while (i <= 5) {
//   sum = sum + i
//   // sum += i 
// }
// console.log(sum)


// // 20.07

// // BREAK -> bulunduğu döngüyü bitirir.
// for(let i = 0; i <= 5; i++){
//   if(i == 3){
//     break
//   }
//   console.log(i)
// }
// // 0 1 2

// // bir array içinde bir değer aradığımızı düşünelim.
// // bu değeri bulduktan sonra döngünün devam etmesine gerek yok
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let hedef = 5;
// for(let i = 0; i < numbers.length; i++) {
//     if(numbers[i] == hedef) {
//         console.log(`${hedef} bulundu, ${i}. indexte`);
//         break;
//     }
// }


// // kullanıcıdan bir sayı alan ve bu sayı 5'ten küçükse kullanıcıyı tebrik eden
// // değilse tekrar bir sayı alan bir program yazalım. Eğer kullanıcı 10 kez 5'ten
// // küçük sayı girmezse ekrana başarısız yazsın.
// let denemeSayisi = 0;
// while(true) {
//   denemeSayisi++;
//     let userInput = prompt()
//     if(userInput < 5) {
//         console.log(denemeSayisi + ". deneme başarılı");
//         break;
//     }
//     if(denemeSayisi > 10) {
//         console.log("Başarısız");
//         break;
//     }
// }

// let rastgeleSayi = Math.random() * 10 // 7.556475739258969
// rastgeleSayi = rastgeleSayi - (rastgeleSayi % 1) // 7

// rastgele bir tam sayı alınacak bir değişkende saklanacak
// kullanıcıdan tekrar tekrar girdi alınacak, kullanıcının girdisi, rastgele sayıdan büyükse
// fazla büyük bir sayı girdiniz, daha küçüğünü giriniz.
// küçükse eğer
// fazla küçük bir sayı girdiniz, daha büyüğünü giriniz.
// eşitse eğer
// Doğru sayıyı buldunuz.
// Konular: if else, while döngüsü, break, prompt(), console.log()
// döngünün sonsuz döngü olması lazım

// let rastgeleSayi = Math.floor(Math.random() * 10)
// while (true) {
//   let userInput = Number(prompt("Bir sayı tahmini yapın: "))
//   if (userInput == rastgeleSayi) {
//     console.log("Doğru sayıyı buldunuz.");
//     break
//   } else if (userInput > rastgeleSayi) {
//     console.log("Girdiğiniz sayı fazla büyük. Daha küçük bir sayı giriniz.")
//   } else if (userInput < rastgeleSayi) {
//     console.log("Girdiğiniz sayı fazla küçük. Daha büyük bir sayı giriniz.")
//   }
// }


// continue -> döngünün şuanki ilerlemesini yarıda kesip bir sonrakine geçer
// for(let i = 0; i <= 5; i++){
//   if(i == 3){
//     continue
//     console.log(i)
//   }
//   console.log(i)
// }
// 0 1 2 4 5


// Array'deki 0'lar hariç değerleri ekrana yazdırın
// KONULAR: for (while), continue, if, array

// let sayilar = [1, 0, 3, 0, 5, 6, 0, 8, 9, 10]
// for (let i = 0; i < sayilar.length; i++) {
//   if (sayilar[i] == 0) {
//     continue
//   }
//   console.log(sayilar[i])
// }


// iki argüman alan bir fonksiyona çevirelim
// argümanlardan biri array olacak
// diğer argüman ise hangi değer yazdırılmayacak ise o olacak


// function printEksikArray(arr1, eksilecek) {
//   // arr1 -> [1, 5, 7, 9, 2, 2, 3, 2]
//   // eksilecek -> 2

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] == eksilecek) {
//       continue
//     }
//     console.log(arr1[i])
//   }
// }
// printEksikArray([6, 7, 4, 7], 7) // 6 4
// printEksikArray([2, 5, 5, 2, 7, 0, 3], 5) // 2 2 7 0 3
// let sayilar = [1, 5, 7, 9, 2, 2, 3, 2]
// printEksikArray(sayilar, 2)









// for(let i = 0; i < sayilar.length; i++) {
//   if(sayilar[i] == 0) {
//       continue;
//   }
//   console.log(sayilar[i]);
// }


// // Break ile yaptığımızı continue ile de yapabiliriz.
// denemeSayisi = 0;
// while(attempts < 10) {
//     attempts++;
//     let userInput = prompt()
//     if(userInput < 0.1) {
//         console.log("Skipping attempt number " + attempts);
//         continue;
//     }
//     console.log("Attempt number " + attempts + " was successful");
// }
