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
let a28 = '128 задача';
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
//131
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