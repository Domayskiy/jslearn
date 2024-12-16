"use strict";
/*
function func(department, [name, surname], [year, month, day]){
	console.log(month); console.log(surname)
}
/*function func(department, employee, hired) {
	let name     = employee[0];
	let surname  = employee[1];
	
	let year  = hired[0];
	let month = hired[1];
	let day   = hired[2];
}*/
//func( 'отдел разработки', ['Иван', 'Иванов'], [2018, 12, 31] );



/*function func([name, surname, department, position='джуниор']){
	console.log(position)
}func( ['Иван', 'Иванов', 'отдел разработки'] );*/
/*function func(employee) {
	let name       = employee[0];let surname    = employee[1];
	let department = employee[2];
	let position;
	if (arr[3] !== undefined) {position = arr[3];
	} else {position = 'джуниор';}
}func( ['Иван', 'Иванов', 'отдел разработки'] );*/



/*function func(employee) {
	let name       = employee[0];
	let surname    = employee[1];
	let department = employee[2];
	let position   = employee[3];
	let salary     = employee[4];
}*/
/*function func([name, surname, department, position, salary]){
	console.log(position)
}func( ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000] );*/



/*let obj={}
let {year, month, day} = func();
function func() {
	return obj = {year:  2025, month: 12, day:   31};
}console.log(year)*/


/*let options = {width:  400, height: 500,};
let {color: c = 'black', width: w, height: h } = options;
console.log(c)*/
/*let color;
if (options.color !== undefined) {
	color = options.color;
} else {
	color = 'black';
}
let width  = options.width;
let height = options.height;*/


/*let options = {
	color: 'red',
	width:  400,
	height: 500,
};let {color: c, width: w, height: h}=options
//let c = options.color;//let w = options.width;//let h = options.height;
console.log(w)*/


/*let arr = [2025, 12];
function func() {return (new Date).getDate();}
let [year, month, day = func()] = arr;
console.log(day)*/

/*let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист'];
let [name, surname, department, position='джуниор'] = arr
console.log(position)*/
//let name       = arr[0];let surname    = arr[1];
//let department = arr[2];let position;
//if (arr[3] !== undefined) {position = arr[3];
//} else {position = 'джуниор';}



/*let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
let [name, surname, ...rest]=arr
console.log(rest) //['отдел разработки', 'программист', 2000]
//let name    = arr[0];
//let surname = arr[1];
//let info = arr.slice(2);*/ // все элементы со второго до конца массива 

/*let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
let [, , department, position, ] = arr
console.log(department, position, )
//let department = arr[2];
//let position   = arr[3];*/

/*function func() {
	return ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
}
let arr = func();
let [name, surname, department, position, salary] = arr
console.log(name)*/

/*function func() {return [2025, 12, 31];}
let [year, month, day] = func();
console.log(year, month, day)8?

/*let result = unite([1, 2, 3], [4, 5, 6], [7, 8, 9]);
console.log(result); // выведет [ [1, 2, 3,] [4, 5, 6], [7, 8, 9] ] 
function unite(...arrs) {
	return arrs;
}*/

/*function func(...rest){
	let sum=0
	for (let elem of rest){
		sum+=elem;
	};return sum/rest.length;
};console.log(func(2, 4, 3))

/*function func(a, b) {
	console.log(a+b);console.log(b);
};func(1, 2, 3, 4, 5);*/

/*let arr = [...'12345', ...'56789'];
console.log(arr);*/

/*let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr  = ['a', ...arr1, 'b', 'c', ...arr2];
console.log(arr);*/

/*let arr = [1, 2, 3, 4, 5]
let res= function (){return Math.min(...arr)};console.log(res())*/

/*let arr = [1, 2, 3, 4, 5]
let max = Math.max(...arr);
console.log(max)*/

/*let arr = (1, 2, 3, 4, 5)
let max = Math.max(arr);
console.log(max)*/


/*function func(num1, num2, num3, num4, num5) {
	return num1 + num2 + num3 + num4 + num5;
};
console.log(func(...[1, 2], ...[3, 4, 5]));
//func(...[1, 2, 3, 4, 5]);*/


