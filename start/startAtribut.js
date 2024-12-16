"use strict";



/*
//Дан выпадающий список и кнопка. По клику на кнопку сделайте отмеченным пункт списка
//Переберите пункты списка циклом и для выбранного пункта в конец текста добавьте восклицательный знак, а для невыбранных пунктов - вопросительный.
//Дан инпут и селект. В инпут вводится какое-то число. По потери фокуса сделайте выделенным пункт списка, номер которого равен значению из инпута.
// let sel = document.querySelector('#select');
let elem11 = document.querySelector('#elem11');
elem11.addEventListener('blur', function(){sel.value = Number(elem11.value) -1})

let select  = document.querySelector('#select');
console.log(select[0].textContent[0]);

let arr=[];
for(let opt of select){arr.push(opt.textContent);  }
console.log(arr[0][0])

let option = select[2]
option.selected = true

console.log(select[select.selectedIndex].value)
/*
let select  = document.querySelector('#select');
let options = select.querySelectorAll('option');
console.log(options) 
let options = document.querySelectorAll('#select option');
for(let opt of options){console.log(opt.textContent)}



/*
//Сделайте выпадающий список с названиями месяцев. Сделайте так, чтобы JavaScript по умолчанию выбирал в этом списке текущий месяц.
let sel = document.querySelector('#select')
let data=new Date();
sel.value = data.getMonth()
console.log(sel.value)

/*
let sel = document.querySelector('#select')
let btn = document.querySelector('button');
btn.addEventListener('click', function() {
	select.value = 'one';
});
/*
select.addEventListener('change', function(){
	console.log(this.value);
})

/*
//Дан селект, абзац и кнопка. По клику на кнопку выведите текст выбранного пункта списка в абзац
let sel = document.querySelector('#selectSem')
let btn = document.querySelector('button');
let div = document.querySelector('div');
btn.addEventListener('click', function() {
    console.log(sel.value)
});


/*
let checkbox = document.querySelector('[type="checkbox"]');
let btn = document.querySelector('button');
let div = document.querySelector('div');
btn.addEventListener('click', function() {
	if (checkbox.checked) {div.textContent = '111';
	} else {div.textContent = '222';}
});

/*
//Даны два инпута. Сделайте так, чтобы после ввода двух символов фокус ввода переходил ко второму инпуту, а после ввода двух символов в этот инпут - фокус из него убирался.
let elem11 = document.querySelector('#elem11');
let elem12 = document.querySelector('#elem12');
elem11.addEventListener('input', function(){
    if(elem11.value.length>=2){elem12.focus();this.disabled=true;elem12.disabled = false;elem12.value = "";}})
elem12.addEventListener('input', function(){if(elem12.value.length>=2){ elem12.blur(); this.disabled=true}})

/*
//Дан инпут. Пусть в него разрешено ввести 5 символов. Дан также абзац. По мере ввода символов в инпут пишите, сколько еще символов можно ввести. Когда количество символов превысит 5-ти, то в абзац выводите то, на сколько символов превышена длина текста. <input id="elem"></input>
let elem = document.querySelector('#elem');
let abz = document.querySelector('p.textareaclass');
elem.addEventListener('input', function(){
    abz.textContent = "еще введите" + '  ' + Number(5 - elem.value.length)+ '   ' + "символов"
    if(elem.value.length>5){
        abz.textContent = "уберите" + '  ' + Number(elem.value.length -5)+ '   ' + "символов"
    }
})


/*
//Дан чекбокс. По изменению чебокса выведите на экран его новое состояние
// <input class="check" type="checkbox">
let elem = document.querySelector('input[type="checkbox"]');
elem.addEventListener('change', function() {
	console.log(this.checked);
});


/*let radios = document.querySelectorAll('input[type="radio"]');
let button = document.querySelector('#button');
button.addEventListener('click', function() {
	for (let radio of radios) {
		if (radio.checked) {
			console.log(radio.value);
		}
	}
});


/*
//Дан чекбокс и кнопка. Сделайте так, чтобы каждый клик по кнопке приводил к смене состояния чекбокса.
let check = document.querySelector('input.check');
let but= document.querySelector('#button');
but.addEventListener('click', ()=>{check.checked = !check.checked})


/*
//Дан чекбокс, кнопка и абзац. По нажатию на кнопку, если чекбокс отмечен, выведите в абзац слово 'привет', а если чекбокс не отмечен, то слово 'пока'.<p class="textareaclass">тег текстареа</p>
let check = document.querySelector('input.check');
let but= document.querySelector('#button');
let abz = document.querySelector('p.textareaclass');
but.addEventListener('click', ()=>{if(check.checked){abz.textContent = 'PRIVET';
}else{abz.textContent = 'poka'}})

/*
//Дан чекбокс и две кнопки. По нажатию на первую кнопку установите чекбокс в отмеченное состояние, а по нажатию на вторую - в неотмеченное.
let check = document.querySelector('input.check');
let but= document.querySelector('#button');
let but1= document.querySelector('#button1');
but.addEventListener('click', ()=>{check.checked = true})
but1.addEventListener('click', ()=>{check.checked= !check.checked // false })


/*
//Дан текстареа и абзац. По потери фокуса в текстареа запишите его текст в абзац.
let textar = document.querySelector('textarea');
let abz = document.querySelector('p.textareaclass');
abz.addEventListener('click', ()=> {console.log(textar.disabled)})

abz.addEventListener('click', ()=> {textar.disabled = false;})
textar.addEventListener('blur', function(){
    abz.textContent = textar.value;
    console.log(textar.value)
})
console.log(textar.value)

/*
//Напишите код, который покажет разницу между nextSibling и nextElementSibling
//<h3 class="sibling">xxxx</h3>  <p class="www"> ppp   <input id="inp2" value="сделать жирным">
let sibl = document.querySelector('#elemUzel1')
for(let node of sibl.childNodes){
    console.log(node.nodeType)
}
/*
console.log(sibl.nodeName)
console.log(sibl.parentElement)
console.log(sibl.previousSibling)

/*
let elem = document.querySelector('#parent2');
console.log(elem.firstChild);        // комментарий
console.log(elem.firstElementChild); // тег span



/*
let elements = document.querySelectorAll('ul > li');
for (let elem of elements) {
  console.log(elem.innerHTML); // "тест", "пройден"
}
/*
//Получите все теги li по имени тега и сделайте их текст красного цвета
let lis = document.getElementsByTagName('li')
for(let li of lis){li.classList.add('colored'); console.log(li.textContent)}

/*
//                  глубокое сравнение двух объекта с помощью рекурсии
const person1 = {
    "firstName": "John",
    "lastName": "Doe",
    "age": 35
};

const person2 = {
    "firstName": "John",
    "lastName": "Doe",
    "age": 35,
};

const isDeepEqual = (object1, object2) => {

  const objKeys1 = Object.keys(object1);
  const objKeys2 = Object.keys(object2);

  if (objKeys1.length !== objKeys2.length) return false;

  for (var key of objKeys1) {
    const value1 = object1[key];
    const value2 = object2[key];

    const isObjects = isObject(value1) && isObject(value2);

    if ((isObjects && !isDeepEqual(value1, value2)) ||
      (!isObjects && value1 !== value2)
    ) {
      return false;
    }
  }
  return true;
};

const isObject = (object) => {
  return object != null && typeof object === "object";
};

console.log(isDeepEqual(person1, person2)); //true


/*
function func(arr) {
	for (let elem of arr) {
		if (typeof elem == 'object') {
			func(elem);
		} else {
			console.log(elem);
		}
	}
};func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]);
*/
/*
//С помощью рекурсии выведите все примитивные элементы этого объекта в консоль
let obj3 = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}
function recurcl(obj){
    for(let key in obj){
        if(typeof obj[key] == 'object'){
            recurcl(obj[key])
        }else{console.log(obj[key])}
    }
};recurcl(obj3)

/*
//                    сравнение объектов JSON.stringify(person1)
const person1 = {
    "firstName": "John",
    "lastName": "Doe",
    "age": 35
}
const person2 = {
    "firstName": "John",
    "lastName": "Doe",
    "age": 35
}
console.log(JSON.stringify(person1) === JSON.stringify(person2)); // true
console.log(JSON.stringify(person1)); // {"firstName":" John","lastName":"Doe","age":35}


/*
//Найдите его соседа сверху и добавьте ему в конец текст '!'
//Найдите его соседа снизу и добавьте ему в конец текст '!'
// (следующий элемент за соседним) и добавьте ему в конец текст '!'.
//Поменяйте местами текст его соседа сверху и текст его соседа снизу
let elem = document.querySelector('#elem');
let sibling2 = elem.previousElementSibling
let sibling5 = elem.nextElementSibling.nextElementSibling
let sib = sibling2.textContent
sibling2.textContent = sibling5.textContent
sibling5.textContent = sib
console.log(sib)


/*
//поиск ближайшего родителя с классом .www а так же и соседей
let elem = document.querySelector('#elem');
let abzac = document.querySelector('p.www')
// let parent = elem.closest('.www');
let sibling = abzac.previousElementSibling.textContent
console.log(sibling)
// console.log(parent.textContent);


/*
//Дан элемент #elem: Найдите его родителя и задайте ему красную границу
let elem = document.querySelector('#elem');
let id = elem.parentElement;
id.classList.add('colored')
console.log(id);

/*
//Найдите первого потомка этого элемента и сделайте его текст красного цвета
//Найдите всех потомков этого элемента и добавьте им в конец текст '!'
let elemUlChild = document.querySelector('#elem');
let textChild = elemUlChild.firstElementChild
let textChildLast = elemUlChild.lastElementChild
let textChls = elemUlChild.children
// inp3.addEventListener('click', function(){textChild.classList.add('colored')})
textChild.classList.add('colored')
textChildLast.classList.add('colored')
for(let elemText of textChls){
    elemText.textContent = elemText.textContent + '!!!'
};


/*
//чередование появление и исчезновение элемента со страницы
let button = document.querySelector('#button');
let elem = document.querySelector('#elem');
button.addEventListener('click', function() {elem.classList.toggle('active');});

/*
//Дан абзац. Даны кнопки 'перечеркнуть', 'сделать жирным', 'сделать красным'. Пусть по нажатию на каждую кнопку заданное действие происходит с абзацем (становится красным, например).
//        <p class="sumFak">стилизация с помощью CSS and classList.add</p> <br>
//<input id="inp1" value="перечеркнуть">
//<input id="inp2" value="сделать жирным">
//<input id="inp3" value="сжелать красным">
let list = document.querySelector('p.sumFak');
let inp1 = document.querySelector('#inp1');
let inp2 = document.querySelector('#inp2');
let inp3 = document.querySelector('#inp3');
inp1.addEve
ntListener('click', function(){list.classList.add('fatGuy')})
inp3.addEventListener('click', function(){list.classList.add('colored')})


/*
//после введения класса, по клику на любой абзац можно изменить его цвет, просто добавив ему наш класс:
let elems = document.querySelectorAll('p');
for (let elem of elems) {
	elem.addEventListener('click', function() {this.classList.add('colored'); // добавляем абзацу класс
    });
}

/*
//Дан див и кнопка. По клику на кнопку добавьте диву ширину, высоту и границу.
let btn  = document.querySelector('#btn');
let divData = document.querySelectorAll('div');
btn.addEventListener('click', function(){
    for(let div of divData){
        div.style.color = 'red'; div.style.height = '40px';
        div.style.width = '100px'; div.style.border = '1px solid green';
        div.style.fontSize = '30px'; div.style.backgroundColor = 'blue'
    }
})


/*
//Дан элемент. Добавьте ему класс www, если его нет и удалите - если есть.
//<p id="elem" class="www ggg zzz"> манипулирование CSS классами classList</p>
let elem = document.querySelector('#elem');
elem.classList.toggle('kkk');

/*
//Даны абзацы. Переберите их циклом и каждому абзацу в атрибут data-num запишите порядковый номер этого абзаца. Используйте метод setAttribute.  <p class="sum" data-num>11</p>
let datAtrib = document.querySelectorAll('p.sum');
for(let i=0; i<datAtrib.length; i++){datAtrib[i].setAttribute('data-num', i+1)}


/*
//В этом инпуте в атрибуте data-length содержится количество символов, которое нужно ввести в инпут. Сделайте так, чтобы по потери фокуса, если количество введенных символов не совпадает с заданным, выводилось сообщение об этом.<input id="elem" data-length="5">
let elem = document.querySelector('#elem');
elem.addEventListener('blur', () => {
    if(elem.value.length > elem.dataset.length){alert('length > 5!!!')}else{console.log('ok')}
})

/*
//Дана кнопка. Сделайте так, чтобы эта кнопка считала количество кликов по ней, записывая их в какой-нибудь пользовательский атрибут. <button id="btn" data-click="0">click</button>
let btn  = document.querySelector('#btn');
btn.addEventListener('click', function(){
    btn.dataset.click =  Number(btn.dataset.click) +1
})

/*
//по клику на любой из дивов ему в конец записывался его порядковый номе
//<div data-num="1">text</div>
let divData = document.querySelectorAll('div');
for(let div of divData){
    div.addEventListener('click', function(){div.textContent = div.textContent + div.dataset.num})
}


/*
//чтобы по клику на див в конец его текста добавилось содержимое его атрибута
//<div id="elem" data-num="1000">'это div c пользовательским атрибутом data-num = "1000" '</div>
let elem = document.querySelector('#elem');
elem.addEventListener('click', function(){
    elem.textContent = elem.textContent + ' ! '+ elem.dataset.num
})
// elem.dataset.num = '123z';
console.log(elem.dataset.num);


/*
//<input id="button1" type="submit" value="+1">; Получите значение его атрибута value
//<p class="sumFak">11zzz</p> <br>;  <input id="inp2">
let but1 = document.querySelector('#button1');
let value = but1.getAttribute('value'); let type  = but1.getAttribute('type');
let changAtrib = but1.setAttribute('value', 'z!z!')
let abz = document.querySelector('.sumFak'); let clas = abz.getAttribute('class')
console.log(value);console.log(type);console.log(clas);
console.log(but1.value)
let inp2 = document.querySelector('#inp2');
let elem2 = inp2.setAttribute('type', 'button')
let elem = inp2.setAttribute('value', 'inp2')


/*
// заполнил массив случайными (рандомными) числами. сам писал
let arr = [];
for(let i=0; i<10; i++){let num = Math.floor(Math.random() * 1000);arr.push(num);};console.log(arr)*/
