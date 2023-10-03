/*
"colors" isminde bir array oluşturup içine 5 farklı renk ismi koyun(string olarak). Döngü
kullanarak her rengin ismini ekrana yazdırın.
*/

// 'colors' adında bir array oluşturalım ve içine 5 farklı renk ekleyelim
let colors = ['kırmızı', 'mavi', 'yeşil', 'sarı', 'mor'];

// while döngüsü ile
let i = 0
while (i < colors.length) {
    console.log(colors[i])
    i++
}

// for döngüsü kullanarak her bir rengi ekrana yazdıralım
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}