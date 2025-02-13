//178
let y = '178 задание';
console.log(y);
let days = {
	'ru': ['пн', 'вт', 'ср', 'чт', 
		'пт', 'сб', 'вс'], 
	'en': ['mn', 'ts', 'wd', 'th', 
		'fr', 'st', 'sn'], 
};
console.log(days['ru'][0], days['en'][2]); // выведет 'пн' и 'wd'

let students = {
	'group1': ['name11', 'name12', 
		'name13'], 
	'group2': ['name21', 'name22', 
		'name23'], 
	'group3': ['name31', 'name32', 
		'name33'], 
};
console.log('Первый студент третей группы:',students['group3'][0]);

//179
let u = '179 задание';
console.log(u);
let data = {
	1: [
		'data11',
		'data12',
		'data13',
	],
	2: [
		'data21',
		'data22',
		'data23',
	],
	3: [
		'data31',
		'data32',
		'data33',
	],
	4: [
		'data41',
		'data42',
		'data43',
	],
};
for(let group in data){
	for(let nm of data[group]){
		console.log(nm);
	}
}
let p = '-------------';
console.log(p);
let data1 = [
	{
		1: [
			'data111',
			'data112',
			'data113',
		],
		2: [
			'data121',
			'data122',
			'data123',
		],
	},
	{
		1: [
			'data211',
			'data212',
			'data213',
		],
		2: [
			'data221',
			'data222',
			'data223',
		],
	},
	{
		1: [
			'data411',
			'data412',
			'data413',
		],
		2: [
			'data421',
			'data422',
			'data423',
		],
	},
];
for (let i = 0; i < data1.length; i++) {
    let obj = data1[i];
    for (let key in obj) {
        console.log(obj[key]);
    }
}
//180
let r = '180 задание';
console.log(r);
let employees = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];
	for(let ky of employees){
		console.log(ky.name + ' - ' + ky.salary)
	}
let s = '---------------'
console.log(s);
let emp = [
		{
			name: 'name1',
			salary: 300,
		},
		{
			name: 'name2',
			salary: 400,
		},
		{
			name: 'name3',
			salary: 500,
		},
	];
	let sum = 0
	for (let i = 0; i < emp.length; i++){
		sum += emp[i].salary;
	}
console.log(sum);
let s1 = '---------------'
console.log(s1);
let employes = [
	{
		name: 'name1',
		salary: 300,
		age: 28,
	},
	{
		name: 'name2',
		salary: 400,
		age: 29,
	},
	{
		name: 'name3',
		salary: 500,
		age: 30,
	},
	{
		name: 'name4',
		salary: 600,
		age: 31,
	},
	{
		name: 'name5',
		salary: 700,
		age: 32,
	},
];
let totalSalary = 0; 

for (let i = 0; i < employes.length; i++) {
    if (employes[i].age >= 30) { 
        totalSalary += employes[i].salary; 
    }
}
console.log(totalSalary);

//181
let v = '181 задание'
console.log(v)
let months = {
	'ru': [
		'январь',
		'февраль',
		'март',
		'апрель',
		'май',
		'июнь',
		'июль',
		'август',
		'сентябрь',
		'октябрь',
		'ноябрь',
		'декабрь',
	],
	'en': [
		'january',
		'february',
		'march',
		'april',
		'may',
		'june',
		'july',
		'august',
		'september',
		'october',
		'november',
		'december',
	],
};
let lang = 'ru'; 
let month = 5;
console.log(months[lang][month]);
let df = '--------';
console.log(df);
let affairs = {
	'2018': {
		11: {
			29: ['дело111', 'дело112', 'дело113'],
			30: ['дело121', 'дело122', 'дело123'],
		},
		12: {
			30: ['дело211', 'дело212', 'дело213'],
			31: ['дело221', 'дело222', 'дело223'],
		},
	},
	'2019': {
		12: {
			29: ['дело311', 'дело312', 'дело313'],
			30: ['дело321', 'дело322', 'дело323'],
			31: ['дело331', 'дело332', 'дело333'],
		}
	},
}
let year = '2019';
let month1 = 12;
let day = 30;
let delo = 0;
console.log(affairs[year][month1][day][delo]);

//182
let vb = '182 задание'
console.log(vb);
let employ = [
	{
		name: 'name1',
		salary: 300,
		age: 28,
	},
	{
		name: 'name2',
		salary: 400,
		age: 29,
	},
	{
		name: 'name3',
		salary: 500,
		age: 30,
	},
];
employ.push({
	name: 'name4',
	salary: 600,
	age: 31,
})
console.log(employ)

//183
let bn = '183 задание';
console.log(bn);
let affair = {
	'2019-12-28': ['data11', 'data12', 
		'data13'], 
	'2019-12-29': ['data21', 'data22', 
		'data23'], 
	'2019-12-30': ['data31', 'data32', 
		'data33'], 
}
affair['2019-12-29'].push('data14');
affair['2019-12-31'] = [];
affair['2019-12-31'].push('data34', 'data35');
console.log(affair)

let student = {
	'group1': {
		'subgroup11': ['student111', 'student112', 'student113'],
		'subgroup12': ['student121', 'student122', 'student123'],
	},
	'group2': {
		'subgroup21': ['student211', 'student212', 'student213'],
		'subgroup22': ['student221', 'student222', 'student223'],
	},
	'group3': {
		'subgroup31': ['student311', 'student312', 'student313'],
		'subgroup32': ['student321', 'student322', 'student323'],
	},
};
student.group1.subgroup11.push('studenr114');
console.log(student);

