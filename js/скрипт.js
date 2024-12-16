let employees = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];
let sum2=employees[2]['salary']
let sum1= employees[1]['salary'];
console.log(employees[1]['salary']+employees[2]['salary'])

/*let yer=2018;
let mon=11;
let day=30;
console.log(affairs[yer][mon][day][0])*/

/*let obj = {1: {1: 11,2: 12,3: 13,},2: {1: 21,2: 22,3: 23,},
	3: {1: 24,2: 25,3: 26,},}
let sum=0
for (let key in obj){let subObj = obj[key];
	for (let subKey in subObj){sum+=subObj[subKey]; console.log(subObj[subKey])}
}console.log(sum);*/ // сумма элементов 177

/*let obj = {a: {1: 'a1',2: 'a2',3: 'a3',},b: {1: 'b1',2: 'b2',3: 'b3',},
	c: {1: 'c1',2: 'c2',3: 'c3'},
}
for (let key in obj){let subObj = obj[key];
	for (let subKey in subObj){console.log(subObj[subKey]);}
}*/ // a1,a2,a3,b1,b2,b3,c1,c2,c3

/*let obj = { key1: { key1: 1, key2: 2, key3: 3, },
 key2: { key1: 4, key2: 5, key3: 6, }, key3: { key1: 7, key2: 8, key3: 9, }, }
console.log(obj['key2']['key3'])*/ //6

/*let obj = { key1: { key1: 1, key2: 2, key3: 3, },
 key2: { key1: 4, key2: 5, key3: 6, }, key3: { key1: 7, key2: 8, key3: 9, }, }
let result = 0;
    for(let i = 1; i < 4; i++){
    for(let j = 1; j < 4; j++ ){result += obj['key'+i]['key'+j];}
}console.log(result);//Найдите сумму элементов приведенного объекта.

/*let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
let kl=[];
let zn=[]
for(let key in obj){
    kl.push(key);
    zn.push(obj[key]) //заполнил два новых массива. в один ключи в другой значения
    
}console.log(kl); console.log(zn)*/

/*let obj = {5: 2, 4: 1}; //сумму ключей поделить на сумму значений
let sumK = 0;
let sumV = 0;
let result = 0;
for(let elem in obj){
sumK += Number(elem);
sumV += Number(obj[elem]);
result = sumK / sumV;
}console.log(result);*/

/*let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let res=0
for (let i = 0; i < arr.length; i++) {
	for (let j = 0; j < arr[i].length; j++) {
		for(let k=0; k< arr[i][j].length; k++){res+=arr[i][j][k];}
	}
}console.log(res);*/  // 36 сумма всех элементов

/*let arr = [[[1, 2],[3, 4]],[[5, 6], [7, 8]]];
let result = 0;
for(let elem of arr){
for(let subElem of elem){
for(let subSubElem of subElem){
result += subSubElem;}
}
}
console.log(result);

/*let arr = [[1, 2], [3, 4], [5, 6]];
let sum= (arr[0][0] +arr[0][1]) + (arr[1][0]+arr[1][1])
console.log(sum)

/*let arr = [1,8,3]; //10 сумма элументов массива
let result = 0;
let itog;
for(let i = 0; i <= arr.length-1; i++){result += arr[i]; itog=result/arr.length
}console.log(itog)*/


/*let arr=[-1, 31, 9, 3, 5];
for(let elem of arr){
    if(elem==5){console.log('yes');break;}
}*/

/*let arr=[-1, 31, 9, 3]
for(let elem of arr){if(elem >0 && elem<10){console.log(elem)}} //9,3

/*let arr=[];
for(let i=1;i<=10;i++){arr.push(i)
}console.log(arr)//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]*/

/*let str = '';
for (let i = 0; i < 10; i++) {str += 'x';}
document.write(str);*/ // выведет 'xxxxxxxxxx'

/*let arr=[];
let str=''
for (let i = 1; i <=5; i++){str+='x';   
}arr.push(str);
console.log(arr)*/  //['xxxxxxxxxx']

/*let arr = [];
for (let i = 1; i < 6; i++) {let str='';
	for (let j = 0; j < 5; j++) {str += i;}
	arr.push(str);
}console.log(arr)*/ // ['11111', '22222', '33333', '44444', '55555']


