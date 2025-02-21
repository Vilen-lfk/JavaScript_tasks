//199
let one = '199 задание';
console.log(one);
let num = 12345;
let arr = String(num).split('');

let prod = 1;
for (let digit of arr) {
	prod *= Number(digit);
}

console.log(prod);

//200
let two = '200 задание';
console.log(two);
function name(){
	console.log('vilen');
}
name();
 let tr ='-------------';
 console.log(tr);
 function summ() {
	let res = 0;
	for (let i = 1; i < 100; i++){
		res += i;
	}
	console.log(res);
 }
 summ();

 //201
console.log('201 задание');
function func(number){
	console.log(number ** 3);
 }
func(3);
console.log('------------')
function auto(number1){
	if (number1 > 0) {
		console.log('+++')
	}
	else{
		console.log('---')
	}
}
auto(-5)
auto(5)
//202
console.log('202 задание')
function sum(a,b,c){
	console.log(a + b * c)
}
sum(1,2,3);
//203
console.log('203 задание')
function func(num = 5) {
	console.log(num * num);
}
func(2);
func(3);
func();
/*Выведет 25 потому что в последней строке ( func(); ) функция не принимает
никакого значение   */
console.log('----------')
function func(num1 = 0, num2 = 0) {
	console.log(num1 + num2);
}
func(2, 3);
func(3);
func();
/*
Выведет:
5
3
0 
*/
//205
console.log('205 задание')
function func(num){
	return num ** 3
}
let res = func(3);
console.log(res)

console.log('-----------')
function kor(number){
	return Math.sqrt(number)
}
let res1 = kor(4);
let res2 = kor(9)
let result = res1 + res2
console.log(res1)
console.log(res2)
console.log('Сумма результатов:' , result)

//206
console.log('206 задание')

function sqrt(num) {
	return Math.sqrt(num);
}

function round(num) {
	return num.toFixed(3);
}
let dasha = round(sqrt(2));
console.log(dasha);
console.log('----------------');
function sqrt(num) {
	return Math.sqrt(num);
}

function sum(num1, num2, num3) {
	return num1 + num2 + num3;
} 
function round(num) {
	return num.toFixed(3);
}
let le = round(sum(sqrt(2), sqrt(3), sqrt(4)));
console.log(le)

//207
console.log('207 задание')
function func(num) {
	return num;
	
	let res4 = num ** 2;
	return res;
}

console.log( func(3) );
/* Функция возвращает 3, потому что выполнение завершается на первом 
return, и остальной код не выполняется.*/
console.log('-------------------');
function func(num) {
	if (num <= 0) {
		return Math.abs(num);
	} else {
		return num ** 2;
	}
}

console.log( func(10) );
console.log( func(-5) );

console.log('-------------------');
function func(num) {
	if (num <= 0) {
		return Math.abs(num);
	}
	
	return num ** 2;
}

console.log( func(10) );
console.log( func(-5) );
/*тоже самое что и во втором коде*/

//208
console.log('208 задание');
