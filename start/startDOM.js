"use strict";


/*
// заполнил массив случайными (рандомными) числами. сам писал
let arr = [];
for(let i=0; i<10; i++){let num = Math.floor(Math.random() * 1000);arr.push(num);
};console.log(arr)


/*
//В инпут вводится число. По нажатию на кнопку выведите в абзац факториал этого числа.
//<p class="sumFak">11zzz</p> <br>
let inp1 = document.querySelector('#inp1');
let btn  = document.querySelector('#btn');
let abz = document.querySelector('.sumFak')
btn.addEventListener('click', function(){
    let res=1;
    for(let i=1; i<= Number(inp1.value); i++){res= res*i;};
    abz.textContent = resж
})
/* функция на факторал числа
function fack(num){let res=1;for(let i=1; i<= Number(num); i++){res= res*i;};console.log(res)};fack(5)

/*
//Дан инпут и кнопка. Пользователь вводит в инпут какую-то строку. По нажатию на кнопку перемешайте введенные символы случайным образом и запишите ее обратно в инпут.
let inp1 = document.querySelector('#inp1');
let btn  = document.querySelector('#btn');
btn.addEventListener('click', function(){
    let str= '';
    for(let i=0; i<inp1.value.length; i++){
        str += inp1.value[Math.floor(Math.random() * inp1.value.length)].charAt(0);
    }; inp1.value = str
})


/*
//Дан инпут и кнопка. По нажатию на кнопку сгенерируйте случайную строку из 8-ми символов и запишите в инпут.
let inp1 = document.querySelector('#inp1');
let btn  = document.querySelector('#btn');
btn.addEventListener('click', function(){
    /* //    1 вариант сам писал
    let str = '';
    let abc = "abcdefghijklmnopqrstuvwxyz";
    for(let i=0; i<=8; i++ ){str+= abc[Math.floor(Math.random() * abc.length)].charAt()};
    console.log(str)
    */
     //   2 вариант подсмотрел
    // let abc = "abcdefghijklmnopqrstuvwxyz";
    // let randstr = "";
    // while (randstr.length < 8) {randstr += abc[Math.floor(Math.random() * abc.length)];}
    // inp1.value=randstr
//})


