"use strict";






/*
function cube(num) {
	return num ** 3;
}
function each(arr, callback){
    let result=[];
    for(let elem of arr){
        result.push(callback(elem))
    };
    return result
}
let result= each([1, 2, 3, 4], cube);
console.log(result)


/*
//Коллбэки не обязательно должны быть анонимными функциями. П
function each(arr, callback){
    let result=[];
    for(let elem of arr){
        result.push(callback(elem))
    };
    return result
};
function square(num) {
	return num * num;
}
let result = each([1, 2, 3, 4, 5], square);
console.log(result);


/*
//функцию, которая первым параметром будет принимать массив, а вторым - коллбэк, который будет применять к каждому элементу массив
//массив со строками. С помощью созданной нами функции each сделайте заглавным первый символ каждой строки.

function each(arr, callback){
    let result=[];
    for(let elem of arr){
        result.push(callback(elem))
    };
    return result
};
function square(num) {
	return num * num;
}

let res= each(['andrei', 'borisovich', 'domayskii'], function (str){
    //return str.split('').reverse().join('');
    return str[0].toUpperCase() +str.slice(1);
})
console.log(res)



/*
//Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4)(5)(), вернет массив переданных в параметры чисел.
function func(num1) {
	return function(num2) {
        return function(num3){
            let arr=[];
            arr.push(String(num3) + num1, num2);
            console.log(arr);
        };		
    };
};func(7)(2)(3)



/*
//Сделайте функцию func1, которая будучи вызвана вот так: func1()(), вернет число 1. Сделайте аналогичную функцию func2, возвращающую число 2. Найдите сумму результатов этих функций.

function func1(){
    return function (){
        return 1
    }
};

function func2(){
    return function (){
        return 2
    }
};
console.log(func1()() + func2()())


/*
//Сделайте функцию func, которая параметрами будет принимать два числа, а возвращать сумму квадрата первого числа с кубом второго числа. Сделайте для этого вспомогательную функцию square, возводящую число в квадрат, и вспомогательную функцию cube, возводящую число в куб.

function func (num1, num2){
        return square(num1) + cube(num2)

    function square(num){return num*num;};
    function cube(num){return num**3}
};console.log(func(3, 2));


/*
function test(arr, func){
    for(let i=0; i<arr.length; i++){
        arr[i]= func(arr[i]);
    };
    return arr
}
let result=test([1, 2, 3, 4], function(num){return num*num*num});
console.log(result)


/*
//Вызовите функцию test, первым параметром передав число 3, вторым параметром функцию, возводящую число в квадрат, а третьим - функцию, возводящую число в куб. Выведите результат работы в консоль.
function test(num, func1, func2) {
	console.log(func1(num) + func2(num));
}
test(3, function(num){return num*num}, function(num){return num**3});


/*
function test(num1, num2, func) {console.log(func(num1, num2));}
test(2, 1, function(num1, num2) {return num1 + num2;});
test(2, 3, function(num1, num2) {return num1 * num2 * num2; });


/*
test(function get(num) {
	return num **3;
});

//Пусть передаваемая функция теперь принимает два параметра и возвращает их сумму. При вызове передаваемой функции внутри test передайте в передаваемую функцию число 2 и число 3. Выведите алертом результат.
*/
/*
function get(num1, num2){return num1 + num2};
function test(func) {console.log(func(1, 2))};
test(get)


/*
//Сделайте функцию test, параметрами принимающую 3 функции и возвращающую сумму результатов переданных функций
function test(get1, get2, get3){
    return get1() + get2() + get3()
};
let func1= function (){return 1};
let func2= function (){return 2};
let func3= function (){return 3};
console.log(test(func1, func2, func3));


/*
//Сделайте функцию test, параметрами принимающую 3 функции. Передайте в нее первым параметром функцию, возвращающую 1, вторым - функцию, возвращающую 2, третьим - функцию, возвращающую 3. Выведите в консоль сумму результатов функций.
function test(func1, func2, func3){
    console.log(func1() + func2() + func3())
};
test(function (){return 1}, function(){return 2}, function(){return 3})


////Сделайте объект с тремя функциями, каждая из которых будет принимать параметром массив с числами. Сделайте так, чтобы первая функция возвращала сумму элементов массива, вторая функция - сумму квадратов, а третья - сумму кубов.
/*
let arr1 =[2, 3, 5];                   //Pravilno zdess
let obj={
    func1: function get1(arr){let sum=0;
                for(let elem of arr){
                    sum+=elem;
                };
                console.log(sum)
            },
    func2: function get2(arr){let sum=0;
                for(let elem of arr){
                    let pow= elem**2;
                    sum+=pow;
                };console.log(sum)
            }
}
obj.func1(arr1)
obj.func2(arr1)
*/

