for (let i = 0; i <= 5; i++){
    console.log(`${i} * ${i} = ${i * i}`)
} 

/*
0 * 0 = 0
1 * 1 = 1
2 * 2 = 4
3 * 3 = 9
4 * 4 = 16
5 * 5 = 25
*/

const countries = ['Finlandiya', 'İsviçre', 'Amerika', 'Türkiye', 'Grönland']
const newArr = []
for(let i = 0; i < countries.length; i++){
  newArr.push(countries[i].toUpperCase())
} // ["FINLANDIYA", "İSVIÇRE", "AMERIKA", "TÜRKIYE", "GRÖNLAND"]

// const numbers = [1, 2, 3, 4, 5]
// const newArr1 = []
// for(let i = 0; i < numbers.length; i++){
//   newArr1.push( numbers[i] ** 2)
// }
// console.log(newArr1)  // [1, 4, 9, 16, 25]

// Örnek 2 -> Bir sayı arrayi oluşturup içindekilerin toplamını ekrana yazdırın 
// içerdiği konular: değişkenler, for döngüsü, toplama
// const numbers = [1, 2, 3, 4, 5]
// let sum = 0
// for(let i = 0; i < numbers.length; i++){

// }

// SONRAKİ SORU
// 10000e kadar olan sayılardan 63'e tam bölünenleri ekrana yazdırın
for(let j = 0; j < 10000; j++) {
  if ( j % 63 === 0) {
    console.log(j)
  }
}













// argüman olarak verilecek array içindeki bütün sayıların toplamını dönen fonksiyon


let i = 0
while (i <= 5) {
  console.log(i)
  i++
}
// 0 1 2 3 4 5



// BREAK -> bulunduğu döngüyü bitirir.
for(let i = 0; i <= 5; i++){
  if(i == 3){
    break
  }
  console.log(i)
}
// 0 1 2


for(let i = 0; i <= 5; i++){
  if(i == 3){
    continue
  }
  console.log(i)
}
// 0 1 2 4 5