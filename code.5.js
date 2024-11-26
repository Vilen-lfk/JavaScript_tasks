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
