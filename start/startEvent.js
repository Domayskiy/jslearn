"use strict";




/*
//Вставьте перед этим элементом элемент с текстом 'new'. чтобы клик на вставленный элемент приводил к тому, что в конец его текста будет добавляться '!'.
let parentUL= document.querySelector('#parentUL');
let elemUL = document.querySelector('#elemUL')
let li1 = document.createElement('li');
li1.textContent='new'
let d=parentUL.insertBefore(li1, elemUL)
d.addEventListener('click', function(){
    this.textContent = this.textContent + '!'
})


/*
//Давайте заполним таблицу tr-ками и td-шками:<table id="table"></table> текст с 1 до 5 три раза
let parentT= document.querySelector('#table');
for(let i=1; i<=3; i++){
    let tr = document.createElement('tr');
    for(let j=1; j<=5; j++){
        let td=document.createElement('td');
        td.textContent=j;
        console.log(td.textContent)   // 1,2,3,4,5  1,2,3,4,5  1,2,3,4,5
        tr.append(td);
    };
    parentT.append(tr);
};
/*
//Давайте заполним таблицу tr-ками и td-шками:<table id="table"></table> текст с 1 до 15
let parentT= document.querySelector('#table');
let k=1;
for(let i=1; i<=3; i++){
    let tr = document.createElement('tr');
    for(let j=1; j<=5; j++){
        let td=document.createElement('td');
        td.textContent=k;
        k++;
        console.log(td.textContent)    // 1,2,3.....15
        tr.append(td);
    };
    parentT.append(tr);
};
/*
//Давайте заполним таблицу tr-ками и td-шками:<table id="table"></table> текст пирамидка ххххххх
let parentT= document.querySelector('#table');
let k='x';
for(let i=1; i<=3; i++){
    let tr = document.createElement('tr');
    for(let j=1; j<=5; j++){
        let td=document.createElement('td');
        td.textContent=k;
        console.log(td.textContent)    // x , xx, xxx, xxx .... 15x
        tr.append(td);
        k+='x'
    };
    parentT.append(tr);
};



/*
//Дан ul.Давайте разместим внем 9 тегов li,при этом их текстомсделаем порядковые номера:<ul id="parentS"></ul>
let parentS = document.querySelector('#parentS');
for (let i = 1; i <= 9; i++) {
	let li = document.createElement('li');
	li.textContent = i;
	parentS.appendChild(li);
}


//Сделайте так, чтобы по каждому клику на кнZ')дний элемент из #parent.
let pars123 = document.querySelector('#parent123');
let bat123 = document.querySelector('#button123')
bat123.addEventListener('click', ()=>{pars123.lastElementChild.remove()});
// bat123.addEventListener('click', ()=>{console.log(pars123.lastElementChild.classList.add('colored'))});
// bat123.addEventListener('click', function(){for(let i=1; i<=1; i++){pars123.lastElementChild.remove()}})

/*
//Сделайте так, чтобы любая li удалялась по клику на нее
let lis = document.querySelectorAll('ul>li');
for(let li of lis){li.addEventListener('click',function(){li.remove()})}
/*
let dell;
document.addEventListener('click',function(event){dell=event.target;dell.remove()})


//Дан див. Запустите цикл, который добавит в наш див 5 инпутов. Пусть дан также абзац. Сделайте так, чтобы каждый из новых инпутов по потери фокуса записывал свой текст в абзац.
let divInp = document.querySelector('div.inputinput');
let ppp=document.querySelector('p.abz')
for(let i=1; i<=5; i++){
    let inpu = document.createElement('input');
    inpu.addEventListener('blur', function(){ppp.textContent = this.value})
    divInp.append(inpu);
}

//Дан пустой ul. Запустите цикл, который вставит в него 10 тегов li. Сделайте так, чтобы текстом каждой li был ее порядковый номер.
/*
let vstavka = document.querySelector('ul.vstavka');
let ppp=document.querySelector('p.abz')
for(let i=1; i<=10; i++){
    let li = document.createElement('li');
    li.textContent=i;
    window.addEventListener('click', function(event){ppp.textContent = event.target.textContent})

    vstavka.appendChild(li)
}
*/



