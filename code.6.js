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

