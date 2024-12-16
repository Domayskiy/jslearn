"use strict";

// import arr3 from './startAsinTop.js'
// console.log(arr3)



/*
//Проверьте этот JSON на общую корректность при разборе, а после разбора проверьте, что в результате получается массив, а не что-то другое. Если в результате получается не массив - выбросите исключение
let arr;
try{
    let json = `[
        {
            "name": "user1",
            "age": 25,
            "salary": 1000
        },
        {
            "name": "user2",
            "age": 26,
            "salary": 2000
        },
        {
            "name": "user3",
            "age": 27,
            "salary": 3000
        }
]`;
    // let json1 = `{"a":1}` //не массив - выбросите исключение
    // let json1 = '"qwer"'
    // arr = JSON.parse(json1);
    arr = JSON.parse(json);
    console.log(arr);
    console.log(Array.isArray(arr))
    throw {name: "ArrNotArr", message: "Это не МАССИВ"}
}catch(error){
    if(error.name == 'SyntaxError'){
        console.log("Error in JSON")
    }else if(Array.isArray(arr)!==true){
        console.log(error.message)
    }
}






/*
try {
	let json = '{"product": "яблоко", "amount": 5}';
	let product = JSON.parse(json);
	
	if (product.price !== undefined && product.amount !== undefined) {
		alert(product.price * product.amount);
	} else {
		throw {
			name: 'ProductCostError',
			message: 'отсутствует цена или количество у продукта'
		};
	}
} catch (error) {
	if (error.name == 'SyntaxError') {
		alert('Некорректный JSON продукта');
	} else if (error.name == 'ProductCostError') {
		alert('У продукта отсутствует цена или количество');
	}
}
/*
function div(a, b) {
	if (b !== 0) {
		return a / b;
	} else {
		// throw new Error('ошибка деления на ноль');
	}	throw {name: 'MyError', message: 'текст исключения'};

}
try {
    console.log(div(3,0))

} catch (error) {
	console.log(error.name); // 'MyError'
	console.log(error.message); // 'текст исключения'
}

/*
//В JavaScript попытка извлечь корень из отрицательного числа не приводит к выбрасыванию исключения:
//Напишите свою функцию, которая будет извлекать корень из числа и при этом выбрасывать исключение, если корень извлекается из отрицательного числа.
function iskl(num){
    let result = Math.sqrt(num);
    if(num>0){return result
    }else if(num<0){
        throw {name: 'NumIsLessZeroError', message: 'число меньше нуля'};
    }else{
        throw new SyntaxError('число равно 0');
    }
}
try{
    console.log(iskl(-4))
}catch(error){
    console.log(error.message)
    console.log(error.name)
}
let result = Math.sqrt(-1);
console.log(result); // выведет NaN



/*
function getArr(json) {
	return JSON.parse(json);
}
try{
    let arr = getArr('[1,2,3,4,5,333,]');
    console.log(arr);
    
}catch(error){
    if(error.name=="SyntaxError"){
        console.log('некоррект джейсон пришел')
    }
}

/*
let json = '[1,2,3,4,5]';
try{
    let arr = JSON.parse(json);
    let sum = 0;
    for (let elem of arr) {
        sum += +elem;
    };alert(sum);
}catch(error){alert('джейсон некорект')}


/*
//Дан JSON, внутри которого хранится массив. Если этот JSON корректный, то выведите элементы массива в виде списка ul. Если же JSON не корректный, выведите на экран сообщение о том, что на странице случилась ошибка.
//<ul class="iskl">'tru_catch'</ul>
try {
	let data = JSON.parse('[1,2,3,4,5]');
    let ul = document.querySelector('.iskl');
    data.forEach(function(elem){let li = document.createElement('li');
        li.textContent=elem; ul.append(li);
    })
    /* или циклом
    for(let i=0; i<data.length; i++){let li = document.createElement('li');
        li.textContent=data[i];  ul.append(li);
    }
    */
