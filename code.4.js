//144
let a44 = '144 задача';
console.log(a44);
let arr = ['a', 'b', 'c', 'd', 'e'];
for (let elem of arr) {
	console.log(elem);
}
//145
let a45 = '145 задача';
console.log(a45);
let obj = {x: 1, y: 2, z: 3};
for(let key in obj){
    console.log(key);
    console.log(obj[key]);
}
//146
let a46 = '146 задача';
console.log(a46);
let i = 11;
while(i <= 22){
    console.log(i);
    i++;
}
let num = 1;
let iter = 0;
while(num <= 100){
    num = num * 3;
    iter++;
}
console.log('result: ', num);
console.log('Кол-во итeраций:', iter);
//147
let a47 = '147 задача';
console.log(a47);
//С помощью цикла for выведите в 
//консоль числа от 1 до 10.

/*for(let n = 1; n <= 10; n++){
    console.log(n);
}*/

//С помощью цикла for выведите в консоль
//четные числа в промежутке от 0 до 20.

/*for(let n = 0; n <= 20; n++){
    if(n % 2 == 0){
        console.log(n);
    }

    }*/
for (let i = 10; i > 0; i--) {
        console.log(i); // выведет 10, 9, 8...
}
//148
let a48 = '148 задача';
console.log(a48);
let mass = ['a', 'b', 'c', 'd', 'e'];
/*for (let i = 0; i <= mass.length 
	- 1; i++) { 
	console.log(mass[i]);
}*/
/*for (let i = 1; i < mass.length - 1; i++) { 
	console.log(mass[i]);
}*/
for (let i = mass.length - 1; i >= 0; i--) { 
	console.log(mass[i]);
}