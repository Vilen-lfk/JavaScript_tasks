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
//149
let a49 = '149 задача';
console.log(a49);
let mass1 = [2, 5, 9, 15, 1, 4];
for(let el of mass1){
    if (el > 3 && el < 10){
        console.log(el);
    }
}
let aa = '-----';
console.log(aa);
let obj1 = {a: 1, b: 2, c: 3, d: 4, e: 5};
for (let key in obj1) {
  if (obj1[key] % 2 !== 0) {
    console.log(key, ': ', obj1[key]);
  }
}
//150
let a50 = '150 задача';
console.log(a50);
let la = 0;
for(let i = 2; i < 100; i++){
    if(i % 2 ==0){
        la += i;
    }
}
console.log(la);

let la1 = 0;
for(let i = 1; i < 99; i++){
    if(i % 2 != 0){
        la1 += i;
    }
}
console.log(la1);

let la2 = 1;
for(let i = 1; i < 10; i++){
    la2 = la2 * i;
}
console.log(la2);
//151
let a51 = '151 задача';
console.log(a51);
let vss = [2, 5, 9, 3, 1, 4];
let rt = 0;
let rt1 = 0
for(let ele of vss){
    rt += ele;
    if(ele % 2 == 0){
        rt1 += ele;
    }
}
console.log(rt);
console.log(rt1);
//152
let a52 = '152 задача';
console.log(a52);
let str ='';
for (let i = 0; i < 5; i++){
    str += '-';
}
console.log(str);

let str1 = '';
for (let i = 1; i <= 9; i++) {
	str1 += i;
}
console.log(str1);

let str2 = '';
for (let i = 9; i >= 1; i--) {
	str2 += i;
}
console.log(str2);

let str3 = '';
for (let i = 1; i <= 9; i++) {
	str3 += '-' + i;
}
console.log(str3);
//153
let a53 = '153 задача';
console.log(a53);
for (let i = 10; i <= 100; i++) {
	let str4 = String(i); // преобразуем число в строку 
	
	if (str4[0] === '1' || str4[0] 
		=== '2') { 
		console.log(i);
	}
}
//154
let a54 = '154 задача';
console.log(a54);
let mus = [5, 3, 8, 0, 7, 2];
for (let i = 0; i < mus.length; i++) {
    if (mus[i] === 0) {
        break; // Прерываем цикл, если встречаем 0
    }
    console.log(mus[i]);
}
let mus1 = [5, 3, 8, 0, -7, 2];
let sum = 0;
for (let i = 0; i < mus.length; i++) {
    if (mus[i] < 0) {
        break; // Прерываем цикл, если встречаем 0
    }
    sum += mus[i];
}
console.log(sum);

let sum1 = 0; 
let count = 0;
while (sum1 <= 100) {
    count++; 
    sum1 += count; 
}
console.log("Количество чисел:", count);

//155
let a55 = '155 задача';
console.log(a55);
let arr0= [1, 2, 3, 4, 5, 6, 7, 8, 9]; 

for (let elem of arr0) {
	let result;
	
	if (elem % 2 == 0) {
		result = elem * elem;
	} else if (elem % 3 == 0) {
		result = elem * elem * elem;
	} else {
		continue; // перейдем на новую итерацию 
			цикла 
	}
	
	console.log(result); // выполнится, если делится на 2 или 3 
}
//156
let a56 = '156 задача <br>';
document.write(a56);
for (let i = 1; i <= 9; i++) {
	for (let j = 1; j <= 3; j++) {
		document.write(i);
	}
}
let result = '';
for(let i = 1; i <= 3; i++){
    for(let j = 1; j <= 3; j++){
        result += i + '' + j + '' + ''; 
    }
}
document.write('<br>',result);
//159
let a59 = '159 задача';
console.log(a59);
let pushe = [];
let pushe1 = [];
let pushe2 = [3, 2, -8, -3, 5, 1, -45, 21,-56];
let pushe3 = []; 
for (let i = 1; i <= 10; i++){
    pushe.push(i)
}
for (let j = 1; j <= 10; j++){
    
    pushe1.push('x');
}
for(let k = 0; k < pushe2.length; k++){
    if(pushe2[k] > 0){
        pushe3.push(pushe2[k]);
    }
}
console.log(pushe);
console.log(pushe1);
console.log(pushe3);
//160
let a60 = '160 задача';
console.log(a60);
let pxl = [1,2,3,4,5];
for(let i = 0; i < pxl.length; i++){
    pxl[i] =pxl[i] ** 2;
}
console.log(pxl);
let pxl1 = [1,2,3,4,5];
for(let i = 0; i < pxl1.length; i++){
    pxl1[i] -= 1;
}
console.log(pxl1);
//161
let a61 = '161 задача';
console.log(a61);
let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']; 
let arr2 = [1, 2, 3, 4, 5, 6, 7];
let obj2 = [];
for(let i = 0; i <= 6; i++){
    let key = arr1[i];
    let value = arr2[i];
    obj[key] = value;
}
console.log(obj);

let obj3 = { a: 1, b: 2, c: 3, d: 4, e: 5 }; 
let newObj = {}; 
for (let key in obj3) {
    if (obj3[key] % 2 === 0) { // Проверяем, является ли значение четным
        newObj[key] = obj3[key]; // Добавляем элемент в новый объект
    }
}
console.log(newObj);

let obj4 = { a: 1, b: 2, c: 3, d: 4, e: 5 }; 
let newObj1 = {}; 

for (let key in obj4) {
    newObj1[obj4[key]] = key; // Значение становится ключом, а ключ становится значением
}

console.log(newObj1);
//162
let a62 = '162 задача';
console.log(a62);
let obj5 = {x: 1, y: 2, z: 3};
let obj6 = {x: 1, y: 2, z: 3};
for(let key in obj5){
    obj5[key] = obj5[key] ** 2;
}
for(let key1 in obj6){
    obj6[key1] = obj6[key1] + 1;
}
console.log(obj5);
console.log(obj6);
//163
let a63 = '163 задача';
console.log(a63);
let muss = ['a', 'b', 'k', 'c', 'e'];
let flag = false;

for (let elem of muss) {
	if (elem == 'c') {
		flag = true;
		break;
	}
}

if (flag === true) {
	console.log('+++');
} else {
	console.log('---');
}
//164
let a64 = '164 задача';
console.log(a64);
let muss1 = [10, 20, 30, 40, 21, 32, 51];
let summ = 0; 
for (let i = 0; i < muss1.length; i++) {
  let elem = muss1[i];
  let firstDigit = String(elem)[0]; 
  if (firstDigit === '1' || firstDigit === '2') {
    summ += elem; 
  }
}
console.log("Сумма элементов:", summ);
//165
let a65 = '165 задача';
console.log(a65);
let obje = { a: 10, b: 25, c: 30, d: 40, e: 50 };
let sum2 = 0;

for (let key in obje) {
    let value = obje[key]; 
    let firstDigit = String(value)[0];

    if (firstDigit === '1' || firstDigit === '2') { 
        sum2 += value; 
    }
}

console.log(sum2);
//165
let ii = 0;

while (ii <= 10) {
	console.log(ii);
	ii++;
}


let arr13 = [1, 2, 3, 4, 5, 6, 7, 
	8, 9]; 
    let res = [];

for (let elem of arr13) {
	if (elem % 2 != 0) {
		res.push(elem);
	}
}

console.log(res);





