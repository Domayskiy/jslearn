"use strict";


let table = document.querySelector('#table');

for (let row of table.rows) {
	console.log(row.cells.length);
}
/*
let table = document.querySelector('#table');

    for (let i = 0; i < table.rows.length; i++) {
      let row = table.rows[i];
      row.cells[i].style.backgroundColor = 'red';
    }



//Чередование стилей активации
/*let tds = document.querySelectorAll('#table td');
let color = 'color1';
for (let td of tds) {
	td.addEventListener('click', function() {
		if (color == 'color1') {color = 'color2'} else {color = 'color1'}
		this.classList.add(color);
	});
}
*/

//чтобы по клику на любую ячейку в красный фон красились все ячейки  and этой колонки
/*
let table=document.querySelector('#table')
let trs=document.querySelectorAll('tr')
let tds=document.querySelectorAll('td')
let td1=document.querySelectorAll('td[data-col="1"]')
let td2=document.querySelectorAll('td[data-col="2"]')

for(let td of tds){
	td.addEventListener('click', function(event){
		
		for(let elem of tds){
			if(elem.dataset.col==1){
				elem.classList.add('color1')
				//elem.innerHTML='1'	
			}
			
		}
		for(let elem of td2){
			if(elem.dataset.col==2){
				elem.classList.add('color1')	
			}
		}

	})
}

/*
for(let td of td2){
	td.addEventListener('click', function(event){
		
		for(let elem of td2){
			if(elem.dataset.col==2){
				elem.classList.add('color1')	
			}
		}
	})
}	



////чтобы по клику на любую ячейку в красный фон красились все ячейки
/*
let table=document.querySelector('#table')
let trs=document.querySelectorAll('tr')
let tds=document.querySelectorAll('td')
for(let td of tds){
	td.addEventListener('click', function(){
		for(let td2 of tds){	td2.classList.add('color1')	}	
	})
}	
*/

//Выведите на экран каждого работника в своем теге li тега ul.
//чтобы по клику на имя, возраст или зарплату работника появлялся инпут для редактирования этого поля
//Добавьте в конец каждого тега li ссылку на удаление этого li из списка
//Под списком сделайте форму для добавление нового работника
/*let employees = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
];
let list=document.querySelector('#list')
let ul= document.createElement('ul');
list.appendChild(ul);
list.addEventListener('click', event=>event.target.classList.toggle('colored2'))
//циклв одну строчкубудет записан каждый работник
for(let user of employees){
	let li = document.createElement('li')
	li.innerHTML=`name: ${user.name}, age: ${user.age}, salary: ${user.salary}`
	let remove=document.createElement('a')
	remove.href='';
	remove.innerHTML='removeLink';
	remove.addEventListener('click', function(event){
		li.parentElement.removeChild(li)
		event.preventDefault()
	})

	li.addEventListener('click', function func(){
		let inp= document.createElement('input')
		inp.value=li.innerHTML
		inp.addEventListener('blur', function(){
			li.innerHTML=inp.value;
			li.addEventListener('click', func)
		})
		li.appendChild(inp)
		li.removeEventListener('click', func)
	})
	li.appendChild(remove)
	ul.appendChild(li);
}
let liLast=document.createElement('li')
liLast.innerHTML=`name: , age: , salary:`
liLast.addEventListener('click', function func(){
	let inp= document.createElement('input')
	inp.value=liLast.innerHTML
	inp.addEventListener('blur', function(){
		liLast.innerHTML=inp.value;
		liLast.addEventListener('click', func)
	})
	liLast.appendChild(inp)
	liLast.removeEventListener('click', func)
})
ul.append(liLast)

//а так в три строчки записан каждый работник
/*for(let user of employees){
	for(let key in user){
		let li = document.createElement('li')
		li.innerHTML=key +':' + user[key]
		ul.appendChild(li)
	}
};
//li.innerHTML=Object.values(user)
//li.innerHTML=Object.entries(user)
//li.innerHTML=Object.keys(user)
*/

//Дан инпут. В него вводится ФИО через пробел. По потери фокуса запишите фамилию, 
//имя и отчество в отдельные инпуты.
/*var elem = document.getElementById('input');
elem.addEventListener('focus', func);elem.addEventListener('blur', func2);
function func() {elem.placeholder = '';}
function func2() {
	var elem = document.getElementById('input');
	var elems = document.getElementsByClassName('name');
	if (elem.value !== 0) {
		var str = elem.value;
		var arr = str.split(' ');
		for (var i = 0; i < arr.length; i++) {elems[i].value = arr[i];}
	}
	if (elem.value == 0) {elem.placeholder = 'Введите Ваши ФИО';
		for (var i = 0; i < elems.length; i++) {elems[i].value = '';}
	}
}        
*/

