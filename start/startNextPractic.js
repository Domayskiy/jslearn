"use strict";
/*
//<button class="Modul">посчитать из инпута</button>
//<input id="Modul1">
//<input id="Modul2">

;(function (selector1, selector2, selector3){
    let znach = document.querySelector(selector1)
    let res = document.querySelector(selector2)
    let btn = document.querySelector(selector3)
    znach.addEventListener('click', ()=> {znach.value = ''})
    btn.addEventListener('click', function(){
        res.value = znach.value**3
    })
})('#Modul1', '#Modul2', '.Modul')
/*
;(function() {
	function square(num) {
		return num ** 2;
	}
	function cube(num) {
		return num ** 3;
	}
	function avg(arr) {
		return sum(arr) / arr.length;
	}
	function digitsSum(num) {
		return sum(String(num).split(''));
	}
	// вспомогательная функция
	function sum(arr) {
		let res = 0;
		
		for (let elem of arr) {
			res += +elem;
		}
		
		return res;
	}
	
	window.bibl = {square, cube, avg, digitsSum};
})();
console.log(bibl.avg([1, 2, 3]) + bibl.square(1));

/*
//Модули через замыкания    Параметры по умолчанию   Экспорт объекта в модулях через замыкания
let config = {
	root:  '#elemF',
	amount: 2,
    type: 'h1'
}
//console.log(config.root[0]) // (config['root'][0]) //#
// console.log(config.root) // (config['root']) //#elemF
for(let key in config){
    console.log(key) //root  amount  type
    console.log(config[key])   // #elemF   2        h1
    console.log(config[key][0]) //  #   undefined   h
}

/*
;(function({root, type = 'p',amount = 5}) {         // будет 2 Р а не 5, и будет h1  а не Р
    
	let parent = document.querySelector(root);
    let str = 'qwerty'
	for (let i = 1; i <= amount; i++) {
		let elem1234 = document.createElement(type);
        elem1234.textContent = 'SSSS??????////'
		parent.append(elem1234);
	};

    // str = function func5(){return 1+4}
    // window.strclon = str;
    // window.str = str;        //переменные и функции модуля были доступны снаружи
    // str()
    // window.strclon = str;
    function func9(){return 5+4}
    function func5(){return 1+4}

    window.modul = {func9, func5, str}

})(config);

// console.log(modul.func9(), modul.str, modul.func5())
/*
//                          переменные и функции модуля были доступны снаружи
// str = '1234'
// console.log(strclon);
let res=str
console.log(res)
console.log(str())

/*
//Передача параметров в модуль через замыкания
//Дана кнопка и три инпута, в которые вводятся числа. По нажатию на кнопку выведите в консоль сумму введенных чисел. Реализуйте задачу с помощью модуля.<button class="Modul">посчитать из инпута</button>
;(function(selector1, selector2, selector3){
    let btnModul = document.querySelector(selector1)
    let inpModu1 = document.querySelector(selector2)
    let inpModu2 = document.querySelector(selector3);
    function funcMod(){
        return Number(inpModu1.value) + Number(inpModu2.value)
    };
    btnModul.addEventListener('click', function(){
        console.log(funcMod() + 333)
    });
})('.Modul', '#Modul1','#Modul2');



/*
//С помощью функции createTable создайте новую таблицу, а затем вставьте ее в конец дива
let div = document.querySelector('#elemT');
let tab = createTable(3, 4);
function createTable(rows, cols) {
	let table = document.createElement('table');
	for (let i=1; i<=rows; i++) {
        let tr = document.createElement('tr')
		for (let j=1; j<=cols; j++) {
            let td = document.createElement('td');
            td.textContent = j;
            tr.append(td);
		}
        table.append(tr);
	};
    table.style.color = 'red';   //покрасим ее цвет текста в красный
    divT.append(table)

};

/*
//Получение ссылки на таблицу может понадобится для того, чтобы что-то сделать с созданной таблицей. К примеру, давайте покрасим ее цвет текста в красный:
let div = document.querySelector('#elemF');
let tab = createTable(3, 4);
function createTable(rows, cols) {
	let table = document.createElement('table');
	for (let i=1; i<=rows; i++) {
        let tr = document.createElement('tr')
		for (let j=1; j<=cols; j++) {
            let td = document.createElement('td');
            td.textContent = j;
            tr.append(td);
		}
        table.append(tr);
	};
    table.style.color = 'red';   //покрасим ее цвет текста в красный
	div.appendChild(table);
};

/*
let div = document.querySelector('#elemF');
createTable(3, 4, div);
function createTable(rows, cols, parent) {
	let table = document.createElement('table');
	// тут создадим таблицу с rows рядами и cols колонками
	for (let i=1; i<=rows; i++) {
        let tr = document.createElement('tr')
		for (let j=1; j<=cols; j++) {
            let td = document.createElement('td');
            td.textContent = j;
            tr.append(td);
		}
        table.append(tr);
	}
	parent.appendChild(table);
}




/*
//Сделайте функцию appendElem, которая первым параметром будет принимать ссылку на DOM объект, в котором лежит тег ul, а вторым - текст. Сделайте так, чтобы данная функция создавала новую li с переданным текстом и добавляла ее в конец переданного тега ul.Дан массив и ul. С помощью функции appendElem, созданной в предыдущей задаче, запишите каждый элемент массива в отдельную li в этом ul.
let arr = [1, '2', 'a'];
let ul = document.querySelector('.PractF');
function appendElem(selector, text){
    for(let elem of arr){
        let li = document.createElement('li');
        li.textContent =elem + ' / ' + text;
        selector.append(li);
    };
};
appendElem(ul, 'здесь ли');

/*
//Сделайте функцию appendText, которая первым параметром будет принимать DOM элемент, а вторым - текст. Сделайте так, чтобы данная функция добавляла текст в конец этого элемента.
function appendText(elem, text){
    elem.textContent = elem.textContent + text
};
let els7 = document.querySelectorAll('.elem7');
els7.forEach(function(el){appendText(el, 'ZZZZZ')});
/*
for(let el of els7){
    appendText(el, 'Z')
}



//                                       // функции и привязка this
/*
function func(){console.log(arguments)};
func('1', 'z', 0, 5, null)//Arguments(5) ['1', 'z', 0, 5, null, callee: (...), Symbol(Symbol.iterator): ƒ]

/*
function greet(greeting, punctuation){
    console.log(greeting + ', ' + this.name + punctuation)
}
let person = {name: 'Alice'};
let buondGreet1 = greet.bind(person);
buondGreet1('Hello', '!')               //  Hello, Alice!

let person2 = {name: 'Bob'};
greet.call(person2,'hi', '/')           //   hi, Bob/


let buondGreet2 = greet.bind(person, 'Good');
buondGreet2('Poka', 'Z')                 //  Good, AlicePoka


/*
let arr = [1524, 1321, 4563, 7144, 2112];
let result = [];
function checkDigitsPairsSum(array){
    for(let elem of array){
        let str = String(elem);
        let sum1 = Number(str[0]) + Number(str[1]);
        let sum2 = Number(str[2]) + Number(str[3]);
        if(sum1==sum2){result.push(elem);} 
    }
};
checkDigitsPairsSum(arr)
console.log(result)

/*
// много разного про функции. проверял как сработает после урока 485
let arr = [1524, 1321, 4563, 7144, 2112];
let result = [];
function checkDigitsPairsSum(num){
    let str = String(num);
    let sum1 = Number(str[0]) + Number(str[1]);
    let sum2 = Number(str[2]) + Number(str[3]);
    return sum1==sum2
};
for(let elem of arr){
    if(checkDigitsPairsSum(elem)){
        result.push(elem);
    }
}
console.log(result)


/*
showplusNumAbz('.elem7')
function showplusNumAbz(selector){
    let ps = document.querySelectorAll(selector);
    for(let i=0; i<ps.length; i++){
        ;(()=>{ps[i].textContent='индекс: '+[i]+' у ' +ps[i].textContent})();
    }
}

/*
showplusNumAbz('.elem7', ((abz, index)=>{abz.textContent='индекс: '+index+' у ' +abz.textContent}))
function showplusNumAbz(selector, func){
    let ps = document.querySelectorAll(selector);
    for(let i=0; i<ps.length; i++){
        func(ps[i], [i])
    }
}
/*
showplusNumAbz('.elem7');
function showplusNumAbz(selector){
    let ps = document.querySelectorAll(selector);
    for(let i=0; i<ps.length; i++){
       ;((abz, index)=>{abz.textContent = 'индекс: ' + index + ' у ' + abz.textContent })(ps[i], [i]);
    }
}

/*
showplusNumAbz('.elem7');
function showplusNumAbz(selector){
    let ps = document.querySelectorAll(selector);
    for(let i=0; i<ps.length; i++){
       ;(function(abz, index){abz.textContent = 'индекс: ' + index + ' у ' + abz.textContent })(ps[i], [i]);
    }
}

/*
showplusNumAbz('.elem7');
function showplusNumAbz(selector){
    let ps = document.querySelectorAll(selector);
    for(let i=0; i<ps.length; i++){
        function getIn(abz, index){abz.textContent = 'индекс: ' + index + ' ' + abz.textContent }
        getIn(ps[i], [i])
    }
}

/*
//Даны абзацы. Спомощью созданной нами функции для каждого абзаца добавьте ему в начало его порядковый номер.
showplusNumAbz('.elem7', function(abz, index){abz.textContent = 'индекс: ' + index + ' ' + abz.textContent });
function showplusNumAbz(selector, funct){
    let ps = document.querySelectorAll(selector);
    for(let i=0; i<ps.length; i++){
        funct(ps[i], [i]);
    }
}


/*
//функцию которая первым параметром будет принимать селектор группы элементов, а вторым параметром - функцию-коллбэк, которая применится по очереди к каждому из найденных элементов:
function znaPlus2 (selector, functio){
    let els = document.querySelectorAll(selector);
    for(let el of els){
        functio(el)
    }
}
znaPlus2('.elem7', function(tag){tag.textContent += '!'})
/*
function forEa(selector, func) {
	let elems = document.querySelectorAll(selector);
	for (let elem of elems) {
		func(elem);
	}
}
forEa('.elem7', function(elem) {
	elem.textContent = elem.textContent ** 2;
})

/*
//Сделайте функцию appendText, которая первым параметром будет принимать селектор, а вторым - текст. Сделайте так, чтобы данная функция добавляла текст в конец переданных элементов.
function setText(selector, text) {
	let elems = document.getElementsByClassName(selector);
	for (let elem of elems) {
		elem.textContent =elem.textContent + text;
	}
}
setText('elemPo', 'text777');
*/