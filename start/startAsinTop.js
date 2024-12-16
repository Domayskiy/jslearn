"use strict;"

//отфильтровать массив false значения
const arrFil = [7, 'correct', 0, false, 9, NaN, '', null, undefined] ;

let res = arrFil.filter((el)=>!Boolean(el)) //[ 7, 'correct', 9 ]

// let res = arrFil.filter(Boolean) //[ 7, 'correct', 9 ]
// let res = arrFil.filter((el)=> {return !el} ) //[ 0, false, NaN, '', null, undefined ]
// let res = arrFil.filter((el)=> {return el} ) //[ 7, 'correct', 9 ]

console.log(res)

/*
let arrFil2=[];
for(let i=0; i<arrFil.length; i++){
    if(!!arrFil[i]){
        arrFil2.push(arrFil[i])
    }
}
console.log(arrFil2) // [ 7, 'correct', 9 ]


let nan = NaN;
console.log(!!nan)


// const numbers = [8, 16, 32, 64, 128]; numbers.length = numbers.length - 2  // [8, 16, 32]


//перевернуть строку
// let str = 'dcba';
// console.log([...str].reverse().join(''));
// console.log(str.split('').reverse().join(''));
// let res =[]; for(let i=str.length-1; i>=0; i--){res.push(str[i])};  console.log(res.join(''))
// let res  = str.slice(-1); console.log(res) // a


//Вторым аргументом map() может принимать значение, которое будет передано как контекст выполнения функции-колбэка:
// const nums = [1, 2, 3]
// const otherData = { delta: 5 }
// const transformed = nums.map(function (num) {
//   // this теперь ссылается на объект otherData
//   return num + this.delta
// }, otherData)
// console.log(transformed)
// [ 6, 7, 8 ]

// перевернуть массив или строку
// let arr4 = [1, 2, 3, 4, 5];
// console.log(arr4.reverse()) //[ 5, 4, 3, 2, 1 ]

// let res = [];  for(let i=arr4.length-1; i>=0; i--){res.push(arr4[i])};  console.log(res)

// let res2 = arr4.map(function(el, ind, arr){ return arr[arr.length-ind -1]}); console.log(res2)

// let res5 = [...arr4].map([].pop, arr4); console.log(res5)

// сортировка массива или объекта или строки

// let str = 'bac'
// let arr = str.split('').sort().join(''); console.log(arr) //abc
// let arr1= [...'bac'].sort().join(''); console.log(arr) //abc


// let items = ["réservé", "premier", "Cliché", "communiqué", "café", "adieu"];
// items.sort(function (a, b) {
//   return a.localeCompare(b);
// });console.log(items) // [ 'adieu', 'café', 'Cliché', 'communiqué', 'premier', 'réservé' ]
// let items1 = ["réservé", "premier", "Cliché", "communiqué", "café", "adieu"];
// items1.sort(); console.log(items1) // [ 'Cliché', 'adieu', 'café', 'communiqué', 'premier', 'réservé' ]

/*
var items = [
    { name: "Edward", value: 21 },
    { name: "Петя", value: 37 },
    { name: "and", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic"},
    { name: "Zeros", value: 37 },
    { name: "Вася", value: 37 },
];
// items.sort((a, b) => a.value - b.value); console.log(items)// сортир по value
items.sort((a, b) => a.name.localeCompare(b.name)); console.log(items) // сортир по name независимо от регистра 

//   items.sort(function (a, b) {
//     if (a.name > b.name) {
//       return 1;
//     }
//     if (a.name < b.name) {
//       return -1;
//     }
//     // a должно быть равным b
//     return 0;
//   });
  console.log(items)

/*
// сортировка массива или строки или объекта

//Если compareFunction(a, b) меньше 0, сортировка поставит a по меньшему индексу, чем b, то есть, a идёт первым.
// const arr = [33, 4, 555, 1, 101, 1030];
// console.log(arr.sort((a, b) => a - b)); //[ 1, 101, 1030, 33, 4, 555 ]

// сортировка строк
let arr3 = ['b', 'a', 'л', 'B', 'c', '1', '{}']
console.log(arr3.sort((el1, el2)=>el1.localeCompare(el2)));//['{}', '1', 'л', 'a', 'b', 'B','c']
// В Unicode, числа находятся перед буквами в верхнем регистре, а те, в свою очередь, перед буквами в нижнем регистре
let arr2 = ['b', 'a', 'л', 'B', 'c', '1', '{}'] //['1','B', 'a', 'b', 'c', '{}','л']
console.log(arr2.sort());

// const arr1 = [33, 4, 555, 1, 101, 1030]; //числа приобразуются в строки"80" идёт перед "9"
// console.log(arr1.sort());  //[ 1, 101, 1030, 33, 4, 555 ]





//сортировка массива метод пузириком
/*
const arr = [33, 4, 555, 1, 101, 1030];
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
        if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Меняем значения переменных
        }
    }
}
console.log(arr);


// ьаксимальный элемент массива
// const arr= [33, 4, 555, 1, 101, 1030];

// let num =0; arr.forEach(function(elem){num<elem? num=elem : num}); console.log(num)

// let max = arr.reduce(function(acc, el){if(el>acc){acc=el;} return acc}, arr[0]); console.log(max);
// let max2 = arr.reduce(function(acc, el){return  el>acc? acc=el : acc}, arr[0]); console.log(max2);

// let max = arr[0]; for(let elem of arr){if(elem>max){max=elem}}; console.log(max)

// arr.sort((x, y)=>x-y); let max = arr.pop(); console.log(max)

// arr.sort((x, y)=>x-y); let max = arr[arr.length-1]; console.log(max)

// let max2 = Math.max(...arr); console.log(max2)
// let max = Math.max.apply(null, arr); console.log(max)



// сумма массива
// const arr= [3, 4, 5, 1 ];
// let res = arr.reduce((acc, el)=> {return acc+ el}, 0)console.log(res)
// let sum=0;
// for(let el of arr){sum+=el}console.log(sum)
// for(let i = 0; i<arr.length ; i++){sum+=arr[i];}console.log(sum)



// let arr = 'abcd'
// console.log(arr.length)
// let str  = arr.split('').reverse().join('')
// console.log(str)
// // console.log(arr.reverse())
// let res=[]
// for(let i=arr.length-1; i>=0; i--){
//     res.push(arr[i]);
// }
// console.log(res)
// console.log(res.join(''))


/*
let arr1 = ['s', 'a', 'c', 'b', 'c']
let arr = [1, 6, 3, 9, 13]
// let res = arr.sort((a,b) => a-b)
// console.log(res)
// let unic = new Set(res)
// console.log(unic)
// const newArr = [...unic]
// console.log(newArr)
console.log([...new Set(arr1.sort())])

// console.log([...new Set(arr.sort((a,b) =>a-b))])


/*
first()
setTimeout(() =>
    console.log('!')
)
function first() {
    console.log('Выполнение первой функции')
    // Вызов второй функции, добавляется в стек
    second()
    console.log('Возврат в первую функцию после второй')
};
console.log('z')

function second() {
    console.log('Выполнение второй функции')
    // Вызов третьей функции, добавляется в стек
    third()
    console.log('Возврат во вторую функцию после третьей')
}

function third() {
    console.log('Выполнение третьей функции')
}
// Начало с первой функции

/*
// преобразовать массив в плоский массив
const arr1 = [1, [[2]], [[3,4]], 5]
console.log(arr1.flat(Infinity))

const arr = [1, [[2]], [[3,4]], 5]
let res=[]
function recur(arr){
    for(let el of arr){
        if(typeof el !== 'object'){
            // console.log(el)
            res.push(el);
        }else{recur(el)}
    }
}
recur(arr)
console.log(res)
/* 
// проверка на что нет повторяющихся символов в строке
let str = 'qwwerty'
let set = new Set(str);
set.size === str.length? console.log('ok'):console.log('no')
console.log(set.size)
*/

