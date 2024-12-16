"use strict";

let arr = [
	function() {return 1},
	function() {return 1},
	function() {return '3'},
];
for(let func of arr){
	if(arr[0]() == arr[1]()){
		
	}
	//alert(func())
}alert(arr[2]());
//console.log(arr[0]()+ arr[1]())
//alert(arr[2]())

//счастливые билеты первые числа в диапазоне
/*function getFirst(num){
	let str = '1';
	let countZ = (num / 2);
	console.log(countZ)
	for (let i = 1; i <= countZ; i++){
	str += '0';
	}return Number(str) + 1;
	}
	console.log( getFirst(6) );*/

//принимать число цифр в билете и возвращать число, соответствующее концу цикла
/*function getLast(num){
	let str='';
	for(let i = 1; i <=num; i++){
	str += '9';
	}return Number(str);
}console.log(getLast(4))*/

/*console.log(isLucky(normalizeNum(600123, 6))); // выведет true
console.log(isLucky(normalizeNum(700123, 6))); // выведет false
console.log(normalizeNum(12345, 6)); // выведет '012345'
console.log(normalizeNum(123, 6)); // выведет '000123'
function normalizeNum(num, digitsAmount) {
	let str = String(num);
	return formStr('0', digitsAmount - str.length) + str;
}
//будет формировать строку, заполненную нужным количеством нулей.
function formStr(data, length){
	let str = '';
	for(let i = 1; i <= length; i++){
	str += data;
	}return str;
}//console.log( formStr('0', 3) );console.log(formStr('0', 4)) // выведет '0000'
	
//взять первую половину цифр, найти их сумму, затем взять вторую
 //половину цифр, найти их сумму, а затем проверить равенство сумм.
function isLucky(num){
	let a = String(num);
	let sum1 = 0;
	let sum2 = 0;
	for( let i = 0 ; i < a.length / 2 ; i ++){
	sum1 += Number(a[i]);
	}
	for( let i = a.length / 2 ; i < a.length ; i ++){
	sum2 += Number(a[i]);
	}return sum1 == sum2;
}console.log(isLucky('1203'));console.log(isLucky('012003'));*/
	



/*function isLucky(num) {
	let str = normalizeNum(num);
	
	let sum1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
	let sum2 = Number(str[3]) + Number(str[4]) + Number(str[5]);
	
	return sum1 == sum2;
}



/*console.log(getLuckyTickets());
function getLuckyTickets() {
	let result=[]
	for(let i=1000; i<=1010; i++){
		if(isLucky(i)){result.push(i)}	
	}return result
}
function isLucky(num) {
	let str= normalizeNum(num)
	let sum1=Number(str[0])+Number(str[1])+Number(str[2])
	let sum2=Number(str[3])+Number(str[4])+Number(str[5])
	return sum1==sum2
}
function normalizeNum(num) {
	let str=String(num)
	if( str.length==5){str='0'+str}
	if(str.length==4){str='00'+str}return str
}*/

// случайные элементы из массива
/*function randoms(arr, length){
	return first(shuffle(arr), length)
}
function first(arr, length){
	return arr.slice(0, length)
}
function shuffle(arr) {
	let result = [];
	while (arr.length > 0) {
		let random = getRandomInt(0, arr.length - 1);
		let elem = arr.splice(random, 1)[0];
		result.push(elem);
	}return result;
}
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}console.log(randoms([1, 2, 3, 4, 5], 3));*/

//2 целых числа - начало и конец диапазона, и возвращающую массив, 
//заполненный целыми числами из этого диапазона.
/*function range(startNum, endNum){
	let result=[]
	for(let i=startNum+1; i<endNum; i++){
		result.push(i)
	}return result
}console.log(shuffle(range(3, 18)))*/

//Перемешивание массива в случайном порядке.
/*function shuffle(arr) {
	let result = [];
	while (arr.length > 0) {
		let random = getRandomInt(0, arr.length - 1);
		let elem = arr.splice(random, 1)[0];
		result.push(elem);
	}return result;
}
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}console.log(shuffle([1, 2, 3, 4, 5]));*/


// сумма случайных элементов. случайный элемент из массива
/*let arr = [1, 2, 3, 4, 5];
let sum;
sum= random(arr)+random(arr)+random(arr)
function random(arr){return arr[getRandomInt(0, arr.length-1)]
}console.log(sum)
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}console.log(random(arr))*/

