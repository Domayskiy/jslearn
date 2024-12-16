"use strict";
/*
//Деструктуризация позволяет нам получать текст и значения атрибутов DOM прямо в цикле. Давайте разберемся, как это работает. Пусть у нас есть следующие абзацы:
let elems = document.querySelectorAll('#parenter1 p')

for (let [key, elem] of elems.entries()) {
	console.log(key,elem);
}

for (let [key, {id, textContent}] of elems.entries()){
	console.log(key, id, textContent);
}

/*
let elems = document.querySelectorAll('#parenter p')
// for(let el in elems) console.log(el)
for (let entry of elems.entries()) {console.log(entry);}
for (let [num, elem] of elems.entries()) {
	console.log(num, elem);
}
/*
//Дано число. Найдите сумму его цифр 3 способа и можно еще и циклом
let num =123459
let str = String(num);
// let result = [...str].reduce(function(acc, next){return acc + Number(next)}, 0)
// console.log(result)
let sum=0;
let res = [...str].map(function(el){ return sum+=Number(el);})
console.log(res.pop())
console.log(res[res.length-1])
// [...str].forEach(function(el){sum+=Number(el)})
// for(let el of str){sum+=Number(el)};
// console.log(sum)



/*
//                              4 способа

//Давайте получим массив цифр числа. Пусть дано следующее число: 
let num =123459
let str=String(num)
let res = [];
[...str].forEach(function(el){res.push(Number(el));})
console.log(res)
/*
let res = [...str].map(function(el){return Number(el)})
console.log(res)
/*
let result = [...str].reduce(function(res, next){
    res.push(Number(next)); return res
}, []);
console.log(result)
/*
let res = [];
for(let el of str){el=Number(el);res.push(el)};console.log(res)


/*
//Перебирите циклом цифры этого числа и найдите их сумму
let str = '12345'
let res = [...str].reduce(function(acc, num){return acc+Number(num)},0);
console.log(res)

/*
//Оператор spread разлагает любой объект, у которого есть итератор. При этом будет браться итератор по умолчанию. Давайте посмотрим на примере. Пусть у нас есть следующая коллекция Map:
let map = new Map();
map.set('a', 1);
map.set('b', 2);
map.set('c', 3);
let arr = [...map];
console.log(arr); // [['a', 1], ['b', 2], ['c', 3]]
/*
//Разложите спредом следующий объект
let obj = {
	a: 1,
	b: 2,
	c: 3,
	[Symbol.iterator]: function *(){
		for (let key in this){
			yield `${key}: ${obj[key]}`;
		}
	}
};
let res = [...obj];
console.log(res)


/*
//Три встроенных итератора в JavaScript
//На самом деле каждый итерируемый объект содержит не один итератор, а три: values, keys и entries. Для каждого типа объектов по умолчанию применяется свой итератор. Для массивов - это values, а, например, для коллекции Map, это entries

let set = new Set(['w', '88', 'q', 1]);
set.add('q')
let iter = Array.from(set)
for (let elem of iter.keys()) {
	console.log(elem); // 0, 1,2,3
}

/*
// let map = new Map([['a', 1], ['b', 2]]);
let map = new Map();
map.set('a', 1);
map.set('b', 2);
map.set('c', 3);
//По умолчанию для этой коллекции применяется итератор entries:

for (let elem of map) {
	console.log(elem); // ['a', 1], ['b', 2], ['c', 3]
}
//Но мы легко можем получить ключи нашей коллекции:

for (let elem of map.keys()) {
	console.log(elem); // 'a', 'b', 'c'
}
//Также можем получить и значения:

for (let elem of map.values()) {
	console.log(elem); // 1, 2, 3
}




/*
let map = new Map();
map.set('a', 1);
map.set('b', 2);
map.set('c', 3);
for (let elem of map) {
	console.log(elem); // ['a', 1], ['b', 2], ['c', 3]
}

/*
let arr= [1, 'q', '33']
let set = new Set(arr);
// set.add(arr)
let iter = [...set]
// console.log(iter)
for(let el of iter.entries()){
    console.log(el)

}
*/

