"use strict";
//По клику на кнопку, если чекбокс отмечен, то должно вывестись одно значение, а если не отмечен - другое
/*let checkbox = document.querySelector('input');
let button = document.querySelector('button');let div = document.querySelector('div');
button.addEventListener('click', function() {
	if (checkbox.checked == true) {console.log('+++');} else{console.log('---');}
});*/


//По нажатию на кнопку добавьте в конец текста выбранного пункта восклицательный знак.
//button.addEventListener('click', function(){let option=select.selectedIndex;select[option].text+='!!!'})
//Дан селект и кнопка.По нажатию на кнопку выведите на экран текст отмеченного пункта списка
/*let select = document.querySelector('#select');let button = document.querySelector('#button')
button.addEventListener('click', function(){let option=select.selectedIndex;console.log(select[option].text)
    //console.log(select[select.selectedIndex].text)
})*/


//let option = select[select.selectedIndex=0];
//option.selected = true;
//сделайте отмеченным последний пункт списка.
//console.log(select[select.selectedIndex=11])

//Переберите всепункты спискациклом и вконец текста каждогопункта добавьте значение его атрибутаvalue
/*let select = document.querySelector('#select')
for(let elem of select){elem.text+=elem.value}*/


//Сделайте выпадающий список с названиями дней недели. Сделайте так, чтобы по JavaScript 
//по умолчанию выбирал в этом списке текущий день
//let select = document.querySelector('#select');
//let date= new Date();select.selectedIndex=date.getDay();select.value='1'


//В инпут вводится какое-то число. По потери фокуса сделайте выделенным пункт списка
//, номер которого равен значению из инпута
/*let elem   = document.querySelector('#elem');//let select = document.querySelector('#select');
elem.addEventListener('blur', function(){select.selectedIndex=elem.value})


//Сделайте выпадающий список с названиями месяцев. Сделайте так, чтобы JavaScript
//по умолчанию выбирал в этом списке текущий месяц
//let date=new Date;select.value=date.getMonth()+1//выбирает валуе с цифрой 4
/*let arr=[];let select = document.querySelector('#select');
for(let elem of select){arr.push(elem.value)}
let date=new Date;let month=date.getMonth();select.value =arr[month];*/


/*select.addEventListener('change', function(){
    if(select.value==1 || select.value==7){ console.log('выходной')}else{console.log('будний')}
	//console.log(this.value); 
});

//Сделайте выпадающий список годов от 2020 до 2030. При выборе какого-нибудь пункта списка выведите 
//сообщение о том, високосный этот год или нет.
//let select = document.querySelector('#select');
//select.addEventListener('change', function(){if(this.value===2022){console.log('!!!')}else{console.log('ok')}})


//Дан селект, абзац и кнопка. По клику на кнопку выведите текст выбранного пункта списка в абзац.
/*let text1= document.querySelector('#text1')
let button = document.querySelector('#button');let select = document.querySelector('#select');
button.addEventListener('click', function(){ text1.innerHTML=select.value})


//Даныдва инпута.Сделайте так,чтобы послеввода двух символов фокусввода переходил ковторому инпуту,
/// а после ввода двух символов в этот инпут - фокус из него убирался
/*let elem1   = document.querySelector('#elem1');let elem   = document.querySelector('#elem');
elem.addEventListener('input', function() {if(elem.value.length>=2){elem1.focus()}});
elem1.addEventListener('input', function() {if(elem1.value.length>=2){elem1.blur()}});*/


//Дан инпут.Пусть внего вводитсятекст.Кактолько длинатекста достигнет5-ти, выведите наэкран сообщение обэтом
/*let elem = document.querySelector('#elem')
elem.addEventListener('input', function(){if(this.value.length ==5){alert('5'); elem.disabled=true}})*/


//Дан инпут. Поего изменению проверьте, количество символов внем меньше5-ти или нет. Если меньше -
// покрасьте границу инпута в зеленый цвет, аесли больше - в красный
//Дан чекбокс. По изменению чебокса выведите на экран его новое состояние
/*let elem = document.querySelector('#elem');
//elem.addEventListener('change', function() {console.log(elem.checked)});
elem.addEventListener('change', function() {
    if(elem.value.length>5){elem.classList.add('colored')}console.log(elem.value.length)
});*/


//Дан инпут и абзац. По изменению инпута выведите его текст в абзац
/*let text= document.querySelector('#text1')
let elem = document.querySelector('#elem');
elem.addEventListener('change', function() {text.innerHTML=elem.value;});*/


