// fs modülünü dosyaya ekliyoruz.
const fs = require('fs');

// Yeni bir dosya oluşturma / Var olan bir dosyanın üzerine yazma.
fs.writeFile('../test.txt', 'Hello, world!', function(err) {
    if (err) throw err;
    console.log('File is created successfully.');
}); 

// Bir dosyayı okuma
fs.readFile('test.txt', 'utf8', function(err, data) {
    if (err) throw err;
    console.log('File read: ', data);
});

// Bir dosyaya ekleme.
fs.appendFile('test.txt', '\nThis is some new content.', function (err) {
    if (err) throw err;
    console.log('File updated.');
});

// Bir dosyayı silme
fs.unlink('test.txt', function(err) {
    if (err) throw err;
    console.log('File deleted.');
});
