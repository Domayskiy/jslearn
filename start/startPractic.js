"use strict";

/*
//Выведите этих работников в HTML таблице
let employeesRab = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
];
/*
let tableRab = document.querySelector('#tableRab');//шапка таблицы но с одинаковым текстом
let trc = document.createElement('tr');
for(let i=1; i<=3;i++){
    let tdc = document.createElement('td');
    tdc.textContent = 'шапка табл';
    trc.append(tdc)
}
tableRab.append(trc);
*/
/*
employeesRab.forEach(function(emp){
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

    tableRab.append(tr);

})
/*
let employees = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
];
let table = document.querySelector('#table');
employees.forEach(function(elem){
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    td1.textContent = elem.name;
    tr.append(td1)

    let td2 = document.createElement('td');
    td2.textContent = elem.age;
    tr.append(td2)

    let td3 = document.createElement('td');
    td3.textContent = elem.salary;
    tr.append(td3)

    //Добавление рядов не составляет труда
    let td4 = document.createElement('td');
    td4.textContent= 'Z';
    tr.append(td4)
    

    table.append(tr)
    // чтобы по клику на любую ячейку с зарплатой ее содержимое увеличивалось на 10%.
    td3.addEventListener('click', ()=> td3.textContent = Math.trunc(Number( td3.textContent)*1.1))

})


/*
for(let  elem of employees){
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    td1.textContent = elem.name;
    tr.append(td1)

    let td2 = document.createElement('td');
    td2.textContent = elem.age;
    tr.append(td2)

    let td3 = document.createElement('td');
    td3.textContent = elem.salary;
    tr.append(td3)

    table.append(tr)

}



/*
////чтобы в конце каждой li стояла ссылка 'удалить', с помощью которой можно будет удалить эту li из ul
let arr = ['нажми', 'q', 2, 'w3'];
let ul = document.querySelector('.Pract');
let input = document.createElement('input');
input.value= 'поставь в инпут курсор'
for(let elem of arr){
    let lis = document.createElement('li');
    lis.innerHTML = '<span>' + elem + '</span>';
        lis.addEventListener('click', function funcP(){
            let inp = document.createElement('input');
            let span = document.querySelector('span')
            inp.value = span.textContent;
            lis.append(inp);
            inp.addEventListener('blur', function(){lis.textContent = inp.value;
                lis.addEventListener('click', funcP)}
            );
            this.removeEventListener('click', funcP)
        });

    let remove = document.createElement('a');
    remove.href = "/";
    remove.innerHTML = 'remove'
    lis.append(remove);
    remove.addEventListener('click', function(event){lis.remove(); event.preventDefault()})
    ul.append(lis);
}
input.addEventListener('click', function(){
    let li = document.createElement('li');
    li.textContent ='new'
    ul.insertBefore(li, input);
})
ul.appendChild(input);


/*
//тобы под списком был инпут, с помощью которого можно будет добавить новый элемент в конец списка ul.
//Дан массив. Выведите его элементы в виде списка ul
//чтобы по клику на любую li в ней появлялся инпут, с помощью которого ее можно будет поредактировать.
let arr = ['нажми', 'q', 2, 'w3'];
let ul = document.querySelector('.Pract');
let input = document.createElement('input');
input.value= 'поставь в инпут курсор'
for(let elem of arr){
    let lis = document.createElement('li');
    lis.textContent = elem;
        lis.addEventListener('click', function funcP(){
            let inp = document.createElement('input');
            inp.value = lis.textContent;
            lis.append(inp);
            inp.addEventListener('blur', function(){lis.textContent = inp.value;
                lis.addEventListener('click', funcP)}
            );
            this.removeEventListener('click', funcP)
        })
    ul.append(lis);
}
input.addEventListener('click', function(){
    let li = document.createElement('li');
    li.textContent ='new'
    ul.insertBefore(li, input);
})
ul.appendChild(input);


/*
//чтобы происходило чередование цветов: пусть первая ячейка красится в красный, вторая - в зеленый, третья - опять в красный 
let tds = document.querySelectorAll('#table td');
let color = 'color1';
for (let td of tds) {
	td.addEventListener('click', function() {
		if (color == 'color1') {
			color = 'color2'
		} else {
			color = 'color1'
		}
		this.classList.add(color);
	});
}

/*
//чтобы по клику на кнопку скрывался или показывался соответствующий ей абзац
//бзац, связанный с кнопкой, является ее соседом слева. Можно это использовать в качестве связи:
let buttons = document.querySelectorAll('button');
for (let button of buttons) {
	button.addEventListener('click', function() {
		this.previousElementSibling.classList.toggle('hidden');
	});
}

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

/*
//Оберните сначала текст абзаца в теги span, добавьте к  этим тегам возможность редактирования, а затем добавьте в конец каждого абзаца ссылку на удаление.
let parentX = document.querySelector('#parentX');
let pss = document.querySelectorAll('#parentX p');
for(let p of pss){
    p.innerHTML = '<span>' + p.textContent + '</span>';
    let remove = document.createElement('a');
    remove.href = "/";
    remove.textContent = ' '+ 'ссылка на удаление параграфа'
    p.append(remove);
    remove.addEventListener('click', function (event){
        p.remove();
        event.preventDefault(); //отменил действие браузера. переход по ссылке
    });
}
let spans = document.querySelectorAll('span')
spans.forEach(function(elem){
    elem.addEventListener('click', function funcZZ(){
        let inpZZ = document.createElement('input');
        inpZZ.value= "пиши здесь"
        // inpZZ.value=elem.textContent;
        elem.textContent="";
        elem.append(inpZZ);
        inpZZ.addEventListener('click', function(){inpZZ.value = ""}) //удаляю текст из инпута
        inpZZ.addEventListener('blur', function(){elem.textContent = inpZZ.value;
            elem.addEventListener('click', funcZZ) 
        }); // записываю в элем текст из инпута. и вешаю повторно событие чтобы снова мог писать. вернул инпут
        elem.removeEventListener('click', funcZZ); // чтобы не выскакивали доп инпуты при каждом клике. отвяз событ
    })
})


/*
// при редактировании инпут появлялся в самом абзаце - вместо текста этого абзаца. Пусть затем при окончании редактирования инпут будет убираться, а вместо него опять появляться текст абзаца. урок 476
let elem = document.querySelector('#elemZZ');
elem.addEventListener('click', function funcZZ(){
    let inpZZ = document.createElement('input');
    inpZZ.value=elem.textContent;
    elem.textContent = "";
    elem.append(inpZZ);

    inpZZ.addEventListener('click', function(){inpZZ.value = ""}) //удаляю текст из инпута
    inpZZ.addEventListener('blur', function(){elem.textContent = inpZZ.value;
        elem.addEventListener('click', funcZZ) 
    }); // записываю в элем текст из инпута. и вешаю повторно событие чтобы снова мог писать. вернул инпут
    elem.removeEventListener('click', funcZZ); // чтобы не выскакивали доп инпуты при каждом клике. отвяз событ
})


/*
//чтобы инпута изначально не было на странице, а он появлялся по клику на абзац.
let elem = document.querySelector('#elemZZ');
let parentZZ = document.querySelector('#parentZZ')
elem.addEventListener('click', function funcZZ(){
    let inpZZ = document.createElement('input');
    parentZZ.prepend(inpZZ);
    // elem.parentElement.appendChild(inpZZ) //или так. родитель элмента elem добавь инпут
    elem.removeEventListener('click', funcZZ);

})

/*
//чтобы текст абзаца менялся не по потери фокуса, а по мере ввода текста в инпут.
let elem = document.querySelector('#elemZZ');
let input = document.querySelector('#inputZZ');
input.value = elem.textContent
input.addEventListener('input', function(){elem.textContent = input.value})
console.log(input.getBoundingClientRect()) //содержит объект координат элемента

/*
input.addEventListener('blur', function(){
    elem.textContent=input.value
})




/*
// в телеге занимательные задачи джаваскритп 102
let selectedBlock = null;

    document.querySelectorAll('.block').forEach(block => {
        block.addEventListener('click', (e) => {
            e.stopPropagation(); // предотвращаем всплытие события
            selectedBlock = block; // запоминаем вблок
        });
    });

    document.body.addEventListener('click', (e) => {
        if (selectedBlock) {
            // Получаем размеры
            const rect = selectedBlock.getBoundingClientRect();
            const blockWidth = rect.width;
            const blockHeight = rect.height;

            // Вычисляем новые координаты для центра блока
            const newX = e.clientX - blockWidth / 2;
            const newY = e.clientY - blockHeight / 2;

            // Перемещаем блок
            selectedBlock.style.position = 'absolute';
            selectedBlock.style.left = newX + "px";
            selectedBlock.style.top = newY + "px";

            // Сбрасываем выбранный блок
            selectedBlock = null;
        }
    });
*/



