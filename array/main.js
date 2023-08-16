// 1.Deklarasi Array
// Menggunakan sintaks literal
const numbers = [1, 2, 3, 4, 5];

// Menggunakan konstruktor
const fruits = new Array("apple", "manggo", "banana");

// 2.Akses ke Element
const colors = ["Red", "Blue", "Yellow"];
console.log(colors[0]); // Output: 'Red'

// 3.Panjang Array
// const apps = ["facebook", "instagram", "twitter"];
// console.log(apps.length); // Output: 3

// 4. Menambahkan elemen di akhir array
// const apps = ["facebook", "instagram", "twitter"];
// apps.push("youtube");
// console.log(apps);
// Output : ["facebook", "instagram", "twitter", "youtube"]

// 5. Menghapus elemen di akhir array
// const apps = ["facebook", "instagram", "twitter", "youtube"];
// apps.pop();
// console.log(apps);
// Output : ["facebook", "instagram", "twitter"]

// 6. Menambahkan elemen di awal array
// const apps = ["facebook", "instagram", "twitter"];
// apps.unshift("line");
// console.log(apps);
// Output : ["line", "facebook", "instagram", "twitter"]

// 7. Menghapus elemen di awal array
// const apps = ["line", "facebook", "instagram", "twitter"];
// apps.shift();
// console.log(apps);
// Output : ["facebook", "instagram", "twitter"]

// 8. Mengubah elemen indeks tertentu
const apps = ["facebook", "instagram", "twitter"];
apps[2] = "X";
console.log(apps);
// Output : ["facebook", "instagram", "X"]