/*function getOne(num1, num2){
	let a= getDivisors(num1)
	let b= getDivisors(num2)
	console.log(String(a));console.log(String(b))
	console.log(a.length);console.log(b.length);console.log(a[0])
	return String(a)==String(b) && a.length==b.length==1 && a[0]==b[0] && a[0]===1
}console.log( getOne(2, 3))
function getDivisors(num){
	let arr= [];
	for(let i = 1; i < num; i++){
		if(num % i == 0){arr.push(i);}
	}return arr;
}//console.log(getDivisors(31))*/


//найти наибольший общий делитель
/*function getGreatestCommonDivisor(num1, num2){
	let result = [];
	let devisorsOfNum1 = getDivisors(num1);
	let devisorsOfNum2 = getDivisors(num2);
	result = getInt(devisorsOfNum1, devisorsOfNum2);
	let max = Math.max.apply(null,result);
	return max;
}console.log(getGreatestCommonDivisor(55,44));
function getInt (arr1, arr2){
	let result = [];
	for(let elem of arr1){
		if(inArray (elem, arr2)){result.push(elem);}
	}return result;
}
function inArray(elem, arr){
	return arr.indexOf(elem, 0) != -1
}
function getDivisors(num){
	let arrDivisors = [];
	for(let i = 1; i <= num; i++){
		if(num % i == 0){arrDivisors.push(i);}
	}return arrDivisors;
}*/
	
//разность массивов
/*function getDiff(arr1, arr2){
	let diff1 = getFirstDiff(arr1, arr2);
	let diff2 = getFirstDiff(arr2, arr1);
	return [].concat( diff1, diff2 );
}
function getFirstDiff(arr1, arr2){
	let result = [];
	for (let elem of arr1) {
		if (inArray(elem, arr2)) {result.push(elem);}
	}return result;
}
function inArray(elem, arr){
	return arr.indexOf(elem) == -1;
}console.log( getDiff([1, 2, 3], [2, 3, 4, 5]) )*/ // выведет [1, 4, 5] 
// второй вариант разность массивов
/*function inArray(elem, arr) {
	return arr.indexOf(elem) !== -1;
}
function getDiff(arr1, arr2) {
	let result = [];
	for (let elem of arr1) {
		if (!inArray(elem, arr2)) {result.push(elem);}
	}
	for (let elem of arr2) {
		if (!inArray(elem, arr1)) {result.push(elem);}
	}return result;
}console.log(getDiff([1, 2, 3], [2, 3, 4, 5]));*/  // выведет [1, 4, 5] 


//пересечение массивов
/*function getInt(arr1, arr2) {
	let result = [];
	for (let elem of arr1) {
		if (inArray(elem, arr2)) {result.push(elem);}
	}return result;
}
function inArray(elem, arr){return arr.indexOf(elem) !== -1;}
console.log( getInt([1, 2, 3], [2, 3, 4, 5]) )*/

/*function getOwnDivisors(num) {
	let arr=[]
	for(let i=1; i<num; i++){
		if(num%i==0){
			arr.push(i)
		}
	}return arr
}console.log(getOwnDivisors(28))

function getSum(arr) {
	let sum=0
	for(let elem of arr){
		sum+=elem
	}return sum
}console.log(getSum(getOwnDivisors(28)))

let result=[]

function getPerfect(startNum, endNum){
	let result=[]
	for(let i=startNum; i<=endNum; i++){
		if(i==getSum(getOwnDivisors(i))){
			result.push(i);
		}
	}return result

}console.log(getPerfect(1, 28))*/

//Сделайте функцию getFreindly, которая будет находить пары дружественных 
//чисел в заданном промежутке и возвращать их в виде двухмерного массива
/*function FriendNum(num){
let a = ArrSum(num);let b = ArrSum(a);
if (b == num && num != a){return a;}else{ return false;}
}
function ArrSum(num){
let arr = [];let sum = 0;
for(let i = 1; i < num; i++){
if(num % i == 0){arr.push(i);}
}
for(let elem of arr) {sum += elem;} return sum;
}
function getFriendly(startNum, endNum){
	let arr = [];let result = [];
	for( let i = startNum; i <= endNum; i ++){
		if (FriendNum(i))
		{ arr[i] = [];
		arr[i][0] = i;
		arr[i][1] = FriendNum(i)};
	}
	for(let elem of arr){
		if(elem != undefined){result.push(elem);}}return result;
}console.log(getFriendly(1, 3000));*/