//Выведите этих работников в HTML таблице
//Добавьте ячейкам созданной таблицы возможность редактирования
//Добавьте в вашу таблицу новую колонку со ссылкой на удаления ряда из таблицы
/*let employees = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
];
let table=document.querySelector('#table');
let button=document.createElement('button');
let inp1=document.createElement('input');
let inp2=document.createElement('input');
let inp3=document.createElement('input');
table.prepend(inp1, inp2, inp3, button)
//table.insertAdjacentHTML('beforeend', '<button>start</button>')

let tr4=document.createElement('tr');
for(let i=1; i<4; i++){
	let td4=document.createElement('td');
	tr4.appendChild(td4);
};
table.appendChild(tr4);

let tds4=document.querySelectorAll('td')
for(let j=0; j<tds4.length;j++){
	button.addEventListener('click', function(){
	tds4[0].innerHTML=inp1.value;
	tds4[1].innerHTML=inp2.value;
	tds4[2].innerHTML=inp3.value;
	})
	
}

for(let user of employees){
	let tr=document.createElement('tr');
	
	let td1=document.createElement('td');
	td1.innerHTML=user.name;
	tr.appendChild(td1);
	let td2=document.createElement('td');
	td2.innerHTML=user.age;
	tr.appendChild(td2)
	let td3=document.createElement('td')
	td3.innerHTML=user.salary;
	tr.appendChild(td3)
	//let td4=document.createElement('td');
	//tr.appendChild(td4);
	table.appendChild(tr);
	//let remove=document.createElement('a');
	//remove.href='';
	//remove.innerHTML='link'
	//td4.appendChild(remove)
	//remove.addEventListener('click', function(event){
		//tr.parentElement.removeChild(tr);
		//event.preventDefault()
	//})
};

let trs=document.querySelectorAll('tr');
for(let tr of trs){
	let td=document.createElement('td');
	let remove=document.createElement('a');
	remove.href='';
	remove.innerHTML='link'
	td.appendChild(remove)
	remove.addEventListener('click', function(event){
		tr.parentElement.removeChild(tr);
		event.preventDefault()
	})
	tr.appendChild(td)
}

const tds = document.querySelectorAll("td")    
tds.forEach(function(td, index) {
        td.addEventListener("click", event => {
        const input = document.createElement("input")
        
        input.addEventListener("blur", event => {
            event.target.remove()
            td.innerHTML = input.value
        })
        
        event.target.innerHTML = ""
        event.target.appendChild(input)
        
    });//console.log(index + '. ' + tds[3].innerHTML)
})     
*/



//чтобы в конце каждой li также стояла ссылка 'перечеркнуть', 
//с помощью которой можно будет перечеркнуть текст данного тега li
//чтобы вконце каждойli стояла ссылка 'удалить,спомощью которой можнобудет удалить этуli изul
/*let arr = ['qwert', 12345, 'wasdfg'];
let div=document.querySelector('div');let text=document.createElement('ul');
for(let elem of arr){
	let lis=document.createElement('li');
	lis.innerHTML='<span>'+elem+ '</span>';
	text.appendChild(lis);div.appendChild(text);
	let remove=document.createElement('a');
	remove.href='';
	remove.innerHTML='removeLink';
	lis.appendChild(remove)
	let spans=document.querySelectorAll('span');
	remove.addEventListener('click', function(event){
		lis.parentElement.removeChild(lis);//lis.remove()
		event.preventDefault()
		//lis.classList.add('decor')
	})
};

let inp=document.createElement('input');
div.insertAdjacentElement('beforeend', inp);
let li=document.createElement('li')
inp.addEventListener('blur', function(){
	li.innerHTML=inp.value
	text.insertAdjacentElement('beforeend', li);
	inp.value=''

	let remove=document.createElement('a');
	remove.href='';
	remove.innerHTML='removeLink'
	li.appendChild(remove)
	remove.addEventListener('click', function(event){
		li.parentElement.removeChild(li);
		event.preventDefault()
	})	
})


//чтобы подсписком был инпут, спомощью которого можнобудет добавить новый элемент
//вконец списка ul. Сделайтетак, чтобыновые li также можнобыло редактировать.
/*let arr = ['q', 1, 'w'];
let div=document.querySelector('div');let text=document.createElement('ul');
for(let elem of arr){
	let lis=document.createElement('li');
	lis.innerHTML=elem;text.appendChild(lis);div.appendChild(text);
	lis.addEventListener('click',function func(){
		let inp=document.createElement('input');
		//lis.innerHTML=inp.value;
		inp.value=lis.innerHTML;// сначала записываем текст абзаца
		lis.innerHTML='';// затем убираем текст абзаца
		lis.appendChild(inp);
		//lis.parentElement.appendChild(inp);
		lis.removeEventListener('click', func); // отвяжем событие чтоббы не выскакив снова инпут
		//при потери фокуса в инпуте текст этого инпута записывался в абзац
		inp.addEventListener('blur', function(){
			lis.innerHTML=this.value;
			lis.addEventListener('click', func); // повесим событие обратно
		})
	})
};
let inp=document.createElement('input');
div.insertAdjacentElement('beforeend', inp);
let li=document.createElement('li')
inp.addEventListener('blur', function(){
	li.innerHTML=inp.value
	text.insertAdjacentElement('beforeend', li);
	inp.value=''
})
*/

//Дан массив. Выведите его элементы в виде списка ul.
//чтобы поклику налюбую li вней появлялся инпут,спомощью которого ее можнобудет редактировать
/*let arr = ['q', 1, 'w'];
let div=document.querySelector('div');let text=document.createElement('ul');
for(let elem of arr){
	let lis=document.createElement('li');
	lis.innerHTML=elem;text.appendChild(lis);div.appendChild(text);
	//document.body.append(text)
	lis.addEventListener('click',function func(){
		let inp=document.createElement('input');
		//lis.innerHTML=inp.value;
		inp.value=lis.innerHTML;// сначала записываем текст абзаца
		lis.innerHTML='';// затем убираем текст абзаца
		lis.appendChild(inp);
		//lis.parentElement.appendChild(inp);
		lis.removeEventListener('click', func); // отвяжем событие чтоббы не выскакив снова инпут
		//при потери фокуса в инпуте текст этого инпута записывался в абзац
		inp.addEventListener('blur', function(){
			lis.innerHTML=this.value;
			lis.addEventListener('click', func); // повесим событие обратно
		})
	})
}
*/