/*let arr=[];
let str=''
for(let i=0; i<5;i++){
    str+='xx'; arr.push(str)
}console.log(arr)

/*for(let i=9; i>=1; i--){
    for(let j=0;j<i; j++){ document.write(i)}document.write('<br>')
}*/

/*for (let i = 10; i >= 2; i-=2) {let str = '';
	for (let j = 0; j < i; j++) {str += 'x';}document.write(str + '<br>');
}*/

/*for (let i = 9; i >=1; i--) {for (let j = 1; j <= i; j++){
    document.write(i);}document.write('<br>');
}*/

/*for (let i = 1; i <= 9; i+=2) {for (let j = 1; j <= i; j++){
		document.write(i);}document.write('<br>');
}

/*for (let i = 1; i <= 9; i++) {for (let j = 1; j <= 3; j++) {document.write(i);
	}document.write('<br>'); // выводим <br>, чтобы было в столбик
}

/*let str=''
for(let i=0; i<5; i++){
    str=str+ 'x';
    document.write(str + '<br>')
}


/*let arr = [6, 7, 8, 9, 10];
for (let i = 1; i < arr.length; i++) {console.log(arr[i-1]+arr[i]+arr[i+1]);}

/*let arr = [6, 7, 8, 9, 10];
for (let i = 2; i < arr.length; i++) {console.log(arr[i-2]+arr[i-1]+arr[i]);}

/*let arr = [6, 7, 8, 9, 10];
for (let i = 2; i < arr.length; i++){console.log(arr[i-2]+ ' ' + arr[i-1]);}

/*let arr = [6, 7, 8, 9, 10];             //13, 15, 17, 19
for (let i = 0; i < arr.length-1; i++){console.log(arr[i] + arr[i+1]);}*/

/*let arr = [6, 7, 8, 9, 10];           // 7,8,9,10
for (let i = 1; i < arr.length; i++){console.log(arr[i]);}*/

/*let arr = [6, 7, 8, 9, 10];            // undefined,6,7,8,9
for (let i = 0; i < arr.length; i++){console.log(arr[i-1]);}*/

/*let arr = ['a', 'b', 'c', 'a', 'a', 'b']
let count = {};
for (let elem of arr) {
	if (count[elem] ===undefined) {count[elem] = 1;} else {count[elem]++;}
}console.log(count); // выведет {a: 3, b: 2, c: 1}*/

/*let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];//7 сосчитать сколько 3и2 в массиве
let counter = 0;
for (let elem of arr) {if (elem == 3 || elem==2) {counter++;}}console.log(counter);*/

/*let arr = ['a', 'b', 'c', 'd', 'e']; //{'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}
let obj={}
for (let i = 1; i <=arr.length; i++){obj[arr[i-1]]=i;}console.log(obj)*/

/*let arr = ['a', 'b', 'c', 'd', 'e'];
let obj = {};
for (let i = 1; i < arr.length; i++){
obj[i] = arr[i-1];
}console.log(obj);*/

/*let obj = { 1: 125, 2: 225, 3: 128, 4: 356, 5: 145, 6: 281, 7: 452, };
let arr = [];
for(let elem in obj){if(String(obj[elem])[0] == 1 || String(obj[elem])[0] == 2){
arr.push(obj[elem]);}}console.log(arr);

/*let obj = {1: 125, 2: 225, 3: 128, 4: 356, 5: 145, 6: 281, 7: 452,};
let res=[]
for(let key in obj){
    if(obj[key]>99 && obj[key]<300){res.push(obj[key])}
}console.log(res)     //числа начинающиеся на 1 или 2 125, 225, 128, 145, 281

/*let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
let kl=[];
let zn=[]
for(let key in obj){
    kl.push(key);
    zn.push(obj[key]) //заполнил два новых массива. в один ключи в другой значения
    
}console.log(kl); console.log(zn)*/

/*let obj = {5: 2, 4: 1}; //сумму ключей поделить на сумму значений
let sumK = 0;
let sumV = 0;
let result = 0;
for(let elem in obj){
sumK += Number(elem);
sumV += Number(obj[elem]);
result = sumK / sumV;
}console.log(result);*/

