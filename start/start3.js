"use strict";
//подключен к проба2.html



let date = new Date(2024, 5, 12, 23, 59, 59);
console.log(date.getTime())

/*
let date = new Date(2025, 5, 13);
let day  = date.getDay();
let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
console.log(days[day]);

/*
//Выведите с помощью этого массива название текущего месяца
let months = [
	'янв', 'фев', 'мар', 'апр', 'май', 'июн',
	'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
];
let date= (new Date()).getMonth();
console.log(months[date])

/*
let date = (new Date());
console.log(date.getHours() + ':' + addZero(date.getMinutes()) + ' ' +  date.getDate() +'-' + addZero(date.getMonth() + 1) +'-' + date.getFullYear());
function addZero(num){
    if(num>=0 && num<=9){
        return '0' + num
    }else{return num}
}


/*
function func() {
	return (new Date).getFullYear() + ' : ' + (new Date).getMonth()
};console.log(func())

/*
let result = unite([1, 2, 3], [4, 5, 6], [7, 8, 9]);
console.log(result);
function unite(...arrs) {
	return [...arr1].concat(...arrs);
}

/*
//функцию, которая будет принимать параметрами произвольное количество чисел и возвращать их среднее арифметич
let res= func(1, 2, 3, 4, 5)
function func( ...nums){
    let sum =0;
    for(let elem of nums){
        sum+=elem
    };return sum/nums.length;
}console.log(res)


/*
//Оставьте в нем только те числа, произведение которых на их порядковый номер меньше 30.
let arr= [1, 2, [3, 4], 5, [6, 7]];
let result = arr.filter(function(elem, index){
    if(elem = elem[1]){
        return true
    }else{return false}
}
); console.log(result)



/*
//Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов
let str=['aaa', '12345', 'zzzzzz', 12345]
let res= str.filter(elem => elem.length>=5);console.log(res) //['12345', 'zzzzzz']

/*
//Дан массив с числами. Оставьте в нем только положительные числа.
let arr = [-2, 5, 1, -5, -1, 1, 3, 4, -1, 0, 13, 10];
let res= arr.filter(function(elem){
    return elem>=0 && elem <= 10
});
console.log(res);

/*
//Используя метод forEach найдите сумму квадратов элементов этого массива.
let arr=[1, 2, 3]
let sum=0;
arr.forEach(function(num){
    sum+=Math.pow(num, 2)
});console.log(sum)



/*
//применим метод map к каждому подмассиву и возведем каждый его элемент в квадрат:
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
//let isi =[]
let result = arr.map(function(elem){
    return elem.map(function (num){
        return num*num
        //return isi.push(num)
    })
}); console.log(result)
//console.log(isi)

/*
//Используя метод map преобразуйте этот массив в следующий
let arr = ['123', '456', '789']
let res= arr.map(function(elem){
    return elem.split('')
});console.log(res)

/*
//Используя метод map переверните символы каждой строки в обратном порядке.
let str= ['andrei', 'vorobei']
let res= str.map(function(elem){ return elem.split('').reverse().join('')}); console.log(res)

/*
//Используя метод map в конец значению каждого элемента массива добавьте символ '!'.
let arr=[1, 'a', 2, 'b']
arr= arr.map(function(elem){return elem + '!'})
console.log(arr)

/*
//Используя метод map извлеките из каждого элемента массива квадратный корень и запишите результат в новый массив
let arr=[1, 2, 3, 4]
let res= arr.map(function(elem){return Math.sqrt(elem).toFixed(2)})
console.log(res)


/*
//С помощью рекурсии слейте элементы этого массива в одну строку:  'abcdefgjk'
function getStr(arr){
    let newArr=[];
    for (let elem of arr){
        if(typeof elem == 'object'){
            newArr.push(getStr(elem));
        }else{newArr.push(elem)}
    };
    return newArr.join('')
};
console.log(getStr(['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]]))


/*
//С помощью рекурсии найдите сумму элементов этого объекта
function getSum(obj, sum){
    for(let key in obj){
        if(typeof obj[key]!='object'){
            sum+=obj[key];
        }else{sum+=getSum(obj[key], 0)}
    };
    console.log(sum);
    return sum
};
console.log(getSum({a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}, 0))

/*
//С помощью рекурсии найдите сумму элементов этого объекта
function getSum(obj, sum){
    let sum=0
    for(let key in obj){
        if(typeof obj[key]=='object'){
            sum+=getSum(obj[key]);
        }else{sum+=obj[key]}
    };
    console.log(sum);
    return sum
};
console.log(getSum({a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}, ))

/*
//развернет наш многомерный массив в одномерный. [1, 2, 7, 8, 3, 4, 5, 6, 7]
let newArr=[]
function funcRecurs(arr){
    for(let elem of arr){
        if(typeof elem== 'object'){
            funcRecurs(elem);
        }else{newArr.push(elem); }
    }return newArr
};console.log(funcRecurs([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]))

/*
//С помощью рекурсии выведите все примитивные элементы этого объекта в консоль
function func(obj){
    for(let key in obj){
        if(typeof obj[key]=='object'){
            func(obj[key]);
        }else{console.log(obj[key])
        }
    }
}
func({a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}})

/*
function func(arr) {
	for (let elem of arr) {
        if(typeof elem=='object'){
            func(elem)
        }else{console.log(elem);}
	}
};
func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]])

/*
//С помощью рекурсии найдите сумму квадратов элементов этого массива
let arr1 = [6, 2, 3, 4, 5];
function getPowSum(arr){
    let sum=Math.pow(arr.shift(), 2);
    if(arr.length!=0){
        sum+=getPowSum(arr)
    };console.log(sum)
    return sum;
}console.log(getPowSum(arr1))


/*
let arr1 = [1, 2, 3, 4, 5];
function getSum(arr){
    let sum= arr.shift();
    if(arr.length!=0){
        sum= sum+ getSum(arr)
    };
    return sum
}console.log(getSum(arr1))


/*
function func(){
    let elem=arr.pop();
    console.log(elem, arr);

    if(arr.length !=0){
        func()
    };
};func(arr)


/*
function func(arr) {
	console.log(arr.shift(), arr);
	
	if (arr.length != 0) {
		func(arr);
	}
}

func([1, 2, 3]);


/*
//Модифицируйте работу счетчика так, чтобы он считал до 5, а потом отсчет начинался сначала.
let res=(function func(){
    let num=0;
    return function(){
        if(num<3){
            num++;
            console.log(num)
        }else{num=1; console.log(num)};
    }
})();
res();
res();
res();
res();
res();
res();
res()

/*
//Пусть функция в замыкании хранит число 10. Сделайте так, чтобы каждый вызов функции уменьшал это число на 1 и выводил в консоль уменьшенное число.чтобы отсчет доходил до 0, а затем каждый последующий вызов функции выводил в консоль сообщение о том, что отсчет окончен.
function test() {
	let num = 2;
	return function() {
        if(num>=0){ 
            console.log(num);
            num--;
        }else{
            console.log('zzzz');
        }
	};
};
let func1 = test(); // первый счетчик
func1(); func1(); func1(); func1(); func1(); 



/*
function test() {
	return function() {
		console.log(num);
	}
}

let num = 1; // глобальная переменная
test();
*/