//Даны 3радиокнопки, абзац икнопка.Поклику накнопку выведите вабзац value отмеченной радиокнопки
/*let radios = document.querySelectorAll('input[type="radio"]');
let button = document.querySelector('#button');
let text= document.querySelector('#text1')
button.addEventListener('click', function() {radio.disabled = true;;
	for (let radio of radios) {if (radio.checked) {radio.disabled = true;//text.innerHTML = radio.value;}}
});*/

//каждое нажатие накнопку приводило ксмене состояния кнопки-с заблокированного на разблокированное инаоборот
//Дан чекбокс и кнопка.Сделайте так,чтобы каждыйклик покнопке приводил ксмене состояния чекбокса
//let elem   = document.querySelector('#elem');let button = document.querySelector('#button');
//button.addEventListener('click', function() {elem.disabled = !elem.disabled;})
//button.addEventListener('click', function() {if(elem.checked){elem.checked=false}else{elem.checked=true};})
//button.addEventListener('click', function() {elem.checked= !elem.checked;})


/*let elem=document.querySelector('#elem');let btnplus=document.querySelector('#btn1')
let btnminus=document.querySelector('#btn2')
btnplus.addEventListener('click', function(){elem.checked = true})
btnminus.addEventListener('click', function(){elem.checked = false;console.log(elem.checked)})*/


//Дан инпут и кнопка. По нажатию на кнопку заблокируйте инпут
/*let inp = document.querySelector('#inp');let btnplus=document.querySelector('#btn1')
btnplus.addEventListener('click', function(){inp.disabled = true;console.log(inp.disabled)})*/


//Дан текстареа и абзац. По потери фокуса в текстареа запишите его текст в абзац.
/*let text = document.querySelector('#text1');let textarea=document.querySelector('textarea')
textarea.addEventListener('blur', function(){text.innerHTML=textarea.value})*/

//Дан инпут, кнопка и абзац. Винпут вводится температура в градусахФаренгейта.Поклику на 
//кнопку выведите в абзац температуру в градусах Цельсия
/*let inp = document.querySelector('#inp');let text = document.querySelector('#text1')
let btnplus=document.querySelector('#btn1');btnplus.addEventListener('click', func)
function func(){text.innerHTML=((+inp.value-32)*5/9);return text}*/

//Дан инпут.Внего вводитсячисло.Попотери фокуса проверьте,что в нем лежитчисло от1 до100
//Еслиэто так-покрасьте инпут в зеленый цвет, аесли не так -в красный.
/*let inp = document.querySelector('#inp')
inp.addEventListener('blur', function(){
    if(+inp.value>1 && +inp.value <100){inp.classList.add('colored')
    }else{inp.style.backgroundColor='green'}
})*/

//N18 На странице есть дивы.Вcих есть текст.Обойдите вседивы и обрежьте тоттекст, который
//вних стоит так,чтобы онстал длиной 10символов.И добавьте троеточие вконец обрезанноготекста
/*let text = document.querySelectorAll('div')
for(let elem of text){if(elem.textContent.length>10){elem.textContent=elem.innerHTML+'!!!'}}*/


//Дан инпут. Даны абзацы. Пусть в этот инпут записывается суммарное количество нажатий по этим абзацам
/*let inp = document.querySelector('#inp')
let text = document.querySelectorAll('p')
for(let elem of text){elem.addEventListener('click', function(){inp.value= +inp.value +1})}*/

//Дан инпут. Реализуйте кнопочки +1, -1, которые будут увеличивать или уменьшать на 1 значение инпута.
//Сделайте так, чтобы это значение не могло стать меньше нуля
//let inp = document.querySelector('#inp')
/*let btnplus=document.querySelector('#btn1');let btnminus=document.querySelector('#btn2')
btnplus.addEventListener('click', function(){inp.value=Number(inp.value)+1})
btnminus.addEventListener('click', function(){inp.value=Number(inp.value)-1
    if(Number(inp.value)<0){inp.value= Number(0)}//inp.value= Number(inp.value)+1
})*/

//Дан инпут. Внего вводитсядата вформате 31.12.2016. Попотери фокуса узнайте деньнедели (словом)
//, который приходится на эту дату
/*let inp = document.querySelector('#inp')
inp.addEventListener('blur', function(){
    let date =new Date(inp.value.split('.').reverse().join(',')); 
    let day  = date.getDay();//метод выводит номер цифрой дня недели
    let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    console.log(days[day]) 
})

//N14 Дан несколько абзацев с числами. По нажатию на любой абзац запишите в него 
//квадрат числа, которое в нем находится
//let press=document.querySelectorAll('p')
/*for(let elem of press){elem.addEventListener('click', function(){elem.innerHTML=elem.innerHTML**2})}*/
//for(let i=0; i<press.length; i++){press[i].addEventListener('click', func)}
//function func(){this.innerHTML=this.innerHTML**2}
//сам писал ошибка зис сразу все считает
/*function func(){for(let elem of press){elem.innerHTML=elem.innerHTML**2}}
this.addEventListener('click', function(){func()}) */