/*
let arr1= [1, 2, 3]
let sum=0;
let sum2=0
let obj = {
	func1: function() { return get1(arr1)},
	func2: function(arr) {return get2(arr1)},
	func3: function(arr) {return Math.pow(arr[0], 3) + Math.pow(arr[1], 2) + Math.pow(arr[2], 3)},
};
//console.log(obj.func1(arr1));
console.log(obj.func2(arr1));
//console.log(obj.func3(arr1));
function get1(arr){
    for(let elem of arr){
        sum+=elem
    };console.log(sum);
    //return sum
};
obj['func1']()
//	func1: function(arr) {return arr[0] + arr[1] + arr[2]},
function get2(arr){
    sum=0;
    for(let elem of arr){
        sum+= elem**2
        //console.log(sum)
    }; 
    return sum;
    
};
//get2(arr1)
//func2: function(arr) {return Math.pow(arr[0], 2) + Math.pow(arr[1], 2) + Math.pow(arr[2], 2)},






/*
function func(arr){
    for(let i=0; i<arr.length; i++){
        console.log(arr[i])
    }
    }

func(arr1)

/*
let sum=0;
let obj = {
	func1: function() {return 1},
	func2: function() {return 2},
	func3: function() {return 3},
};
for(let key in obj){
    console.log(obj[key]())
    sum+=obj[key]();
};
console.log(sum);



/*
//массив arr с тремя функциями. Пусть первая возвращает через return число 1, вторая - число 2, третья - число 3.
let arr = [
	function() {return '1'},
	function() {return '2'},
	function() {return '3'},
];
for (let func of arr) {
	console.log(func()); // вызываем наши функции в цикле
};
console.log(+arr[1]() + +arr[2]());


/*
//безымянную функцию, котораябудет возвращать через return число 1. Запишитеэту функцию впеременную func1.
let func1= function (){return 1};
let func2= function (){return 2};
console.log(func1() + func2())

/*
//Сделайте функцию func1, которая будет возвращать через return число 3
//Скопируйте исходный код функции func1, в переменную func2
//Выведите в консоль сумму результатов работы функций func1 и func2
function func1(){
    return 3
};
//func1();
let func2=func1;
console.log(func1() + func2)


/*
function func() {
	return '!zzzz';
}
console.log(func())
/*
func='123'
console.log(func)

/*
//которая параметром будет принимать число и проверять, простое оно или нет.
function primeNum(num){
    for(let i=2; i<num; i++){
        if(num%i ===0){console.log(num + ' делится еще на ' + i)}
    }console.log(num)
}primeNum(13)

//делайте функцию, которая будет возвращать случайный элемент из массива.
/*
const numbers = [1, 2, 3, 4, 5, 6];
const randomIndex = Math.floor(Math.random() * (numbers.length - 1));//генерируемслучайныйиндекс вдопустимом диапазоне
const result = numbers[randomIndex]; // извлекаем значение под случайным индексом
console.log(result);

/*
let randomItem = array[Math.floor(Math.random() * array.length)];
*/
/*
let arr1=['a', 2, 3, 4, 5, 6, 7, 'z']
function getRandomIndex(arr){
    return Math.floor(Math.random() * (arr.length-1))
}
let res= arr1[getRandomIndex(arr1)]
console.log(res)
/*
function getElemArr(arr){
    for(let i=0; i<arr.length; i++){
        arr[i]=arr[getRandomIndex(0, arr.length-1)] //сам сделел через цикл, но работало чуток не так
        console.log(arr[i])
    }console.log(arr)
}getElemArr(arr1)

/*
//параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам.
function secInDay(sec){let day=sec/86400;return day}console.log(secInDay(172800))

/*
//Сделайте функцию, которая параметром будет год и проверять, високосный он или нет
function showLeapYear(year){
    if(year%4==0){
        console.log(year + '-' + 'високосный год')
    }else{console.log(year + '-' + 'невисокосный год')}
}showLeapYear(2024)

/*
//Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр
function getSumDigits(num){
    num= String(num);
    let sum=0;
    for(let i=0; i<num.length; i++){
        sum+= Number(num[i])   
    }return sum;
}console.log(getSumDigits(123))

/*
//делайте функцию, заполняющую массив целыми числами от 1 до заданного
function getArNum(num){
    let arr=[];
    for(let i=1; i<=num; i++){
        arr.push(i);
    }console.log(arr)
    //return arr
}getArNum(10)
//console.log(getArNum(10))

/*
//которая параметром будет принимать строку и делать заглавной первую букву каждого слова этой строки
function topApperStr(str){
    let arr=str.split(' ');
    for(let i=0; i<arr.length; i++){
        arr[i]= arr[i][0].toUpperCase() + arr[i].slice(1);
        //arjeq[i] = arjeq[i].charAt(0).toUpperCase() + arjeq[i].substring(1);
    }
    arr=arr.join(' ');
    console.log(arr);
};topApperStr('andrew and masha');

/*
//которая параметром будет принимать строку и делать заглавной первую букву этой строки.
function topApperStr(str){
    str=str[0].toUpperCase() + str.slice(1);
    //return str;
    console.log(str)
}
topApperStr('andrew');
//let str1='andrew'; console.log(topApperStr(str1))

/*
//которая параметром будет принимать строку и переворачивать ее символы в обратном порядке.
function changeStr(str){
    let reverStr=str.split('').reverse().join('');
    console.log(reverStr)
};changeStr('andrew')

/*
//которая параметром будет принимать строку и возвращать массив ее символов.
let str1='andrew';
let arr=[]
getSimvolStr(str1)
function getSimvolStr(str){arr=str.split('')}console.log(arr); alert(arr)

/*
//которая параметром будет принимать число и возвращать массив его делителей.
let arr1=[];
getArrDigit(10)
function getArrDigit(num){
    for(let i=1; i<=num; i++){
        if(num%i ==0){arr1.push(i)}
    }console.log(arr1)
}

/*
//которая параметром будет принимать массив и возвращать сумму его элементов.
let arr1=[2, 4, 7]
function getSum(arr){ let sum=0;
    for(let elem of arr){ sum+=elem
    }return sum
}console.log(getSum(arr1))

/*
//Код должен проверить число на то, что оно является простым
console.log(isPrime(13)); // должен вывести true
function isPrime(num) {for (let i = 2; i < num; i++) {return num % i !== 0}}

/*
let num = 12345;
let res = числоСуммы(num);
console.log(res);
function числоСуммы(num) {
    //num=String(num)
	let arr = String(num).split('');
	let sum = 0;
	
	for (let elem of arr) {
		sum += +elem;
	}
	
	return sum;
}

/*
let arr1 = [1, 2, 3, 4, 5];
let sum1 = sum(arr1);

function sum(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
	
	return res;
}
console.log(sum1);

/*
//Код должен найти сумму элементов массива
let res = sum([1, 2, 3, 4, 5]);
console.log(res);

function sum(arr) {
	let sum = 0;
	
	for (let elem of arr) {
		sum += elem;
	}
	
	return sum;
}


/*
function func1() {return 3;}
function func2() {return 5;}
console.log( func1() + func2() );            //8


/*
let arr1 = [1, 2, 3, 4, 5];

function func(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}return res
	
}	console.log(func(arr1));

/*
//Код должен найти сумму элементов массива
function sum(arr) {let res = 0;
	for (let elem of arr) {res += elem;}return res;}
console.log(sum([1, 2, 3, 4, 5]));

/*
//Код должен найти сумму результатов работы двух функций
function func1(num) {return num}
function func2(num) {return num}
console.log( func1(3) + func2(5) )

/*
let arr1=[5, 7];
let arr2=[2, 4];
function getSam(arr){let sum=0;
    for(let elem of arr){ sum+=elem}return sum}

function getResult(sum1, sum2){return sum1 / sum2}
console.log(getResult(getSam(arr1), getSam(arr2)))

/*
//функцию, которая параметром будет принимать массив и проверять, есть ли в этом массиве два одинаковых элемента подряд
function func(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i]===arr[i+1]){return true}
    }return false
}console.log(func([1, 5, 'z', 'z']))

//ункцию, которая параметром будет принимать число и проверять, что все цифры это числа являются нечетными.
/*
function func(num){
    num= String(num);
    for(let i=0; i<num.length; i++){
        if(Number(num[i]) % 2 ==0){
            return false
        }
    }
    return true
}
console.log(func(165))

/*
//функцию, которая параметром будет принимать массив с числами, и проверять, что все элементы в этом массиве являются четными числами.
let arr= [2, 4, 6, 8, -7]
function isPositive() {
	for (let elem of arr) {
		if (elem %2 != 0) {
			return false
		}
	}
	return true;
}console.log(isPositive(arr))

/*
//Напишите функцию, которая параметром будет принимать число и делить его на 2 столько раз, пока результат не станет меньше 10. Пусть функция возвращает количество итераций, которое потребовалось для достижения результата.
function func(num){let i=0;
    while(num>=10){ num=num/2; i++;
        if(num<=10){return i};console.log(num)}
}console.log(func(100))

/*
//Спомощью этихфункций найдите сумму корней чисел 2, 3 и 4 и запишите ее в переменную res
function sqrt(num) {return Math.sqrt(num);
}
function sum(num1, num2, num3) {return num1 + num2 + num3;
}
let res=sum(sqrt(4.5), sqrt(9), sqrt(25)).toFixed(3); console.log(res)


/*
//Спомощью этихфункций найдите квадратный корень изчисла 2 иокруглите его до трех знаков в дробной части.
function sqrt(num) {return Math.sqrt(num);s
}
function round(num1) {return num1.toFixed(3);
}
let res= round(sqrt(3));console.log(res)

/*
//параметром принимает число, а возвращает квадратный корень из этого числа. С помощью этой функции найдите корень числа 3, затем найдите корень числа 4. Просуммируйте полученные результаты и выведите их в консоль
function func (num){return Math.sqrt(num)}let res=((func(4)+ func(3)).toFixed(3));console.log(res)

/*
//параметром принимает число, а возвращает куб этого числа. С помощью этой функции найдите куб числа 3 и запишите его в переменную res.
function func(num){return Math.pow(num, 3);};let res=func(10); console.log(res)

/*
//func, которая параметром будет принимать 3 числа и выводить в консоль их сумму. 
let param1 = 1;
let param2 = 2;
let param3 = 3;
function func(num1, num2, num3){console.log(num1+num2+num3)};func(param1,param2,param3)

/*
//функцию, которая параметрами принимает 3 числа и выводит в консоль сумму этих чисел.
function func(num1, num2, num3){console.log(num1+num2+num3)}; func(3,9,1)

/*
//Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное. В первом случае пусть функция выводит в консоль текст '+++', а во втором '--
function func (num){if(num>=0){console.log('+++')}else{console.log('---')}};func(3)

/*
//функцию, которая параметром принимает число и выводит в консоль куб этого числа
function cube(num){num=num**3;console.log(num)};cube(2)

/*
//Сделайте функцию, выводящую в консоль сумму чисел от 1 до 100
function func() {let sum =0;
    for(let i=1; i<=11; i++){sum+=i}
	console.log(sum);
};func()

/*
//Код должен найти сумму цифр числа
let num = 12345;
//let arr = String(num).split('');
let str = String(num);
let arr=str.split('')
let sum = 0;
for (let digit of arr) {sum += +digit;};console.log(sum);


/*
let arr = [1, 2, 3,'Андрей', 4, 5];
console.log(arr.indexOf('Андрей'))
arr.unshift(7,'!')
console.log(arr)
arr.push(8,9)
console.log(arr)
console.log(arr.pop())
console.log(arr.shift())

let res=arr.splice(1)
arr.splice(1)
console.log(res)
console.log(arr)
arr.slice(0)
console.log(arr)


/*
//С помощью цикла заполните массив 10-ю случайными целыми числами.
let arr=[];
let max = 100;
let min = 2;
for(let i=0; i<10; i++){
    arr.push(Math.ceil(Math.random() *(max - min) + i ))
}console.log(arr)

let max = 100
let min = 1;
console.log(Math.ceil(Math.random() *(max - min) + min ))

/*
//Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'.
let num= Math.ceil(Math.sqrt(587))
let num1= Math.floor(Math.sqrt(587))
let obj={}
obj['ceil']=num
obj.floor=num1
console.log(obj)


/*
//Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.
let num= Math.sqrt(379)
num=num.toFixed(1)
console.log(num)


/*
//Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.
let arr= [4, 2, 5, 19, 13, 0, 10];
let sum=0;
for(let elem of arr){
    elem= elem**3;
    sum+=elem
}console.log(Math.sqrt(sum))
*/