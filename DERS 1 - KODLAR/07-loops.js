// Döngüler, belli bir kod bloğunu değişken bir sayı defa tekrarlamak için kullanılır

/* WHILE DÖNGÜSÜ
while (conditional) {
    conditional doğru olduğu sürece çalıştırılan statement bloğu
}  */
console.log("WHILE ÖRNEĞİ")
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}


/* DO.. WHILE DÖNGÜSÜ
do {
    conditional doğru olduğu sürece çalıştırılan statement bloğu
}
while (conditional)*/
console.log("DO.. WHILE ÖRNEĞİ")
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);


// !!!!!!!!!!!!!!! BU DOSYADA SONRASINI İŞLEMEDİK !!!!!!!!!!!!!!!!!!!!!
// FOR DÖNGÜSÜ
/*
for (başlarken çalıştırılacak statement; bitme koşulu; döngü her tekrarlandığında çalıştırılacak statement) {
    bitme koşulu sağlanmadığı sürece çalıştırılan statement bloğu
} */

console.log("FOR ÖRNEĞİ")
for (let i = 0; i < 5; i++) {
    console.log(i); // 0 1 2 3 4
}


// FOR.. IN DÖNGÜSÜ -> arrayde indexleri alır (hep key'leri alır)
console.log("FOR.. IN ÖRNEĞİ")
let person = {fname: "John", lname: "Doe", age: 25};

for (let property in person) {
    console.log(property); // + ": " + person[property]
}


// FOR.. OF DÖNGÜSÜ
console.log("FOR.. OF ÖRNEĞİ")
let arr = [3, 5, 7];

for (let i of arr) {
    console.log(i);
}