/*
const arr = [...str];
// console.log(rev);
let set = new Set(arr);
const res = [...set]
// res.length === str.length? console.log(true):console.log(false)
const rev = arr.reverse()
let big = rev.concat(res)
console.log(big)
for (let i = 0; i <= str.length; i++) {
    if (big[i] !== big[big.length - 1 - i]) {
        console.log(arr[i])
    } else {
        console.log('!')
    }
}

/*
if(res === str.length){
    console.log(true)
}else{console.log(false)}

/*
function isUnique(string){
    for(let i=0; i<string.length; i++){
        const char = string[i]
        if(string.lastIndexOf(char) !== i){
            return false;
        }
        return true
    }
}
console.log(isUnique('abcdef'))

/*
let arr = ['w', 1, 2, 'z', 3, 4, 'x'];
let fil = arr.reduce(function(acc, el){
    if(typeof el !== 'number'){
        // console.log(acc)

        return acc;
    }
    // console.log(acc)
    return acc +el;
}, 0)
console.log(fil)

/*
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => {console.log(response); return response.json()})
      .then(json => console.log(json))
      .catch(error => console.log(error))


*/

/*
// отфильтровать и найти сумму чисел в массиве REDUCE
let arr1 = ['w', 1, 2, 'z', 3, 4, 3, 'x'];
let fil1 = arr1.reduce(function(acc, el){
    if(typeof el === 'number'){
        console.log('z')

        return acc + el; // или acc += el;   или return acc += el;  
    }
    console.log('!')
    return acc; // обязательно иначе вернется undefined, тк если услов не выполняется нечего возвратить
}, 0)
console.log(fil1) //10
 
/*
let arr1 = [1, 2, 3 ]
let sum = arr1.reduce(function(acc, el){
    return acc + el
}) 
console.log(sum) //6






/*
class NumbersArray extends Array {
    sum() {
        return this.reduce((acc, el)=>acc+el, 0)
    }
}
const myArray = new NumbersArray (2,5, 7)
console.log(myArray)
console.log(myArray.sum())
const arr = myArray
arr[0] = 13
console.log(arr.sum())
console.log(arr.__proto__)

/*
const arr = [[2], [[3]], 'x'];
const isFlat = arr.flat(Infinity);
console.log(isFlat);
let sum = isFlat.filter(function(el){
        if(typeof el ==  'number'){return el;}
    }).reduce((acc, el)=>acc+el)
console.log(sum);


/*
// let sum = 0;
// for(let el of isFlat){
//     if(typeof el === 'number'){
//         sum+=el}

// }
let sum = 0
isFlat.forEach(function(el){
    if(Object.prototype.toString.call(el) == '[object Number]'){
        sum+=el;
    }
    console.log(Object.prototype.toString.call(el))

})
console.log(sum)
console.log(isFlat)
/*
let elem = document.querySelector('div#inst');
let elems = elem.children;

console.dir(elems);


/*
// таймер двумя способами. с двумя кнопками(ютуб) и с тремя кнопками(сам)
//<div id="div33">текст</div> 
let div33 = document.querySelector('#div33')
let createTimerButtonEl = document.createElement('button');
createTimerButtonEl.textContent = 'Создать таймер';
// let goTimerButton = document.createElement('button');
// goTimerButton.textContent = 'продолжить таймер'

function createTimer(count){
    let isPause = false;
    let countEl = document.createElement('span');
    countEl.textContent = count;

    let PauseButtonEl = document.createElement('button');
    PauseButtonEl.textContent = 'Пауза';

    PauseButtonEl.addEventListener('click', function(){        
        isPause = !isPause;
        if(isPause){
            PauseButtonEl.textContent = 'Воспроизвести';
        }else{
            PauseButtonEl.textContent = 'Пауза';
        }
    });
    // function func(){
        let timer = setInterval(function(){
            countEl.textContent = count;
            if(count === 0){clearInterval(timer); return;}
            if(isPause){return;}
            count--;
        }, 1000);
        // PauseButtonEl.addEventListener('click', function(){clearInterval(timer);});
        //goTimerButton.addEventListener('click', function(){func()})
    // };
    // func()
    div33.append(countEl, PauseButtonEl)// надо  div33.append(countEl, PauseButtonEl, goTimerButton) 
}

createTimerButtonEl.addEventListener('click', function(){
    let count = Number(prompt('Введите количество секунд'));
    createTimer(count);
});
div33.append(createTimerButtonEl)
// document.body.prepend(createTimerButtonEl)


/*
let arr = [1, [2,3],[[4,5]], 6];
let res = [];
function val(arr){
    for(let el of arr){
        if(typeof el!= 'object'){
            res.push(el);
            // console.log(el)  // 1 2 3 4 5 6
        }else{
            val(el)
        }
    }
}
val(arr)
console.log(res);  //(6) [1, 2, 3, 4, 5, 6]

/*
let arr = ['qwer']
console.log(...arr) //qwer
for(let el of arr){
    console.log(el.split('')[1]) //w

    console.log(...el[1]) //w
}

//Выведите в консоль имя, должность и отдел для созданного работника. Рекурсией сделал или через for
function val(objs){
    for(let obj of objs){
        if(typeof obj != 'object'){
            console.log(obj)        // and jonior  js
        //     for(let key in obj){
        //         console.log(obj[key]); 
          }else{
            val(Object.values(obj));
          }
        // }else{
            // console.log(obj);
        // }
    }
}
val(Object.values(emp))

// console.log(emp.position);
// console.log(emp.department.otdel);



/*

let user = new User
user.name = 'john'
console.log(user.age)


/*
let arr = ["t", "e", "s", "t"];

let res = arr.slice(1, 2); 
console.log(res)
console.log(arr)
let res1 = arr.splice(1, 2); 
console.log(res1)
console.log(arr)


// console.log( arr.slice(-2) ); // s,t (копирует с -2 до конца)


/*
div33.insertAdjacentHTML('afterBegin', '<p>Привет</p>');
div33.insertAdjacentHTML('beforeEnd', '<p>Пока</p>');


/*
let arr = [1, 2 ,3]
let res = arr.findMax()

// let res = Math.max.apply(null, arr)

// let res = arr.reduce(function(prev, item) { return Math.max(prev, item) })
console.log(res)
/*
arr.findMax()


/*
const obj1 = Object.values(obj)
const obj2 = Object.keys(obj)
console.log(obj1)
console.log(obj2)

console.log(-(-5))


/*
let s = [3,4]
let a = Array(1,2);
let arr=[]
a.forEach(el=>{arr.push(el); })
arr.push('x', 333)
console.log(arr)
console.log(a);
let ss = s.map((el)=>{return el+3})
console.log(ss)
console.log(s)


/*
let n ='And';
const city = "Msk";
console.log(`меня зовут ${n} и я живу v ${city}`)


console.log(typeof(null))
/*
const box = {width: '200px', height: '300px'}
const tex = {color: 'red'};
const plan = {...tex, ...box};
console.log([plan, {sal:'$'}]);
console.table([plan, {sal:'$'}]);


// const {b, ...obj} = {a:1, b:2, c:3};
// console.log(b, obj)
/*
const {age, name, sal} = {
    age: 47,
    name: 'and',
    sal: 'good'
}
console.log(age, name, sal)

/*
// alert( 20e-1['toString'](2) )
let name = "Вася";
function sayHi() {
  alert(name);
}

setTimeout(function() {
  let name = "Петя";
  sayHi(name);
}, 1000);
/*
const a=5;
function myFn(){
    function innerFn(){
        console.log(a)
    };
    innerFn()
}
console.log(myFn())


/*
let arr = {
    name: 'qwe',
    more: {
        age: 25,
        sal: 'good'
    }
}
const arr2 = structuredClone(arr);
arr2.more.age = 47
console.log(arr.more)

console.log(arr2.more)

/*
const obj1 = {salary: 1000, name: 'andr'}
console.log(obj1)

let obj2 = obj1
console.log(obj2)

obj2.age = 47;
console.log(obj1)

obj1.salary = 2000
console.log(obj1)
console.log(obj2)

/*
let btn = document.querySelector('.btn')
let zel = document.querySelector('.zelkv')
btn.addEventListener('click', function(){
    let h = window.document.createElement('H1');
    h.textContent= 'QWRG'
    zel.append(h)
    // zel.textContent = zel.textContent + "V"

})


/*
let str = '1 22 333 4444 22 5555 1'
let arr = str.split(' ')
let res2=arr.map(function(elem){if(elem.length<=3){return elem}})
console.log(res2)
let res1 = arr.filter(function(el){return el.length<=3})
console.log(res1)
let res=[]
arr.forEach(function(el){if(el.length<=3){res.push(el);}})
console.log(res)   
// console.log(arr)


function getSmth(num) {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(num * num), 1000)
	});
}

async function func(params) {
    let res1 = await getSmth(2);
    let res2 = await getSmth(3);
    let res3 = await getSmth(4);
    console.log(res1+res2+res3)
}
func()

/*
function func() {
	getSmth(2).then(res1 => {
		getSmth(3).then(res2 => {
			getSmth(4).then(res3 => {
				console.log(res1 + res2 + res3);
			});
		});
	});
}

func();

/*
function func(num1, num2) {
	return new Promise(function(resolve) {
		setTimeout(function() {
			resolve(Math.floor(Math.random() * (num2 - num1 + 1)) + num1)
		}, 1000);
	});
}

func(1, 5).then(function(res) {
	console.log(res); // выведет 25
});


//Сделайте функцию, возвращающую промис, внутри которого установлена случайная задержка от 1 до 10 секунд. Пусть своим результатом промис возвращает эту задержку. С помощью цикла и вашей функции заполните массив 10-ю промисами.

/*
let promises = new Promise(function(resolve, reject){
        setTimeout(function(){
            let arr=[];
            for(let i=0; i<10; i++){
                function getRandomInt(min, max) {
                    return Math.floor(Math.random() *(max - min + 1)) + min;
                }
                let randomInt = getRandomInt(1, 10);
                arr.push(randomInt);
                resolve(arr)
            }    
        }, 1000)
})
promise.then(function(res){
    console.log(res)
})



/*
let promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        function getRandomInt(min, max) {
            return Math.floor(Math.random() *(max - min + 1)) + min;
        }
        let randomInt = getRandomInt(0, 5);
        if(randomInt!==0){
            resolve(1/randomInt)
        }else{reject(new Error ("ошибка деления на ноль"))};
        console.log(randomInt)
    }, 1000)
})
promise.then(function(res){
    return res + ' X'
}).then(function(res){
    return res + ' Y'
}).then(function(res){
    console.log(res)
}).catch(function(error){
    console.log(error); console.log(new Date().getDate())
})
// promise.catch(function(error){console.log(error); console.log('xxx');})// выводим только исключит ситуацию



/*
let promise = new Promise(function(resolve){
    setTimeout(function(){
        resolve('string')
    }, 1000)
})
promise.then(
	function(res) {
		return res+' X';
	}
).then(function(res){return res + ' Y'}
).then(function(res){console.log(res)})

/*
let promise = new Promise(function(resolve, reject) {
	setTimeout(function() {
		let isError = false; // поставьте либо true, либо false
		
		if (!isError) {
			resolve([1, 2, 3, 4, 5]);
		} else {
			reject('error in promise');
		}
	}, 3000);
}); 

setInterval(function() {
	console.log(promise); // каждую секунду выводим промис в консоль
}, 1000);

/*
let promise = new Promise(function(resolve, reject) {
	setTimeout(function() {
		let isError = false;
		
		if (!isError) {
			resolve('success');
		} else {
            reject('error in promise')
			// reject(new Error('error in promise')); // объект с ошибкой
            // throw new Error('error in promise'); // эквивалентно reject
		}
        console.log('!')

	}, 3000);
});
promise.then(function(result) {
	console.log(result); // выведет результат промиса
}, function(error) {
	console.log(error);  // выведет текст ошибки
});
*/