/*let obj = {1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс'};
let obj1={}
for(let key in obj){
    if(key %2 !=0){obj1[key]=obj[key]}//{1: 'пн', 3: 'ср', 5: 'пт', 7: 'вс'}
}console.log(obj1)*/

/*let obj = {'a': 12, 'b': 21, 'c': 13, 'd': 23, 'e': 17};
let res={}
for(let key in obj){if (obj[key]>10 && obj[key]<20){
res[key]=obj[key];
}}console.log(res) // числа бол 10 и мен20 {'a': 12,'c': 13,'e': 17}*/

/*let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
let result = {};
for (let key in obj) {if (obj[key] % 2 == 0) {
		result[key] = obj[key];}}console.log(result)// выведет {'b': 2, 'd': 4};*/

/*let keys = ['a', 'b', 'c', 'd', 'e'];
let values = [1, 2, 3, 4, 5];
let obj = {};
for (let i = 0; i <=4; i++) {obj[values[i]] = keys[i];}console.log(obj);*/

/*let arr=['a','b','c']
arr.reverse(); console.log(arr)*/
/*let arr=['a','b','c'] //[c,b,a] перевернуть массив
let result=[]
for(let i=arr.length-1; i>=0;i--){result.push(arr[i]);}console.log(result)*/

/*let res=[];
let arr = [1,-1,2,-2,3,-3] //[1,2,3] покажет числа которые больше 0
for(let elem of arr){if(elem >=0){ res.push(elem);}}console.log(res)*/

/*let arr=[];
for(let i='x', x=1; x<=3; x++){arr.push(i);} console.log(arr) // ['x','x','x']
/*let arr=[];arr.push('x');arr.push('x');arr.push('x');console.log(arr)// ['x','x','x']

/*let arr=[]
for(let i=1; i<=5; i++){
    arr.push(i)
}console.log(arr)*/

/*let arr = [1, 2, 3, 4, 5];  //вычел 1 из каждого элемента
for (let i = 0; i < arr.length; i++) {arr[i] -=1;}console.log(arr)

/*let arr = [];   //заполняем массив
for (let i = 0; i <= 4; i++) {
	arr[i] = i + 1;}console.log(arr)*/

/*let arr = [];
for (let i = 2, j = 0; i <= 10; i += 2, j++) { //(5) 2,4,6,8,10
	arr[j] = i;
}console.log(arr);*/

//let arr = [];
//for (let i = 0; i <= 4; i++) {arr[i] = i+1;}console.log(arr);//заполнить пустой массив [1,2,3,4,5]

/*let result = '';  // 123456789 как строка
for (let i = 1; i <= 9; i++) {
	result += i;}
console.log(result);*/

/*for(let i=10; i<=20; i++){ //14 число где сумма двух первых элем =5
    let str= String(i);
    if(Number(str[0])+Number(str[1])==5){console.log(i)}}*/

/*let n=123
const str = String(n)
let sum=Number(str[0])+Number(str[1])+Number(str[2]) // можно  Number или parseInt
alert(sum)*/


/*let str=''
for(let i=9; i>=1; i++){
    str=str+i }console.log(str);console.log(str.length) //9 //987654321*/
/*let str=''
for(let i=1; i<=9; i++){
    str=str+'-'+i}console.log(str);console.log(str.length)*/ //9 //-1-2-3-4-5-6-7-8-9*/

/*let num = 2;
let res=0
while (num < 160) {
	num = num *3;
    res++;
    console.log(res);
}
console.log(res);*/

/*let num=31
let flag=true
for(let i=2; i<31; i++){
    if(num%i==0){flag=false; break;
    }
}
console.log(flag)*/ //простое число. проверяем делится ли 31 только на 1 и себя

/*let arr = ['a', 'b', 'c', 'd', 'e'];
let flag=false
for(let elem of arr){
   if(elem =='c'){flag=true;
    break;
   }
}if(flag===true){console.log('усть')// ФЛАГ если есть 'c' в массиве вывести есть
}else{console.log('нет')}*/

/*let sum = 0
for(let i=1; i<100; i++){
sum= sum + i;
if(sum>100){console.log(i); break;} //14 сколько чилел в 105 (1+2+3 и тд +14)
}*/

/*let arr=[2,5,-1,6,3,74]
for(let i = 0; i < arr.length; i++){
    if(arr[i]==3){console.log(i)}}*/ // найти позицию первого числа 3 //4