//                                              идеи для шашек как подсветить куда ходить
/*
let ps = document.querySelectorAll('p')
let lis = document.querySelectorAll('li');
window.addEventListener('dblclick', function (event){
    for(let p of ps){
        for(let li of lis){
            if(li.textContent != '1'){
                p.classList.add('colored')
            }
        }
    }
})


/*
window.addEventListener('click', function funcCl(event){
    console.log(event.target)
    // if(event.target.textContent=='1'){
        let timerId=setTimeout(function(){event.target.classList.add('colored')}, 1000);
        setTimeout(() => {clearInterval(timerId);event.target.classList.remove('colored'); }, 3000);
    // }     
})


//                                              идеи для шашек как передвиготь фигуры
/*
let klet12 = document.querySelector('.klet12');
let klet1 = document.querySelector('.klet1');
let klet13 = document.querySelector('.klet13');
let btn12 = document.createElement('button');
let icon = document.querySelector('.icon')
btn12.innerHTML = 'zzzz';
klet12.appendChild(btn12);
let clone = btn12.cloneNode(true)
// window.addEventListener('dblclick',(event)=.innerHTML = event.target.appendChild(clone))
let evTar;
window.addEventListener('dblclick', function(event){// записать элемент при двойном клике
    // console.log(event.target)
    evTar = event.target
    // console.log(evTar)
    // event.target.appendChild(clone);
    window.addEventListener('click', function funcCl(event){  //вставить записаный эл в нужное место
        
        if(event.target.textContent=='1'){
            event.target.appendChild(evTar)
        }
        // this.appendChild(evTar)
        this.removeEventListener('click', funcCl) //отвязать событие
    })

})

btn12.addEventListener('click', function(){
    klet1.removeChild(icon);
    klet13.appendChild(icon)
    klet1.appendChild(clone)

})

console.log(klet1.getElementsByClassName('icon'))



//Дан ol и кнопка. Сделайте так, чтобы по клику на кнопку в конец ol добавлялся тег li. Сделайте так, чтобы по клику на любой из добавленных li в конец его текста записывался восклицательный знак.
/*
let parent = document.querySelector('#elemOL');
let btnstart = document.querySelector('#startTime');
btnstart.addEventListener('click', function(){
    let li = document.createElement('li');
    li.textContent='Z';
    parent.appendChild(li);
    li.addEventListener('click', function(){li.textContent=li.textContent + '&&&'})
    // li.addEventListener('click', ()=>this.textContent = this.textContent + '!!!')//берет this btnstart
})
*/


