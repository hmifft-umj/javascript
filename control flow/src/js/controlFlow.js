console.log("Control Flow");

//Normal Flow
alert("Saya makan Apel"); // Akan dieksekusi terlebih dahulu
alert("Saya makan Mangga");

//Loops
console.log("Perulangan Dimulai");

for (let i = 0; i < 5; i++) {
  console.log("nilai i adalah", i);
}
/** console.log("nilai i adalah", i) 
akan terus berulang sampai kondisi salah */

console.log("Perulangan Selesai");

//Conditional
console.log("Conditional");
x = 4;

if (x % 2 == 0) {
  console.log(`Nilai ${x} merupakan bilangan genap`);
} else {
  console.log(`Nilai ${x} merupakan bilangan ganjil`);
}

//Functions
console.log("Funtions");
function checkBilangan(nilai) {
  if (nilai % 2 == 0) {
    return alert(`Nilai ${nilai} merupakan bilangan genap`);
  } else {
    return alert(`Nilai ${nilai} merupakan bilangan ganjil`);
  }
}

nilai = prompt("Masukkan Nilai : ");
checkBilangan(nilai);