/*let arr = [1, 2, 3];
function func (num1, num2, num3) {
	return num1 + num2 + num3;
};console.log(func(...arr));
//console.log(func(...[1, 2, 3]));*/


/*let arr = [3, 5, 7, 9, 'a', 10];
let result = arr.some((elem, index) => eleg(elem*index>30);
console.log(result);*/

/*let arr = [2, 4, 6, 0]
console.log(arr.every((elem, index)=>elem*index<30))*/

// метод filter
/*let arr = [1, -1, 2, -2, 11]
console.log(arr.filter(elem=>elem<0).length)*/


/*let arr=[1, 2, [3, 4], 5, [6, 7]]
let result= arr.filter(elem=>typeof elem !== 'object')
console.log(result)*/

/*let arr = [1, -1, 2, -2, 11]
console.log(arr.filter(elem=>elem>0 && elem <10))*/

/*let arr = ['qwer', 'asdfghj', 'aaa', '88']
console.log(arr.filter(elem=>elem.length<5))*/

/*let arr = [1, 2, 25, -1]
console.log(arr.filter((elem, index) => (elem*index)>30))
/*let result= arr.filter(function (elem, index){
	return (elem*index)<30
}); console.log(result)*/


// метод forEach
/*let arr = ['a', 'b', 'c', 'd', 'e'];
arr.forEach(function(elem, index) {document.write(index + '. ' + elem + '<br>');});*/

/*let arr = [1, 2, 3, 4, 5];
let sum = 0;
arr.forEach(function(elem) {sum += elem;});console.log(sum);*/

/*let arr =[2, 3]
let sum=0
arr.forEach(function(elem){sum+=elem**2});console.log(sum)*/

//перебор многомерных массивов метод мап
/*let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let result = arr.map(function(elem) {
	return elem.map(function(num) {return num * num;
	});
});console.log(result);*/

/*let arr = [1, 2, 3];
let result = arr.map(function(elem, index) {
	return elem * index;
});console.log(result);*/ // выведет [0, 2, 6] 


/*let arr = ['a', 'b', 'c', 'd', 'e'];
let result = arr.map(function(elem, index) {return elem + index;
});console.log(result);*/ // выведет ['a0', 'b1', 'c2', 'd3', 'e4'] 


//метод map
/*let arr = ['123', '456', '789'];
let result= arr.map (function(elem){
	elem=elem.split('')
	let res = elem.map(function(subElem){
		return subElem = Number(subElem);
	})return res;
})
console.log(result);


/*let arr = ['abc', '123'];
let result = arr.map(function(elem) {
	return elem.split('').reverse().join('');
});
console.log(result);*/


// с помощью рекурсии элементы многомерного массива
/*function func(arr) {
	for (let elem of arr) {
		if (typeof elem == 'object') {
			func(elem);
		} else {
			console.log(elem);
		}
	}
}
func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]);*/


// с помощью рекурсии сумму элементов массива
/*function getSum(arr) {
	let sum = arr.pop();
	if (arr.length !== 0) {
		sum += getSum(arr);
	}return sum;
}console.log(getSum([1, 2, 3]));*/

/*let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let result = each(arr, function(elem, index) {
	if (elem * index > 10) {
		return true;
	} else {
		return false;
	}
});console.log(result)
function each(arr, callback){
let result = [];
for(let elem of arr){
result.push(callback(elem));
}
return result;
}*/


/*let arr = [3, 6, 7, 4, 5]
function func() {
	for(let i=0; i< arr.length; i++){
		console.log(arr[i])
		if(arr[i]>=0){func()}
	}
}func()


/*let arr = [1, 6, 9, 11];
function each(arr, callback){
let result = [];
for(let elem of arr){
result.push(callback(elem));
}
return result;
}
alert(each(arr, function(elem){let a = arr.indexOf(elem,0); return elem * (a+1);}))*/


/*function each(arr, callback) {
	let result = [];
	for (let elem of arr) {
		result.push( callback(elem) ); // вызываем функцию-коллбэк
	}return result;
}
let result = each(['12345'], function(str) {
	return str.split('')
});console.log(result);*/