/*
//Сделайте так, чтобы по клику на кнопку в конец списка добавлялся li с текстом 'item'.
let parent = document.querySelector('#elemOL');
let btnstart = document.querySelector('#startTime');
btnstart.addEventListener('click', function app(){
    let lili = document.createElement('li')
lili.textContent  ='item'
parent.appendChild(lili)
    // btnstart.removeEventListener('click', app)// отвязал событие нажимаешь на кнопку и ничего))
})



/*
let parent = document.querySelector('#parentZ');
let p = document.createElement('p');
p.textContent = '!';
parent.append(p);


//                                                  балуюсь с рекурсией
/*
let timeElement = document.querySelector('.clock');
let arr = [2, 3, 5, 3];
let sum = 0;
for(let elem of arr){sum+=elem};
timeElement.textContent = sum

/*
let timeElement = document.querySelector('.clock');
let arr = [2, 3, 5, 3];
let sum = 0;
function recSum(nums){
    sum = nums.shift();
    if(nums.length!=0){sum+=recSum(nums)};
    timeElement.textContent = sum;
    return sum;
};
recSum(arr)
/*
let timeElement = document.querySelector('.clock');
recurse()
function recurse(){
    timeElement.textContent++
    console.log(timeElement.textContent)
    if(timeElement.textContent<7){recurse();}

}

/*
const timeElement = document.querySelector('.clock');
let num = 0;
function recurse(){
    timeElement.textContent = num;
    console.log(num)
    num++;
    if(num<=5){recurse();}
}
recurse()

/*
let abz = document.querySelector('.abzTim');
let i = 0;
function timer() {
	setTimeout(function() {
		abz.textContent = ++i;
		if (i < 10) { // запускаем, только если счетчик меньше 10
			timer();
		}
	}, 1000);
}
timer();
//Если выводить на экран каждую секунду текущий момент времени, то можно сделать тикающие часы. Реализуйте такие же часик
/*
const timeElement = document.querySelector('.clock');
const tick = () => {
    const now = new Date();
    const hours = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();
        timeElement.textContent = `${hours}:${min}:${sec}`;
}
tick();// начать тут же, не ждать 1 секунду пока первый setInterval сработает
setInterval(tick, 1000);
*/
/*
let cloook = document.querySelector('.clock')
setInterval(function(){let date = new Date();
    cloook.textContent = date.getHours() + ':' + date.getMinutes()+':'+ date.getSeconds()
},1000)
*/
/*
//Если выводить на экран каждую секунду текущий момент времени, то можно сделать тикающие часы. Реализуйте такие же часик
let cloook = document.querySelector('.clock')
let timerID = function(){let date = new Date();
    cloook.textContent = date.getHours() + ':' + date.getMinutes()+':'+ date.getSeconds()
};
timerID()// начать тут же, не ждать 1 секунду пока первый setInterval сработает
setInterval(timerID, 1000);


/*
//Дан абзац. Сделайте так, чтобы каждую секунду он менял свой цвет с красного на зеленый и наоборот.
let abz = document.querySelector('.abzTim');
abz.classList.add('colored')
setInterval(function(){abz.classList.toggle('colorredred')},1000)

/*
//Дан абзац и две кнопки. Сделайте так, чтобы по нажатию на первую кнопку в абзаце начал тикать таймер от 1 до бесконечности, а по нажатию на вторую таймер останавливался.
//<button id="stopTime">stopTime</button><button id="startTime">startTime</button><p class="abzTim"> 33 </p>
let btnstart = document.querySelector('#startTime');
let btnstop  = document.querySelector('#stopTime');
let abz = document.querySelector('.abzTim');
let i=0;
let start;
btnstart.addEventListener('click', ()=>{start = setInterval(()=>{abz.textContent = i++;},1000)})
btnstop.addEventListener('click', ()=>clearInterval(start))

/*
//Дан инпут. В него вводится число. По потери фокуса сделайте так, чтобы в абзаце ниже начал тикать обратный отсчет, начиная с введенного числа. Когда отсчет дойдет до нуля - он должен закончится.
let inpElem= document.querySelector('#elem');
let abz = document.querySelector('.abzTim');
inpElem.addEventListener('blur', function(){
    abz.textContent = inpElem.value;           //абзац меняется а инпут показывает какое ввел число
    let timerAbz=setInterval(function(){
        abz.textContent = abz.textContent - 1  //абзац меняется а инпут показывает какое ввел число

        //inpElem.value = inpElem.value -1;     //одновременно в инпуте и абзаце
        //abz.textContent = inpElem.value;      //одновременно в инпуте и абзаце
        if(abz.textContent<=0){clearInterval(timerAbz)}
    }, 1000)
})

/*
//Дан инпут с числом. Сделайте так, чтобы каждую секунду в нем появлялся квадрат того числа, которое в нем записано.        <input id="elem" value="10">
let inpElem= document.querySelector('#elem');
let inpPow = setInterval(function(){
    inpElem.value = Math.pow(inpElem.value, 2);
    if(inpElem.value>= 9999){clearInterval(inpPow)}
},1000)

/*
//Дана кнопка. Дан абзац, текстом которого является число. По нажатию на кнопку запустите таймер, который каждую секунду будет уменьшать текст абзаца на 1. Как только значение абзаца станет равно нулю - остановите таймер..<button id="startTime">startTime</button>
//<p class="abzTim"> 33 </p>
let btn = document.querySelector('#startTime');
let abz = document.querySelector('.abzTim');
btn.addEventListener('click', function(){
    let timerAbz=setInterval(function(){
        abz.textContent = Number(abz.textContent)-1;
        if(abz.textContent<=30){
            clearInterval(timerAbz)
        }
    }, 1000)
})


/*
//  <input id="elem" value="3">
let elem = document.querySelector('#elem');

elem.addEventListener('click', function timerinVall() {
    let self = this;
	setInterval(function func() {
		self.value=Number(self.value) +1; 
	}, 1000);
    elem.removeEventListener('click', timerinVall)
});


/*
let elem = document.querySelector('#elem');
let timerElem = setInterval(function() {
	elem.value = Number(elem.value) - 1;
    if(elem.value<=0){clearInterval(timerElem)}
}, 1000);


/*
// код, который по нажатию на кнопку запускает таймер, выводящий в консоль текущий момент времени:
let start = document.querySelector('#start');
let stop  = document.querySelector('#stop');

let timerId;
start.addEventListener('click', function func() {
	timerId = setInterval(function() {
		let date = new Date;
		console.log(date.getMinutes() + ' : ' + date.getSeconds());
	}, 1000);
    start.removeEventListener('click', func)
});

stop.addEventListener('click', function func1() {
	clearInterval(timerId);
});



//Пусть дана переменная, в которой изначально хранится число 100. Даны также две кнопки. По нажатию на первую кнопку запустите таймер, который каждую секунду будет уменьшать значение переменной на 1 и выводить новое значение в консоль. Как только значение переменной достигнет нуля - остановите таймер.
//По нажатию на вторую кнопку остановите таймер. Также остановите таймер, если вторая кнопка не была нажата, //но значение переменной достигло нуля.        <button id="stopTime">stopTime</button>
// <button id="startTime">startTime</button>
/*
let btn1=document.querySelector('#startTime')
let btn2=document.querySelector('#stopTime')
let i = 15;
let timer;
btn1.addEventListener('click', function funcStart(){
    timer=setInterval(function(){
        console.log(i++); if(i>30){clearInterval(timer)}
    }, 500);
    btn1.removeEventListener('click', funcStart);
})
btn2.addEventListener('click', function(){clearInterval(timer)})


/*
//Сделайте кнопку, по нажатию на которую в консоль будет выводится обратный отсчет, начиная с 100
let btntime = document.getElementById('startTime');
let i = 8;
btntime.addEventListener('click', function func(){
    let timer = setInterval(function (){
        console.log(i--); if(i<=0){clearInterval(timer)}}, 1000);
        btntime.removeEventListener('click', func)

})


//Пусть дана переменная, в которой изначально хранится число 100. Запустите таймер, который каждую секунду будет уменьшать значение этой переменной на 1 и выводить это значение в консоль.
/*
let i = 10;
let timer = setInterval(()=>{console.log(i--); if(i<=0){clearInterval(timer)}}, 1000)
/*
setInterval(function(){
    while(i>=0){console.log(i--); break}
}, 1000)


/*
setInterval(function(){
    console.log('!');
}, 3000)


/*
//Добавьте в последнюю строчку метод call так, чтобы на экран вывелось 'hello, John Smit'. 
let elemcall = document.querySelector('#elemCall');
function func(name, surname) {
	console.log(this.value + ', ' + name + ' ' + surname);
};
func.call(elemcall, 'John', 'Smit'); // тут должно вывести 'hello, John Smit'

//метод call указать откуда взять this
/*
let elem = document.querySelector('#elem');
function func() {
	console.log(this);
};func.call(elem)


/*
let elem = document.querySelector('#elem');
elem.addEventListener('blur', func);
//Контекст стрелочную функцию
/*
function func() {
	let self = ()=>{
		console.table(this.value * this.value);
	};self();
}
//Контекст через параметр 
/*
function func() {
    // square(this);
	function square(self) {
		return self.value * self.value; //console.log(self.value * self.value)
	};
    console.log(square(this)); // square(this)
}
/*
function func() {
	let self = this;
	function square() {
		console.table(self.value * self.value);
	};square();
}



/*
let button = document.querySelector('button');
let list   = document.querySelector('ul');
let items  = list.querySelectorAll('li');

button.addEventListener('click', function() {
	let item = document.createElement('li');
	item.textContent = 'item';
	list.appendChild(item);
});

list.addEventListener('click', function(event) {
    event.target.textContent = event.target.textContent + '!';
})



/*
let parent = document.getElementById('parent');
let button = document.querySelector('button');
let block  = document.querySelector('#block');
button.addEventListener('click', function(event) {block.classList.add('active');event.stopImmediatePropagation()
});
parent.addEventListener('click', function() {block.classList.remove('active');});




/*
//Навешайте на див обработчик клика. В этом обработчике определите, в каком из тегов сработало событие.
//при клике на li, ей добавлялся восклицательный знак,
let div = document.querySelector('div')
div.addEventListener('click', function(event){
    if(event.target.tagName === 'LI'){
        event.target.textContent='!!!'
    }
    console.log(event.target)
})


//По умолчанию щелчок по флажку переключает его состояние на противоположное. В этом примере показано, как предотвратить такое поведение:<>Пожалуйста, щёлкните по флажку.
/*
  <p>Пожалуйста, щёлкните по флажку.</p>
    <form>
    <input type="checkbox" id="my-checkbox" />
    <label for="my-checkbox">Checkbox</label>
  </form>
*/
/*
function stopDefAction(evt) {
    evt.preventDefault();
}
document
    .getElementById("my-checkbox")
    .addEventListener("click", stopDefAction, false);
*/




