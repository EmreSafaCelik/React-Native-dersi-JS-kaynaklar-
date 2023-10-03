// DEĞERE SAHİP (değer dönen/döndüren) FONKSİYONLAR

// Örnek 1
function printFullName (){
    let firstName = 'John'
    let lastName = 'Doe'
    let fullName = firstName + " " + lastName
    return fullName
}
console.log(printFullName())
// Bunu shell'de test edelim.

// Örnek 2
function addTwoNumbers() {
    let numOne = 2
    let numTwo = 3
    let total = numOne + numTwo
    return total
    console.log('bu satır hiçbir zaman çalışmayacak')
}
console.log(addTwoNumbers())

function returnValue() {
    let age = 21
    return age
}
 
