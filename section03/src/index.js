// common JS
// const moduleData = require("./math");
// const { add, sub } = require("./math");

// ESM (확장자를 꼭 붙여줘야함)
import mul, { add, sub } from "./math.js";

// console.log(add(1, 2));
// console.log(sub(1, 2));
// console.log(mul(3, 2));

import randomColor from "randomcolor";

const color = randomColor();
console.log(color);
