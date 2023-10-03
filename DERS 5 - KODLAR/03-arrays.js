// Array tanımlamak
const arr = []
const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // sayı array'i
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongoDB'] // string array'i 
const mixedArr = [
    'John',
    250,
    true,
    { country: 'France', city: 'Saint Louis' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] },
    ["emre", 12, false]
] // farklı data tipleri bulunduran array

// string.split() fonksiyonu ile array yaratmak
let text = "Emre Safa Çelik"
let chars = text.split("") // ["E", "m", "r", "e", " ", "S", "a", "f", "a", " ", "Ç", "e", "l", "i", "k"]
let words = text.split(" ") // ["Emre", "Safa", "Çelik"]
let multipleLetterSplit = text.split("af") // ["Emre S", "a Çelik"]

let firstName = words[0] // "Emre"
let middleName = words[1] // "Safa"
let lastName = words[2] // Çelik

// ARRAY MODIFIKASYONU
words[1] = "Değiştirildi"
console.log(words) // ["Emre", "Değiştirildi", "Çelik"]

// FILL ARRAY
const emptyArray = Array()
const emptyFive = Array(5) // [empty x 5]
const filledFive = Array(5).fill("React Native") // ["React Native", "React Native", "React Native", "React Native", "React Native"]
const zeroFill = Array(12).fill(0) // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// CONCAT -> array'leri birleştirir.
const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)

console.log(thirdList) // [1, 2, 3, 4, 5, 6]

// INDEXOF -> verilen argüman array'de bulunuyorsa indexini döndürür.
// Bulunmuyorsa -1 döner. bulduğu ilk uygun değerin indeksini döner.
let numbersArr = [1, 2, 3, 4, 5, 4]
console.log(numbersArr.indexOf(3)) // -> 2
console.log(numbersArr.indexOf(12)) // -> -1
console.log(numbersArr.indexOf(4)) // -> 3

// LASTINDEXOF -> üstteki nin aynısını yapar ancak sona en yakın olan değerin indexini döner.
console.log(numbersArr.indexOf(3)) // -> 2
console.log(numbersArr.indexOf(12)) // -> -1
console.log(numbersArr.indexOf(4)) // -> 5


// INCLUDES -> verilen argüman array'de bulunuyorsa true, bulunmuyorsa false döner.
console.log(numbersArr.includes("La tristesse du diable")) // false
console.log(numbersArr.includes(7)) // false
console.log(numbersArr.includes(4)) // true
console.log(numbersArr.includes("4")) // false
console.log(numbersArr.includes(2)) // true

// TOSTRING -> array'i, elemanların arasına "," koyarak string'e çevirir
console.log(numbersArr.toString()) // 1,2,3,4,5,4

// JOIN -> array'i, verilen argüman'ı elemanların arasına koyarak birleştirip string'e çevirir. 
const addresses = ["Papatya Mahallesi", "Işık Sokak", "Şendur Apartmanı", "A Blok", "No:4", "Daire 6", "Bursa", "Türkiye"]
// const address = addresses.join(", ") // "Papatya Mahallesi, Işık Sokak, Şendur Apartmanı, A Blok, No:4, Daire 6, Bursa, Türkiye"
console.log(addresses.join("Laptop"))

// SLICE -> başlangıç index'i ve bitiş index'i argümanlarını alır, aradaki değerleri kopyalar
numbersArr = [1, 2, 3, 4, 5, 6]
// numbersArr.slice() // [1, 2, 3, 4, 5, 6] -> herşeyi kopyalar
// numbersArr.slice(0, 1) // [ 1 ] -> 0'dan başlayıp 1'e kadar kopyalar
numbersArr.slice(1, 4) // [2, 3, 4] -> 1. index'ten başlayıp 4. index'e kadar kopyalar.
console.log(numbersArr)
// PUSH -> Array'in sonuna yeni değer ekleme
let fruits = ['elma', 'portakal', 'mango', 'limon']

fruits.push('elma') // ['elma', 'portakal', 'mango', 'limon', 'elma']
console.log(fruits)
fruits.push('mandalina') // ['elma', 'portakal', 'mango', 'limon', 'elma', 'mandalina']

// POP -> Array'in sonundaki değeri siler
fruits.pop()    // Array'de kalan değerler -> ['elma', 'portakal', 'mango', 'limon', 'elma']; Dönen değer -> 'mandalina'

// SHIFT -> Array'in başındaki değeri siler
fruits.shift()  // Array'de kalan değerler -> ['portakal', 'mango', 'limon', 'elma']; Dönen değer -> 'elma'

// UNSHIFT -> Array'in başında değer ekler
fruits.unshift('mandalina')  // ['mandalina', 'portakal', 'mango', 'limon', 'elma']

// REVERSE -> Array'i tersine çevirir
fruits.reverse() // ['elma', 'limon', 'mango', 'portakal', 'mandalina']

// SORT -> Array'deki elementleri sıralar, daha sonra detaylı öğreneceğiz
fruits.sort() // ['elma', 'limon', 'mandalina', 'mango', 'portakal']

// ARRAY İÇİNDE ARRAY -> MATRİS
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

matrix[0] // [1, 2, 3]
matrix[0][0] // 1
matrix[1][2] // 6