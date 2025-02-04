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