/*let arr = [1,8,21,-6,8,2,0,9,12,36,85,15];//два способа найти сумму до первого отриц числа
let result = 0;
for(let i = 0; i < arr.length; i++){
result += arr[i];
if(arr[i+1] < 0){
break;}
}console.log(result)*/

/*let arr=[2,5,-1,4]
let sum=0
for(let elem of arr){
    if(elem>0){sum+=elem;
    }else{break}
}console.log(sum)*/

/*let arr=[1,2,3,0,4,5]  //1.2.3.0 перебирать элементы пока не встр 0. прервать цикл
for(let elem of arr){
    console.log(elem);
    if(elem==0){
        break;
    }
}*/

/*let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
let result=0
for(let key in obj){  //найти сумму элементов объекта
    result+=obj[key]
}
console.log(result)*/

/*let arr=['yan','feb','mar','apr','may']
let mons=arr[3]
for(let i = 0; i < arr.length; i++){
    if(arr[i]==mons){
        document.write('<em>' + arr[i] + '</em> ') //вывести месяцы и апрель курсивом
    }else{document.write(arr[i]+' ')}
}*/

/*let arr=['yan','feb','mar','apr','may']
for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
}*/
/*let mon=['yan','feb','mar','apr','may']
for(let elem of mon){console.log(elem)}*/ // let value

/*let arr=[1,2,3]
let mas=0
for(let elem of arr){  //сумму элементов
    mas=mas+elem
}console.log(mas)*/

/*let arr = [1, 2, 3, 4, 5];
for (let elem of arr) {   //for-of
	console.log(elem);
}*/

/*let arr = ['пн', 'вт', 'ср', 'чт', 'пт','сб', 'вс'];
let day= 'вт'
for (let i = 0; i < arr.length; i++){
    if(arr[i]==day){
    document.write('<em>'+ arr[i]+'</em> ') // текущий день курсивом и в переменную
}else{document.write(arr[i]+' ')}
}*/

/*let arr = [1,2,3]
for (let i = 0; i < arr.length; i++){ // каждый с новой строки
    document.write(i+'<br>')
}*/

/*let arr = ['пн', 'вт', 'ср', 'чт', 'пт','сб', 'вс'];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 'сб' || arr[i] == 'вс') {
        document.write('<b>' + arr[i] + '</b> ');
    } else {                                    // выходные дни выделены жирным
        document.write(arr[i] + ' ');
    }
}*/         

/*var myArray = [1,2,3];
myArray.reverse();
console.log(myArray)*/         // [3,2,1] перевернуть массив в обратном порядке

/*let arr=[1,3,2]
for (let i = 0; i <= arr.length-1; i++){ //вывести совпадающие номера элементов
    if(arr[i]==i+1){console.log(arr[i])}//или может так. непонятно задание if(arr[i]/i)
}*/

/*let arr = [10, 20, 30, 50, 235, 3000];
for (let i = 0; i < arr.length; i++) {
  let num = String(arr[i]);  // вывести числа которые начинаютя с 1 или 2 или 5
  let char = num[0];
  if (char == 1 || char == 2 || char == 5) {
    console.log(num);
  }
}*/

/*let arr =[1,2,3,4,5] //найти среднее арифметическое (сумму делить на количество)
let sum =0
for(let i=0;i<arr.length;i++){
    sum=sum+arr[i]
}
let result=sum/arr.length
alert(result)

let arr =[1,2,3,4,5] //найти среднее арифметическое (сумму делить на количество)
let sum =0
let result=0
for(let i=0;i<arr.length;i++){
    sum=sum+arr[i]
}if(result=sum/arr.length){
    alert(result)
}*/

/*let arr=[4,2,-1,-3]
let sum=0
for(let i=0; i<arr.length;i++){
    if(arr[i]>0){
        sum+=arr[i]
    }
}
alert(sum)*/ //найти сумму положительных чисел массива

/*let arr=[2,5,9,15,1,4]
for( let i=0; i<arr.length; i++){
    if(arr[i]>=3 && arr[i]<=10){
        console.log(arr[i])  // вывести б 3 и м 10
    }
}*/

