// DATA TYPES
// Numbers -> sayı değerleri
let count = 10;  // integer
let price = 9.9;  // floating-point sayı

// Strings -> yazı değerleri
let greeting = "Merhaba";  // çift tırnak
let name = 'John Doe';  // tek tırnak
let sentence = `My name is ${name}`;  // ters tırnaklar ile string formatlama
// Mac'te option tuşu + virgül (,)
// Windows'ta  altGR + virgül (,)
// İngilizce klavyelerde ESC'nin yanında ~ tuşu

// Booleans -> doğru ya da yanlış değerleri
let isRaining = false;
let isOpen = true;

// Undefined -> değer atanmamış ancak bildirilmiş (declared) değişkenlerin değerleri
let testVar;
console.log(testVar);  // çıktısı: undefined

// Null -> kasıtlı değer eksikliği, belirsizlik
let emptyVar = null;
  
// Array -> Bir veya birden fazla değer
let fruits = ['elma', 6, false, 'muz', 'kiraz'];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits.length);
console.log(fruits[fruits.length-1]);

// Object -> data tiplerinin başlangıcı
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  greet: function() {
    return `Merhaba, benim adım ${this.firstName} ${this.lastName}`;
  }
};
console.log(person["firstName"], person.firstName);
console.log(person.greet());

// değişkenin data dipini kontrol etmek
console.log(typeof name)