/*let sum1 = getSum(getOwnDivisors(220));
let sum2 = getSum(getOwnDivisors(284));
//isFreindly, которая параметром будет принимать два числа и возвращать true, 
//если числа дружественные друг с другом и falsе, если нет
function isFreindly(num1, num2) {
	let sum1 = getSum(getOwnDivisors(num1));
	let sum2 = getSum(getOwnDivisors(num2));
	if (sum1 == num2 && sum2 == num1) {
		return true;
	} else {
		return false;
	}
}console.log(isFreindly(sum1, sum2))
//getOwnDivisors, которая параметром будет принимать число и 
//возвращать массив собственных делителей этого числа:
function getOwnDivisors(num) {
	let arr=[]
	for(let i=1; i<num; i++){
		if(num%i==0){
			arr.push(i)
		}
	}return arr
}console.log(getOwnDivisors(3000))
//будет принимать массив и возвращать сумму элементов этого массива:
function getSum(arr) {
	let sum=0
	for(let elem of arr){
		sum+=elem
	}return sum
}console.log(getSum(getOwnDivisors(3000)))


/*let arr = [12, 19, 28, 13, 14, 345];
let result=[];
//парам приним число, возвр true усли от 1до9, и false если это не так
function inRange(num){
	let sum = getSum(getDigits(num))
	return sum>=1 && sum<=9;
	//if(num>=1 && num <=9){return true
	//}else{ return false}
}console.log(inRange(8))//проверка
//параметр приним массив,возвр сумму эл-в этого массива
function getSum(arr){
	let sum=0
	for(let elem of arr){
		sum+=Number(elem)
	}return sum
}console.log(getSum([6, 2]))//проверка
// принимает число, возвращает массив цифр(строк)
function getDigits(num){
	return String(num).split('')
}console.log(getDigits(53))// проверка
//массив с числами, переберем его циклом и в цикле с помощью нашей функции
//inRange будем проверять, подходит ли нам этот элемент массива
for(let elem of arr){
	if(inRange(elem)){result.push(elem)}
}console.log(result)*/


//Нужно найти его делители (без 1 и самого числа), а затем найти среднее арифметическое 
//(сумма делить на количество) делителей числа 
/*console.log( getAvg(getDivisors(24)) );
// Нахождение среднего арифметического:
function getAvg(arr) {
	let sum = 0;
	for (let elem of arr) {
		sum += elem;
	}
	return sum / arr.length;
}console.log(getAvg([1, 2, 3]))
// Нахождение массива делителей числа:
function getDivisors(num) {
	let result = [];
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			result.push(i);
		}
	}return result
}console.log(getDivisors(24))*/


/*let num=12345 //Используя комбинацию приведенныхфункций найдите сумму цифр числа12345
function getSum(arr) {
	let sum = 0;
	for (let elem of arr) {
		sum += Number(elem);
	}
	return sum;
}
function getDigits(num) {
	return String(num).split('');
}
console.log(getSum(getDigits(23456)))
console.log(getSum(getDigits(num)))*/

//найдем квадрат суммы элементов этого массива
/*function getSum(arr) {
	let sum = 0;
	for (let elem of arr) {sum += elem;}
	console.log(sum) //15
	return sum;
}function getSquare(num) {return num * num;}
console.log( getSquare(getSum([1, 2, 3, 4, 5])) )*/; //225


//вывести в консоль нетривиальные делители этих чисел
/*let nums = [12, 24, 35, 14];
for (let num of nums) {
	console.log(num + ': ' + getDivisors(num).join(', '));
}
function getDivisors(num) {
	let result = [];
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {result.push(i);}
	}return result;
}*/

/*let num1 = 234; let num2 = 532;
let digits1 = String(num1).split('');
let digitsSum1 = 0;
for (let digit1 of digits1) {digitsSum1 += Number(digit1);}
let digits2 = String(num1).split('');
let digitsSum2 = 0;
for (let digit2 of digits2) {digitsSum2 += Number(digit2);}
if (digitsSum1 == digitsSum2) {alert('суммы цифр совпадают');
} else {alert('суммы цифр не совпадают');}*/

//равна ли сумма цифр первого числа сумме цифр второго
/*let num1 = 234; let num2 = 532;
function checkDigitsPairsSum(num){
	let digitsSum = 0;
	let digits = String(num).split('');
	for (let digit of digits) {
		digitsSum += Number(digit);
	}return digitsSum
}
if (checkDigitsPairsSum(num1) == checkDigitsPairsSum(num2)) {
	alert('суммы цифр совпадают');
} else {alert('суммы цифр не совпадают');}*/


//чтобы переворот числа выполняла отдельная функция.*/
/*let result = [];
let nums = [123, 456, 789];
for (let elem of nums) {
	result.push(reversNum(elem))
	//if(reversNum(elem)){result.push(elem)} // не правильно работает
}
console.log(result); // выведет [321, 654, 987]
function reversNum(rev){
	let str=String(rev).split('').reverse().join('');return str
}*/