/*let func = (function() {let num = 1;
	return function() {
		if(num>3){num=1}
		alert(num);num++}
})();
func(); //выведет 1
func(); //выведет 2
func(); //выведет 3
func() //выведет 1
func() //выведет 2
func()*/  //выведет 3

/*(function(num1) {
	return function(num2){
		return function(num3){alert(num1 + num2+ num3)} 
	}
})(1)(2)(3);*/

/*let result = (function() {return '!';});
alert(result());*/

/*let result = function() {return 1;}() + function() {return 2;}();
alert(result);*/

/*let sum = 1 + function() {
	return 2;
}();
alert(sum);*/ // выведет 3

/*let result = function() {return '!';
};alert(result());*/

/*+function() {
	alert('!'); // выведет '!'
}()*/


/*function test() {let counter = 0;
	return function() {
		return function() {alert(counter);counter++;};
	};
};
let func = test();
let func1 = func();
let func2 = func();
func1();func2();func1();func2();*/ // 0, 1, 2, 3


/*function test() {
	let counter = 0;
	
	return function() {
		return function() {
			alert(counter);
			counter++;
		};
	};
};

let func = test()();

let func1 = func;
let func2 = func;
func1();
func2();
func1();
func2();*/   //0, 1, 2, 3


/*let counter = 0;
function test() {
	return function() {alert(counter);counter++;};
};
let func = test;
let func1 = func();
let func2 = func();
func1();func2();func1();func2()*/ //0, 1, 2, 3 замыкания


/*function func() {let num = 0;
	return function() {alert(num);num++;};
};let test = func;
test()();test()();test()();*/ //0, 0 , 0 замыкания


/*unction func() {let num = 0;
	return function() {alert(num);num++;};
};func()();func()();func()();*/ // 0, 0 ,0

/*function test(){
	let num=10;
		
	return function(){for(let i=1; i<= num; i++){
		if(num<9){console.log('расчет окончен');}}
		console.log(num);
		return num--;
		
	}
}
let func1 = test()
func1();func1();func1();func1()*/
//let func2=test(); func2(); func2()

/*let arr=[];
function func1(num1){  
	return function(num2){
	 return function(num3){
		 return function(num4){
			 return function(){
				//let arr=[];
				 arr.push(num1, num2, num3, num4)
				 return arr
				 
			 }
		 	}
	 	}
	}
	
}console.log(func1('a')(2)(3)(4)())*/



/*function test(num) {
	function func(localNum) {
		num = 2;
	}func(num);
	alert(num);
}test(1);*/

/*function test() {
	let num = 1; // переменная внешней функции
	function func() {alert(num); // выведет 1
	}func(); // вызываем внутреннюю функцию
}test();*/ // вызываем внешнюю функцию

/*function func(num1, num2){
	function square(num){
		return num*num
	};
	function cube(num){
		return num**3
	};
	return square(num1)+cube(num2)
}alert(func(3, 2))*/

/*let test = function func() {
	alert(func); // функция выведет свой же исходный код
};
test();*/

/*function test(arr, func){
	for(let i=0; i < arr.length; i++){
		arr[i]=func(arr[i])
	}return arr
}
console.log(test([1, 2, 3], function func(num){return num*num*num}))
//let result=test([1, 2, 3], function func(num){return num*num})
//console.log(result)

/*function test(num, func1, func2) {
	return func1(num) + func2(num);
	
}
alert(test(3, function(num){return num**2}, function(num){return num**3}))*/


/*function test(func) {
	alert(func(2, 3));
}
let func= function(num1, num2) {
	return num1+num2;
};
test(func)
alert(func(2, 5))*/


/*function test(func1, func2, func3) {
	alert( func1() + func2() + func3() ); // выведет 6
}
let func1= function(){return 1}
let func2= function(){return 2}
let func3= function(){return 3}
test(func1, func2, func3)*/

/*let obj = {
	func1: function(arr) {
		let sum=0; 
		for(let elem of arr){
		sum+=elem;
		}return sum;
	},
	func2: function(arr) {let sum=0; 
		for(let elem of arr){
		sum+=elem**2;
		}return sum;},
	func3: function(arr) {return 3},
};
alert(obj.func2([2, 5]))*/