/*
let recipeMap = new Map([
    ["огурец", 500],
    ["помидор", 350],
    ["лук",    50]
]);
  
// перебор по ключам (овощи)
for (let vegetable of recipeMap.keys()) {
    console.log(vegetable); // огурец, помидор, лук
}


/*
//Сделайте объект, который можно перебрать циклом for-of. Пусть в элемент цикла попадает объект, в ключе key которого будет ключ перебираемого объекта, а в ключе val - значение{key: 'a', val: 1}
let obj = {a: 1, b: 2, c: 3};
obj[Symbol.iterator] = function *(){
    let map = new Map();
	for (let key in this) {
        //  yield `key: ${key}, val: ${obj[key]}` это работает  но как строка

        // let res = {'key': key, 'val': obj[key]}
		// yield res;               // первый вариант решения

        map.set('key', key);
        map.set('val', obj[key])
        let res = Object.fromEntries(map);
        yield res;                  // с мар тоже все работает. это второй вариант
	}
}
for(let el of obj){console.log(el)} //{key: 'a', val: 1}{key: 'b', val: 2}{key: 'c', val: 3}

/*
//Сделайте итератор, который будет перебирать объект и каждым вызовом возвращать массив, в нулевом элементе которого будет лежать ключ, а в первом элементе - значение элемента объекта.// ['a', 1], ['b', 2], ['c', 3]
let iter = func({a: 1, b: 2, c: 3});
function* func(obj){
    for(let key in obj){
        yield [key, obj[key]];
        yield key + obj[key]
    }
}
console.log(iter.next().value)
console.log(iter.next().value)
console.log(iter.next().value)



/*
for(let elem of iter){
    console.log(elem)
}


/*
function *func() {
	for (let i = 1; i <= 3; i++) {
		yield i;
	}
}
// let elems = func();
console.log(func().next().value)

for (let elem of func()) {
	console.log(elem);
}


/*
//Сделайте итератор, каждый вызов которого будет возвращать следующую степень двойки.
//Сделайте генератор, который параметром будет принимать число. Пусть каждый вызов итератора уменьшает число в два раза и возвращает результат. И так, пока число не станет меньше единицы.
//Создайте итератор, каждый вызов которого будет возвращать числа от 10 до нуля.
// function* generator(){for(let i=1; i<=5; i++){ yield 2**i;}}
//function* generator(){for(let i=10; i>=0; i=i/2){console.log(i); yield i}}
function* generator(){for(let i=10; i>=0; i--){ yield i}}
let iter = generator();
generator()
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())

/*
function* generator(start, end){for(let i=start; i>=end; i--){yield i; console.log(i)}}
let res = [...generator(10, 0)];
console.log(res)

/*
//Создайте итератор, каждый вызов которого будет возвращать числа от 5 до 3.
function* func(){
    yield 5;
    yield 4;
    yield 3;
}
let iter = func().next().value;
console.log(iter)
/*
let iter = func();
console.log(iter.next().value)
console.log(iter.next().value)
/*
function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) {
      yield i;
      console.log(i)
    }
}
// Используем оператор … для преобразования итерируемого объекта в массив
// let sequence = [...generateSequence(2,5)];
let sequence = Array.from(generateSequence(2,5));
console.log(sequence); // [2, 3, 4, 5]


/*
//Получите итератор коллекции Map. Последовательно вызывайте его, пока элементы коллекции не закончатся.
let map = new Map([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
]);
console.log(map.entries())
let iter = map[Symbol.iterator]()
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())

/*
let arr = ['q', 1, '2']
let a ='and'
let map = new Map();
map.set(arr, a)
console.log(map.entries())
let iter = map.keys()[Symbol.iterator]()
console.log(iter.next().value)
console.log(iter.next())

/*
map.set("age", "38");
map.set("banana", "100");
// console.log(map.keys())
let iter = map.keys()[Symbol.iterator]()
console.log(iter.next().value)
console.log(iter.next())
console.log(iter.next())



/*
let bool = Boolean
let obg = {'q': 1, b: 'w'}
let num = 1234
let str = 'qwer'
let arr = [5, 2, 3];
let func = arr[Symbol.iterator];
console.log(func);
let iter = arr[Symbol.iterator]()

console.log(iter.next().value)
// 'Hello'
console.log(iter.next().value)
// 'world'
console.log(iter.next().done)
// true



/*
console.log( iter.next() ); // {value: 1, done: false}
console.log( iter.next() ); // {value: 1, done: false}
console.log( iter.next() ); // {value: 2, done: false}
console.log( iter.next() ); // {value: 3, done: false}
/*
let arr = [1, 2, 3];
let sym1 = Symbol('test1');

sym1 = Symbol.for('test1');
arr.push(sym1)
console.log(arr)

/*
//у вас есть несколько объектов. Добавьте каждому из них ключ в виде символа с именем 'sum'. Сделайте в этом ключе функцию, которая будет возвращать сумму элементов объекта.
let obj = {a: 1, b: 2, c: 3};
let obj22 = {a: 5, b: 5, c: 5};
let sym = Symbol.for('sum значений')
function func3(obj){
    let sum = 0;
    for(let key in obj){
        sum+=obj[key];
    };
    return sum
}
obj[sym]=func3(obj)
console.log(obj)
obj22[sym]=func3(obj22)
console.log(obj22)



/*
function func1() {
	let sym = Symbol.for('test');
	return sym;
}
function func2() {
	let sym = Symbol.for('test');
	return sym;
}
let sym1 = func1();
let sym2 = func2();

console.log(sym1===sym2); // true

/*
//Описанным в уроке способом добавьте в массив функцию, которая будет возвращать сумму элементов массива.
let arr = [1, 2, 3];
arr.push(4, 5, 'px')
let sym = Symbol();
sym = function (){
    let sum = 0;
    for(let el of arr){
        sum+=el
    };
    console.log(sum)
    return sum
}
arr.push(sym())
console.log(arr)


// console.log(sym())
/*
let res = arr.concat(sym())
console.log(res)

/*
//Добавьте в объект функцию, которая будет выводить текущее время. Вызовите эту функцию.
let sym = Symbol('здесь время');
let obj = {a: 1, b: 2, c: 3};
let a = function(){
    let date = new Date();
    sym = date.getHours() + ':' + date.getMinutes()
    console.log(sym);
}
obj[sym] = a
obj[sym]()
console.log(obj)
/*
obj[sym] = function(){
    let date = new Date();
    sym = date.getHours() + ':' + date.getMinutes()
    console.log(sym);
}
obj[sym]();
console.log(obj)

// console.log(arr.concat(a, 7, 'a', obj))
/*
let obj = {a: 1, b: 2, c: 3};

let sym = Symbol('здесь текст');
let sym2 = Symbol()

obj[sym2] = 'text123';

obj[sym] = 'text';
obj[sym] = function() {
	console.log('!!!');
};
let func = obj[sym];
func();
/*
for(let key in obj){
    console.log(key)
}
console.log(obj)

/*
// let arr = ['q', 1, 'w', 2]
// let res = arr.slice(1, -1)
console.log(['q', 1, 'w', 2].slice(1, -1))

/*
//С помощью метода slice получите все абзацы, кроме первого и последнего.
let elemsP = document.querySelectorAll('.Mapa');
let res = Array.from(elemsP).slice(1, -1)
// res.forEach(function(elem){console.log(elem.textContent)})
// res.map(function(elem){console.log(elem.textContent)})
let arr = res.map(function(elem){return elem.textContent})
console.log(arr)

/*
function aclean(arr) {
    let obj = {};
  
    for (let i = 0; i < arr.length; i++) {
      let sorted = arr[i].toLowerCase().split("").sort().join("");
      obj[sorted] = arr[i];
        console.log(obj)
    }
  
    return Object.values(obj);
}
  
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  
console.log( aclean(arr) );



/*
function unique(arr) {
    let set = new Set(arr);
    console.log(set)
    return [...set];
}
let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
  
alert( unique(values) ); // Hare,Krishna,:-O


//Пусть пользователь кликает на эти абзацы в произвольном порядке. Давайте сделаем так, чтобы по нажатию на кнопку в конец каждого абзаца, на который был совершен клик, был добавлен восклицательный знак. Решим задачу через Set.
//Из-за того, что мы используем коллекцию Set повторный клик на абзац не будет приводить к добавлению дубля абзаца.
/*
let elemsP = document.querySelectorAll('p');
let btn = document.querySelector('button');
let set = new Set;
for(let el of elemsP){
    el.addEventListener('click', function(){
        set.add(this);
    })
}
btn.addEventListener('click', function cl(){
    for(let elem of set){elem.textContent= elem.textContent + "!"};
    this.removeEventListener('click', cl)
})

//          второй способ чере ивент таргет но работает чуть по другому   два раза нажал на элем  - два !!
/*
let elemsP = document.querySelectorAll('p');
let btn = document.querySelector('button');
let arrEv=[]
for(let el of elemsP){
    el.addEventListener('click', function(event){
        arrEv.push(event.target);
    })
}
btn.addEventListener('click', function(){
    for(let elem of arrEv){
        elem.textContent= elem.textContent + "!"
    }
})



/*
//Напишите функцию, которая параметром будет принимать массив и возвращать этот массив без дублей.
function getnotDouble(arr){
    return [...new Set(arr)]
};
console.log(getnotDouble([1, 2, 'a', 2, 'a', 'b']))
/*
let arr = [1, 2, 3, 3, 2];
/*
let set = new Set(arr);
let res = [...set]
console.log(res)


/*
let set = new Set([1, 2, 3]);
console.log(set)
let sum =0
set.forEach((value)=>{sum+=value})
console.log(sum)
for (let value of set) console.log(value);
/*
let map = new Map();

map.set("name", "John");
let mapsK = map.set("age", "38");
console.log(mapsK)
for(let m of mapsK){
    console.log(m)1
}

// console.log(map.keys())

let keys = Array.from(map.keys());
// console.log(keys)

// keys.push("more");

// console.log(keys); // name, more

/*
let inpM = document.getElementsByClassName('ModulMap');
let map = new Map;
let i = 1;
for (let inp of inpM) {
    inp.addEventListener('keypress', function(event){
        if(event.code==='Enter'){
            map.set(i++, inp.value);
            inp.value="";
            console.log(map.entries());
            console.log(map.get(1));

        }
    })
    
    // inp.addEventListener('click', function() {
    // console.log(map.values())
    // });
    
}

*/
// так мне нравится больше
//Даны инпуты. В каждый инпут можно ввести число. Пусть по нажатию на Enter инпут запоминает введенное число. Сделайте так, чтобы по потери фокуса в инпуте в консоль выводился массив всех введенных ранее в инпут чисел.
/*
let res = [];
let inpM = document.getElementsByClassName('ModulMap');
console.log(inpM)
for(let inp of inpM){
    inp.addEventListener('keypress', function(event){
        if(event.code==='Enter'){
            res.push(inp.value);
        }
    });
};
inpM[2].addEventListener('blur', function(){
    console.log(res)
})

/*
//Даны инпуты. Переберите эти инпуты циклом и создайте коллекцию Map, ключами в которой будут инпуты, а значением - их порядковый номер на странице. Сделайте так, чтобы по клику на любой инпут ему в value записывался его порядковый номер.<input id="ModulMap" value="результат">
let inpM = document.getElementsByClassName('ModulMap')
let mapInp = new Map;
let i =1;
[...inpM].forEach(function(elem){
    mapInp.set(elem, i++);
    elem.addEventListener('click', function(event){
        event.target.value+=mapInp.get(this)
    });
})
*/