//Активация ограниченного количества элементов
/*let tds = document.querySelectorAll('#table td');
for (let td of tds) {
	td.addEventListener('click', function() {
		let activeTds = document.querySelectorAll('#table td.active');
		if (activeTds.closest('.active').length < 1) {this.classList.add('active');}
	});
}*/


//мы хотим чередовать не два цвета, а произвольное количество
/*let tds = document.querySelectorAll('#table td');
let i = 0; let colors = ['color1', 'color2', 'color3'];
for (let td of tds) {
	td.addEventListener('click', function(event) {
		this.classList.add(colors[i]);
		i++;
		if (i == colors.length) {i = 0;}
	});
}
*/


//пусть первая ячейка красится в красный, вторая - в зеленый, третья - опять в красный
/*let tds = document.querySelectorAll('#table td');
let color = 'color1';
for (let td of tds) {
	td.addEventListener('click', function() {
		if (color == 'color1') {color = 'color2'
		} else {color = 'color1'}
		this.classList.add(color);
	});
}
*/

/*let lis=document.querySelectorAll('ul li');
for(let li of lis){
	li.addEventListener('click', function(){this.classList.toggle('letter')})
}
*/

/*let tds = document.querySelectorAll('#table td');
for (let td of tds) {td.addEventListener('click', function() {this.classList.add('active');})}
*/

//Много элементов с кнопками показа
/*let buttons = document.querySelectorAll('button');let elems   = document.querySelectorAll('p');
for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', function() {elems[i].classList.toggle('hidden');});
}
*/

/*let buttons = document.querySelectorAll('button');
for (let button of buttons) {
	button.addEventListener('click', function() {
		let elem = document.querySelector('#' + this.dataset.elem);
		elem.classList.toggle('hidden');
	});
}
*/

//Кнопки для скрытия и показа элемента
/*let elem = document.querySelector('#elem');
let show = document.querySelector('#show');let hide = document.querySelector('#hide');
hide.addEventListener('click', function() {elem.classList.add('hidden');});
show.addEventListener('click', function() {elem.classList.remove('hidden');});
*/

//Добавьте в эту таблицу еще одну колонку со ссылкой. По нажатию на эту ссылку 
//ряд с этой ссылкой должен стать зеленого фона
/*let trs=document.querySelectorAll('#table tr');
for(let tr of trs){let td =document.createElement('td');
	tr.appendChild(td);
	let link=document.createElement('a');
	link.href='';link.innerHTML='link';
	td.appendChild(link);
	td.addEventListener('click', function(event){
		tr.classList.toggle('decor');event.preventDefault()
	})	
}
*/

//вконец каждого абзаца ссылку,поклику накоторую текстабзаца будет перечеркиваться(ссылка-нет).
//чтобыпосле нажатия нассылку этассылка удалялась изабзаца(атекстабзацастановилсяперечеркнутым)
/*let elems=document.querySelectorAll('p');
for(let elem of elems){
	elem.innerHTML= '<span class="">' +elem.innerHTML + '</span>'
	let link=document.createElement('a');
	link.href='';
	link.innerHTML='link';
	elem.appendChild(link);
	link.addEventListener('click', function(event){
		let spans=document.querySelectorAll('span');
		for(let span of spans){span.classList.add('decor');}
		event.preventDefault()
		link.parentElement.removeChild(link)
	});	 
}
*/

//Оберните сначала текст абзаца в теги span, добавьте к этим тегам возможность редактирования, 
//а затем добавьте в конец каждого абзаца ссылку на удаление.
/*let elems=document.querySelectorAll('#parent p')
for(let elem of elems){elem.innerHTML= '<span class="letter">' +elem.innerHTML + '</span>'}
let spans=document.querySelectorAll('span');
for(let span of spans){let remove=document.createElement('a');
	remove.href='';remove.innerHTML='remove';span.appendChild(remove);
	remove.addEventListener('click', function(event){event.preventDefault()})
}*/


//Добавьте ссылку на удаление в конец каждого абзаца.
//Сделайте так, чтобы по клику на span в нем появлялся инпут для редактирования.
/*let elems=document.querySelectorAll('#parent p')
for(let elem of elems){
	let remove=document.createElement('a');
	remove.href='';
	remove.innerHTML='remove';
	elem.appendChild(remove);
	remove.addEventListener('click', function(event){
		event.preventDefault()
	})
}
let spans=document.querySelectorAll('span')
for(let span of spans){
	span.addEventListener('click', function func(){
		let input=document.createElement('input');
		input.value = span.innerHTML;
		span.appendChild(input)
		input.addEventListener('blur', function() {
			span.innerHTML = this.value;
			//input.parentElement.remove(this); // удалим инпут
		});
		span.removeEventListener('click', func)
		//input.parentElement.removeChild(input)
	})
}
*/	

