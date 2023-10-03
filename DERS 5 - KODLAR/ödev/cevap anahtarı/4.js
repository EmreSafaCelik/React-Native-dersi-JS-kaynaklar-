function artikYilMi(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

function artikYilMi2(year) {
    if (year % 400 == 0) {
        return true
    } else if (year % 100 == 0) {
        return false
    } else if (year % 4 == 0) {
        return true
    } else {
        return false
    }
}


console.log(artikYilMi(2000));  // Çıktı: true
console.log(artikYilMi(2100));  // Çıktı: false