/*let arr=[1,2,3,4]
let sum=0
for (let i=0; i<=arr.length-1; i++){
    if(sum=sum+arr[i]**2);
}
alert(sum)*/ // сумма квадватов элементов массива 30

/*let arr=[2,3,4]
let sum=1
for (let i=0; i<=arr.length-1; i++){
    if(sum=sum*arr[i]);
}                           //перемножить элементы массива
alert(sum)*/

/*let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
	if (arr[i] % 2 != 0) {
		alert(arr[i]);   // показать все нечетные элементы массива
	}
}*/

/*let arr=['a','b','c','d']
for(let i = 0; i<=arr.length-1;i++){
    console.log(arr[i])   //перебрать массив. показать элементы
}*/

/*let result=1
for(let i=1; i<=5; i++){
result= result * i
}
console.log(result)*/ // перемножить с 1 до 5

/*let sum = 0
for(let i=1; i<=9; i+=2){
sum= sum + i;
}
console.log(sum)*/

/*let t=10
while(t>1){console.log(t); t-=2}*/

/*let ok = confirm('Если Вам уже 18, нажмите ок?');
if (ok) {
	alert('секс и бухло');
} else {
	alert('доступ запрещен');
}*/

/*let a = 2 ** 4;
let b = 4 ** 2;
alert(a!=b)*/

/*let num = -5
//alert(num>=0 ? 1: -1)
let res=num>=0 ? 1: -1
alert(res)
/*let res;
if (num>=0){
    res=1

}else {res= -1}
alert(res)*/

/*let num=1
switch (num){
    case 1: alert('zima');
    break;
    case 2: alert('vesna');
    break;
    case 3: alert('leto');
    break;
    default: alert('no');
}*/

/*let a=192831
let str=String(a)
let sum1= +str[0]+ +str[1]+ +str[2]
alert(sum1)
let sum2=Number(str[3])+Number(str[4])+Number(str[5])
if(sum1==sum2){alert('ravno')}else{alert('net')}*/

/*let num=12345
let sum = 0
while (num!=0){                    // цикл делал серега
    sum= sum+(num%10)
    num=parseInt(num/10)
}
alert(sum)*/

/*let n=123
const str = String(n)
let sum=Number(str[0])+Number(str[1])+Number(str[2]) // можно  Number или parseInt
alert(sum)*/

/*let pr=345
let str= String(pr)[0]

if(str[0]==1 || str[0]=='2'){alert('yes')}else{alert('no')}*/

/*let d=14
if(d%2==0) alert('v'); else('N')

let a=15
let b=2
if(a%b==0){
    alert('v')
}else{
    alert('No')
}*/


/*let num = 12345;
let first = String(num)[0];

if (first == 1 || first == 2) {
	console.log('верно');
} else {
	console.log('неверно');
}*/

/*let num = 12345;
let str = String(num);
if (str[str.length-1] == 5 || str == 4){
    alert('VVV');
} else{
    alert('NNN')
}*/

//alert(str[str.length-1])

/*let arr=[1,5,7,4]
if (arr.length==3){
    alert(arr[0]+arr[1]+arr[2])
}else{alert('больше трех')}*/

/*let age = 44;
let result;

if (age >= 18) {
	if (age <= 23) {
		result = 'от 18 до 23';
	} else {
		result = 'больше 23';
	}
} else {
	result = 'меньше 18';
}
console.log(result);*/

/*let age = 17;
let adult;
if (age >= 18) {
	adult=true
} else {
	adult = false;
}
console.log(adult);*/

/*let num = 3; // может быть 1, 2 
if (num==1){alert('value1');
} else if(num==2){alert('value2')}
else {alert( 'неверное число')} //конструкция else if
/*if (num > 0 && num<11) {
	alert('value1'); // сработает, если num равно 1
}

if (num >10 && num<21) {
	alert('value2'); // сработает, если num равно 2
}

if (num >20 && num<32) {
	alert('value3'); // сработает, если num равно 3
}
*/
/*let test = 'a';
if (test == 'a') {
	alert('test');
}*/

/*let test = -1

if (test == true) {
	alert('верно');
} else {
	alert('неверно');
}*/

/*let arr= {
    ru:['pn','vt','sr'],
    en:['mon','two','wes']
}
*/

