let a24 = '124 задача';
console.log(a24);
let tr = 10;
if(tr == 10) 
{
    console.log('yes');
}
//125
let a25 = '125 задача';
console.log(a25);
if (tr > 0) 
	console.log('+++');
else 
	console.log('---');

if (tr > 0) console.log('yes');

/*Не смотря на то, что JavaScript допускает показанные выше сокращения с фигурными скобками,
 я в общем-то не рекомендую так делать, так как это рассадник трудноуловимых ошибок*/

//127
let a27 = '127 задача';
console.log(a27);
const day = 30;
if (day >= 1 && day <= 10) {
    console.log('в первую');
}
else if (day >= 10 && day <= 20){
    console.log('во вторую');
}
else if (day >= 20 && day <= 31){
    console.log('в третью');
}
else {
    console.log('неверное значение');
}
//128
/*let a28 = '128 задача';
console.log(a28);
let num = 89;
if (num >= 10)
{
    if(num <= 99){
        num = (num%10) + ((num/10)-(num%10)/10)
        console.log(num)
    }
    else
    {
        console.log('сумма цифр двузначна');
    }
}
else
{
    console.log('сумма цифр однозначна');
}
//129
let a29 = '129 задача';
console.log(a29);
let lang = 'en';
switch(lang) {
    case 'ru':
	    console.log('рус');
    break;
    case 'en':
	    console.log('анг');
    break;
    case 'de':
	    console.log('нем');
    break;
    default:
	    console.log('язык не поддерживается');
    break;
}
//130
let a30 = '130 задача';
console.log(a30);
let num1 = -5;
let res = num1 >= 0
    ? '1': '2';
console.log(res);
//132
let a31 = '131 задача';
console.log(a31);
let num2 = 2 * (3 - 1);
let num3 = 6 - 2;

let num4 = 5 * (7 - 4);
let num5 = 1 + 2 + 7;

let num6 = 2 ** 4;
let num7 = 4 ** 2;
console.log(num2 == num3);
console.log(num4 == num5);
console.log(num6 == num7);
//132
/*let a33 = '133 задача';
console.log(a33);
let ok = confirm('Тебе 18 есть?');

if (ok) {
	console.log('вы ответили да');
} else {
	console.log('вы ответили нет');
}*/
//134
let a34 = '134 задача';
console.log(a34);
let age = 19;
let adult;

if (age >= 18) {
    adult = true;
} else {
    adult = false;
}

console.log(adult);
//135
let a35 = '135 задача';
console.log(a35);
let age1 = 18;
let adult1;
if (age1 >= 18) {
	adult1 = true;
} else {
	adult1 = false;
}
console.log(adult1);
//--------------------
let age2 = 17;
let adult2;
if (age2 >= 18) {
	adult2 = true;
} else {
	adult2 = false;
}
console.log(adult2);
//--------------------
let age3 = 21;
let res3;
if (age3 >= 18) 
{
	if (age3 <= 23) {
		res3 = 'от 18 до 23';
	} else {
		res3 = 'больше 23';
	}
} 
else {
	res3 = 'меньше 18';
}
console.log(res3);
//-------------------
let age4 = 25;
let res4;
if (age4 >= 18) {
	if (age4 <= 23) {
		res4 = 'от 18 до 23';
	} else {
		res4 = 'больше 23';
	}
} else {
	res4 = 'меньше 18';
}
console.log(res4);
//136
let a36 = '136 задача';
console.log(a36);
let min = 47;

if (min >= 0 && min <= 20) {
	console.log('1 треть');
}

if (min >= 21 && min <= 40) {
	console.log('2 треть');
}

if (min >= 41 && min <= 60) {
	console.log('3 треть');
}
//137
let a37 = '137 задача';
console.log(a37);
let arr = [45, 5, 62];
if (arr.length === 3) {
    let sum = arr[0] + arr[1] + arr[2];
    console.log("Сумма элементов массива:", sum);
} else {
    console.log("В массиве не 3 элемента.");
}
//138
let a38 = '138 задача';
console.log(a38);
let str = 'Vilen';
//let last = str[str.length - 1];
if(str[0] == 'a'){
    console.log('+');
}else
{
    console.log('-');
}
//------------
let str1 = 'dmfmx';
let last = str1[str1.length - 1];
if(last === 'x'){
    console.log('+');
}else
{
    console.log('-');
}
//-----------
let str2 = "apple"; 

if (str2.startsWith('a') || str2.startsWith('b')) {
    console.log('+');
} else {
    console.log('-');
}
//139
let a39 = '139 задача';
console.log(a39);
let mun = 1445510;
if (String(mun)[String(mun).length - 1] === '0'){
    console.log('верно');
}
else{
    console.log('не верно');
}
//--------------------

let mun1 = 343478;
if(mun1 % 2 === 0)
    {
    console.log('число четное');
}
else{
    console.log('число не четное');
}
//140
let a40 = '140 задача';
console.log(a40);
let a = 45;
if (a % 3 === 0) {
	console.log('делится на 3');
} else {
	console.log('не делится'); 
}
//141
let a41 = '141 задача';
console.log(a41);
let num = 123;

if (String(num)[0] === '1') {
	console.log('+++');
} else {
	console.log('---');
}
//142
let a42 = '142 задача';
console.log(a42);
let month = 12;
if( month >= 1 && month <= 3){
    console.log('Зима');
}
if( month >= 4 && month <= 6){
    console.log('Весна');
}
if( month >= 7 && month <= 9){
    console.log('Лето');
}
if( month >= 10 && month <= 12){
    console.log('Осень');
}
//-------------
let abc = 'absde';
if(abc[0] === 'a'){
    console.log('yes');
}
else{
    console.log('no');
}
//------------
let abc1 = 12345;
let bcd = String(abc1);
if(bcd[0] === '1' || bcd[0] === '2' || bcd[0] === '3'){
    console.log('yes');
}
else{
    console.log('no');
}
//----------------
let number = 123321;
let number1 = String(number);
let fr = Number(number1[0]) + Number(number1[1]) + Number(number1[2]);
let sc = Number(number1[3]) + Number(number1[4]) + Number(number1[5]);
if(fr === sc)
    {
    console.log('yes');
}
else{
    console.log('no');
}