/*   
} catch (error) {
	console.log('невозможно выполнить операцию разбора JSON');
}

/*
let str = 'q we rty asdfg x cv'
let arr = str.split(' ')
let sor = arr.sort((a,b)=>a.length-b.length);
console.log(sor)
console.log(sor[sor.length-1])

/*
let str = '123 456 789';
let reg = new RegExp('[0-9]+', 'g');
let res = str.replace(reg, '!');
console.log(res)
/*
let str = 'img.png';
let exts = ['png', 'jpg'];
let pat  = exts.join('|')
let reg  = new RegExp(`\.(${pat})$`);
let res = str.match(reg);
console.log(res)

/*
//Получите массив имен атрибутов этого тега.
let str = '<a href="" class="eee" id="zzz">';
console.log(str.match(/(?<=("))\w{3}/g)); //(2) ['eee', 'zzz']

/*
//Получите массив имен функций из строки.
let str = 'func1() func2() func3()';
console.log(str.match(/\w{4}\d(?=.+)/g)); // вернет 'b!'
console.log(str.match(/\w{4}\d(?=[\(])/g)); // вернет 'b!'
console.log(str.match(/\w{4}\d/g)); // вернет 'b!'

/*
console.log('aaax baaa'.replace(/(^a)\1\1/g, '!')); // вернет '!x baaa'
console.log('aaax baaa'.replace(/(aaax)/g, '$`!x')); // вернет'!x baaa'

/*
//Несохраняющие скобки в регулярках  (?:ab)
let str = 'abab123';
let res = str.match(/(ab)+([1-9]+)/);
let res1 = str.match(/(?:ab)+([1-9]+)/);

console.log(res);//(3) ['abab123', 'ab', '123', index: 0, input: 'abab123', groups: undefined]

console.log(res1);// (2) ['abab123', '123', index: 0, input: 'abab123', groups: undefined]

/*
//Найдите все подстроки со временем, в которых час совпадает с секундами.
let str = '12:59:59 12:59:12 09:45:09 13:59:59';
let reg =str.match(/(\d{2}):(?<tim>\d{2}):(\k<tim>)/)
console.log(reg.groups) //{tim: '59'}
console.log(reg.groups.tim) // 59

console.log(str.match(/(\d{2}):(?<tim>\d{2}):(\k<tim>)/))
//(4) ['12:59:59', '12', '59', '59', index: 0, input: '12:59:59 12:59:12 09:45:09 13:59:59', groups: {…}]
console.log(str.match(/(\d{2}):(?<tim>\d{2}):(\k<tim>)/g))//(2) ['12:59:59', '13:59:59']

/*
//Положите часы, минуты анные карманы.
let str = '12:59:59';
let reg = /(?<time>\d{2}\d{2})/
let res = str.match(reg)
console.log(res.groups) second: '59'}
console.log(res.groups.second) // 59


//Именованные карманы в регулярках
/*
let str = '2025-10-29';
let reg = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
let res = str.match(reg);
//Данные карманов попадут в свойство groups результата в виде объекта:
console.log(res.groups);
console.log(res.groups.year);  // 2025
console.log(res.groups.month); // 10
console.log(res.groups.day);   // 29


/*
//Найдите все подстроки, в которых есть два одинаковых слова подряд.
let str = 'aaa aaa bbb bbb ccc ddd'
console.log(str.replace(/(\w{3}) \1/g, "!"))

/*
//Найдите все подстроки, в которых есть две и более одинаковые буквы подряд.
let str = 'a aa aaa aaaa aaaaa';
console.log(str.replace(/(a)\1+/g, "!"))
console.log(str.replace(/(a)a+/g, "!"))

/*
//Карманы в самой регулярке вот так: \1, второй карман вот так - \2, третий - \3 
let str = 'aaa bbb ccc xyzw';
let res = str.replace(/([a-z])\1\1/g, '!');
console.log(res) //! ! ! xyz
console.log(str.match(/([a-z])\1\1/g)) //(3) ['aaa', 'bbb', 'ccc']
console.log(str.match(/[a-c]+/g)) //(3) ['aaa', 'bbb', 'ccc']


/*
//Замените домены на ссылки вида:<a href="http://site.ru">site.ru</a>
let str = 'sss site.ru zzz site.com kkk';
console.log(str.replace(/(\w{4}\.\w{2,3})/g, '<a href="http://site.ru">site.ru</a>'))
console.log(str.replace(/(.{4}\..{2,3})/g, '<a href="http://site.ru">site.ru</a>'))
console.log(str.replace(/([a-z]+\.[a-z]+)/g, '<a href="http://site.ru">site.ru</a>'))

/*
//Напишите регулярку, которая рядом с каждой цифрой напишет такую же.
let str = 'a1b2c3';
console.log(str.replace(/(\d)/g, '$&$1'))//a11b22c33

/*
//Найдите все даты и преобразуйте их в другой формат
let str = '31.12.2025 30.11.2024 29.10.2023';
console.log(str.replace(/(\d+)\.(\d+)\.(\d+)/g, '$3-$2-$1'))//2025-12-31 2024-11-30 2023-10-29//второй способ
console.log(str.replace(/(\d+)\.(\d+)\.(\d+)/g, function(el){return el.split('.').reverse().join('-')}))//
console.log(str.replace(/(\d+)\.(\d+)\.(\d+)/g, function(elem, el1, el2, el3){
    let str1 = String(el3) + '-' + String(el2) + '-' + String(el1); return str1
}))

/*
//Найдите все числа и переверните их цифры в обратном порядке.
let str = '123 456 789';
console.log(str.replace(/\d{3}/g, function(el){return el.split('').reverse().join('')}))//321 654 987
console.log(str.replace(/(\d)(\d)(\d)/g, '$3$2$1'))//321 654 987 //второй способ

/*
//Найдите числа, стоящие в скобках и увеличьте их в два раза/ **2
let str = 'aaa [2] bbb [3] ccc [12] ddd';
let res = str.replace(/\d+/g, function(num){return Math.pow(num, 2)} )
console.log(res) //'aaa [4] bbb [6] ccc [24] ddd'

/*
let str = '2+3= 4+5= 6+7=';
let result = str.replace(/(\d+)\+(\d+)=/g, function(match0, match1, match2) {
	let sum = Number(match1) + Number(match2);
	return match0 + sum;
});
console.log(result);
/*
//Преобразуйте эту дату в '2025.12.31'.
let str = '31.12.2025';
let res = str.replace(/(\d+).\d+.(\d+)/g, '$2.12.$1'); //(/(\d+).(\d+).(\d+)/g, '$3.$2.$1')
console.log(res)

/*
let str = 'aaa@bbbx cccx@dddz';
let res = str.replace(/(\w+)@(\w+)/g, '$2@$1');
console.log(res)

/*
//Найдите в ней все подстроки с временем, начиная с пятого символа.
let str = '12:37 15:48 17:59';
let reg = /\d+:\d+/g;
reg.lastIndex = 5;
let res;
while(res = reg.exec(str)){ //['15:48', index: 6, input: '12:37 15:48 17:59', groups: undefined]
    console.log(res);       //['17:59', index: 12, input: '12:37 15:48 17:59', groups: undefined]
}

/*
let str = '12 34 56';
let reg = /\d+/g;
console.log(reg.lastIndex); // начальное значение 0
let res;
while (res = reg.exec(str)) {
	console.log(res); // [12], [34], [56]
	console.log(reg.lastIndex); // 2, 5, 8
}

/*
let str = '12 34 56';

let reg = /\d+/g;

let res;
while (res = reg.exec(str)) {
	console.log(res); // [12], [34], [56] 
}

let res1 = reg.exec(str);
console.log(res1); // 12
console.log(res1[0]); // 12

let res2 = reg.exec(str);
console.log(res2[0]); // 34

let res3 = reg.exec(str);
console.log(res3[0]); // 56

/*
//Найдите в ней все подстроки с временем и для каждого найденного разложите часы и минуты по карманам.
let str = '12:37 15:48 17:59'
let res= str.matchAll(/(\d+):(\d+)/g)
for(let ar of res){console.log(ar)}
/*
res=Array.from(res)
console.log(res[2])

/*
//Получите массив доменных имен из этой строки.
let str = 'site.ru sss site.com zzz site.net';
let res= str.match(/\w{4}\.\w{2,}/g)
console.log(res)

/*
//Найдите этот домен и положите его имя в первый карман, а зону - во второй.
let str = 'sss domain.ru zzz';
let res= str.match(/(d\w+)\.(ru)/)
console.log(res)

/*
let str = '12:34';
let res = str.match(/(\d+)(:)(\d+)/);
console.log(res)

/*
let str = 'aaa 123 bbb';
let res = str.match(/\d/)
console.log(res)
console.log(str.match(/\d+/g))

//Глобальный match в регулярках 
/*
let str = '<h1>Hello, world!</h1>';
let regexp = /<(.*?)>/g;

let matchAll = str.matchAll(regexp);
console.log(matchAll); // [object RegExp String Iterator], не массив, а перебираемый объект
//RegExpStringIterator {}
//При переборе результатов matchAll в цикле for..of вызов Array.from, разумеется, не нужен.
matchAll = Array.from(matchAll); // теперь массив
console.log(matchAll);
//(2) [Array(2), Array(2)]
//(2) ['<h1>', 'h1', index: 0, input: '<h1>Hello, world!</h1>', groups: undefined]
//(2) ['</h1>', '/h1', index: 17, input: '<h1>Hello, world!</h1>', groups: undefined]
//length: 2
let firstMatch = matchAll[0];
console.log( firstMatch[0] );  // <h1>
console.log( firstMatch[1] );  // h1
console.log( firstMatch.index );  // 0
console.log( firstMatch.input );  // <h1>Hello, world!</h1>


/*
let str = 'xax xaax xaaax';
let res = str.match(/xa+x/);
console.log(res) //   ['xax', index: 0, input: 'xax xaax xaaax', groups: undefined]
console.log(res[0]); // выведет 'xax'
console.log(res.index); // выведет 0


/*
let str = '2025-12-31 12:59:59';
console.log(str.split(/[-:\s+]/))

/*
let regexp = /[-.\w]+@([\w-]+\.)+[\w-]+/gi;
console.log("My@mail.com @ his@site.com.uk".match(regexp))

/*
//Определите, является ли переданная строка временем в формате часы:минуты:секунды
console.log(/([0-2]\d):([0-5]\d):([0-5]\d)/.test('22:49:53'))

/*
//Определите, является ли переданная строка датой в формате год-месяц-день.
console.log(/(\d{4}-\d{2}-\d{2})/.test('2024-10-09'))

/*
//Определите, является ли строка 'числом, длиной от 1 до 12 цифр'
let num = '555556666'
let result = (/^[0-9]{1,12}$/.test(num));
console.log(result)

/*
//'http://' или с 'https://
console.log(/^http:\/\/|https:\/\/|html$/.test('https:// 123 qwer html'))

// console.log(/^a+x+$/.test('aaaaaaaaaxxx')); // вернет true



/*
let str = 'x[]z x{}z x.z x()z x([])z';
console.log(str.replace(/x[\[\]\{\}\(\)]+z/g, '!')) //  ! ! x.z ! !

/*
let str = 'x[]z x[[]]z x()z';
console.log(str.replace(/x[\[\]]+z/g, '!')) //  ! ! x()z

/*
let str = 'x]x xax x[x x1x';
let res = str.replace(/x[\]\[]x/g, '!');
console.log(res)

/*
//Напишите регулярку, которая найдет строки 'a.a', 'a+a', 'a*a', не затронув остальных.
let str = 'aba aea aca aza axa a.a a+a a*a';
console.log(str.replace(/a[.+*]a/g, '!')) //(/a[\.\+\*]a/g, '!')

/*
let str = 'ааа ббб ёёё ззз ййй ААА БББ ЁЁЁ ЗЗЗ ЙЙЙ'
console.log(str.replace(/[а-яЁёЙйА-Я]+/g, '!'))

/*
//строки по шаблону: цифра '1', затем символ не 'e' и не 'x', цифра '2'.
//найдет строки по шаблону: буква 'x', затем НЕ цифра от 2 до 7, буква 'z'.
console.log('1a2'.replace(/1[^ex]2/, '!'))
console.log('x1z'.replace(/x[^2-7]z/, '!'))

/*
let str = 'xaz xbz xcz xez';
let res = str.replace(/x[^abc]z/g, '!');
console.log(res)


/*
let str = 'aAXa aeffa aGha aza ax23a a3sSa';
console.log(str.replace(/a[\w\d]+a/g, '!'))

/*
let str = '1 12 123 abc @@@';
let res = str.replace(/\d/g, '!');
console.log(res)

/*
let str = 'aba accca azzza wwwwa'
console.log(str.replace(/a.+?a/g, '!'))

/*
//Напишите регулярку, которая найдет строки в квадратных скобках и заменит их на '!'.
let str = '[abc] {abc} abc (abc) [abc]';
console.log(str.replace(/\[abc\]/g, '!'))

/*
//Напишите регулярку, которая найдет строки '*q+', '*qq+', '*qqq+', не захватив осталь
let str = '*+ *q+ *qq+ *qqq+ *qqq qqq+';
console.log(str.replace(/\*q+\+/g, '!'))

/*
//Напишите регулярку, которая найдет строки '2+3', '2++3', '2+++3', не захватив остальные
//которая найдет строки '23', '2+3', '2++3', '2+++3', не захватив остальны
let str = '23 2+3 2++3 2+++3 345 567';
console.log(str.replace(/2\++3/g, '!'))
console.log(str.replace(/2\+*3/g, '!'))

/*
//Напишите регулярку, которая найдет строки по шаблону: строка 'ab' повторяется 1 или более раз.
let str = 'abb abab abab abababab abea';
console.log(str.replace(/a.b/g, '!'))
// console.log(str.replace(/a(ba)+b/g, '!'))

/*
//Напишите регулярку, которая найдет строки 'ahb', 'acb', 'aeb' по шаблону: буква 'a', любой символ, буква 'b'.
let string = 'ahb acb aeb aeeb adcb axeb'; 
console.log(string.replace(/a.b/g, "!"))
/*
const pattern = /a.b/g; 
const matches = string.match(pattern); 
console.log(matches); // outputs ["ahb", "acb", "aeb"]



/*
let time = localStorage.getItem('time');
if (!time) {
	let now = Date.now();
	localStorage.setItem('time', now);
}
window.localStorage.clear()
const { a} = { a: 1, b: 2, c: 3 }
console.log(a)
// 3 {a: 1, b: 2}


/*
const donor = ['это', 'старые', 'значения']
let newArray = [1, true, 'мама']
newArray = [...donor, ...newArray]

console.log(newArray)
// ['это', 'старые', 'значения', 1, true, 'мама']

/*
//Добавьте в эту строку еще одного работника
let json = `[
	{
		"name": "user1",
		"age": 25,
		"salary": 1000
	},
	{
		"name": "user2",
		"age": 26,
		"salary": 2000
	},
	{
		"name": "user3",
		"age": 27,
		"salary": 3000
	}
]`;
let obg = JSON.parse(json);
obg.push({'name': 'user99', age: 47, salary: 1111})
console.log(obg)


// не смог все на какихто костылях
//Получите представленные данные в формате JSON в виде объекта с ключами surname, name, patronymic.
/*              // вот такой вариант чтото намутил
let table = document.querySelectorAll('#tabJson td')
let arr=[]
for(let td of table){arr.push(td.innerHTML)}
console.log(arr)
let obg1 = {}
obg1.surname = `${arr[0]}, ${arr[3]}, ${arr[6]}`
obg1.name = `${arr[1]}, ${arr[4]}, ${arr[7]}`
console.log(obg1)
*/