//Даныссылки.Еслиссылка начинается с http://,тодобавьте ей вконец стрелку → (делается так: &rarr;)
//Даны ссылки. Добавьте в конец каждой ссылки ее href в круглых скобках
//<a class="link" href="https://www.google.com" target="blanc">ссылкаGooGle</a>
//<a class="link" href="https://yandex.ru" target="blanc">ссылка Ya</a>
//let links=document.querySelectorAll('a')
//for(let elem of links){elem.innerHTML=elem.innerHTML+'('+elem.innerHTML+')'}
/*function start() {
	for (let i = 0; i < links.length; i++) {
		if (links[i].href.indexOf('http://') == 0) {links[i].innerHTML = links[i].innerHTML + 'стрелка';}
	}
} */   


//N11 Данынесколько абзацев икнопка.Понажатию накнопку запишите вконецкаждого абзаца егопорядковыйномер
/*let text = document.querySelectorAll('p')
let btn = document.querySelector('#btn')
btn.addEventListener('click', function(){for(let i=0; i<text.length; i++)
    {text[i].innerHTML+= (i+1); console.log(text[i].textContent)}
})*/


//Дан инпут.В yего вводится число.Проверьте попотерифокуса, чтоэточисло содержитвнутри себя цифру3
//let inp = document.querySelector('#inp')
//inp.addEventListener('blur', function(){let rev=inp.value.indexOf(3);console.log(rev)})
/*inp.addEventListener('blur', function(){let three=inp.value.split("");
    three.some(function(elem){if(elem=='3'){console.log('eсть 3')}})
})*/

//Дан инпут. В него вводится слово. По нажатию на кнопку проверьте то, что это слово 
//читается с начала и с конца одинаково (например, мадам)
/*let inp = document.querySelector('#inp')
inp.addEventListener('blur', function(){
    let rev=inp.value.split("").reverse().join('')
    if(inp.value===rev){console.log('ok') }else{console.log('!!!')} 
})*/ 


//N8 Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса в этом же 
//инпуте поставьте эту дату в формате 2016-12-31
/*let inp = document.querySelector('#inp')
inp.addEventListener('blur', function(){inp.value=inp.value.split(".").reverse().join('-');})*/


//Дан инпут. В него вводится текст. По потери фокуса узнайте количество слов в этом тексте
/*let inp = document.querySelector('#inp')
inp.addEventListener('blur', function(){let arr=inp.value.split(" ");console.log(arr.length)})*/


//N5 Даны 4 инпута. В первый инпут вводится ФИО через пробел. По потери фокуса запишите 
//фамилию, имя и отчество в остальные 3 инпута
//let inp1 = document.querySelector('#inp1');let inp = document.querySelector('#inp')
//let inp2 = document.querySelector('#inp2');let inp3 = document.querySelector('#inp3');
/*inp.addEventListener('blur', function(){
    //let arr=inp.value.split(" ")
   // arr[0]=arr[0][0].toUpperCase()+arr[0].slice(1)
   // arr[1]=arr[1][0].toUpperCase()+arr[1].slice(1)
   // arr[2]=arr[2][0].toUpperCase()+arr[2].slice(1)
   // inp.value= arr[0]+arr[1]+arr[2]  
})*/

//var elem = document.getElementById('input');
//elem.addEventListener('blur', bigLetter);
/*function uswords(str) {
	var arr = str.split(' ');
	for (var i = 0; i < arr.length; i++) {
		arr[i] = arr[i].split('');
		arr[i][0] = arr[i][0].toUpperCase();
		arr[i] = arr[i].join('');
	}
	str = arr.join(' ');
	return str;
}
function bigLetter() {
	elem.value = uswords(elem.value);
}  */

//Дан инпут. В него вводятся числа через запятую. По потери фокуса найдите среднее арифметическое этих чисел
/*let inp = document.querySelector('#inp')
inp.addEventListener('blur', function(){let sum =0;let arr=inp.value.split(",");
    for(let elem of arr){sum+= +elem;inp.value=sum/arr.length;} 
})*/


//Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа
/*let inp = document.querySelector('#inp')
inp.addEventListener('blur', function(){let sum =0;let num= +inp.value
    while(num){let digit= num%10;sum+=digit;num=parseInt(num/10);inp.value=sum}console.log(sum)  
})*/
/*inp.addEventListener('blur', function(){let sum =0;let arr=inp.value.split("");
   for(let elem of arr){sum+= +elem;inp.value=sum;}console.log(sum)
})*/


