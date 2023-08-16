/** Pastikan file main.js dan data.json
 * berada pada direktori yang sama */
const data = require("./data.json");

const getData = () => {
  console.log(data);
};

getData();
