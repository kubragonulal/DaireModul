
// Dairenin alanını hesaplayan fonksiyon
function circleArea(r) {
  return Math.PI * r * r;
}

// Dairenin çevresini hesaplayan fonksiyon
function circleCircumference(r) {
  return 2 * Math.PI * r;
}

// Fonksiyonları dışarıya aktar
module.exports = {
  circleArea,
  circleCircumference
};
