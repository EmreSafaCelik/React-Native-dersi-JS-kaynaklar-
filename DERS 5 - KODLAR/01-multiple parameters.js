// iki argümanlı fonksiyon
function functionName(arg1, arg2) {
    // kodlar
}
functionName("emre", "çelik")

// Örnek 1
function addTwoNumbersUp(number1, number2) {
    return number1 + number2
}
console.log(addTwoNumbersUp(3, 4))

/* Çok Argümanlı fonksiyon
function functionName(arg1, arg2, ..., argn) {
    // kodlar
} 
// Kaç argüman ile tanımlandıysa o kadar argüman ile çağrılmalıdır, girilmeyen argümanlar undefined değeri alır
*/

function meet(name, surname, age, mesaj) {
    //return "Merhaba, ben " + name + " " + surname + ", " + age + " yaşındayım." + mesaj
    return `Merhaba, ben ${name} ${surname}, ${age} yaşındayım. ${mesaj}`
}
console.log(meet("Emre Safa", "Çelik", 21, "Memnun oldum."))

function addFiveNumbersUp(number1, number2, number3, number4, number5) {
    return  number1 + number2 + number3 + number4 + number5
}
console.log(addFiveNumbersUp(4, 2, 3, 7, 2))



// d8kdörtgen kenarlarını alıp alanı hesaplayan fonksiyon
// 4, 2 = 8 
// 6, 3 = 18
// 21, 21 = 441

// ikizkenar bir üçgenin çevresini hesaplayan fonksiyonu yazın
// ilk argüman ikizkenar olan kenarlardan birinin uzunluğu,
// ikinci argüman ikizkenar olmayan kenarın uzunluğu


// üçgenin iki açısını alıp üçüncüyü hesaplayan fonksiyon
function addTwoNumbersUp(number1, number2=10) {
    return number1 + number2
}
console.log(addTwoNumbersUp(3, 15))
console.log(addTwoNumbersUp(6))

// SONRAKİ SORU
// 3 sayı argümanı alan, ilki tl, ikinci euro, üçüncü dolar olacak,
// bu değerleri tl'ye çevirip toplamını dönen fonksiyon
// euro 30, dolar 27



// // DEFAULT PARAMETRELER
// function meet(name, surname, age=18, mesaj="Memnun oldum") {
//     //return "Merhaba, ben " + name + " " + surname + ", " + age + " yaşındayım." + mesaj
//     return `Merhaba, ben ${name} ${surname}, ${age} yaşındayım. ${mesaj}`
// }
// console.log(meet("Emre Safa", "Çelik", 21))



// PARAMETRELERİ SIRASIZ GİRMEK
function meet({name=50, surname, age, mesaj}) {
    //return "Merhaba, ben " + name + " " + surname + ", " + age + " yaşındayım." + mesaj
    return `Merhaba, ben ${name} ${surname}, ${age} yaşındayım. ${mesaj}`
}
console.log(meet({age:32, name:"Emre Safa", mesaj:"helu", surname:"Çelik"}))
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 70,
    birthYear: 1953
}