//Дано несколько инпутов, абзац и кнопка. По нажатию на кнопку получите числа, 
//стоящие в этих инпутах и запишите их сумму в абзац
//<p id="res">qwerty</p>;<input id="inp">;<input id="inp1">;<button id="btn">click</button>
/*let inp = document.querySelector('#inp');let text = document.querySelector('#res')
let inp1 = document.querySelector('#inp1');let btn = document.querySelector('#btn')
btn.addEventListener('click', function(){let sum =0;sum= +inp.value+ parseInt(inp1.value);
    text.innerHTML=sum
})

//Дан инпут и абзац. По потери фокуса в инпуте запишите значение инпута в конец текста абзаца.
/*let inp = document.querySelector('#inp')
let text = document.querySelector('#res')
inp.addEventListener('blur', function(){
    text.textContent=text.textContent + inp.value //text.innerHTML
})*/

//В инпут вводится число. По потери фокуса в консоль должна вывестись сумма цифр этого числа
//let inp = document.querySelector('#inp');
/*inp.addEventListener('blur', function() {
	let digits = inp.value.split('');let sum = 0;
	for (let digit of digits) {sum += +digit;};console.log(sum);
});*/

/*inp.addEventListener('blur', function() {
    let sum = 0;
	let digits = +inp.value;
    while(digits){
    const lastDigits=digits%10;
    sum += lastDigits
    digits=digits/10;
    }console.log(sum)
})*/

//В первые два инпута вводятся числа. По клику на кнопку в третий инпут должна вывестись сумма этих чисел
/*let btn  = document.querySelector('#btn');let inp1 = document.querySelector('#inp1');
let inp2 = document.querySelector('#inp2');let inp3 = document.querySelector('#inp3');
btn.addEventListener('click', function() {inp3.value = +inp1.value + +inp2.value;});*/


//В инпуты вводятся числа. По клику на кнопку в консоль должна вывестись сумма введенных чисел
/*let inputs = document.querySelectorAll('input');
let btn = document.querySelector('#btn');let sum = 0;
btn.addEventListener('click', function() {for (let input of inputs) {sum += Number(input.value);}
	console.log(sum);
});*/

//По клику на кнопку нужно проверить, что текст в каждом инпуте совпадает с текстом 
//соответствующего элемента массива
/*let inputs = document.querySelectorAll('input')
let button = document.querySelector('#btn');let texts = ['text1','text2','text3'];
button.addEventListener('click',function() {
	for (let input of inputs) {
		for (let text of texts) {
			if (input.value === text) {input.classList.add('right');break
			} else {input.classList.add('wrong')}
		}
	}
});*/


//По клику на кнопку нужно проверить, что текст в каждом инпуте совпадает с текстом его data атрибутa
/*let inputs = document.querySelectorAll('input');let button = document.querySelector('#btn')
button.addEventListener('click',function() {
	for (let input of inputs) {if (input.value === input.dataset.text) 
        {input.classList.add('right')} else {input.classList.add('wrong')}
	}
});*/


//В первые два инпута вводятся числа. По клику на кнопку в абзац должна вывестись сумма этих чисел
/*let btn  = document.querySelector('#btn');let res  = document.querySelector('#res');
let inp1 = document.querySelector('#inp1');let inp2 = document.querySelector('#inp2');
btn.addEventListener('click', function() {res.innerHTML = +inp1.value +  parseInt(inp2.value);});*/


//В первые два инпута вводятся числа. По клику на кнопку в третий инпут должна вывестись сумма этих чисел
/*let btn  = document.querySelector('#btn');let inp1 = document.querySelector('#inp1');
let inp2 = document.querySelector('#inp2');let inp3 = document.querySelector('#inp3');
btn.addEventListener('click', function() {inp3.value = +inp1.value + +inp2.value});*/


//В инпуты вводятся числа. По клику на кнопку в консоль должна вывестись сумма чисел из инпутов
/*let button = document.querySelector('button');
let elems  = document.querySelectorAll('input');
let sum = 0;
button.addEventListener('click', function() {for (let elem of elems){sum += +elem.value;}console.log(sum);}); */


//По клику на кнопку в консоль должна вывестись сумма чисел из абзацев
/*let button = document.querySelector('button');
let elems  = document.querySelectorAll('p');
let sum = 0;
for (let elem of elems) {sum += +elem.textContent;
	button.addEventListener('click', function() {console.log(sum);});
}*/


//По клику на кнопку текст каждого абзаца должен стать жирным:
/*let button = document.querySelector('button');
let elems  = document.querySelectorAll('p');
button.addEventListener('click', function() {
	for (let elem of elems) {elem.innerHTML = '<b>'+  elem.innerHTML +  '</b>';}
//По клику на абзац ему в конец должен добавиться заданный текст:
/*let elems = document.querySelectorAll('p');
for (let elem of elems) {
	elem.addEventListener('click', () => {elem.textContent = elem.textContent+ '!';});
}*/