/*let elems=document.querySelectorAll('ul li')
for(let elem of elems){
	elem.addEventListener('click', function func(){
		let input= document.createElement('input');
		input.value=elem.innerHTML;elem.innerHTML='';elem.appendChild(input);
		input.addEventListener('blur', function(){
			elem.innerHTML=this.value;
			elem.addEventListener('click', func)
		});elem.removeEventListener('click', func)
	})	
}
*/

//Прячем текст при редактировании элемента
/*let elem = document.querySelector('#elem');
elem.addEventListener('click', function func(){
	let input= document.createElement('input');
	input.value=elem.innerHTML;elem.innerHTML='';elem.appendChild(input);
	input.addEventListener('blur', function(){
		elem.innerHTML=this.value;
		elem.addEventListener('click', func)
	});elem.removeEventListener('click', func)
})
*/

//инпута изначально небыло настранице, а он появлялся поклику наабзац и исчезал по blur
/*let elem = document.querySelector('#elem');
elem.addEventListener('click', function(){
	let input= document.createElement('input');input.value=elem.innerHTML;
	input.addEventListener('blur', function(){
		//let parent=document.querySelector('#parent');parent.removeChild(input);
		elem.innerHTML=input.value;this.parentElement.removeChild(this);
	});
	elem.parentElement.appendChild(input);
})
*/

/*let elem = document.querySelector('#elem');let input = document.querySelector('#input');
input.value = elem.innerHTML; // записываем в инпут текст абзаца
input.addEventListener('input', function() {elem.innerHTML = this.value;});*/


//Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут
/*let inp=document.querySelector('#elem');let btn=document.querySelector('.btnClone');
let button= document.createElement('button');
btn.addEventListener('click', function(){
	let clone = btn.cloneNode(true);btn.insertAdjacentElement("afterEnd", clone)
})
*/

//<div class="www"><p>text</p><p>text</p><input></div>
/*let elem=document.querySelector('#elem');
elem.insertAdjacentHTML("beforebegin", '<div class="www"><p>text</p><p>text</p><input></div>')
*/

// 276  Вставка элементов в начало или в конец
/*let parent = document.querySelector('#parent');
let li1= document.createElement('li');li1.innerHTML='start';parent.prepend(li1);
//let li2= document.createElement('li') //li2.innerHTML='finish'; //parent.append(li2);
parent.insertAdjacentHTML('beforeEnd', '<li>finish</li>')
let elem=document.querySelector('#elem');let li3=document.createElement('li');
li3.innerHTML='new';parent.insertBefore(li3, elem);
li3.addEventListener('click', function(){
	this.innerHTML=this.innerHTML + '!'
})*/

//275 Дана HTML таблица. Добавьте в нее еще одну колонку, в которой для 
//каждого ряда таблицы будет стоять ссылка на удаление этого ряда.
/*let trs=document.querySelectorAll('#table tr')
for(let tr of trs){
	let td=document.createElement('td');tr.appendChild(td)
	let remove=document.createElement('a');
	remove.href='';remove.innerHTML='removeTr';
	td.appendChild(remove);
	remove.addEventListener('click', function(event){
		tr.parentElement.removeChild(tr);event.preventDefault()
	})
}*/

//Дан тег ul. Добавьте в конец каждого тега li ссылку на удаления этого li из списка
/*let elems = document.querySelectorAll('#parent li');
for(let elem of elems){let remove = document.createElement('a');
	remove.href = '';remove.innerHTML='removeLi';elem.appendChild(remove);
	remove.addEventListener('click', function(event){
		elem.parentElement.removeChild(elem);event.preventDefault();
	})
}*/


//Создание ссылок для удаление элементов
/*let elems = document.querySelectorAll('#parent p');
for (let elem of elems) {
	let remove = document.createElement('a');
	remove.href = '';remove.innerHTML = 'remove';
	elem.appendChild(remove);
	remove.addEventListener('click', function(event) {
		elem.parentElement.removeChild(elem);event.preventDefault();
	});
}*/

//чтобы по клику на кнопку в список добавлялся новый элемент. Сделайте так, 
//чтобы любая li удалялась по клику на нее. Речь идет как о тех li, которые
// уже есть в списке, так о новых, созданных после нажатия на кнопку
/*let parent = document.querySelector('#parent');let button=document.querySelector('#button');
button.addEventListener('click', function(){
	let li=document.createElement('li');
	li.innerHTML='!';parent.appendChild(li)
	let lis=document.querySelectorAll('li')
	for(let elem of lis){
		elem.addEventListener('click', function(){this.remove();//parent.removeChild(this)
		})
	}
})
*/

//делать так, чтобы элементы удаляли сами себя по клику
/*let parent = document.querySelector('#parent');
for (let i = 1; i <= 9; i++) {
	let p = document.createElement('p');
	p.innerHTML = i;
	p.addEventListener('click', function() {parent.removeChild(this);});
	parent.appendChild(p);
}*/


//let parent = document.querySelector('#parent');
/*let elems  = document.querySelectorAll('#parent li');
//let elems  = document.querySelectorAll('li');
//let ul=document.querySelector('ul')
for (let elem of elems) {
	elem.addEventListener('click', function() {//ul.removeChild(this);this.remove();});
}*/


//так, чтобы по нажатию на #elem этот элемент удалился
//let ul= document.querySelector('ul')
/*elem.addEventListener('click', function(){
	//let nextLi=document.createElement('li');
	elem.remove();
	//ul.removeChild(elem);//elem.parentElement.removeChild(elem);
	//nextLi.innerHTML='!';//ul.appendChild(nextLi);
})*/


