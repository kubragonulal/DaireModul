// circle.js dosyasını require ile içeri aktar
const { circleArea, circleCircumference } = require('./circle');

// Yarıçap (r) 5 olacak şekilde hesaplamalar yapalım
const r = 5;

console.log(`Yarıçapı ${r} olan dairenin alanı: ${circleArea(r)}`);
console.log(`Yarıçapı ${r} olan dairenin çevresi: ${circleCircumference(r)}`);