//184
let ui = '184 задание';
console.log(ui);
let numberone = 2;
let stepen = 10;
let numbertwo = 245;
console.log(Math.pow(numberone, stepen));
console.log(Math.sqrt(numbertwo));

let yu='----------------';
console.log(yu);

let mass = [4, 2, 5, 19, 13, 0, 10]
let summ = 0;
for (i = 0; i < mass.length; i++) {
	summ += Math.pow(mass[i], 3);
}
let result = Math.sqrt(summ);
console.log(summ);
console.log(result);

//185
let app = '185 задания';
console.log(app);

let kuy = 379;
let raw = Math.sqrt(kuy);
let ray = Math.round(raw)
let ryw = raw.toPrecision(3);
let ry = raw.toPrecision(4);
console.log(raw,',', ray, ',' , ryw, ',' , ry);
const number = 587;
const sqrtValue = Math.sqrt(number);

const result1 = {
    floor: Math.floor(sqrtValue),
    ceil: Math.ceil(sqrtValue)
};

console.log(result1);

//186
let ap = '186 задания';
console.log(ap);
console.log(Math.max(4, -2, 5, 19, -130, 0, 10));
console.log(Math.min(4, -2, 5, 19, -130, 0, 10));

//187
let vilen = '187 задание';
console.log(vilen); 
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1,100));

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
let elnur = [];
for(i = 0; i < 10; i++){
	elnur.push(getRandomInt(1,100));
}
console.log(elnur);
//188
let ai = '188 задание';
console.log(ai);

let a = 8;
let b = 12;
let modul = a - b;
console.log(Math.abs(modul));

//189
let errr = '189 задание';
console.log(errr);

let sty = 'js';
let str = sty.toUpperCase();
console.log(str);
console.log(str.toLowerCase());

//190
let errt = '190 задание';
console.log(errt);
let java = 'я учу javascript!';
//1-й способ
let sub = java.substr(2, 3);
let subm = java.substr(6, 10);
console.log(sub, subm);
//2-й способ
let sub1 = java.substring(2,5);
let subm1 = java.substring(6);
console.log(sub1, subm1);
//3-й способ
let sub2 = java.slice(2,5);
let subm2 = java.slice(6);
console.log(sub2, subm2);

//191
let bmw = '191 задание';
console.log(bmw);
let res = 'http://lkvndvndl'.includes('http://');

let stri = '0abcde';
let res1 = stri.startsWith('abc');

console.log(res, res1);

let pot = '------------';
console.log(pot);
let str1 = 'fssmwpg html';
let str2 = 'ljoiubukuk';
let res3 = str2.endsWith('html'); 
let res2 = str1.endsWith('html');
console.log(res2, res3);

//192
//Дана строка '1-2-3-4-5'. Поменяйте все дефисы на точки.
let desk = '192 задание';
console.log(desk);
let vil = '1-2-3-4-5';
while (vil.includes('-')){
	vil = vil.replace('-', '.');
}
console.log(vil);

//193
let sto = '193 задание';
console.log(sto);
let vil1 = '1-2-3-4-5';
let str3 = vil1.split('-');
console.log(str3);

let vil2 = '12345';
let str4 =  vil2.split('');
console.log(str4);

let arr = [1, 2, 3, 4, 5];
let ter = arr.join('-');
console.log(ter);

//194
let ty = '194 задание';
console.log(ty);
let vlad = [1, 2, 3];
let vlad1 = vlad.shift();
console.log(vlad1);

let vlad2 = [1, 2, 3];
let vlad3 = vlad2.pop();
console.log(vlad3);

let edem = [1, 2, 3];
let evsv = edem.push(4, 5, 6);
console.log(edem );

//195 
let tyf = '195 задание';
console.log(tyf);
let ass = [1, 2, 3, 4, 5];
let subp = ass.slice(0, 3);
let sup = ass.slice(3, 5);
//Метод slice вырезает и возвращает указанную часть массива. 
console.log(subp);
console.log(sup);

//196
let iy = '196 задание';
console.log(iy);
//Метод splice удаляет или добавляет элементы в массив. 
let gu = ass.splice(1,2);
console.log(ass);
let rrr = [1, 2, 3, 4, 5];
let dff = rrr.splice(3, 0, 'a', 'b', 'c');
console.log(rrr);
let rr = [1, 2, 3, 4, 5];
let dfg = rr.splice(1, 0, 'a', 'b');
// вставляем данные исходя уже из этого массива
//let dfg = rr.splice(1, 0, 'a', 'b');
dfg = rr.splice(6, 0, 'c');
dfg = rr.splice(8, 0, 'e');
console.log(rr)

//197
let h = '197 задание';
console.log(h);
let ss = [1, 2, 3, 4, 5]
// метод includes проверяет наличие жлемента в массиве
let resh = ss.includes(3)
console.log('Наличие 3 в массиве:', resh);

let ss1 = [1, 2, 3, 4, 5]
let resh1 = ss1.find(function(ele) {
	return ele == 3;
});
console.log('Найти 3 в массиве.', 'Нашел:', resh1);

//198
let h1 = '198 задание';
console.log(h1);
let obj = {a: 1, b: 2, c: 3};
console.log(Object.keys(obj))

//199
let h2 = '199 задание';
console.log(h2);

let numm = 12345;
let arrr = String(numm).split('');

let sum5 = 0;
for (let digit of arr) {
    sum5 += Number(digit);
}

console.log(sum5); // Выведет 15
