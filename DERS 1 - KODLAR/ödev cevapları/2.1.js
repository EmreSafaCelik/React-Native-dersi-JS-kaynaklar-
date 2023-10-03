/* "isAdmin" ve "isStudent" isimleri ile iki boolean tipinde
değişken yaratın. Program ekrana, isAdmin değişkeni true
iken "Hoşgeldiniz, admin", false iken ise "Hoşgeldiniz, 
kullanıcı" ve isStudent true iken "Hoşgeldiniz, öğrenci", 
false iken ise "Hoşgeldiniz, öğretmen” yazdırmalı. Her
ikisi de true ya da false ise her ikisini de yazdırmalı. */

// Değişkenlerin tanımlanması
let isAdmin = true;
let isStudent = false;

// isAdmin'in durumunu kontrol etme
if (isAdmin) {
  console.log("Hoşgeldiniz, admin");
} else {
  console.log("Hoşgeldiniz, kullanıcı");
}

// isStudent'in durumunu kontrol etme
if (isStudent) {
  console.log("Hoşgeldiniz, öğrenci");
} else {
  console.log("Hoşgeldiniz, öğretmen");
}