/*
"yourName" ve "yourAge" isminde iki değişken yaratın ve isim ve yaşınızı bu değişkenlere
atayın. Ardından, "userProfile" isminde bir obje yaratın ve "yourName" ile "yourAge"
değişkenlerini, bu objede yaratacağınız özelliklerin (properties) değerleri olarak atayın.
Özelliklerin isimlerine siz karar verin, "userProfile" objesine uygun olduğunu düşündüğünüz
özellikleri ekleyip ona göre isim verin.
*/

// "yourName" ve "yourAge" değişkenlerini yaratma ve değer atama
let yourName = "Emre Safa";
let yourAge = 21;

// "userProfile" isimli objeyi oluşturma ve özelliklere değer atama
let userProfile = {
    name: yourName,
    age: yourAge,
    glasses: false,
    student: true,
    school: "Uludağ Üniversitesi",
};
// if (userProfile.glasses == true) {
//     console.log("Okuyabilir")
// }

// userProfile objesini console'da yazdırma
console.log(userProfile);