//                          Применение коллекций Map

//Мы можем использовать Object.fromEntries, чтобы получить обычный объект из Map.
//К примеру, у нас данные в Map, но их нужно передать в сторонний код, который ожидает обычный объект.
/*
let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);
let obj = Object.fromEntries(map.entries()); // создаём обычный объект (*)
// готово!
// obj = { banana: 1, orange: 2, meat: 4 }
alert(obj.orange); // 2


//Есть метод Object.fromEntries, который делает противоположное: получив массив пар вида [ключ, значение], он создаёт из них объект:
/*
let prices = Object.fromEntries([
  ['banana', 1],
  ['orange', 2],
  ['meat', 4]
]);
//prices = { banana: 1, orange: 2, meat: 4 }
console.log(prices.orange); // 2

//Если у нас уже есть обычный объект, и мы хотели бы создать Map из него, то поможет встроенный метод Object.entries(obj), который получает объект и возвращает массив пар ключ-значение для него, как раз в этом формате.
//Здесь Object.entries возвращает массив пар ключ-значение: [ ["name","John"], ["age", 30] ]. Это именно то, что нужно для создания Map.
/*
let obj = {
    name: "John",
    age: 30
    };
let map = new Map(Object.entries(obj));
console.log( map.get('name') ); // John




//При создании Map мы можем указать массив (или другой итерируемый объект) с парами ключ-значение для инициализации, как здесь
/ массив пар [ключ, значение]
let map = new Map([
  ['1',  'str1'],
  [1,    'num1'],
  [true, 'bool1']
]);
alert( map.get('1') ); // str1


/*
let elems = document.querySelectorAll('.Mapa'); //<p class="Mapa">aaa</p> <p class="Mapa">bbb</p>
let map = new Map;
let i = 1;
for (let elem of elems) {
	map.set(elem, i++);
    elem.addEventListener('click', function() {
		this.textContent += map.get(this);
	});
}

//                          дуструктуризация и перебор пяти Абзацев(p) с классом .Мара

/*
let arr=['1']
let res1 = arr.concat('2', ...elems)
console.log(res1)
/*
let res = [].concat('1', ...elems)
console.log(res)
/*
for(let el of elems){
    arr.push(el)
}
console.log(arr)
/*
arrIzP = [...elems]
console.log(arrIzP)
/*
for(let i=1; i<=arrIzP.length;i++){
    arrIzP[i-1].textContent=arrIzP[i-1].textContent  + i
}
/*
for(let el in arr){
    arrIzP[el].textContent=arrIzP[el].textContent  + i
    // console.log(el.textContent)
}



/*
//Пусть дана коллекция Map. Получите массив ее ключей и переберите их циклом for-of
let recipeMap = new Map([
    ["огурец", 500],
    ["помидор", 350],
    ["лук",    50]
]);

/*
let keyMap = recipeMap.keys()
for(let key of keyMap){
    console.log(key)
}
/*
// выполняем функцию для каждой пары (ключ, значение)
recipeMap.forEach((value, key, map) => {
    console.log(`${key}: ${value}`); // огурец: 500 и так далее
});



//Коллекции Map


/*
let map = new Map;
let arr1 = [1, 2];
let arr2 = [3, 4];

map.set(arr1, 'data1');
map.set(arr2, 'data2');
for (let [key, elem] of map) {
	console.log(key);
	console.log(elem);
}


/*
for (let elem of map) {
	console.log(elem); // сначала [[1, 2], 'data1'], потом [[3, 4], 'data2']
}


/*
let arr = [1,[2], [[3]]]
let res = arr.flat(Infinity)
console.log(res)

//Высота с учетом прокрученной части:Размеры окна с учетом прокрутки
let scrollHeight = Math.max(
	document.body.scrollHeight, document.documentElement.scrollHeight,
	document.body.offsetHeight, document.documentElement.offsetHeight,
	document.body.clientHeight, document.documentElement.clientHeight
);
console.log(scrollHeight);
window.addEventListener('scroll', function() {
	console.log(window.pageYOffset);
});

let x = window.pageXOffset; // слевато, на сколько прокручено окно (только для чтения):
let y = window.pageYOffset; // сверхуто, на сколько прокручено окно (только для чтения):

//По нажатию на кнопку выведите высоту спрятанной под прокруткой части.
let h = document.documentElement.clientHeight; // высота
ModulH.addEventListener('click', function(){
    // let t = document.documentElement.scrollTop;
    // window.scrollBy(0, 200,)
     window.scrollBy({
        top: 100,
        left: 100,
        behavior: 'smooth'
    });
    // document.documentElement.scrollTop = 200;
    console.log(y)

    console.log(h)
    console.log(scrollHeight - h);

})




/*
//Следующие свойства включают в себя полосу прокрутки:
//свойства содержат размеры окна браузера, не включающие в себя полосу прокрутки:
let mod = document.querySelector('#ModulH')
mod.addEventListener('click', function(){
    let wp = window.innerWidth;  // ширинаСледующие свойства включают в себя полосу прокрутки:
    let hp = window.innerHeight; // высота
    let w = document.documentElement.clientWidth;//ширинаразмеры окна браузера, не включающие всебя полосу 
    let h = document.documentElement.clientHeight; // высота
    console.log(wp, w, hp, h)    
})


/*
let elemHi = document.querySelector('#elemHig');
let mod = document.querySelector('#ModulH')
console.log(elemHi.clientWidth);  // ширина
console.log(elemHi.clientHeight); // высота
// elemHi.scrollTop = 500;
// console.log(elemHi.scrollWidth);  // ширина
// console.log(elemHi.scrollHeight); // высота
// console.log(elemHi.scrollTop);  // сверх
// console.log(elemHi.scrollLeft); // слева
mod.addEventListener('click', function(){
    elemHi.style.height = elem.scrollHeight + 'px';
    elemHi.style.width = elem.scrollWidth + 'px';
/*
    elemHi.scrollTop += 10

    console.log(elemHi.scrollWidth);  // ширина
    console.log(elemHi.scrollHeight); // высота

    console.log(elemHi.scrollTop);  // сверху
    console.log(elemHi.scrollLeft); // слева

})

//                  Чередование стилей через data- атрибут
//Дан инпут. По потери фокуса проверьте введенное в него число. Если это число до десяти, то покрасьте инпут в зеленый цвет, если от десяти до двадцати - в желтый, а если более двадцати - в красный.
//<input id="Modul1234" value="введите число">
/*  //css
[data-type="success"] {color: green;}
[data-type="warning"] {color: orange;}
[data-type="error"] {color: red;}
*/
/*
Modul1234.addEventListener('blur', function(){
    if(Modul1234.value<=10){Modul1234.dataset.type = 'success';
    }else{Modul1234.dataset.type = 'warning';}

    if(Modul1234.value>20){Modul1234.dataset.type = 'error';}
})


/*
//чтобы каждый абзац по первому клику на него красился в красный цвет, а по второму клику - красился обратно в черный.
let ps = document.querySelectorAll('p.elem7')
ps.forEach(function(elem){
    elem.addEventListener('click', function(){
        this.classList.toggle('active')
    })
    // if(Number(elem.textContent)%2==0){elem.classList.add('error')}else{elem.classList.add('success')}
})

/*
//Даны абзацы с числами. Переберите эти абзацы циклом и абзацы, содержащие четные числа, покарасьте в красный цвет, а содержащие нечетные - в зеленый. <p class="elem7">10</p>
let ps = document.querySelectorAll('p.elem7')
ps.forEach(function(elem){
    if(Number(elem.textContent)%2==0){elem.classList.add('error')}else{elem.classList.add('success')}
})

/*
//Чтение свойств из CSS файлов
let span = document.querySelector('#stopTime')
let computegStyle = getComputedStyle(span)
console.log(computegStyle.transition)


//Дан див и две кнопки. По клику на первую кнопку спрячьте див, а по клику на вторую - покажите.
let btnT1 = document.querySelector('.TopStyle1');
btnT1.addEventListener('click', function(){
    divT.style.backgroundColor = 'green';

    // divT.style.display = 'none';
})
 
//Дана также кнопка. По клику на кнопку выведите толщину границы, ее тип и цвет.
//Дана также кнопка. По клику на кнопку увеличьте ширину и высоту дива на 10%
let divT = document.querySelector('#elemTop');
let btnT = document.querySelector('.TopStyle');
let width = 100;

btnT.addEventListener('click', function(){
   divT.style.width = width*1.5 + 'px';
//    divT.style.display = '';
//    divT.style.backgroundColor = '';
    setTimeout(() => divT.style.height = "400px", 2000);
   setTimeout(() => divT.style.backgroundColor = "", 2000);
   console.log(divT.style.borderColor)
   console.log((width))
   console.log((divT.style.width))
})
//


/*
//Дан див и кнопка. По нажатию на кнопку задайте диву ширину в 400px, а высоту в 300px
let divT = document.querySelector('#TopStyle');
let btnT = document.querySelector('.TopStyle');
btnT.addEventListener('click', function(){
    divT.style.width='400px';
    divT.style.height='300px';
})

/*
let elems = document.querySelectorAll('#elemT p')
for(let elem of elems){
    elem.style.color = 'red';
    elem.style.width = '100px'; 
    let width = elem.style.width;
    console.log(parseInt(width)); // выведет 100
    console.log(elem.style.color)
};
*/