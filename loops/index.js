let datas = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("Perulangan do while");
let i = 0;
do {
  datas[i] = datas[i] + 1;
  console.log(datas[i]);
  i++;
} while (i < datas.length);

console.log("Perulangan while");
let j = 0;
while (j < datas.length) {
  datas[j] = datas[j] + 1;
  console.log(datas[j]);
  j++;
}

console.log("Perulangan for");
for (let k = 0; k < datas.length; k++) {
  datas[k] = datas[k] + 1;
  console.log(datas[k]);
}