//По клику на кнопку должна вывестись сумма чисел из абзацев
/*let button = document.querySelector('button');
let elems  = document.querySelectorAll('p');
button.addEventListener('click', function() {let sum = 0;
	for (let elem of elems) {sum += parseInt(elem.textContent);}console.log(sum); 	
});*/


//По клику на кнопку текст абзаца должен стать жирным:
//<p>text</p>;  <button>click</button>
/*let button = document.querySelector('button');
let elem   = document.querySelector('p');
button.addEventListener('click', function() {elem.innerHTML = '<b>text</b>';});*/


//По клику на абзац его значение должно увеличиться на единицу:
/*let elems = document.querySelectorAll('p');
for (let elem of elems) {
	elem.addEventListener('click', function() {this.textContent =Number(elem.textContent) + Number(1);});
}*/

//Код должен добавить текст в конец каждого абзаца:
/*let elems = document.querySelectorAll('p');
for(let elem of elems){elem.textContent += '!';}*/


//Получите года, сумма цифр которых равна 6. Найдите сумму полученных годов.
/*let elems = document.querySelectorAll('li');
for (let elem of elems) {
}console.log(sum)

function func(num){
    let sum=0
    let arr=num.split("")
    for(let elem of arr){
        sum+= +elem
      
    } return num
}console.log(func('2004'))*/


//Переберите циклом все узлы этого дива и каждому узлу в конец запишите его тип.
//<div id="elem">txt<b>tag</b><!--com-->txt<b>tag</b><!--com--></div>
/*let elem = document.querySelector('#elem');
for (let node of elem.childNodes) {node.textContent=node.textContent+node.nodeType;
    let res= node.textContent;console.log(res)
}*/


//Переберите циклом все узлы этого дива и выведите их в консоль
/*let elem = document.querySelector('#elem');
//console.log(elem.childNodes[0]);
//console.log(elem.childNodes[1]);
//console.log(elem.childNodes[2]);
for (let node of elem.childNodes) {console.log(node);}
console.log(elem.firstChild);        // комментарий
console.log(elem.firstElementChild);*/ // тег span


//Даны абзацы. Переберите их циклом и каждому абзацу в атрибут data-num запишите 
//порядковый номер этого абзаца. Используйте метод setAttribute.<p data-num="">textsetAttribute</p>
/*let elems=document.querySelectorAll('.atrib')
for(let i=0; i<elems.length; i++){elems[i].setAttribute('data-num', i+1)}*/


//по клику на див в конец его текста добавлялась стоимость покупки, равная цене, 
//умноженной на количество.
//<div id="elem" data-product-price="1000" data-product-amount="5">товар яблоки</div>
/*let elem=document.querySelector('#elem')
elem.addEventListener('click', function(){
    elem.innerHTML+=elem.dataset.productPrice*elem.dataset.productAmount
})*/


//В этом инпуте в атрибуте data-length содержится количество символов, которое нужно 
//ввести в инпут. Сделайте так, чтобы по потери фокуса, если количество введенных символов 
//не совпадает с заданным, выводилось сообщение об этом.
//<input id="elem" data-length="5">
/*let elem=document.querySelector('#elem')
//elem.style.value=""
elem.addEventListener('blur', function(){
    if(elem.value.length!=elem.dataset.length){alert('введите 5 символов')}
})*/

//Дана кнопка. Сделайте так, чтобы эта кнопка считала количество кликов по ней, 
//записывая их в какой-нибудь пользовательский атрибут. Пусть по двойному клику на 
//эту кнопку на экран выводится, сколько кликов по этой кнопке было сделано.
//<button class="button" data-click="">счетчик нажатий</button>
/*let btn=document.querySelector('.button')
let sum=0
btn.addEventListener('click', function(){
    btn.dataset.click=Number(btn.dataset.click) + 1
    sum=btn.dataset.click
})
btn.addEventListener('dblclick', function(){alert(sum-2)})*/


//по клику на любой из дивов ему в конец записывался его порядковый номер.
//<div data-num="1">text555</div>;<div data-num="2">text555</div>
/*let elems=document.querySelectorAll('div')
for(let elem of elems){elem.addEventListener('click', ()=>elem.innerHTML+=elem.dataset.num)}*/


//по клику на див в конец его текста добавилось содержимое его атрибута data-text.
//<div id="elem" data-text="str">text</div>
/*let elem=document.querySelector('#elem')
elem.addEventListener('click', ()=>elem.innerHTML+=elem.dataset.text)//без переменной data
//let data=elem.dataset.text
//elem.addEventListener('click', ()=>elem.innerHTML+=data)*/


