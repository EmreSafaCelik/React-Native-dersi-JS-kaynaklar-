// 3 farklı scope türü vardır, bunlar değişkenlerin erişilebilirliğini belirler:
// Global Scope
// Function Scope
// Block Scope

// 1- GLOBAL SCOPE, fonksiyonların, döngülerin, if else ve başka blokların dışında tanımlanmış
// değişkenlerin ait olduğu scope türüdür. Bu değişkenlere her yerden erişilebilir

// var globalVar = "ben global değişkenim!";

// function test() {
//     console.log(globalVar); // Outputs: ben global değişkenim!
// }
// test();


// 2- FUNCTION SCOPE, bir fonksiyon içinde tanımlanmış değişkenlerin ait olduğu scope türüdür.
// Bu değişkenlere tanımlandıkları fonksiyon içinde erişilebilir

// function test() {
//     var functionVar = "Ben yerel değişkenim!";
//     console.log(functionVar); // Outputs: Ben yerel değişkenim!
// }
// test();
// console.log(functionVar); // Error: functionVar is not defined


// 3- BLOCK SCOPE, if, for, while gibi bloklarda tanımlanmış değişkenlerin ait olduğu scope
// türüdür. Sadece tanımlandıkları blok içinde erişilebilirler

// BLOK -> küme parantezi ile açılıp ve kapanan herşey bir bloktur {"bu bir bloktur"}

// {
//     let blockVar = "ben block scope'lu değişkenim!";
//     console.log(blockVar); // Outputs: ben block scope'lu değişkenim!
// }
// console.log(blockVar); // Error: blockVar is not defined

// {
//     var functionVar = "ben fonksiyon scope'lu değişkenim!";
//     console.log(functionVar); // Outputs: ben fonksiyon scope'lu değişkenim!
// }
// console.log(functionVar); // Outputs: ben fonksiyon scope'lu değişkenim!


// SCOPE ZİNCİRİ -> eğer bir değişken kullanıldığı scope'ta bulunamazsa, JavaScript bir dıştaki scope'a bakar.
// Bu değişken bulunana kadar ya da global scope'a erişene kadar devam eder.

// let globalVar = "global değişken";

// function outerFunc() {
//   let outerVar = "dış fonksiyon değişkeni";
//   let globalVar = "dış fonksiyondaki globalVar";
//   let innerVar = "dış fonksiyondaki innerVar"
  
//   function innerFunc() {
//     let innerVar = "içteki fonksiyonun değişken";
    
//     console.log(innerVar); 
//     console.log(outerVar); 
//     console.log(globalVar); 
//     // outerFunc(); -> çalışır
//   }
//   innerFunc();
// }
// outerFunc();
// console.log(globalVar);
// scope chain fonksiyonlar için de geçerlidir. Zincir fonksiyonların tanımlandıkları yere göre ilerler. (değişkenlerden pek farklı değil)

// fonksiyonlar tanımlandıkları anda bulundukları scope'ların her yerinde kullanılabilirler. (tanımlandıkları yerden önce kullanılabilirler) (terim ismi hoisting)
// değişkenler tanımlandıktan sonra kullanılmak zorundadırlar. Öncesinde kullanılamazlar.

// EGZERSİZ 1 -> firstName, middleName ve lastName değişkenlerinin scope'ları neler
// blok scope, fonksiyon skop, global skop
// let firstName = "Emre";

// function someFunction() {
//   let middleName = "Safa";
//   if (true) {
//     let lastName = "Çelik";
//   }
// }
// someFunction();

// EGZERSİZ 2 -> çıktısı ne olacak ve neden?
// let globalVar = "en dış"
// function outerFunction() {
//     let outerVar = "dış fonksiyondayım!";
//     console.log(globalVar)
//     function innerFunction() {
//       console.log(outerVar);
//       console.log(globalVar)
//     }
//     innerFunction();
// }
// outerFunction();
  

// EGZERSİZ 3 -> çıktısı ne olacak ve neden?
// let x = 1;
// {
//   let x = 2;
//   console.log(x); // çıktısı ne?
// }
// console.log(x); // çıktısı ne?


// EGZERSİZ 4 -> çıktısı ne olacak ve neden
var myVar = "Hello, world!";
console.log(myVar);


// EGZERSİZ 5 -> aşağıdaki kodda adım adım neler olduğunu açıklayın
let x = "global";
function funcA() {
  let x = "funcA";
  function funcB() {
    let x = "funcB";
    console.log(x);
  }
  funcB();
  console.log(x);
}
funcA();
console.log(x);