/*let result=[]
for(let i=1; i<=2030; i++){
	if(getDigitsSum(i)==13){result.push(i)}
}console.log(result)
function getDigitsSum(num) {
	let sum = 0;
	let digits = String(num).split('');
	for (let digit of digits) {sum += Number(digit);}return sum;
}*/                               //С помощью приведенной функции getDigitsSum найд
//все года от 1 до 2030, сумма цифр которых равна 13.

/*let result=[]
for(let j=1; j<=100; j++){
	if(isPrime(j)){result.push(j)}
}console.log(result)
function isPrime(num) {
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {return false;}
	}return true;
}*/ //Спомощью приведенной функции найдитевсе простые числа в интервале от1до100.


//запишем в новый массив только те элементы, 
//сумма первых двух цифр в которых равна сумме вторых двух цифр.
/*let result = [];
let arr = [1524, 1321, 4563, 7144, 2879];
for (let elem of arr) {
	if (checkDigitsPairsSum(elem)) {
		result.push(elem);}
}console.log(result);
function checkDigitsPairsSum(num) {
	let str = String(num);
	let sum1 = Number(str[0]) + Number(str[1]);
	let sum2 = Number(str[2]) + Number(str[3]);
	return sum1 == sum2;
}*/

//function func(a, b) {return a === b}console.log(func(3, '3'))// сокращенная форма без if

/*let arr = [5, 6, 7, 7, 8]//есть ли в этом массиве два одинаковых элемента подряд.
function someNumbArr(arr){
	let flag=false;
	for(let i =0; i<arr.length; i++){
		if(arr[i]==arr[i+1]){flag=true}
	}return flag;
}console.log(someNumbArr(arr))*/ // true

/*function isPrime(num) {
	let str=String(num);
	let arr=str.split('');
	for (let elem of arr) {
		if (elem % 2 == 0) {
			return false;
		}console.log(arr);
	}//console.log(arr);
	return true;
}console.log(isPrime(153));*/  // проверять, все ли нечетные чифры в числе.


 
/*function isNumb (arr){
	for(let elem of arr){
		if(elem%2!==0){
			return false;
		}
	}return true;
}
console.log( isNumb([1, 2, 3, 4, 5]) ); 
console.log( isNumb([6, 2, 8, 4]) );


/*console.log( isPositive([1, -2, 3, 4, -5]) ); // выведет false
console.log( isPositive([1, 2, 3, 4, 5]) );   // выведет true
function isPositive(arr) {
	for (let elem of arr) {if (elem < 0) {return false;}}return true;
} */   //проверить есть ли в массиве числа меньше 0

/*function isPrime(num) {
	let flag = true;
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {flag = false;break;}}return flag;
}console.log( isPrime(10) ); // проверка на простое число
console.log( isPrime(31) );*/ // флаги в функциях флаги в функциях

/*let res=[]//заполняющую массив целыми числами от начального до конечного
function func(a, b){
	for(let i=a; i<=b; i++){
		res.push(i)
	}return res
}console.log(func(3, 7))*/ //выведет [3, 4, 5, 6, 7]

/*let arr=[]
function putNumbers(num){
	for(let i=1; i<=num; i++){arr.push(i)}return arr
}console.log(putNumbers(5))*/ //заполняющую массив целыми числами от 1 до заданного.

/*let arr = [2,3,3,8,5,4,6,11,11,11,2,6];
function delElem(el, arr) {
	for(let elem of arr){
		if(el == elem){arr.splice(elem,1);};
	}return arr;
}console.log(delElem(2, arr));*/ //а здесь вырезал 3(индекс 1) это неправильно

/*function delElem(el, arr) {
	for(let i = 0; i < arr.length; i++){
		if(el == arr[i]){
			arr.splice(i,1)
		};
	}return arr;
}let arr = [2,3,3,8,5,4,6,11,11,11,2,6];
console.log(delElem(2, arr));*/         // убрать из массива цифру 2

/*function reverseStr(str){
	return str.split('').reverse().join('')
}console.log(reverseStr('щас напишу'))*/ // перевернул буквы строки в обратном порядке

/*let str = '12345';//Давайте перевернем символы этой строки в обратном порядке:
let result = str.split('').reverse().join('');
console.log(result);*/ // выведет '54321'

/*function getDivisors(num){
	let res=[];
	for(let i=1; i<=num; i++){
		if(num%i==0){res.push(i)}console.log(i)}return res;
}console.log(getDivisors(24))*/ // найти все делители числа 24