/*let btn=document.querySelector('#button')
//let elem = document.querySelector('#elem');
btn.addEventListener('click', function(){
	//elem.parentElement.removeChild(elem);
	//console.log(elem.parentElement.id)
	//console.log(elem.nextElementSibling);
	//console.log(elem.previousElementSibling)
	parents.removeChild(elem.nextElementSibling);
})*/


//чтобы по каждому клику на кнопку удалялся последний элемент из #parent.
//let btn=document.querySelector('#button')
//let parent=document.querySelector('#parent')
//let lis=document.querySelector('li')
/*btn.addEventListener('click', function(){
	//parent.removeChild(parent.lastElementChild)
	//parent.removeChild(li.nextElementSibling);
	parent.appendChild(li)
})*/

//let id= li.parentElement.id
//console.log()

/*for(let i=0; i<lis.length; i++){
	//let li=document.createElement('li')
	btn.addEventListener('click', function(){
		//parent.appendChild(li)
		parent.removeChild(lis[lis.length-1]);
	})
}*/

/*btn.addEventListener('click', function(){
	for(let i=0; i<lis.length; i++){
		parent.removeChild(lis[lis.length-1]);
	}
})


//чтобы при кликах на ячейки чередовались числа 1, 2 и 3.
/*let tds = document.querySelectorAll('#table td');let i = 1;
for (let td of tds) {td.addEventListener('click', function func() {
		this.innerHTML = i;i++; if(i>3){i=1};td.removeEventListener('click', func)
	});
}*/


//крестики нолики через чередование урок
/*let tds = document.querySelectorAll('#table td');let i = 'X';
for (let td of tds) {
	td.addEventListener('click', function func() {
		this.innerHTML = i;
		if (i == 'X') {i = 'O';} else {i = 'X';};td.removeEventListener('click', func)
	});
}*/


//порядковый номер клика в ячейке ур 271
//+так, чтобы повторное нажатие по ячейке не приводило к увеличению счетчика.
/*let tds = document.querySelectorAll('#table td');
let i = 1;
for (let td of tds) {td.addEventListener('click', function func() {this.innerHTML = i;i++;
td.removeEventListener('click', func)});}*/


//Дана HTML таблица. Запишите в каждую ячейку ее порядковый номер в ряду.
/*let trs = document.querySelectorAll('#table tr');
for (let i = 0; i < trs.length; i++) { //найдем все ряды таблицы и переберем их циклом
	let tr = trs[i];  //// запишем каждый ряд в переменную
	let tds = tr.querySelectorAll('td'); // найдем ячейки ряда
	for (let j = 0; j < tds.length; j++) { //переберем полученные ячейки циклом
		let td = tds[j];
		td.innerHTML = j+1;
		////в текст ячейки номер ее ряда (переменную i) и номер ее колонки (переменную j)
	}
}*/


/*let trs = document.querySelectorAll('#table tr');
for (let i = 0; i < trs.length; i++) { //найдем все ряды таблицы и переберем их циклом
	let tr = trs[i];  //// запишем каждый ряд в переменную
	let tds = tr.querySelectorAll('td'); // найдем ячейки ряда
	for (let j = 0; j < tds.length; j++) { //переберем полученные ячейки циклом
		let td = tds[j];
		td.innerHTML = i + '.' + j;
		////в текст ячейки номер ее ряда (переменную i) и номер ее колонки (переменную j)
	}
}


//в каждую ячейку ее порядковый номер с конца
/*let tds = document.querySelectorAll('#table td')
for(let i=0; i<tds.length; i++){tds[i].innerHTML=tds.length-i;}*/


//Данакнопка.Сделайте,чтобы по нажатию накнопку таблица увеличивалась наодин ряд и колонку
/*let table = document.querySelector('#table')
let button = document.querySelector('#start')	
button.addEventListener('click', function(){
	let tds=document.querySelectorAll('table td')
	for(let td of tds){
		td.innerHTML='1'
	}
	let tr=document.createElement('tr');
	for(let i=1; i<=2; i++){
		let td=document.createElement('td')
		td.innerHTML='222'
		tr.appendChild(td)
	};table.appendChild(tr)
	let trs=document.querySelectorAll('#table tr')
	for(let tr of trs){
		let td=document.createElement('td')
		td.innerHTML='3'
		tr.appendChild(td)
	}	
})*/


//Выведите элементы этого массива в виде HTML таблицы
/*let employees = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
];
let table = document.getElementById('table');
for (let user of employees) {
	let tr = document.createElement('tr');
	
	let td1 = document.createElement('td');
	td1.innerHTML = user.name;
	tr.appendChild(td1);
	
	let td2 = document.createElement('td');
	td2.innerHTML = user.age;
	tr.appendChild(td2);
	td2.addEventListener('click', function(){this.innerHTML= Number(td2.textContent) +50})

	let td3 = document.createElement('td');
	td3.innerHTML = user.salary;
	tr.appendChild(td3);
	td3.addEventListener('click', function(){this.innerHTML= parseInt(td3.textContent*1.1)})

	table.appendChild(tr);
}

let tr = document.createElement('tr');
for (let i = 1; i <= 3; i++) {let td = document.createElement('td');
	td.innerHTML='text'
	tr.appendChild(td);
}
table.appendChild(tr);

let trs = document.querySelectorAll('#table tr');
for (let tr of trs) {let td = document.createElement('td');
	td.innerHTML='!!!'
	tr.appendChild(td);
}
*/