/*
//Дана HTML таблица. Добавьте в нее еще одну колонку, в которой для каждого ряда таблицы будет стоять ссылка на удаление этого ряда.
let table2 = document.querySelector('#table2');
let trs = document.querySelectorAll('#table2 tr');
trs.forEach(function(elem){
    let td3 = document.createElement('td');
    let remove = document.createElement('a');
    remove.href ="/";
    remove.textContent='ссылка на удаление ряда';
    td3.append(remove);
    elem.append(td3);
    td3.addEventListener('click', function(event){
        elem.remove();
        event.preventDefault();
    })
})



//Дан тег ul. Добавьте в конец каждого тега li ссылку на удаления этого li из списка<ul id="parent123"> 1111
/*
let lis = document.querySelectorAll('#parent123 li');
lis.forEach(function(elem){
    let remove = document.createElement('a');
    remove.href = 'https://spb.hh.ru/';
    remove.textContent = 'remove'
    elem.append(remove);
    remove.addEventListener('click', function(event){
        elem.remove(); //удаляет li 
        // this.remove(); //удаляет ссылку 
        event.preventDefault();
    })
});

/*
//нужно предотвратить переход по ссылке с помощью preventDefault
/*
<div id="parentprevDef"> <p id="elem">text</p>; <a href="https://www.rbc.ru/" id="remove">remove</a></div>
*/
/*
let remove = document.querySelector('#remove');
let elem = document.querySelector('#elem');
remove.addEventListener('click', function(event){
    elem.remove();                            //удаление абзаца
    event.preventDefault();                  // отменяем переход по ссылке
})



/*
//чтобы по клику на кнопку в список добавлялся новый элемент. Сделайте так, чтобы любая li удалялась по клику на нее. Речь идет как о тех li, которые уже есть в списке, так о новых, созданных после нажатия на кнопку.
let btn = document.querySelector('#button123');
let parent123 = document.querySelector('#parent123')
// let lis = document.querySelectorAll('li');
// lis.forEach(function(elem){elem.addEventListener('click', function(){this.remove()})})
;(function(){
    let lis = document.querySelectorAll('li');
    for(let elem of lis){
    elem.addEventListener('click', function(){parent123.removeChild(elem)})
}})();
let li = document.createElement('li');
btn.addEventListener('click', function(){
    li.textContent = '!'
    parent123.append(li)
});
li.addEventListener('click', function(){this.remove()})


/*
//чтобы по нажатию на кнопку таблица увеличивалась на один ряд и на одну колонку.
//<button id="startTime">startTime</button>
let table2 = document.querySelector('#table2');
let btn = document.querySelector('#startTime')

btn.addEventListener('click', function(){
    let tr = document.createElement('tr'); //Добавление рядов =
    for (let i = 1; i <= 2; i++) {
        let td = document.createElement('td');
        td.textContent = 'Z'
        tr.appendChild(td);
    }
    table2.appendChild(tr);
    
    let trs=document.querySelectorAll('tr')//Добавление колонок ||
    for(let tr of trs){
        let td=document.createElement('td')
        td.textContent = 'X'
        tr.append(td);
    }
});
//ячейкой таблицы, записать в каждую из них текст. Запишеттолько встарые кроме новых созданых
let tds = document.querySelectorAll('#table2 td');
for (let td of tds) {
	td.textContent = '!';
}


/*
let employees = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
];
let table = document.querySelector('#table');
employees.forEach(function(elem){
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    td1.textContent = elem.name;
    tr.append(td1)

    let td2 = document.createElement('td');
    td2.textContent = elem.age;
    tr.append(td2)

    let td3 = document.createElement('td');
    td3.textContent = elem.salary;
    tr.append(td3)

    //Добавление рядов не составляет труда
    let td4 = document.createElement('td');
    td4.textContent= 'Z';
    tr.append(td4)
    

    table.append(tr)
    // чтобы по клику на любую ячейку с зарплатой ее содержимое увеличивалось на 10%.
    td3.addEventListener('click', ()=> td3.textContent = Math.trunc(Number( td3.textContent)*1.1))

})


/*
for(let  elem of employees){
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    td1.textContent = elem.name;
    tr.append(td1)

    let td2 = document.createElement('td');
    td2.textContent = elem.age;
    tr.append(td2)

    let td3 = document.createElement('td');
    td3.textContent = elem.salary;
    tr.append(td3)

    table.append(tr)

}


/*
//                               Создание HTML таблицы из массива на JavaScript
let arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
let table = document.querySelector('#table');
arr.forEach(function (subArr){
    let tr = document.createElement('tr');
    subArr.forEach(function (elem){
        let td = document.createElement('td');
        td.textContent = elem**2;
        tr.append(td)
    });
    table.append(tr);
})
/*
//Создание HTML таблицы из массива на JavaScript
let arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
let table = document.querySelector('#table');
for(let subArr of arr){
    let tr = document.createElement('tr');
    for(let elem of subArr){
        let td = document.createElement('td');
        td.textContent = elem;
        tr.append(td)
    };
    table.append(tr);
}
/*
//1	2	3	4	5	6
//1	2	3	4	5	6
let inp = [1, 2, 3, 4, 5, 6]
let tabl = document.querySelector('#table');
for(let i=1; i<=2; i++){
    let tr = document.createElement('tr');
    for(let elem of inp){
        let td= document.createElement('td');
        td.textContent=elem;
        tr.append(td);
    }
    tabl.append(tr);
};
/*
let inp = [1, 2, 3, 4, 5, 6]
let tabl = document.querySelector('#table');
for(let i=1; i<=2; i++){
    let tr = document.createElement('tr');
    inp.forEach(function(elem){
        let td= document.createElement('td');
        td.textContent=elem;
        tr.append(td);
    })
    tabl.append(tr)
}



/*
//Дн ul ан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li.
let arr = [1, 2, 3];
let ul = document.querySelector('#elemPr');
arr.forEach(function(elem){let li = document.createElement('li'); li.textContent = elem; ul.append(li)})  
// for(let elem of arr){let li = document.createElement('li'); li.textContent=elem; ul.append(li)}

//так, чтобы по повторное нажатие на li не приводило к добавлению второго '!'.
/*
arr.forEach(function(elem){let li = document.createElement('li'); li.textContent = elem; ul.append(li);
    li.addEventListener('click', func); 
    function func(){li.textContent+='!'; this.removeEventListener('click',func)}
}) 
*/
/*
arr.forEach(function(elem){let li = document.createElement('li'); li.textContent = elem; ul.append(li);
    li.addEventListener('click', function func(){this.textContent+='!'; li.removeEventListener('click',func)}); 
})  




/*
let parent = document.querySelector('#parentPr');
let arr = [1, 2, 3];
arr.forEach(function (elem){
	let p = document.createElement('p');
	p.textContent = elem;
	p.addEventListener('click', function() {
        this.textContent = Number(this.textContent) + 1})
	parent.appendChild(p);
}) 
*/