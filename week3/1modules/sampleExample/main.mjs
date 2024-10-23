import { addition, subtraction } from "./math.mjs";
import greeting  from "./greeting.mjs";

// then you can call these functions 

let sum = addition(4, 9);

let difference = subtraction(87, 45);

console.log(` sum :${sum} \n difference :${difference}`)

greeting('Hailemeskel Getaneh')