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