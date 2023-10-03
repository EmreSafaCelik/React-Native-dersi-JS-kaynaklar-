// 1’den 10’a kadar olan sayıların çarpım tablosunu ekrana yazdırın. İpucu: iki iç içe for döngüsü.
for(let i = 1; i <= 10; i++) {
    for(let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log('\n');  // Yeni bir satıra geçiş için
}