/*let sum=0
function getDigitsSum(num){
	let str=String(num);
	for (let i=0; i<str.length; i++){
		sum+=Number(str[i]);}return sum	
}console.log(getDigitsSum(456))*/ //найти сумму цифр числа 15

/*function getDigitsSum(num) {
	let str = String(num);
	let result = 0;
	for(let i = 0; i < str.length; i++){
	result += Number(str[i]);
	}return result;
	}
	
	console.log(getDigitsSum(528));
	

/*function getSum(arr) {let sum = 0;
	for (let elem of arr) {sum += elem**2}return sum;
}let arr1 = [1, 2, 3, 4];
alert(getSum(arr1));*/ // 30 сумма квадратов элементов массива


/*function func(num1, num2) {
	if (num1 > 0 && num2 > 0) {return num1 * num2;} 
	else {return num1 - num2;}
}alert(func(3, 4))*/

/*function func(num) {let i = 1;
	while (true) { // бесконечный цикл
		num=num/2;
		if (num<= 10) {return i;} // цикл крутится пока не выйд
		i++;
	}
}alert(func(40));*/

/*function sqrt(num) {
	return Math.sqrt(num);
}
function sum(num1, num2, num3) {
	return num1 + num2 + num3;
}
let result=sum(sqrt(4), sqrt(9), sqrt(16)).toFixed(3)
console.log(result)*/

/*function sqrt(num) {return Math.sqrt(num);}
function sum(num1, num2, num3) {return num1 + num2 + num3;}
let result=sum(sqrt(2), sqrt(3), sqrt(4))
console.log(result)*/

/*function sqrt(num) {return Math.sqrt(num);}
function round(num) {return num.toFixed(3);}
function sum(num1, num2, num3) {return num1 + num2 + num3;}
let result=round(sum(sqrt(4), sqrt(9), sqrt(16)))
console.log(result)*/

/*function sqrt(num) {return Math.sqrt(num);}
function round(num) {return num.toFixed(3);}
let result= round(sqrt(9))
console.log(result)

/*function square(num) {return num * num;}
function sum(num1, num2) {return num1 + num2;}
let result = sum(square(2), square(3));
alert(result);*/

/*function func(num){return Math.sqrt(num)}alert(func(4) + func(9))*/

/*let result=func(3);
function func(num){return num**3;}alert(result)*/

/*function func(num1 = 0, num2 = 0) {alert(num1 + num2);}
func(2, 3);func(3);func();*/

/*let param1 = 1;
let param2 = 2;
let param3 = 3;
function SumOfThree(num1, num2, num3)
{let sum = num1 + num2 + num3;alert(sum)
}SumOfThree(param1,param2,param3);*/

/*let param1 = 1;
let param2 = 2;
let param3 = 3;
function sumOfThree(){alert(param1+param2+param3)	
}sumOfThree()*/

/*let param1 = 1;
let param2 = 2;
let param3 = 3;
function sumOfThree(num1, num2, num3){alert(num1+num2+num3)
}sumOfThree(param1, param2, param3)*/

/*function func(num1, num2, num3){console.log(num1+num2+num3)
}func(2, 4, 6)*/

/*function cube(num){let cube = Math.pow(num,3);alert(cube);
}cube(55);*/


/*function func(num) {
	if(num>0){alert('+++');
	}else{alert('---')}
}func(2);*/

/*function names(){alert('Andrew')}names()*/

/*function res(num){
	let sum=0;
	for(let i=1; i<=100; i++){sum+=i;	res=sum+num;	
	}console.log(res)
}res(0)*/

/*function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}console.log(getRandomInt(10, 100));*/


/*let arr = ['1', '2', '3', '4', '5', '6'];
let result = [];
while (arr.length > 0) { // массив уменьшается в цикле пока не достигнет нуля
	let first = arr.shift();
	let last  = arr.pop();
	
	let str = first + last; // тут будет строка '16', потом '25', 
		потом '34' 
	result.push(str);
}
// После цикла в result лежит массив ['16', '25', '34']. Сольем его в строку: 
result = result.join('-');
console.log(result);*/ //'16-25-34'

/*let str = 'word1 word2 word3';
// Разобьем строку в массив слов:
let words = str.split(' ');
for (let i = 0; i < words.length; i++) {
	// Увеличим регистр каждого слова:
	words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
}
// Сольем массив обратно в строку:
let result = words.join(' ');
console.log(result);*/ // выведет 'Word1 Word2 Word3'

/*let str = '12345';//Давайте перевернем символы этой строки в обратном порядке:
let result = str.split('').reverse().join('');
console.log(result);*/ // выведет '54321'




