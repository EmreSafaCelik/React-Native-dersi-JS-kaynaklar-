// let firstName = "Emre"
// let space = " "
// let space1 = "   "
// let empty = ""
// let quoteError = "Einstein bu yüzden "Tanrı zar atmaz" demiştir."
// let quote = 'Einstein bu yüzden "Tanrı zar atmaz" demiştir.'
// let quoteTers = "Einstein bu yüzden 'Tanrı zar atmaz' demiştir."

// let paragraf = "Seyahat, insanın hayatını zenginleştiren en önemli deneyimlerden biridir. Yeni kültürleri,\
//  farklı yaşam tarzlarını keşfederken kendimizi de daha iyi tanıma fırsatı buluruz. Seyahat etmek, bizi\
//  birbirine bağlayan ortaklık ve çeşitliliklerin farkına varmamızı sağlar. Bilinmeyene doğru atılan her adım,\
//  sadece etrafımızdaki dünyayı genişletmekle kalmaz, aynı zamanda bizim de düşünce biçimimizi, anlayışımızı\
//  ve bakış açımızı genişletir."
// console.log(paragraf)

// STRINGLERDE KAÇIS DİZİLERİ -> Kaçış dizileri stringler içinde farklı anlamları temsil ederler.
// \n -> yazının alt satıra geçmesini sağlar.
// console.log("Umarım herkes varmıştır.\nEn azından siz varabildiniz mi?")

// \t -> Tab koyar. Tabın anlamı 8 tane boşluktur (        ). Amacı hizalamadır.
// Direkt 8 tane boşluk koymaz. Bulunduğu 8liği gerekli tamamlamak için gerekli olduğu kadar koyar.
// console.log("Meyve\tC vit\tA vit")
// console.log("Elma\t5.0\t98")
// console.log("Muz\t8.7\t64")
// console.log("Çilek\t58.8\t12")

// string içerisindeki \\, bir tane \ yazmaya yarar.
// console.log("Bu bir ters slaş \\")

// Tırnak işareti koymak için, işaretten öncesine bir ters slaş koyabiliriz (\' ya da \") gibi
// console.log("Başka önemli bir sözü de \"Bilginin tek kaynağı tecrübedir.\" olmuştur")
// console.log('Başka önemli bir sözü de \'Bilginin tek kaynağı tecrübedir.\' olmuştur')

// TEMPLATES -> Backtick'ler (`) ile string
// let suankiYıl = 2023
// let yasim = 21
// console.log(`Benim doğum yılım ${suankiYıl - yasim}`)
// let a = 2
// let b = 3
// console.log(`${a}, ${b}'ten küçüktür: ${a < b}`)

// STRING METODLARI

// 1. length -> stringin uzunluğunu sayı değeri olarak verir
// console.log("Emre".length)
// let firstName = "Emre"
// console.log(firstName.length)

// 2. erişim -> Aynen array'deki gibi, stringdeki karakterlere de [] ile erişebiliriz.
// "Emre" -> 0. index = "E", 1. index = "m", 2. index "r", 3. index "e"
// console.log("Emre"[2]) // "r"
// let firstName = "Emre"
// console.log(firstName[1]) // "m"
// let lastIndex = firstName.length - 1
// console.log(firstName[lastIndex])

// 3. toUpperCase() -> Stringdeki bütün harfleri büyük harfe çevirir -> Türkçe harfleri de çevirir (i hariç)
// console.log("Emre".toUpperCase()) // EMRE
// let firstName = "safa"
// console.log(firstName.toUpperCase()) // SAFA

// 4. toLowerCase() -> Stringdeki bütün harfleri küçük harfe çevirir -> Türkçe harfleri de çevirir (i ve ı hariç)
// console.log("EmRe".toLowerCase()) // emre
// let firstName = "SAFA"
// console.log(firstName.toLowerCase()) // safa

// 5. substr() -> iki argüman alır, başlangıç indeksi ve kesilecek karakter sayısı. Başlangıçtan verilen sayı kadar harf keser ve alır.
// console.log('JavaScript'.substr(4,6)) // Script
// let ulke = 'Türkiye'
// console.log(ulke.substr(3, 4)) // kiye

// 6. substring() -> iki argüman alır, başlangıç indeksi ve bitiş indexi. Ancak bitiş indeksindeki harfi kesmez.
// let string = 'JavaScript'
// console.log(string.substring(0,4))     // Java
// console.log(string.substring(4,10))    // Script
// console.log(string.substring(4))       // Script
// let ulke = 'Türkiye'
// console.log(ulke.substring(0, 3))   // Tür
// console.log(ulke.substring(3, 7))   // kiye
// console.log(ulke.substring(3))      // kiye

