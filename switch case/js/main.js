const input = "true";
// Mendefinisikan variabel input dengan nilai "true"
const inputType = typeof input;
// Menggunakan operator typeof untuk mendapatkan tipe data dari input

switch (inputType) {
  case "boolean": // Jika tipe data inputType adalah "boolean"
    console.log(`Tipe data ${input} adalah boolean`);
    break;
  case "string": // Jika tipe data inputType adalah "string"
    console.log(`Tipe data ${input} adalah string`);
    break;
  case "number": // Jika tipe data inputType adalah "number"
    console.log(`Tipe data ${input} adalah number`);
    break;
  default: // Jika tipe data inputType tidak cocok dengan semua case di atas
    console.log(`Tipe data ${input} tidak diketahui`);
}