//Свойство cells хранит коллекцию ячеек td и th строки tr. Применяется только к ряду таблицы
//Давайте переберем все ряды таблицы с помощью свойства rows, а в каждом ряду переберем его ячейки с помощью свойства cells:
/*
let table = document.querySelector('#tabJson');
for (let row of table.rows) {
	for (let cell of row.cells) {
		console.log(cell.innerHTML);
	}
}

/*
let table = document.querySelector('#tabJson')
console.log(table.rows[1]);
/*
for (let row of table.rows) {
	console.log(row.innerHTML);
}
/*
// const table = document.querySelector('table.tableUnder');
let arr = []
arr.push(tabJson.rows[1].cells[0].innerHTML, tabJson.rows[1].cells[1].innerHTML,tabJson.rows[1].cells[2].innerHTML )
console.log(arr[0])
let obj = {}
obj.surname = arr[0]; obj.name = arr[1]; obj.patronymic = arr[2];
obj.arra = [...arr]
console.log(obj)

/*
const data = Object.fromEntries(
  [...table.rows].map(row => [...row.cells].map(
    cell => cell.innerText.trim() || 'есть'
  ))
);

console.log(data);
// console.log(tabJson)
/*
for(let el of tabJson){
    console.log(el)
}
/*
let trs = tabJson.querySelectorAll('td')
for(let i=0; i<3;i++){
    console.log(tabJson.rows[i].cells[i])

}
/*
console.log(tabJson.rows[1].cells[1])
console.log(tabJson.rows[0])

console.log(trs)
/*
for(let i=0; i<tabJson.length; i++){
    console.log(tabJson[i])
}
/*
for(let elem of tabJson){
    let tds = document.querySelectorAll('#tabJson td');
    for(let td of tds){
        console.log(td.textContent)
    }

 
}
/*
for(let el of tabJson){
    console.log(el.textContent)
}


/*
//Получите список городов в формате JSON            Разными способами 
let cityLi = document.querySelectorAll('#cityLi li');
let arr = Array.from(cityLi)
// let res = arr.reduce(function(acc, li){acc.push(li.textContent); return acc}, [])

///let map = [...cityLi].map(function(el){return el.textContent})

/*
let res = [...cityLi].reduce(function(acc, li){acc.push(li.textContent); return acc}, [])
let john = JSON.stringify(res)
console.log(john)

/*
console.log(arr)
let arr1 = []
for(let li of cityLi){
    arr1.push(li.textContent)

}
console.log(arr1)
let john = JSON.stringify(arr1)
console.log(john)


//Выведите этих работников на экран в виде HTML таблицы.Дана строка в формате JSON, содержащая массив с данными работников:
/*
let json = `[
	{
		"name": "user1",
		"age": 25,
		"salary": 1000
	},
	{
		"name": "user2",
		"age": 26,
		"salary": 2000
	},
	{
		"name": "user3",
		"age": 27,
		"salary": 3000
	}
]`;
let arrJ = JSON.parse(json);

//                          это только все про доп шапку. добавил с 11111   и 2222 и 333333
let tbl = document.querySelector('#tabJ');
let tr1 = document.createElement('tr')
let th1 = document.createElement('th');
th1.textContent = '1111111'
tr1.append(th1)

let th2 = document.createElement('th');
th2.textContent = '2222222'
tr1.append(th2)

let th3 = document.createElement('th');
th3.textContent = '3333333'
tr1.append(th3);
tbl.prepend(tr1);
//                                  вот до сюда

/* // это если в доп шапке надо одинаковую инфо или номеи i
for(let i=1; i<=3; i++){
    let th = document.createElement('th');
    th.textContent = i
    tr1.append(th)
}
*/
//                          это код для решения задачи
/*
arrJ.forEach(function(emp){
    let tr = document.createElement('tr');

    let td1 = document.createElement('td');
    td1.textContent = emp.name;
    tr.append(td1)
    
    let td2 = document.createElement('td');
    td2.textContent = emp.age;
    tr.append(td2)

    let td3 = document.createElement('td');
    td3.textContent = emp.salary;
    tr.append(td3)

    tbl.append(tr);

})
//                      тоже решение но через цикл
/*
let tbl = document.querySelector('#tabJ');
for(let user of arrJ){
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    td1.textContent=user.name
    tr.append(td1);

    let td2= document.createElement('td');
    td2.textContent = user.age;
    tr.append(td2);

    let td3 = document.createElement('td');
    td3.textContent = user.salary;
    tr.append(td3)

    tbl.append(tr)
}

/*
//Выведите эти имена в виде списка ul.
let json = '["user1","user2","user3","user4","user5"]';
let arr = JSON.parse(json)
let uljson = document.querySelector('#json')        // <ul id="json">json</ul>
for(let i=0; i<arr.length; i++){
    let li = document.createElement('li');
    li.textContent= arr[i];
    uljson.append(li);
}

/*
//Найдите сумму чисел из представленных данных.
let json = `{
	"data1": [1,2,3],
	"data2": [4,5,6],
	"data3": [7,8,9]
}`;
let obg = JSON.parse(json);
// let sum=0;for(let key in obg){obg[key].forEach(function(el){sum+=el;})};console.log(sum)
/*
let sum=0;
for(let key in obg){
    for(let el of obg[key]){
        sum+=el
    }
};
console.log(sum)
*/
/*
function* func (obg){       // делаем генератор
    for(let key in obg){
        yield obg[key]
    }
};
let iter = func(obg)        //итератор
let sum=0;
for(let el of iter){        //перебираем эл это массивы 
    for(let num of el){
        sum+=num
    }
}
console.log(sum)

/*
//Преобразуйте эту строку в настоящий массив JavaScript и найдите сумму чисел этого массива.
let json = '[1, 2, 3, 4, 5]'; // некорректный JSON
let arr = JSON.parse(json);    // выдаст ошибкуconsole.log(json)
// let res = arr.reduce(function(acc, next){return acc + next}, 0)
let res = arr.map(function(el){return Math.pow(el, 3)})
console.log(arr)
console.log(res)
*/