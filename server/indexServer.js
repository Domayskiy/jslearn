"use strict;"




const http = require('http');
http.createServer(function(req, res){
    res.write('HHHElllooo it is public server');
    res.end()
}).listen(8080)




/*
let parent = document.querySelector('#parent');
let button = document.querySelector('button');
let block  = document.querySelector('#block');
button.addEventListener('click', function(event) {
	block.classList.add('active');
    // event.stopPropagation();
    event.stopImmediatePropagation()

},);

//А теперь сделаем так, чтобы по клику на любое место родителя наш блок скрывался:
parent.addEventListener('click', function(event) {
    block.classList.remove('active');
    if(event.target == block){
        console.log('blockkk')
    }

});
    



let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');

elem1.addEventListener('click', function() {
	console.log('зеленый - погружение');
}, true);
// elem1.addEventListener('click', function() {
// 	console.log('зеленый - всплытие');
// }, false);

elem2.addEventListener('click', function() {
	console.log('голубой - погружение');
},true);
// elem2.addEventListener('click', function() {
// 	console.log('голубой - всплытие');
// }, false);

// elem3.addEventListener('click', function() {
// 	console.log('красный - погружение');
// }, true);
elem3.addEventListener('click', function() {
	console.log('красный- всплытие');
}, false);


/*
elem1.addEventListener('click', function() {
	console.log('зеленый');
});

elem2.addEventListener('click', function(event) {
	console.log('голубой');
	// event.stopImmediatePropagation()
})


// elem2.addEventListener('click', function() {
// 	console.log('голубой - второй обработчик'); // все равно сработает
//     // event.stopPropagation(); // остановим всплытие

// });

elem3.addEventListener('click', function() {
	console.log('красный');

});


/*
let a = undefined;
console.log(a); // false

console.log( Boolean(a) ); // false
console.log( typeof (a) ); // true

let b = 'Б';
console.log( Boolean(b) ); // true
console.log( typeof (b) ); // true


console.log(a > b); // true
*/