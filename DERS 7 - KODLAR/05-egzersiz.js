// gerekli modüller
const fs = require('fs');
const prompt = require('prompt-sync')();

// JSON dosyası
let stok = require('./05-stok.json');

// Yeni bir ürün ekleme fonksiyonu
function addItem() {
    const name = prompt('ürün ismini giriniz: ');
    const quantity = parseInt(prompt('ürün miktarını giriniz: '));
    const category = prompt('kategorisini giriniz: ');

    stok.push({name: name, quantity: quantity, category: category});

    console.log(`${name} ürünlere eklenmiştir.`);
}

// Bütün ürünleri gösterme fonksiyonu
function displayItems() {
    for (let i = 0; i < stok.length; i++) {
        console.log(stok[i])
    }
}

// Belli bir kategorideki ürünleri gösterme fonksiyonu
function displayItemsInCategory(category) {
    for (let i = 0; i < stok.length; i++) {
        if (stok[i].category == category) {
            console.log(stok[i])
        }
    }
}

// Function to update the quantity of an item
function updateItemQuantity(name, quantity) {
    let düzenlendi = false
    for (let i = 0; i < stok.length; i++) {
        if (stok[i].name == name) {
            item.quantity = quantity;
            console.log(`${name} ürününün miktarı düzenlendi.`);
            düzenlendi = true
        }
    }
    if (!düzenlendi) {
        console.log(`${name} ürünü bulunamadı.`)
    }
}

// Ürün kaldırma fonksiyonu
function removeItem(name) {
    const itemIndex = stok.findIndex(item => item.name === name);
    if (itemIndex !== -1) {
        stok.splice(itemIndex, 1);
        console.log(`${name} stoktan kaldırıldı.`);
    } else {
        console.log(`${name} stokta bulunamadı.`);
    }
}

// Main loop
while (true) {
    console.log('\n1. Ürün ekleme');
    console.log('2. Ürünleri gösterme');
    console.log('3. Kategorideki ürünleri gösterme');
    console.log('4. Ürün miktarı düzenleme');
    console.log('5. Ürün kaldırma');
    console.log('6. Çıkış');
    const option = parseInt(prompt('Birini seçiniz: '));

    if (option === 1) {
        addItem();
    } else if (option === 2) {
        displayItems();
    } else if (option === 3) {
        displayItemsInCategory(prompt("Kategori giriniz: "));
    } else if (option === 4) {
        const name = prompt('Ürün ismi giriniz: ');
        const quantity = parseInt(prompt('Yeni miktarı giriniz: '));
        updateItemQuantity(name, quantity);
    } else if (option === 5) {
        const name = prompt('ürün ismi giriniz: ');
        removeItem(name);
    } else if (option === 6) {
        break;
    } else {
        console.log('Geçersiz seçenek.');
    }

    // JSON dosyasına yazdıralım kaydedelim
    fs.writeFileSync('./05-egzersiz.json', JSON.stringify(stok, null, 2));
}
