let num = 12345;
let arr = String(num).split('');

let prod = 1;
for (let digit of arr) {
	prod *= Number(digit);
}

console.log(prod);