//получить все элементы с классом методом класснейм
/*let elems=document.getElementsByClassName('wwww')
for(let elem of elems){//elem.classList.add('colored')
    //console.log(elem.innerHTML);elem.style.color = 'red';
}*/

//Получите этот элемент с помощью метода getElementById и установите ему какой-нибудь текст.
//<div id="elem">2222222</div>
/*let elem=document.getElementById('elem')
elem.innerHTML='получил с помощью getElementById'
elem.classList.add('colored')
//elem.style.color = 'red';
//elem.setAttribute('style', 'color:red')*/


//Найдите его соседа сверху и добавьте ему !.сделать красным поменять местами
/*let elem = document.querySelector('#elem');
let textsosed=elem.previousElementSibling
let textdoun=elem.nextElementSibling
let change=textsosed.innerHTML
//text.innerHTML=text.innerHTML+'1'
//textsosed.classList.add('colored') 
//textsosed.innerHTML=textdoun.innerHTML
//textdoun.innerHTML=change*/


/*let elem = document.querySelector('#elem');
let id = elem.parentElement.parentElement.id;
let idd=elem.parentElement.id
console.log(idd);*/

//Найдите всех потомков этого элемента и добавьте им в конец текст '!'.
/*let parent = document.querySelector('#elem');
let elems=parent.children
parent.classList.add('colored')
//console.log(parent)
//console.log(elems[0])
for(let elem of elems){
    elem.innerHTML=elem.innerHTML + '!!!'
}*/

//Найдите первого потомка этого элемента и сделайте его текст красного цвета.
/*let elem = document.querySelector('#elem');
let first = elem.firstElementChild//.innerHTML
first.classList.add('colored')
console.log(first)*/
//let parent = document.querySelector('#elem');
//let elems=parent.children
//elems[0].classList.add('colored')
//console.log(elems[0])


//Дан абзац. Даны кнопки 'перечеркнуть', 'сделать жирным', 'сделать красным'. 
//Пусть по нажатию на каждую кнопку заданное действие происходит с абзацем 
//Модифицируйте предыдущую задачу так, чтобы повторное нажатие на кнопку
// отменяло действие этой кнопки.
/*let elems = document.querySelector('p');
let button12=document.querySelector('#button12')
let button11=document.querySelector('#button11')
let button=document.querySelector('.btn')
button12.addEventListener('click', function() {
    elems.classList.toggle('colored'); // добавляем абзацу класс
});
button11.addEventListener('click', function() {
    elems.classList.add('fatty'); // добавляем абзацу класс
});
button.addEventListener('click', function() {
    elems.classList.add('cross'); // добавляем абзацу класс
});8?


/*for (let elem of elems) {
	elem.addEventListener('click', function() {
		this.classList.add('colored'); // добавляем абзацу класс
	});
}

/*let elemt=document.querySelector('ul')
let button=document.querySelector('#button11')
button.addEventListener('click', function(){
    elemt.style.cssFloat='right';
    elemt.style.color = 'green';

})*/


/*let elemt=document.querySelector('#elemt')
//elemt.style.color = 'red';
let button=document.querySelector('#button11')
button.addEventListener('click', function(){
    elemt.style.width='60px';
    elemt.style.border='2px solid black' ;
    elemt.style.height='60px';
    elemt.style.fontSize='20px'
    elemt.style.backgroundColor='red'

})*/
/*let elemr=document.querySelector('#elemr')
let button=document.querySelector('#button11')
button.addEventListener('click', function(){
    elemr.value='oldnew'
    //elemr.setAttribute('value', 'new')
})*/


//По нажатию на любой из абзацев добавьте ему в конец восклицательный знак. 
//Сделайте так, чтобы это добавление происходило лишь по первому нажатию.
/*let elems= document.querySelectorAll('p')
for(let elem of elems){elem.addEventListener('click', func)}
function func(){this.innerHTML=this.innerHTML+'!!!';
    this.removeEventListener('click', func)
}*/

//После того, как значение кнопки достигнет 10 - отвяжите обработчик события, 
//чтобы кнопка больше не реагировала на нажатие
/*let button = document.querySelector('.button');
button.addEventListener('click', func);
function func(){
    button.value= Number(button.value)+1;
    if(button.value>=13){this.removeEventListener('click', func)} 
}*/


/*let button = document.querySelector('#button');
button.addEventListener('click', func);
function func() {alert('!!!');
	this.removeEventListener('click', func);
}*/


