console.log("Variable const");
const x = 0;
const x = 1; // terjadi error

const y = 2;
y = 3; /** variable.js:6 
Uncaught TypeError: Assignment to constant variable. */

console.log(x);
console.log(y);