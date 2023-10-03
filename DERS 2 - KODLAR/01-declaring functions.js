// PARAMETRESİZ VE RETURN'SÜZ FONKSİYON DEKLARASYONU
function functionName() {
  // fonksiyonu çağırınca çalışacak kodlar
}
functionName() // ismi ve parantez ile fonksiyonu çağırma

// Örnek 1
function writeTwoSquared() {
    let num = 2
    let sq = num * num
    console.log(sq)
}
writeTwoSquared() // 4

// Örnek 2
function writeTwoNumbersAdded() {
  let numberOne = 5
  let numberTwo = 10
  let sum = numberOne + numberTwo

  console.log(sum)
}
writeTwoNumbersAdded()

// Örnek 3 -> kendi isminizin uzunluğunu ekrana yazan fonksiyon
// İpucu -> arraylerde kullanabildiğimiz .length özelliğini stringlerde de kullanabiliyoruz.






function writeLengthOfName() {
    let name = "Emre"
    let length = name.length
    console.log(length)
}
// fonksiyonun tanımı bu şekilde, fonksiyonu çağırmadan fonksiyon çalışmaz!!! 

function writeLengthOfNameDirectly() {
    console.log("Emre".length)
}
writeLengthOfNameDirectly()


// Örnek