/*let arr1={js:['jQuery', 'Angular'], php: 'hello', css: 'world'}
alert(arr1.js[0])*/
/*let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ]
alert(arr[1][0])*/

/*var obj = {1: 'пон', 2: 'вт', 3: 'сред'};
let day= obj[3]
alert(day)*/

/*let arr = [2,5,3,4]
alert(arr[0]*arr[1] + arr[2]*arr[3])*/

/*var obj = {'Коля':'1000', 'Вася':'500', 'Петя':'200'};
alert(obj.Коля + obj.Петя);*/

/*let str1 = 8
str1++
let str2=str1**2
let str=15
alert(str1)*/


/*let num
if (num == 9 || num > 10 && num < 20 || num > 20 && num 
	< 30) { 
	alert('верно');
} else {
	alert('неверно');
}*/

/*let test1 = 3;/*
let test2 = 2;
		
if (test1 !== test2) {
	alert('верно');
} else {
	alert('неверно');
}*/


/*let test1=5
let test2=3
if(test2<test1){
    alert('V')
}else{
    alert('N')
}*/

/*et test = 10
if (test!=9){
    alert('verno')
}else{ alert('neverno')}*/

/*const arr = ['a', 'b', 'c'];
arr.b = '1'
console.log(arr);*/

/*let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
console.log('b' in obj);
console.log('f' in obj);*/

/*let arr = ['a', 'b', 'c', 'd', 'e'];
delete arr[4]
delete arr [1]
console.log(arr.length)
console.log(arr)*/

/*let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
delete obj.e;
console.log('e' in obj);
/*let arr1 = [1, 2, 3];
let arr2 = arr1;

arr1[0] = 'a';
console.log(arr1);

console.log( Array.isArray([1, 2, 3]) );
/*let arr = [1,2,3]
console.log( typeof arr[0] );*/

/*let obj={
    'a':1,
    'b':2,
    'c':3
}
let key='c'
alert(obj[key])*/


/*let arr = ['a', 'b', 'c'];
let key=2
alert(arr[key])*/

//alert('ваш возраст ' + prompt('ckolko let?'))

/*let obj = {};
   obj.a= '2021',
   obj.b= '11',
   obj.c= '24',
console.log(obj)*/

/*let result=((arr[0]*arr[1])+(arr[2]*arr[3]))
let arr = ['a','b', 'c']
alert(arr.length-1)*/



/* Урок 22 вроде
const q = {
    one: 1,
    two: 2
}
const newObj = {...q}
console.log(newObj)
*/


/* делал угадай число и сколько попыток понадобилось
let Name = prompt('Как тебя зовут?')
while (Name == ' ' || Name == null) {
    Name = prompt('Как тебя зовут?')
}
alert (Name + ' я загадал число от 1 до 100. Попробуй отгадать его за наименьшее колич попыток. После каждой попытки я скажу "много, "мало или "в точку')
let number = 42
let guess = prompt('какое число я загадал?')
let numberOfGuess = 0

while (guess != number) {
    if (guess > number) {
        guess =  prompt('много');
        numberOfGuess = numberOfGuess + 1
    } 

    if (guess < number) {
        guess = prompt('мало');
        numberOfGuess = numberOfGuess + 1
    } 
}
alert ('ты угадал. Это число' + number + '. Тебе понадобилось ' + numberOfGuess + ' попыток')
*/


/* alert('Hello');

//const result = confirm("A you here&");
//console.log(result);

//const answer = prompt("Vam ect 18", "");
//console.log(typeof(answer));*/


//дз 12 урока 
/*const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};*/

//const a = prompt('Один из последних просмотренных фильмов?', ''),
      //b = prompt('На сколько вы его оцените?', ''),
      //c = prompt('Один из последних просмотренных фильмов?', ''),
      //d = prompt('На сколько вы его оцените?', '');
//personalMovieDB.movies[a] = b;
//personalMovieDB.movies[c] = d;

//console.log(personalMovieDB);


//const answers = [];
//answers[0] = prompt('Сколько фильмов вы уже посмотрели?');
//answers[1] = prompt('kak vahe famil?', '');
//answers[2] = prompt('kak vahe let?', '');

/*document.write(answers);

 const obj = {
    name: "John",
    age: 25,
    isMarried: false
};*/

// console.log(obj.name);

//let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
//console.log(arr[1]);