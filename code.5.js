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