/*
// <p class="elem111">абзац class elem111</p>   <input id="elem11" value="input #elem11"></input>
let elem111 = document.querySelector('.elem111');
let elem11 = document.querySelector('#elem11');
elem11.addEventListener('blur', function(event){
    if(elem11.value!='123'){
        event.preventDefault()
    }else{
        elem111.textContent = '!!!';

    }

})




/*
//   крестики нолики
let cells = document.querySelectorAll('#field td');
start(cells);
function start(cells) {
	let i = 0; // начальное значение счетчика

	for (let cell of cells) {
		cell.addEventListener('click', function(event) {
			this.textContent = 'x'; this.style.background = 'green'
            if(i%2!=0){this.textContent = '0'; this.style.background = 'red'}
			//this.textContent = ['X', 'O'][i % 2]
			i++; // увеличиваем счетчик
		});
	}
}
console.log(1 % 2);



/*
//Дан абзац и инпут. В него вводится текст и нажимается клавиша Enter. Сделайте так, чтобы в этот момент введенный текст попадал в абзац под инпутом, а содержимое инпута очищалось.
let elem11= document.getElementById('elem11');
let abz111 = document.querySelector('p.elem111')
elem11.addEventListener('keypress', function(event){
    if(event.code =='Enter'){abz111.textContent = elem11.value; elem11.value=''; elem11.blur()}
    console.log(event.key, event.code)
})


/*
//<input id="elem11" value=""></input>Сделайте инпут, который будет по вводу выводить значения введенных клавиш и их коды
let elem11= document.getElementById('elem11');
elem11.addEventListener('keypress', function(event){
    console.log(event.key, event.code)
})

/*
//Привяжите к тегу ul обработчик клика. В этом обработчике проверяйте с помощью свойства tagName, по какому тегу был клик. Если клик был по тегу li - добавьте в конец текста этого тега восклицательный знак. А если клик был по тегу ul - выведите информацию об этом в консоль.
let ul= document.getElementById('elemEv')
ul.addEventListener('click', function(event){
    if(event.target.tagName == 'LI'){
        event.target.textContent=event.target.textContent +  '!!!'
    }
    console.log(event.target.tagName)
})

/*
//Допишите код функции func так, чтобы при клике на элемент этот элемент красился в зеленый цвет, а при двойном клике - в красный.
let elem = document.querySelector('#button1');
elem.addEventListener('click', func);
elem.addEventListener('dblclick', func);
function func(event) {
    if(event.type=='click'){elem.classList.remove('colorredred'); elem.classList.add('colored');
        elem.style.background='green'
     };

	if(event.type=='dblclick'){elem.classList.remove('colored');elem.classList.add('colorredred'); };
}

/*
let btn = document.getElementById('button1');
btn.addEventListener('click', function(event){console.log(event.type)})

/*
let elem = document.getElementById('elemEvent');
document.addEventListener('mousemove', function(event) {
	elem.innerHTML = event.clientX + ' : ' + event.clientY;
});

/*
let btn = document.querySelector('button');
btn.addEventListener('click', function(event) {
	console.log(event);
});
*/