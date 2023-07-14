const number = Math.floor(Math.random() * 100);
// Kode ini menghasilkan bilangan acak 
//angka desimal antara 0 dan 100

if (number % 2 === 1) {
  // Jika sisa hasil bagi adalah 1, 
  //maka bilangan tersebut ganjil
  console.log(`Bilangan ${number} termasuk dalam bilangan ganjil`);
} else {
  // Jika sisa hasil bagi selain dari 1, 
  // maka bilangan tersebut genap
  console.log(`Bilangan ${number} termasuk dalam bilangan genap`);
}