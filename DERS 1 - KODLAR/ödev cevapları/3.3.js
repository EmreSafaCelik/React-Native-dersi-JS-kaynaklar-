/*
2.1’de yazdığınız koddan yola çıkarak, hem admin hem de öğretmen olan bir kullanıcı
programı çalıştırdığında ekrana "Yönetim paneline erişiminiz var" yazdırın. Ancak programı
çalıştıran kişi admin ya da öğretmenden biri bile değilse "Yönetim paneline erişiminiz yok"
yazdırın.
*/
// Değişkenlerin tanımlanması
let isAdmin = true;
let isStudent = false;

// isAdmin ve isStudent'in durumunu kontrol etme
if (isAdmin && !isStudent) {
  console.log("Yönetim paneline erişiminiz var");
} else {
  console.log("Yönetim paneline erişiminiz yok");
}
