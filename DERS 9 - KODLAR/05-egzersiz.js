let prompt = require("prompt-sync")()
const fs = require("fs")
// Stok takip uygulaması

// JSON okuyacağız
let stok = require("./05-stok.json")

// Bütün ürünleri listeleme fonksiyonu
function urunListele() {
    for (let i = 0; i < stok.products.length; i++) {
        let urun = stok.products[i]
        console.log(urun.name + " ürününden " + urun.quantity +
        " tane kaldı. Bu ürünün kategorisi " + urun.category + ".")
    }
}

// Belli bir kategorideki bütün ürünleri listeleme fonksiyonu (kategori argümanı alacak)
function kategorideUrunListele(kategori) {
    for (let i = 0; i < stok.products.length; i++) {
        let urun = stok.products[i]
        if (urun.category.toLowerCase() == kategori.toLowerCase()) {
            console.log(urun.name + " ürününden " + urun.quantity +
            " tane kaldı. Bu ürünün kategorisi " + urun.category + ".")
        }
    }
}

// Yeni bir ürün ekleme fonksiyonu (3 argüman alır: isim, miktar, kategori)
function yeniUrunEkle(isim, miktar, kategori) {
    stok.products.push(
        {
            name: isim,
            quantity: miktar,
            category: kategori
        }
    )
    console.log(`${isim} ürünü ${miktar} tane ve ${kategori} kategorisinde olarak başarıyla eklendi.`)
}

// Bir ürünün miktarını değiştirme fonksiyonu (2 argüman alır: isim, miktar)
function miktarDegis(isim, miktar) {
    for(let i = 0; i < stok.products.length; i++) {
        if (stok.products[i].name == isim) {
            stok.products[i].quantity = miktar
        }
    }
}

// Ürün kaldırma fonksiyonu (isim argümanı alacak)
function urunKaldır(isim) {
    for(let i = 0; i < stok.products.length; i++) {
        if (stok.products[i].name == isim) {
            stok.products.splice(i, 1)
        }
    }
}

// Kullanıcıya ne yapmasını seçebileceği bir yöntem sunucaz.
while (true) {
    console.log("1- Bütün ürünleri listele")
    console.log("2- Belli bir kategoriden ürün liste")
    console.log("3- Yeni ürün ekle")
    console.log("4- Bir ürünün miktarını düzenle")
    console.log("5- Ürün kaldır")
    console.log("q- Programdan çıkış yap")
    let kullaniciSecenegi = prompt("Seçiminiz: ")
    if (kullaniciSecenegi == "1") {
        urunListele()
    } else if (kullaniciSecenegi == "2") {
        let kullanıcıKategori = prompt("Bir kategori ismi yazınız: ")
        kategorideUrunListele(kullanıcıKategori)
    } else if (kullaniciSecenegi == "3") {
        let yeniIsim = prompt("Yeni ürünün ismini giriniz: ")
        let miktar = Number(prompt("Yeni ürünün miktarını giriniz: "))
        let kategori = prompt("Yeni ürünün kategorisini giriniz: ")
        yeniUrunEkle(yeniIsim, miktar, kategori)
    } else if (kullaniciSecenegi == "4") {
        let isim = prompt("Miktarı düzenlenecek ürünü giriniz: ")
        let miktar = Number(prompt("Yeni miktarı giriniz: "))
        miktarDegis(isim, miktar)
    } else if (kullaniciSecenegi == "5") {
        let isim = prompt("Silinecek ürünü giriniz: ")
        urunKaldır(isim)
    } else if (kullaniciSecenegi == "q") {
        break
    } else {
        console.log("Hatalı girdi yaptınız.")
    }
    console.log("--------------------------------------------------------")
}

let stringStok = JSON.stringify(stok)
fs.writeFile('05-stok.json', stringStok, function(err) {
    console.log("Dosyaya kaydedilip çıkış yapıldı.")
}); 