//нажатию на эту ссылку добавьте вконец ее текста содержимое ее атрибута href 
//в круглых скобках. Сделайте так, чтобыэто добавление происходило лишьпо первому нажатию.
//<a class="link" href="https://www.google.com">ссылка</a>
/*let link=document.querySelector('.link')
link.addEventListener('click', func)
function func(){
    link.innerHTML=link.innerHTML+ '('+link.href+')';
    this.removeEventListener('click', func)
}

//чтобы по клику на любой абзац его число в нем возводилось в квадрат.
/*let text=document.querySelectorAll('p')
function func(){//this.innerHTML=Number(this.innerHTML)**2
    this.innerHTML=this.innerHTML**2
}for(let elem of text){elem.addEventListener('click', func)}


//чтобы по потери фокуса в любом из наших инпутов выполнялась приведенная выше функция.
//<input id="elemt" value="111">;<input id="elemt" value="222"></input>
/*function func() {this.value = Number(this.value) + 1;}
let elems=document.querySelectorAll('#elemt')
for(let elem of elems){elem.addEventListener('blur', func)}*/

/*let elems = document.querySelectorAll('p');
for (let elem of elems) {elem.addEventListener('click', func);}
function func() {alert(this.innerHTML);} // выводим текст абзаца
/*function func() {alert('!');}


//По нажатию на кнопку найдите сумму чисел из инпутов и запишите эту сумму в текст абзаца.
//<input id="elemk" value="11">
//<input id="elemk" value="22">
   // <p class="textk">text</p>
   // <input id="button1k" type="submit"></input>
/*let elems = document.querySelectorAll('#elemk')
let text=document.querySelector('.textk')
let button1=document.querySelector('#button1k')
let sum=0
for(let elem of elems){sum+=Number(elem.value)}
button1.addEventListener('click', function(){text.innerHTML=sum })*/


//По нажатию на кнопку найдите все абзацы, переберите из циклом
// и установите текст каждого абзаца в значение 'text'.
/*let elems = document.querySelectorAll('.www');
let button = document.querySelector('#button')
button.addEventListener('click', func)
function func(){for (let elem of elems) {elem.innerHTML = 'UUUUU';}}
/*button.addEventListener('click', function(){for (let elem of elems) {elem.innerHTML = 'RRRRRR';}})


/*let text1 = document.querySelector('.text1');
let text2 = document.querySelector('.text2');
text1.addEventListener('click', func);
text2.addEventListener('click', func);
function func(){
    //console.log(this)
	this.innerHTML=this.innerHTML + '!!!';
};

/*let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let button3 = document.querySelector('#button3');
button1.addEventListener('click', func);
button2.addEventListener('click', func);
button3.addEventListener('click', func);
function func() {
	console.log(this.value);
}


//Сделайте так, чтобы по клику на эту кнопку ее значение каждый раз увеличивалось на единицу.
//<input class="button" type="submit" value="1">
/*let button=document.querySelector('.button')
button.addEventListener('click', function(){this.value=Number(this.value)+1})*/

//По получению фокуса этим инпутом запишите внего число1,а по потери фокуса-число2
//<input id="elem" value="text">
/*let elem = document.querySelector('#elem')
elem.addEventListener('blur', func)
elem.addEventListener('focus', function(){this.value='1'})
elem.addEventListener('blur', function(){ this.value='2'})*/

//По нажатию на кнопку получите массив CSS классов нашего дива.
//<div id="elem" class="aaa bbb ccc"></div>
//<input class="button" type="submit">
/*let elem = document.querySelector('#elem');
let button=document.querySelector('.button')
button.addEventListener('click', function(){
    //let res=elem.className; //let result=res.split(" ")
    //let result=elem.className.split(" "); //console.log(result);
    console.log(elem.className.split(" "));
})*/


//По получению фокуса запишите в него число 1, а по потери фокуса - число 2.
//По получению фокуса инпутом очистите содержимое этого инпута.
//По потери фокуса выведите на экран квадрат этого числа.
/*let elem = document.querySelector('#elem');
elem.addEventListener('focus', function() {
	//elem.value=""
    //elem.value=elem.value**2
})*/
/*elem.addEventListener('blur', function() {elem.value=elem.value**2})*/

//В инпут вводятся числа. По нажатию на кнопку запишите 
//sum введенных чисел в абзац.
/*let elem1 = document.querySelector('.elem1');
let elem2 = document.querySelector('.elem2');
let button=document.querySelector('.button')
let text=document.querySelector('.text')
button.addEventListener('click', function(){
    text.innerHTML=Number(elem1.value) + Number(elem2.value)
})*/


//По нажатию на кнопку запишите в первый инпут значение второго инпута, 
//а во второй инпут - значение первого
/*let elem1 = document.querySelector('.elem1');
let elem2 = document.querySelector('.elem2');
//let elem3= elem1.value
let button=document.querySelector('.button')
button.addEventListener('click', function(){
    let elem3= elem1.value
    if( elem1.value=elem2.value){elem2.value=elem3 }
    //elem1.value=elem2.value;
    //elem2.value=elem3
})*/


