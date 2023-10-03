let a = 10;
let b = 20;
let c = 30;

if (a < b && b < c) {
    console.log("a, b'den küçük ve b, c'den küçük.");
} else {
    console.log("a, b'den küçük DEĞİL ve/veya b, c'den küçük DEĞİL.");
}

if (a > b || b < c) {
    console.log("a, b'den büyük VEYA b, c'den küçük.");
} else {
    console.log("a, b'den büyük DEĞİL VE b, c'den küçük DEĞİL.");
}

// Parantez kullanımı
if ((a < b && b < c) || (a > b && b > c)) {
    console.log("Ya a, b'den küçük ve b, c'den küçük, ya da a, b'den büyük ve b, c'den büyük.");
} else {
    console.log("Yukarıdaki iki durumdan hiçbiri sağlanmıyor.");
}