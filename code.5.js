//167
let arr = [
	['a', 'b', 'c'],
	['d', 'e', 'f'],
	['g', 'h', 'i'],
	['j', 'k', 'l'],
];
console.log(arr[3][2],arr[1][1],arr[2][0],arr[0][0]);

let arr1 = [[1, 2], [3, 4], [5, 6]];
let sum = 0; 
for (let subArray of arr1) { 
	for (let elem of subArray) { 
		sum += elem; 
    }
}
console.log(sum);
//168
let arr2 = [[[1, 2],[3, 4],],[[5, 6],[7, 8],],]
let sum1 = 0
for(let three of arr2){
    for(let two of three){
        for(let elem of two){
            sum1 += elem;
        }
    }
}
console.log(sum1);
//170
let arr3 = [[1, 2, 3, [4, 5, [6, 
	7]]], [8, [9, 10]]];
console.log(arr3[0][0]+arr3[0][1]+arr3[0][2]+arr3[0][3][0]+arr3[0][3][1]+arr3[0][3][2][0]+arr3[0][3][2][1]+arr3[1][0]+arr3[1][1][0]+arr3[1][1][1]);  

// 171   
let arr4 = [[1, 2, 3], [4, 5], [6]];
let summ = 0
for(let subArr of arr4){
	for(elem of subArr){
		summ += elem;
	}
}
console.log(summ);
//172
let arr7 = 'задание 172';
console.log(arr7);
let arr6 = [[1, 2, 3, 4, 5], [6, 
	7, 8], [9, 10]]; 

for (let i = 0; i < arr6.length; 
	i++) { 
	for (let j = 0; j < arr6[i].length; 
		j++) { 
		console.log(arr6[i][j]);
	}
}
//173
let err = 'задание 173';
console.log(err);
let err1 = [];
for (let i = 0; i < 3; i++) {
	err1[i] = []; // создаем подмассив
	
	for (let j = 0; j < 5; j++) {
		err1[i].push(j + 1); // заполняем подмассив числами 
	}
}
console.log(err1);

let err3 = '----------';
console.log(err3);
let err2 = [];
for (let i = 0; i < 3; i++) {
	err2[i] = []; // создаем подмассив
	
	for (let j = 0; j < 4; j++) {
		err2[i].push('x'); // заполняем подмассив числами 
	}
}
console.log(err2);

let err4 = '----------';
console.log(err4);
let layers = 3; 
let rows = 2; 
let cols = 5; 
let arr8 = [];

for (let i = 0; i < layers; i++) {
    let layer = [];
    for (let j = 0; j < rows; j++) {
        let row = [];
        for (let k = 0; k < cols; k++) {
            row.push(k + 1);
		}
        layer.push(row);
    }
    arr8.push(layer);
}

console.log(arr8);
//174
let j = 'задание 174';
console.log(j);
let arr5 = [];

for (let i = 0; i < 4; i++) {
	arr5[i] = [];

	for (let j = 1; j < 5; j++) {
		arr5[i].push(j);
	}
}
console.log(arr5);

let p = '------------'
console.log(p);

let ar = [];

for (let i = 0; i < 3; i++) {
	ar[i] = [];
	
	for (let j = 1; j <= 5; j++) {
		ar[i].push(j);
	}
}

console.log(ar);

//175
let j1 = 'задание 175';
console.log(j1)
let mass = [];
let k = 1; // счетчик

for (let i = 0; i < 4; i++ ){
	mass[i] = [];
	for (let j = 0; j < 2; j++){
		mass[i].push(k); // записываем счетчик
		k++; // увеличиваем счетчик на 1
	}
}
console.log(mass);

let y = '------------';
console.log(y);
let mass1 = [];
let k1 = 2;
for (let i = 0; i < 4; i++){
	mass1[i] = [];
	for(let j = 0; j < 3; j++){
		mass1[i].push(k1);
		k1= k1 + 2;
	}
}
console.log(mass1);

let y1 = '------------';
console.log(y1);
let mass2 = [];
let k2 = 1;

for(let i = 0; i < 2; i++){
	let r = [];
	for(let j = 0; j < 2; j++){
		let re = [];
		for (let h = 0; h < 2; h++){
			re.push(k2);
			k2++;
		}
		r.push(re);	
	}
	mass2.push(r);
}
console.log(mass2)


let y2 = '------------';
console.log(y2);
let ar1 = [];
let k4 = 1;

for (let i = 0; i < 3; i++) {
	ar1[i] = [];
	
	for (let j = 0; j < 3; j++) {
		ar1[i].push(k4);
		k4++;
	}
}