/*
btn.addEventListener('click', function(){
    let abc = "abcdefghijklmnopqrstuvwxyz";
    let randstr = "";
    while (randstr.length < 8) {randstr += abc[Math.floor(Math.random() * abc.length)];}
    inp1.value=randstr
})


/*
//есть дивы. В них есть текст. Обойдите все дивы и обрежьте тот текст, который в них стоит так, чтобы он стал длиной 10 символов. И добавьте троеточие в конец 
let texts = document.querySelectorAll('.text10');
for(let text of texts){text.textContent = text.textContent.slice(0, 9) + '...'}

/*
//Дан инпут. Даны абзацы. Пусть в этот инпут записывается суммарное количество нажатий по этим абзацам.
let inp1 = document.querySelector('#inp1'); let abzs = document.querySelectorAll('p.sum')
for(let abz of abzs ){abz.addEventListener('click', function(){inp1.value = Number(inp1.value) +1})}

/*
//Реализуйте кнопочки +1, -1, которые будут увеличивать или уменьшать на 1 значение инпута. Сделайте так, чтобы это значение не могло стать меньше нуля.
let inp1 = document.querySelector('#inp1');
let butPlus = document.querySelector('#button1')
let butMinus = document.querySelector('#button2')
butPlus.addEventListener('click', function(){inp1.value= parseInt(inp1.value) + 1})
butMinus.addEventListener('click', function(){inp1.value= parseInt(inp1.value) - 1;
    if(inp1.value<=0){inp1.value= 0}
})

/*
//Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса узнайте день недели (словом), который приходится на эту дату.
let inp1 = document.querySelector('#inp1');
inp1.addEventListener('blur', function() {
    let data= new Date(inp1.value.split('.').reverse().join(','))
    inp1.value = data.getDay()
    let days = ['вс','пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    inp1.value = days[inp1.value]
})


/*
//абзацев с числами. По нажатию на любой абзац запишите в него квадрат числа, которое в нем находится.
let abzs = document.querySelectorAll('p.sum')
for(let abz of abzs ){abz.addEventListener('click', function(){this.textContent = Number(this.textContent)**2})}

/*
//Даны ссылки. Если ссылка начинается с http://, то добавьте ей в конец стрелку → (делается так: &rarr;).
let links = document.querySelectorAll('.link');
for(let elem of links){if(elem.href.indexOf('https')==0){}}

/*
//Даны ссылки. Добавьте в конец каждой ссылки ее href в круглых скобках.
//<a class="link" href="https://www.google.com"> ссылка на гугл</a>
//<a class="link" href="https://www.ya.ru"> ссылка на яндекс</a>
let links = document.querySelectorAll('.link');
let btn  = document.querySelector('#btn');
btn.addEventListener('click', getHref)
function getHref(elem){for(let elem of links){elem.textContent = elem.textContent + '(' + elem.href + ')'}}


/*
//несколько абзацев и кнопка. По нажатию на кнопку запишите в конец каждого абзаца его порядковый номер
let abz = document.querySelectorAll('p.sum')
let btn  = document.querySelector('#btn');
btn.addEventListener('click', function(){for(let i=0; i<abz.length; i++)
        {abz[i].innerHTML+= (i+1); console.log(abz[i].textContent)}
})
    
/*
//Проверьте по потери фокуса, что это число содержит внутри себя цифру 3.
let inp1 = document.querySelector('#inp1');
inp1.addEventListener('blur', function() {
    let arr = inp1.value.split(''); let res = arr.some(elem => elem==3);
    console.log(res);
})


/*
//проверьте то, что это слово читается с начала и с конца одинаково (например, мадам).
let inp1 = document.querySelector('#inp1');
inp1.addEventListener('blur', function() {
    let reverse = inp1.value.split('').reverse().join('')
    if(inp1.value==reverse){console.log('true')}
})


/*
//31.12.2016. По потери фокуса в этом же инпуте поставьте эту дату в формате 2016-12-31.
let inp1 = document.querySelector('#inp1');
inp1.addEventListener('blur', function() {inp1.value = inp1.value.split('.').reverse().join('')})


/*
//Дан инпут. В него вводится текст. По потери фокуса узнайте количество слов в этом тексте
let inp1 = document.querySelector('#inp1');
inp1.addEventListener('blur', function() {let arr= inp1.value.split(' ');console.log(arr.length)})


/*
//потери фокуса инпутом, введенные фамилия, имя и отчество автоматически стали записанными с большой буквы
let inp1 = document.querySelector('#inp1');
inp1.addEventListener('blur', function() {
    let arr= inp1.value.split(' ');
    arr.forEach (function(){inp1.value = arr[0][0].toUpperCase() + arr[0].slice(1) + ' ' + arr[1][0].toUpperCase() + arr[1].slice(1)});
})


/*
//Даны 4 инпута. В первый инпут вводится ФИО через пробел. По потери фокуса запишите фамилию, имя и отчество в остальные 3 инпута.
let inp1 = document.querySelector('#inp1');let inp2 = document.querySelector('#inp2');
let inp3 = document.querySelector('#inp3');let inp4 = document.querySelector('#inp4');
inp1.addEventListener('blur', function() {
    let arr= inp1.value.split(' ');
    arr.forEach (function(){inp2.value = arr[0];inp3.value = arr[1];inp4.value = arr[2];});
})

/*
//Дан инпут. В него вводятся числа через запятую. По потери фокуса найдите среднее арифметическое этих чисел 
let inp1 = document.querySelector('#inp1');
inp1.addEventListener('blur', function() {
    let arrs = inp1.value.split(',')
    let sum=0;
    arrs.forEach(elem =>sum+=Number(elem));// for(let elem of arrs){sum+= Number(elem)}
    inp1.value= sum/arrs.length
});



//Дан инпут и абзац. По потери фокуса в инпуте запишите значение инпута в конец текста абзаца
/* <input id="inp1"> */
/* <p class="sum11">11</p> */
/*
let inp1 = document.querySelector('#inp1');
let abz = document.querySelector('.sum11')
inp1.addEventListener('blur', function() {
    abz.textContent = abz.textContent + inp1.value

});

/*
//В инпут вводится число. По потери фокуса в консоль должна вывестись сумма цифр этого числа:
let inp3 = document.querySelector('#inp3');
let sum=0;
inp3.addEventListener('blur', function() {
    let arr = [...inp3.value];
    for(let elem of arr){sum+= Number(elem)}console.log(sum)
});


/*
//два инпута вводятся числа. По клику на кнопку в третий инпут должна вывестись сумма этих чисел:
let btn  = document.querySelector('#btn');
let inp1 = document.querySelector('#inp1');
let inp2 = document.querySelector('#inp2');
let inp3 = document.querySelector('#inp3');
btn.addEventListener('click', function() {
    let sum  = Number(inp1.value) + Number(inp2.value);
	inp3.value = sum;
});

/*
//Вдва инпута вводятся числа. Поклику на кнопку втретий инпут должна вывестись сумма этих чисел:
let btn  = document.querySelector('#btn');
let inp1 = document.querySelector('#inp1');
let inp2 = document.querySelector('#inp2');
let inp3 = document.querySelector('#inp3');
btn.addEventListener('click', function() {
	inp3.value = parseInt(inp1.value) + Number(inp2.value);
});

/*
//В инпуты вводятся числа. По клику на кнопку в консоль должна вывестись сумма чисел из инпутов:
let button = document.querySelector('button');
let elems  = document.querySelectorAll('input.sum');
let sum = 0;
button.addEventListener('click', function() {
    for (let elem of elems) {
        sum += Number(elem.value);
    }
 console.log(sum);
});
    
/*
//По клику на кнопку в консоль должна вывестись сумма чисел из абзацев:
let button = document.querySelector('button');
let elems  = document.querySelectorAll('p.sum');
let sum = 0;

for (let elem of elems) {
	sum += Number(elem.textContent);
	
	button.addEventListener('click', function() {
		console.log(sum);
	});
}

/*
let button = document.querySelector('button');
let elems  = document.querySelectorAll('p');

button.addEventListener('click', function() {
	for (let elem of elems) {
		elem.innerHTML = '<b>' + elem.innerHTML + '</b>';
	}
});


/*
//По клику на кнопку должна вывестись сумма чисел из абзацев
let button = document.querySelector('button');
let elems  = document.querySelectorAll('p.sum');
button.addEventListener('click', function() {
	let sum = 0;
	for (let elem of elems) {sum += Number(elem.textContent);}	
	console.log(sum);
});

/*
//По клику на кнопку текст абзаца должен стать жирным
let button = document.querySelector('button');
let elem   = document.querySelector('p');
button.addEventListener('click', function() {elem.innerHTML = '<b>' + elem.innerHTML + '</b>';})

/*
//Получите года, сумма цифр которых равна 6. Найдите сумму полученных годов.
let sum=0
let yearsList = document.querySelectorAll('li')
for(let year of yearsList){
    let num = Number(year.textContent)
    sum+= num
}console.log(sum)

/*
//чтобы по клику на любую li ее число увеличивалось на единицу.
//чтобы каждая li увеличивала свое значение только по первому нажатию на нее.
// чтобы каждая li увеличивала свое значение только если ее значение меньше 10.
let liNums = document.querySelectorAll('li.z')
for(let li of liNums){
    li.addEventListener('click', function getPlusOne(){
        this.textContent = Number(this.textContent) +1;
        if(this.textContent>=5){
            this.removeEventListener('click', getPlusOne )
        }
    })
    

}

/*
//Дана кнопка, значением которой служит число 1. Сделайте так, чтобы по клику на эту кнопку ее значение каждый раз увеличивалось на единицу. После того, как значение кнопки достигнет 10 - отвяжите обработчик события, чтобы кнопка больше не реагировала на нажатие.
// <input id="button1" type="submit" value="1"> 
let butt1=document.querySelector('#button1');
butt1.addEventListener('click', getTenStop)
function getTenStop(){
    this.value= Number(this.value) + 1;
    if(this.value>=5){this.removeEventListener('click', getTenStop)}
}

/*
//Даны абзацы с числами. Сделайте так, чтобы по клику на любой абзац его число в нем возводилось в квадрат.
// и добавил отвязать событие
let nums= document.querySelectorAll('.www')
function getSquareNum(){this.textContent = Number(this.textContent **2); this.removeEventListener('click', getSquareNum)}
for(let num of nums){num.addEventListener('click', getSquareNum);}
//или сделать функцию - обработчик анонимной. второй вариант
// for(let num of nums){num.addEventListener('click', function(){this.textContent = Number(this.textContent **2);});}


// найти самое длинное слово в предложении метод sort, (for, reduce тоже ими можно и удобно)
/*
function findLongestWord(str) {
    var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
    return longestWord[0];
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

/*
//Даны инпуты. Сделайте так,чтобы попотери фокуса влюбом из наших инпутов выполняласьприведенная выше функция.
let button1 = document.querySelectorAll('#button1');
for(let elem of button1){elem.addEventListener('click', getSum)}
function getSum() {this.value = Number(this.value) + 1;}

/*
//По нажатию на кнопку запишите в конец текста каждого абзаца его порядковый номер.
//на кнопку найдите все абзацы, переберите их циклом и установите текст каждого абзаца в значение 'text'.  <input id="button1" type="submit" value="1">
let elems = document.querySelectorAll('.www');
let button1 = document.querySelector('#button1')
button1.addEventListener('click', getText)
function getText(){
    for(let i=0; i<=elems.length; i++){
        elems[i].textContent = elems[i].textContent + ' ' + Number(i + 1);
        console.log(elems[i].textContent)
    }
}
/*
function getText(){
    for (let elem of elems) {elem.textContent = 'text';
        console.log(elem.textContent);
    }   
}
/*
for (let elem of elems) {elem.addEventListener('click', func);}
 function func() {console.log(this.textContent); // выводим текст абзаца
}  
 


/*
//Даны 2 абзацев скакими-то текстами. Поkлику на любой абзац запишите в конец его текста восклицательный знак.
let abz1=document.querySelector('p.zzz')
let abz2=document.querySelector('p.www')
abz1.addEventListener('click', getPlusZnak)
abz2.addEventListener('click', getPlusZnak);
function getPlusZnak(){this.textContent= this.textContent + '!'}


/*
//Дана кнопка, значением которой служит число 1. Сделайте так, чтобы по клику на эту кнопку ее значение каждый раз увеличивалось на единицу.
//<input id="button1" type="submit" value="1">
let button1 = document.querySelector('#button1')
button1.addEventListener('click', function(){this.value= Number(this.value)+ 1})

/*
let elem = document.querySelector('#elem');
elem.addEventListener('blur', function(){this.value='blur'})
elem.addEventListener('focus', function(){this.value='focuc'})

//function getText(){console.log(this.value='!!!!')};

/*
let elem = document.querySelector('#elem');
elem.value = 'www';
elem.type  = 'submit';

/*
//на кнопку прочитайте и выведите на экран значение атрибута class нашего дива.
// <div id="elem" class="content no-gap"></div>
let button1 = document.querySelector('#button1')
let elemClassName = document.querySelector('#elem')
button1.addEventListener('click', getText)
function getText(){console.log(elemClassName.className.split(' '))};


/*
//Дан инпут. По получению фокуса запишите в него число 1, а по потери фокуса - число 2.
//Дан инпут. Пусть в него вводится число. По потери фокуса выведите на экран квадрат этого числа
let inpText3 = document.querySelector('.inText1');
//inpText3.addEventListener('focus', function() {console.log(inpText3.value = '!!!!');})
//inpText3.addEventListener('blur', function() {console.log(inpText3.value = '%%%%');})
inpText3.addEventListener('blur', function() {console.log(inpText3.value**2);})

/*
//на кнопку запишите в первый инпут значение второго инпута, а во второй инпут - значение первого. Ваш код должен работать универсально, для любых значений инпутов.
let button1 = document.querySelector('#button1')
let inpText1 = document.querySelector('.inText1');
let inpText2 = document.querySelector('.inText2');
button1.addEventListener('click', getText)
function getText(){let lem3= inpText1.value; inpText1.value = inpText2.value; inpText2.value=lem3};

/*
//Дан инпут и кнопка. По нажатию на кнопку запишите в инпут какой-нибудь текст.
//<input class="inText" value="text">
let button1 = document.querySelector('#button1')
let inpText = document.querySelector('.inText1');
button1.addEventListener('click', getText)
function getText(){inpText.value = 'z!z!z!'};

/*
//кнопка и абзац. Сделайте так, чтобы по клику на кнопку в абзац записался путь к картинки из ее атрибута src.
//<img class="icon" src="C:\Users\mi\Code\images\icon.png" alt="">
//<p id="elem1">110</p>
//<input id="button1" type="submit"></input>
let butt1 = document.querySelector('#button1')
let elem1 = document.querySelector('p#elem1')
let imageIcon = document.querySelector('.icon') 
butt1.addEventListener('click', getText)
function getText(){elem1.textContent = imageIcon.src; imageIcon.width = "100"};


/*
//ссылка и кнопка.нажатию накнопку добавьте в конец текста ссылки содержимое ее атрибута href вкруглых скобках
let butt1 = document.querySelector('#button1')
let type = document.querySelector('a.link')
butt1.addEventListener('click', getText)
function getText(){return type.textContent = type.textContent + '(' + type.href + ')'};


/*
//<a class="link" href="https://www.google.com"> ссылка на гугл</a>
//ссылка ввиде тега a, кнопка и абзац. Понажатию нкнопку выведите в абзац содержимое атрибута href ссылки
let butt1 = document.querySelector('#button1')
let elem1 = document.querySelector('p#elem1')
let type = document.querySelector('a.link')
butt1.addEventListener('click', getText)
function getText(){return elem1.textContent = type.href};

/*
//Дана также кнопка. По нажатию на кнопку запишите в атрибут type значение submit
let butt1 = document.querySelector('#elem')
butt1.addEventListener('click', getText)
function getText(){return elem.type = 'submit'};
console.log(elem1.textContent)

/*
let str = 'x12,3z z'
//str= str.split('')
let arr = [...(str)]
let result=[]
let isDigitsOnly = arr.forEach(function(elem){
    if(elem>='0' && elem <='9'){ result.push(elem)}
});
//const isDigitsOnly = (str) => str.split('').every(char => char >= '0' && char <= '9');
console.log(result)

/*
//По клику на кнопку запишите в абзац новый текст так, чтобы он был жирным
let elem1 = document.querySelector('p#elem1')
let butt1 = document.querySelector('#button1')
butt1.addEventListener('click', getText)
function getText(){console.log(elem1.innerHTML = '<b>'+ elem1.textContent+ '</b>')};
//console.log(elem1.textContent)


/*
//нажатию на кнопку прибавьте к значению абзаца единицу и запишите полученное число обратно.
let elem1 = document.querySelector('p#elem1')
let butt1 = document.querySelector('#button1')
butt1.addEventListener('click', getText)
function getText(){console.log(elem1.textContent = +elem1.textContent + 1)};

/*
//три абзаца с числами, див, и кнопка. По нажатию на кнопку запишите в текст дива сумму чисел.
let elem1 = document.querySelector('p#elem1')
let elem2 = document.querySelector('p#elem2')
let elem3 = document.querySelector('p#elem3')
let divsum = document.querySelector('div .sum')
let butt1 = document.querySelector('#button1')
butt1.addEventListener('click', getText)
function getText(){divsum = +elem1.textContent + +elem2.textContent + +elem3.textContent; return divsum};
console.log(getText());



/*
//Даны два абзаца какие-то числа, и кнопка. По нажатию на кнопку выведите на экран сумму хранящихся чисел.
let elem1 = document.querySelector('p#elem1')
let elem2 = document.querySelector('p#elem2')
let butt1 = document.querySelector('#button1')
butt1.addEventListener('click', getText)
function getText(){console.log(+elem1.textContent + +elem2.textContent)}


/*
let elem1 = document.querySelector('p#elem1')
let elem2 = document.querySelector('p#elem2')
elem1.addEventListener('dblclick', func1)
elem2.addEventListener('click', func2)
function func1(){ console.log('!!!!')}
function func2(){ console.log(elem2.textContent)}

/*
//по клику на первую кнопку на экран выводилось число 1, по клику на вторую - число 2
let button1 = document.querySelector('#button1')
let button2 = document.querySelector('#button2')
let button3 = document.querySelector('#button3')

button1.addEventListener('click', getButton1 )
button2.addEventListener('click', function(){console.log('2')})
function getButton1(){ console.log('butt1')}

/*
let elem = document.querySelector('p.www')
console.log(elem)

/*
let block = document.querySelector('.block p')
console.log(block)

/*
let block = document.querySelector('#block p')
console.log(block)


/*
let elem = document.querySelector('#parent input');
console.log(elem);

/*
let button = document.querySelector('#button');
console.log(button);
*/