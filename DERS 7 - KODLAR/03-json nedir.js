// JSON -> JavaScript Object Notation kısaltması

// JSON, insanlar için okuması ve yazması, makineler için ayrıştırması ve oluşturması kolay
// bir veri saklama formatıdır. İsminin aksine dilden bağımsız bir formattır.

// JSON sıklıkla bir server'dan web sayfasına veri yollanırken kullanılır.

// JSON formatı JavaScript'teki object data tipinin formatıyla neredeyse aynıdır.
// örn. json dosyası içeriği -> {"name": "John", "age": 30}
let person = {
    name: "John",
    LastName: "Doe"
}

// stringler -> JSON'da stringler çift tırnakla yaratılmak zorundadır. -> "name": "John"
// sayılar -> ondalık sayılar 1.75 gibi nokta kullanarak, bilimsel sayılar 17.8e12 gibi ifade edilebilir ((7.82)^12)
// objeler -> içindeki anahtarlar obje barındırabilir. (alttaki örnekteki gibi)
//      {
//           "employee": {
//               "name": "John Doe",
//               "age": 30,
//               "city": "New York"
//           }
//      }
// arrayler -> anahtarlar array de barındırabilir.
// {
//     "calisanlar": ["John", "Anna", "Peter"]
// }
// booleanlar -> true veya false da barındırabilirler
// {"sale": true}