// создание таблиц из массива
/*let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]
let table = document.querySelector('#table');
for(let subArr of arr){let tr=document.createElement('tr');
	for(let elem of subArr){let td= document.createElement('td');
		td.innerHTML=elem**2;tr.appendChild(td);
	};table.appendChild(tr)
}


//table размером 5рядов на 5колонок так,чтобы вее ячейках последовательно стояли числа от1 до25
/*let table = document.querySelector('#table');
let k=0;//k=2
for(let i=0; i<5; i++){
	let tr= document.createElement('tr');
	for(let i=0; i<5; i++){let td=document.createElement('td');
		k=k+2;td.innerHTML=k;
			//k++;//k++;//k=k+2//k++;
		tr.appendChild(td)
	};table.appendChild(tr)
}*/




//генератор таблиц, ширина и высота таблиц задается в двух инпутах(например,таблица5на10ячеек).
//С помощью двух вложенных циклов for заполните эту таблицу2 рядами с4 колонками.
/*let table = document.querySelector('#table');
let inp1=document.querySelector('#elem1')
let inp2=document.querySelector('#elem2')
for(let i=0; i<inp1.value; i++){
		let tr=document.createElement('tr');
		for(let i=0; i<inp2.value; i++){
			let td=document.createElement('td');
			td.innerHTML='x'
			tr.appendChild(td)
		};
		table.appendChild(tr)
}*/
	



//Данмассив.Вставьте элементы этогомассива вконец ul так,чтобы каждыйэлемент стоял всвоем li.
//чтобы поклику налюбой из вставленных элементов наэкран выводился текст этогоэлемента.
//Модифицируйте предыдущую задачу так, чтобы по клику на li ей в конец добавлялся '!'.
//так, чтобы по повторное нажатие на li не приводило к добавлению второго '!'.
/*let arr = [1, 2, 3, 4, 5];
let button=document.querySelector('#start');
let elem= document.querySelector('#elem')
for(let num of arr){
	let li=document.createElement('li');
	li.innerHTML=num;
	elem.appendChild(li);
	li.addEventListener('click', function func(){
		//alert(this.innerHTML)
		this.innerHTML=li.textContent +'!';
		li.removeEventListener('click', func);
	});
	
}


//код так, чтобы по клику на абзац к его содержимому прибавлялась единица
/*let arr = [1, 2, 3, 4, 5];let parent = document.querySelector('#parent');
for (let elem of arr) {let p = document.createElement('p');p.innerHTML =elem +1;
	parent.appendChild(p);
}*/


//Дандив.Запустите цикл,который добавит внаш див 5инпутов.Пусть дан также абзац. 
//Сделайте так,чтобы каждый из новых инпутов попотери фокуса записывал свойтекст вабзац
/*let parent = document.querySelector('#parent');
let text= document.querySelector('.timeout')
for(let i=1; i<=5; i++){
	let inp=document.createElement('input');
	inp.addEventListener('blur', function(){
		text.innerHTML=text.innerHTML + this.value
	});
	parent.appendChild(inp)
}


//Дан пустой ul. Запустите цикл, который вставит в него 10 тегов li. 
//Сделайте так, чтобы текстом каждой li был ее порядковый номер
/*let elem = document.querySelector('ol');
for(let i=1; i<=5; i++){let li= document.createElement('li');
	li.textContent=i;elem.appendChild(li)
}*/

//добавленных li в конец его текста записывался !
//чтобы по клику на кнопку в конец списка добавлялся li с текстом 'пункт'
/*let button=document.querySelector('#start');
let elem = document.querySelector('ol');
let li = document.createElement('li');
li.textContent='пункт';
button.addEventListener('click', function(){elem.appendChild(li)})
li.addEventListener('click', function(){this.textContent= this.textContent + '!!!'})*/
	
//таймер с помощью рекурсии
/*let i = 0;
function timer() {
	setTimeout(function() {console.log(++i);if(i<10){timer();}	}, 1000);
};timer()*/


//выведет сообщение в этот абзац через 10 секунд после загрузки страницы.
//let elem = document.querySelector('p');
//setTimeout(function() {elem.textContent='qwerty'}, 3000);


//выводить на экран каждую секунду текущий момент времени, то можно сделать тикающие часы
/*let text= document.querySelector('p');
setInterval(function(){
	let date= new Date;
	let hour = date.getHours();
	let minute = date.getMinutes();
	let seconds = date.getSeconds();
	
	if(seconds<10){seconds= "0" + seconds}
	if(minute<10){minute= "0" + minute}
	if(hour<10){hour= "0" + hour}
	text.innerHTML= hour + ':' + minute + ':' + seconds;

}, 1000)*/
//function func(elem){if(elem<10){elem="0"+elem}}
//func('hour')


//Дан абзац.Сделайте так,чтобы каждую секунду онменял свойцвет с красного назеленый инаоборот
//<p class="colored3">text</p>
//let text= document.querySelector('p');
//setInterval(function(){text.classList.toggle('colored2');}, 1000)
//setInterval(function(){text.classList.toggle('colored3');}, 1000)

//Сделайте так, чтобы по нажатию на первую кнопку в абзаце начал тикать таймер от 1
// до бесконечности, а по нажатию на вторую таймер останавливался
/*let button1=document.querySelector('#start');let button2=document.querySelector('#stop');
let text= document.querySelector('p');let timerId;
button1.addEventListener('click', function(){
	timerId=setInterval(function(){text.innerHTML++},1000)
});button2.addEventListener('click', function(){clearInterval(timerId)})*/


