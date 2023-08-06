// Notasi objek literal
const person = {
  name: 'John Doe',
  age: 30,
  isEmployed: true,
  sayHello: function() {
    console.log('Halo!');
  },
};

console.log(person.name);
console.log(person['age']);

// Menambahkan properti baru
person.gender = 'Pria';

// Mengubah properti
person.age = 31;

// Menghapus properti
delete person.sayHello;

// Menampilkan Object setelah dilakukan modisfikasi
console.log(person);