// 7. split() -> string'i belli yerlerden kesip array'e çevirir.
// let string = 'Beraber Javascript öğreniyoruz'
// console.log(string.split())     // array'e çevirir -> ["Beraber Javascript öğreniyoruz"]
// console.log(string.split(' '))  // boşluklardan ayır -> ["Beraber", "Javascript", "öğreniyoruz"]
// let firstName = 'Emre Safa'
// console.log(firstName.split())    // array'e çevirir - > ["Emre Safa"]
// console.log(firstName.split(''))  // her harf'ten ayırır ->  ["E", "m", "r", "e", " ", "S", "a", "f", "a"]
// let ulkeler = 'Finlandiya, İsveç, İsviçre, Danimarka, ve Türkiye'
// console.log(ulkeler.split(','))  // virgülden ayırır -> ["Finlandiya", " İsveç", " İsviçre", " Danimarka", " ve Türkiye"]
// console.log(ulkeler.split(', ')) // virgül yanında boşluk bulursa ayırır -> ["Finlandiya", "İsveç", "İsviçre", "Danimarka", "ve Türkiye"]

// 8. trim() -> stringlerin başlarında ve sonlarındaki boşlukları kaldırır
// let string = "      Emre Safa    Çelik      "
// console.log(string)
// console.log(string.trim()) // Emre Safa    Çelik

// 9. includes() -> argüman olarak verilen string, üstünde kullanılan string'de varsa true, yoksa false verir
// let string = "üstünde kullanılacak string"
// console.log(string.includes("argüman olarak verilen string")) // false
// console.log(string.includes("string")) // true
// console.log(string.includes("ıla")) // true
// console.log(string.includes("de kul")) // true
// console.log(string.includes("Emre")) // false
// console.log(string.includes("o")) // false

// 10. replace() -> string olarak iki argüman alır. ilkinden bulduğu ilk yere ikincisini koyar.
// let string = "Beraber Javascript öğreniyoruz"
// console.log(string.replace("Javascript", "mobil geliştirme"))
// let firstName = "emre"
// console.log(firstName.replace("e", "B"))

// 11. charAt() -> argüman olarak bir sayı alır ve o indexteki karakteri döner
// let string = "Beraber Javascript öğreniyoruz"
// console.log(string.charAt(4)) // b
// console.log(string.charAt(string.length - 1)) // z

// 12. indexOf() -> argüman olarak bir string alır, eğer üstünde kullanılan stringde argüman olan bu string varsa
// başlangıç pozisyonunu döner. Yoksa -1 döner. Birden fazla varsa ilkini döner
// let string = 'Beraber JavaScript öğreniyoruz'
// console.log(string.indexOf('b'))          // 4
// console.log(string.indexOf('ber'))       // 4
// console.log(string.indexOf('BER'))       // -1
// console.log(string.indexOf('a'))          // 3
// console.log(string.indexOf('JavaScript')) // 8
// console.log(string.indexOf('Script'))     // 12
// console.log(string.indexOf('script'))     // -1

// 13. lastIndexOf() -> argüman olarak bir string alır, eğer üstünde kullanılan stringde argüman olan 
// bu string varsa başlangıç pozisyonunu döner. Yoksa -1 döner. Birden fazla varsa sonuncuyu döner
// let string = "JavaScript'i seviyorum. JavaScript'i sevemiyorsanız neyi sevebilirsiniz ki?"
// console.log(string.lastIndexOf("sev")) // 57
// console.log(string.lastIndexOf("rum")) // 19
// console.log(string.lastIndexOf("JavaScript")) // 24
// console.log(string.lastIndexOf("Emre")) // -1

// 14. concat() -> argüman olarak verilen stringleri üstünde kullanılan stringle birleştirir.
// let string = "JavaScript'i seviyorum."
// console.log(string.concat("JavaScript'i sevemiyorsanız", " ", "neyi ", "sevebilirsiniz ki", "?"))

// 15. startsWith() -> üstünde kullanıldığı string aldığı argümanla başlıyorsa true, başlamıyorsa false döner
// let string = "Emre Safa Çelik"
// console.log(string.startsWith("Em")) // true 
// console.log(string.startsWith("Emre ")) // true
// console.log(string.startsWith("Safa")) // false

// 16. endsWith() -> üstünde kullanıldığı string aldığı argümanla bitiyorsa true, bitmiyorsa false döner
// let string = "Emre Safa Çelik"
// console.log(string.endsWith("lik")) // true 
// console.log(string.endsWith(" Çelik")) // true
// console.log(string.endsWith("Safa")) // false

// 17. search() -> argüman olarak string alıp üzerinde kullanılan stringde ilk bu argümanı bulduğu yerin indexini döner
// let string = 'Beraber JavaScript öğreniyoruz'
// console.log(string.indexOf('b'))          // 4
// console.log(string.indexOf('ber'))       // 4
// console.log(string.indexOf('BER'))       // -1
// console.log(string.indexOf('a'))          // 3
// console.log(string.indexOf('JavaScript')) // 8
// console.log(string.indexOf('Script'))     // 12
// console.log(string.indexOf('script'))     // -1

// 18. repeat() -> argüman olarak bir sayı alır, o sayı defa üzerinde kullanıldığı stringi tekrarlar.
// let string = "Emre"
// console.log(string.repeat(10)) // EmreEmreEmreEmreEmreEmreEmreEmreEmreEmre