//В инпут вводится какое-то число. По нажатию на кнопку запишите введенное число в текст абзаца 
//и запустите обратный отсчет в абзаце: пусть каждую секунду число в абзаце уменьшается 
//на единицу, пока не дойдет до нуля
/*let elem = document.querySelector('#elem');let text= document.querySelector('p');
let button=document.querySelector('#start')
button.addEventListener('click', function(){text.innerHTML=elem.value;
	let timerId=setInterval(function(){text.innerHTML--;if(text.innerHTML==0){clearInterval(timerId)}
	},1000)
})*/


//Дан инпут.Внего вводится число.Попотери фокуса сделайте так,чтобы вабзаце ниже начал 
//тикать обратный отсчет,начиная с введенного числа.Когдаотсчет дойдет донуля-он должен закончится
/*let elem = document.querySelector('#elem');let text= document.querySelector('p')
elem.addEventListener('blur', function(){text.innerHTML=elem.value;
	let timerId=setInterval(function(){text.innerHTML--;if(text.innerHTML==0){clearInterval(timerId)}
	},1000)
})


//Дан инпут с числом. Сделайте так, чтобы каждую секунду в нем
// появлялся квадрат того числа, которое в нем записано
//let elem = document.querySelector('#elem');setInterval(()=>elem.value=Number(elem.value)**2, 1000)


//таймер, который каждую секунду будет уменьшать текст абзаца на 1. 
//Как только значение абзаца станет равно нулю - остановите таймер
/*let elem = document.querySelector('#start');let text= document.querySelector('p');let timerId;
elem.addEventListener('click', function() {//let i= text.innerHTML;
	timerId=setInterval(function(){text.innerHTML--;
		if(text.innerHTML<=5){clearInterval(timerId)}
	},1000);
})*/

//Дана кнопка. Дан абзац, текстом которого является число. По нажатию на кнопку 
//запустите таймер, который каждую секунду будет увеличивать текст абзаца на 1.
/*let elem = document.querySelector('#start');let text= document.querySelector('p')
elem.addEventListener('click', function() {
	setInterval(()=>text.innerHTML= Number(text.innerHTML)+2, 1000)	
});*/


//инпуте в атрибуте value изначально записано число 10. Запустите таймер, 
//который каждую секунду будет уменьшать это число на единицу
/*let elem = document.querySelector('#elem');
let timerId = setInterval(function() {
	elem.value = Number(elem.value) - 1;// if(elem.value<=0){clearInterval(timerId)}
}, 1000);




//код, который по нажатию на кнопку запускает таймер, выводящий в консоль текущий момент времени
/*let start = document.querySelector('#start');
let stop  = document.querySelector('#stop');
let timerId;
start.addEventListener('click', function func(event) {let i=0;event.preventDefault();
	timerId = setInterval(function() {
		let date = new Date;start.value= i++;
		console.log(date.getMinutes() + ' ' + date.getSeconds());
	}, 1000);
	this.removeEventListener('click', func);
	
});
stop.addEventListener('click', function() {clearInterval(timerId);
	start.addEventListener('click', function func() {let i=0;
		timerId = setInterval(function() {
			let date = new Date;start.value= i++;
			console.log(date.getMinutes() + ' ' + date.getSeconds());
		}, 1000);
		this.removeEventListener('click', func);
	});
});



/*let start = document.querySelector('#start');
let stop  = document.querySelector('#stop');
let timerId; // сделаем переменную глобальной
/*start.addEventListener('click', function(func){
	let i=5; 
	timerId=setInterval(function(){console.log(i--);if(i<=0){clearInterval(timerId)}},1000);
	this.removeEventListener('click', func)	
})
stop.addEventListener('click', function(){clearInterval(timerId)})*/

/*let i = 0;
start.addEventListener('click', function() {timerId = setInterval(function() {console.log('!')}, 1000);
});
stop.addEventListener('click', function() {clearInterval(timerId);});*/



/*let start = document.querySelector('#start');
start.addEventListener('click', function func() {
	let i = 10;
	setInterval(function() {console.log(--i);}, 1000);
	this.removeEventListener('click', func); // отвязываем обработчик
});


/*let elem = document.getElementById('elem');
function func(surname, name) {console.log(this.value + ', ' + surname + ' ' + name);}
func=func.bind(elem)
func('Иванов', 'Иван'); // тут должно вывести 'привет, Иванов Иван'
func('Петров', 'Петр'); // тут должно вывести 'привет, Петров Петр'*/


//при клике на элемент с атрибутом data-toggle-id будет скрываться/показываться элемент с заданным id:
/*document.addEventListener('click', function(event) {
    let id = event.target.dataset.toggleId;
    if (!id) return;
    let elem = document.getElementById(id);
    elem.hidden = !elem.hidden;
});


//здесь HTML-атрибут data-counter добавляет кнопкам поведение: «увеличить значение при клике»:
document.addEventListener('click', function(event) {
if (event.target.dataset.counter != undefined) { // если есть атрибут...
      event.target.value++;
    }
});*/