/*let elem = document.querySelector('#elem');
let button=document.querySelector('.button')
let text=document.querySelector('.text')
button.addEventListener('click', function(){
    //alert(elem.value); elem.value='aaaa';
    text.innerHTML = elem.value
})


//нажатию на первую кнопку запишите в атрибут src путь к первой картинке
//а по нажатию на вторую - путь ко второй картинке.
/*let icon=document.querySelector('.icon')
let button1=document.querySelector('.button1')
let button2=document.querySelector('.button2')
button1.addEventListener('click', function(){icon.src= src="images/icon.png"})
button2.addEventListener('click', function(){icon.src= src="images/часы.jpg"})*/


//по клику на кнопку в абзац записался путь к картинки из ее атрибута src.
//<img class="icon" src="images/icon.png" alt="">
//<input class="button" type="submit">
//<p class="text">text</p>
/*let text=document.querySelector('.text')
let icon=document.querySelector('.icon')
let button=document.querySelector('.button')
button.addEventListener('click', function(){
    text.innerHTML=icon.src
    icon.width=icon.width*2
})*/


//По нажатию на кнопку добавьте в конец текста ссылки содержимое 
//ее атрибута href в круглых скобках.
//<input class="button" type="submit">
//<a class="link" href="https://www.google.com">ссылка</a>
/*let button=document.querySelector('.button')
let link= document.querySelector('.link')
button.addEventListener('click', function(){
    link.innerHTML=link.innerHTML + '(' + link.href+')'
})*/


//<input class="button" type="submit">
    //<a class="link" href="https://www.google.com">ссылка</a>
    //<p class="text">text</p>
//По нажатию на кнопку выведите в абзац содержимое атрибута href ссылки.
/*let button=document.querySelector('.button')
let text=document.querySelector('.text')
let link= document.querySelector('.link')
button.addEventListener('click', function(){text.innerHTML= link.href})*/



//<input id="elem" type="email">
//<input class="button" type="submit">
/*let elem= document.querySelector('#elem')
let button=document.querySelector('.button')
button.addEventListener('click', function(){
    //elem.type='submit'
    //alert(elem.type)
})*/



/*let button1 = document.querySelector('.button1')
let text = document.querySelector('.text')
button1.addEventListener('click', function(){
    //let res=0
    //res=Number(text.innerHTML)
    //alert(res**2)
    //alert(text.innerHTML=Number(text.innerHTML)**2)
    alert(text.innerHTML ='<b>жирный текст</b>')
})*/


/*let button1 = document.querySelector('.button1')
let button2 = document.querySelector('.button2')
let elem1 = document.querySelector('.elem1')
let elem2 = document.querySelector('.elem2')
button1.addEventListener('click', function(){
    alert(elem1.innerHTML)
})
button2.addEventListener('click', function(){
    alert(elem2.innerHTML)
    //let sum = elem2.innerHTML='!!!';
    //alert(sum)
})*/


/*//let sum=0
let button = document.querySelector('.button')
let elem1 = document.querySelector('.elem1')
let elem2 = document.querySelector('.elem2')
button.addEventListener('click', function(){
    //sum=Number(elem1.innerHTML)+Number(elem2.innerHTML)
    //alert(sum)
    //return sum
    alert(Number(elem1.innerHTML)+ Number(elem2.innerHTML))
})*/


/*let button1 = document.querySelector('#button1');
button1.addEventListener('click', function() {
	alert('нажал один');
});
button1.addEventListener('click', function(){
    alert(2)
})
button1.addEventListener('click', function(){
    alert(3)
})*/

/*function func() {alert('message');}
let elem3 = document.querySelector('#elem3')
let elem4 = document.querySelector('#elem4')
let elem5 = document.querySelector('#elem5')
elem3.addEventListener('click', func)
elem5.addEventListener('mouseover', func)
elem5.addEventListener('mouseover', func2)*/


//let button2 = document.querySelector('#button2')
//button2.addEventListener('click', func2)
/*function func2() {
	alert('2');
}*/

/*let button1 = document.querySelector('#button1');
button1.addEventListener('mouseover', function() {
	alert('навел на кнопку');
});*/

/*let button = document.querySelector('#button');
button.addEventListener('click', function() {
	alert('!!!');
});*/

/*let www = document.querySelector('p.www')
console.log(www)

let block= document.querySelector('.block p')
console.log(block)

/*let elem = document.querySelector('#parent input');
console.log(elem);

/*let elem1= document.querySelector('#elem1')
console.log(elem1)*/

/*let button = document.querySelector('#button');
console.log(button);*/
