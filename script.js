let str1 = 'xxx';
let str2 = 'yyy';
let txt  = 'aaa ' + str1 + ' bbb ' + str2 + ' ccc';
alert(txt);



let obj = {x: 1, y: 2, z: 3};
console.log( typeof obj['x'] );

console.log( Array.isArray([]) ); // выведет true
console.log( Array.isArray({}) ); // выведет false

let arr1 = [1, 2, 3];
let arr2 = arr1;

arr1[0] = 'a';
arr2[0] = 'b';

console.log(arr2);



let test = true;

if (test === true) {
	console.log('+++');
} else {
	console.log('---');
}

let test1 = true;
let test2 = true;
let test3 = true;

if (test1 === true || test2 === false && test3 === false) {
	console.log('+++');
} else {
	console.log('---');
}


let lang = 'ru';

if (lang == 'ru') {
	console.log('рус');
} else if (lang == 'en') {
	console.log('анг');
} else if (lang == 'de') {
	console.log('нем');
} else {
	console.log('язык не поддерживается');
}

let min = 10;

if (min >= 0 && min <= 14) {
	console.log('1 четверть');
}

if (min >= 15 && min <= 29) {
	console.log('2 четверть');
}

if (min >= 30 && min <= 44) {
	console.log('3 четверть');
}

if (min >= 45 && min <= 59) {
	console.log('4 четверть');
}


for (let i = 10; i > 0; i--) {
	console.log(i); // выведет 10, 9, 8...
}

let res = 0;

for (let i = 1; i <= 100; i++) {
	res += i;
}
let arr = [1, 2, 3, 4, 5];
let flag = false;

for (let elem of arr) {
	if (elem == 3) {
		flag = true;
		break;
	}
}

let num; // объявим переменную снаружи цикла

for (let i = 1; i <= 9; i++) {
	num = 3; // установим ей значение
}

console.log(num); // выведет 3