//Навешивание обработчиков на новые элементы
/*let button = document.querySelector('button');
let list   = document.querySelector('ul');let items  = list.querySelectorAll('li');
function handler() {this.innerHTML = this.innerHTML + '!';}
for (let item of items) {item.addEventListener('click', handler);}
button.addEventListener('click', function() {
	let item = document.createElement('li');item.innerHTML = 'item';
	item.addEventListener('click', handler);list.appendChild(item);
});*/
//list.addEventListener('click', function(event){event.target.innerHTML = event.target.innerHTML + '!';});
/*list.addEventListener('click', function(event) {let li = event.target.closest('li');
	if (li) {li.innerHTML = li.innerHTML + '!';};console.log(event.target.closest('li'))
});*/


//всплытие и прекращение всплытияю див в нем кнопка и див с текст.при наж на кнопку текст появл
//при нажат на див исчезает
/*let parent = document.querySelector('#parent');let button = document.querySelector('button');
let block  = document.querySelector('#block');
button.addEventListener('click', function(event) {block.classList.add('active');event.stopPropagation()});
parent.addEventListener('click', function() {block.classList.remove('active');});*/
/*button.addEventListener('click', function(event){block.classList.toggle('active');});*/



//Модифицируйте предыдущую задачу. Сделайте так, чтобы при клике на li, ей в конец добавлялся 
//восклицательный знак, а при клике на ul - ей в конец добавлялась новая li.
/*let div = document.querySelector('div');div.addEventListener('click', addSign)
let ul = document.querySelector('ul');ul.addEventListener('click', addLi)
function addSign(event){if (event.target.tagName === 'LI'){event.target.textContent+='!'}}
function addLi(event){if (event.target.tagName === 'UL'){
	let li= document.createElement('li');li.textContent='4';ul.appendChild(li);}	
}*/

//Навешайте надив обработчик клика.Вэтом обработчике определите, вкаком изтегов сработало событие.
/*let div = document.querySelector('div');
div.addEventListener('click', function(event) {console.log(event.target.tagName)})*/


/*let div = document.querySelector('div');
div.addEventListener('click', function(event) {console.log(event.target.matches('div'))
	if (event.target.tagName === 'DIV') {alert('клик именно по диву');}
	if (event.target.tagName === 'P') {alert('клик именно по абзацу');}
});*/


/*let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');let elem3 = document.querySelector('#elem3');
elem1.addEventListener('click', function() {alert('зеленый');});
elem2.addEventListener('click', function(event) {alert('голубой');
event.stopImmediatePropagation()});
elem2.addEventListener('click', function() {alert('голубой');})
elem3.addEventListener('click', function() {alert('красный');});*/



//Даны два инпута, абзац и ссылка. Пусть в инпуты вводятся числа. Сделайте так, чтобы по клик
//у на ссылку в абзац записалась сумма введенных чисел
/*let link=document.querySelector('#elem');let inp1 = document.querySelector('#inp1')
let inp = document.querySelector('#inp');let text = document.querySelector('p')
link.addEventListener('click', function(event){
	text.innerHTML= +inp.value+ +inp1.value;event.preventDefault()
})*/

//чтобы по клику на ссылку ей вконец записывался ее href, а перехода по ссылке не происходило
//let link=document.querySelector('#elem')
//link.addEventListener('click', function(event){link.text+= " " + link.href;event.preventDefault()})
//link.onclick=function(event){link.text+= " " + link.href;event.preventDefault()}

//чтобы по клику на любую li, в конец ее текста добавлялось число 1, если нажата клавиша Ctrl, 
//и число 2, если нажата клавиша Shift.
/*let tabl = document.querySelector('#elem');let str= tabl.querySelectorAll('li')
for(let elem of str){elem.addEventListener('click', function(event){
	if(event.ctrlKey){this.textContent+='1'};if(event.shiftKey){elem.classList.add('colored2')};
	})
}*/


//Дан элемент. Сделайте так, чтобы по клику на него он красился в красный цвет, 
//но только если в момент клика нажата клавиша Alt.
/*let text = document.querySelector('p')
text.addEventListener('click', function(event){if(event.altKey){text.classList.add('colored2')}})


//Дан абзац и инпут.В него вводится текст и нажимается клавиша Enter. Сделайте так, чтобы по 
//нажатию Enter введенный текст попадал в абзац под инпутом, а содержимое инпута очищалось
/*let inp = document.querySelector('#inp');let text = document.querySelector('p')
inp.addEventListener('keydown', function(event){
	if(event.code=='Enter'){text.innerHTML=inp.value; inp.value =""  }
})*/


/*function checkPhoneKey(key) {
	return (key >= '0' && key <= '9') || key == '+' || key == '(' || key == ')' || key == '-' ||
	  key == 'ArrowLeft' || key == 'ArrowRight' || key == 'Delete' || key == 'Backspace';
}*/


//чтобы при клике на элемент этот элемент красился в зеленый цвет, а при двойном клике - в красный
/*let elem = document.querySelector('#elem');
elem.addEventListener('click', func);elem.addEventListener('dblclick', func);
function func(event) {
	if(event.type=='click'){elem.classList.add('colored')}
	if(event.type=='dblclick'){elem.style.background='green';elem.classList.remove('colored');};
	//if(event.type=='dblclick'){elem.classList.remove('colored'); elem.classList.add('colored2')}
}*/


/*let elem = document.querySelector('#elem');
document.addEventListener('mousemove', function(event) {elem.innerHTML = event.pageX + ' : ' + event.pageY;});*/