/*
//Сделайте асинхронный код, который будет генерировать случайные числа от 0 до 5. Оберните все это в промис. Пусть промис своим результатом возвращает результат деления единицы на сгенерированное число. Пусть промис выполнится с ошибкой, если произошло деление на ноль, и с успехом во всех остальных случаях.
let promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        function getRandomInt(min, max) {
            return Math.floor(Math.random() *(max - min + 1)) + min;
        }
        let randomInt = getRandomInt(0, 5);
        if(randomInt!==0){
            resolve(1/randomInt)
        }else{reject(new Error ("ошибка деления на ноль"))};
        console.log(randomInt)
    }, 1000)
})
promise.then(function(res){
    console.log(res); console.log(promise);
}, function(error){console.log(error);console.log(promise);
})
console.log(promise)
// promise.catch(function(error){console.log(error); console.log('xxx');})// выводим только исключит ситуацию
*/
/*
let promise = new Promise(function(resolve) {
	setTimeout(function() {
		let res = [1, 2, 3, 4, 5];
        let str = "качаю промисы";
        resolve(str)
	}, 3000);
});
promise.then(function(result) {
	console.log(result); // выведет массив с результатом
});

/*
function prom(callback){
    setTimeout(function(){
        let str = "качаю промисы"
        // alert(str)
        callback(str)
    }, 2000);
    
}
prom(function(elem){console.log(elem)})

/*
//Допишите код коллбэка так, чтобы он находил сумму элементов массива с результатом.
function make(callback) {
	setTimeout(function() {
		let res = [1, 2, 3, 4, 5];
        let sum = res.reduce(function(el, acc){return acc + el}, 0);
        let map = res.map(function(el){return el+el;})
		callback(sum); // передаем результат параметром
	}, 2000);
}
make(function(elem) {
	console.log(elem); // наш массив
});
make(function() {
	console.log('2');
	console.log('3');
});

  
/*
function make(callback) {
	setTimeout(function() {
		console.log('1');
		callback();
	}, 3000);
}

make(function() {
	console.log('2');
	console.log('3');
});


try{
    function make(callback) {
		console.log('1'); // некая асинхронная операция, может не одна
		callback();       // затем наш коллбэк
            
    }
    make(function() {
        console.log('22');
        console.log('33');
    });
    


}catch(err){
    if(err.name=='TypeError'){
        console.log("!!!!")
    }
}
console.log(777)
*/


