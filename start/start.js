"use strict";
// комменты однострочные
/*комменты 
многострочные
*/




/*
//Добавьте в первую группу еще одну подгруппу.  Добавьте нового студента в подгруппу 'subgroup11 
//Сделайте четвертую группу, в ней сделайте подгруппу и добавьте в нее двух новых студентов
let students = {
	'group1': {
		'subgroup11': ['student111', 'student112', 'student113'],
		'subgroup12': ['student121', 'student122', 'student123'],
	},
	'group2': {
		'subgroup21': ['student211', 'student212', 'student213'],
		'subgroup22': ['student221', 'student222', 'student223'],
	},
	'group3': {
		'subgroup31': ['student311', 'student312', 'student313'],
		'subgroup32': ['student321', 'student322', 'student323'],
	},
}
students.group1.subgroup11.push('zzzzzz');
students.group1.subgroup13=[];
students.group4 ={};
students.group4.student41=[]
students.group4.student41.push('stud444', 'stud555')
console.log(students)
/*
let affairs = {
	'2018': {
		11: {
			29: ['дело111', 'дело112', 'дело113'],
			30: ['дело121', 'дело122', 'дело123'],
		},
		12: {
			30: ['дело211', 'дело212', 'дело213'],
			31: ['дело221', 'дело222', 'дело223'],
		},
	},
	'2019': {
		12: {
			29: ['дело311', 'дело312', 'дело313'],
			30: ['дело321', 'дело322', 'дело323'],
			31: ['дело331', 'дело332', 'дело333'],
		}
	},
}
//Пусть даны также три переменные, содержащие год, месяц и день. Выведите дело, соответствующее значениям пер
let day = 30;
let mom = 12;
let year = 2018;
console.log(affairs[year][mom][day][2])
/*
let employees = [
	{
		name: 'name1',
		salary: 300,
		age: 28,
	},
	{
		name: 'name2',
		salary: 400,
		age: 29,
	},
	{
		name: 'name3',
		salary: 500,
		age: 30,
	},
	{
		name: 'name4',
		salary: 600,
		age: 31,
	},
	{
		name: 'name5',
		salary: 700,
		age: 32,
	},
]
let sum=0;
for(let elem of employees){
    if(elem['age']>= 30){
        sum+=elem.salary
    }
};console.log(sum)  //сумму зарплат тех работников, возраст которых равен или более 30 лет.

/*
//Выведите на экран данные каждого работника в формате имя - зарплата
//Выведите на экран сумму зарплат всех работников.
let sum=0
let employees = [{name: 'name1',salary: 300,},
	{name: 'name2',salary: 400,},
	{name: 'name3',salary: 500,},
];
//console.log(employees[1]['salary']+employees[2]['salary'])
for(let elem of employees){
    console.log(elem['name'] + ' ' + elem['salary'])
    sum+=elem['salary']
}    console.log(sum)

/*
let data = [
	{
		1: [
			'data111',
			'data112',
			'data113',
		],
		2: [
			'data121',
			'data122',
			'data123',
		],
	},
	{
		1: [
			'data211',
			'data212',
			'data213',
		],
		2: [
			'data221',
			'data222',
			'data223',
		],
	},
	{
		1: [
			'data411',
			'data412',
			'data413',
		],
		2: [
			'data421',
			'data422',
			'data423',
		],
	},
];
for(let elem of data){
    for(let key in elem){
        for(let elem2 of elem[key]){ // (let elem2 in elem[key])
            console.log(elem2)          // console.log(elem[key][elem2])
        }
    }
}

/*
let data = [
	{
		1: 'data11',
		2: 'data12',
		3: 'data13',
	},
	{
		1: 'data21',
		2: 'data22',
		3: 'data33',
	},
	{
		1: 'data31',
		2: 'data32',
		3: 'data33',
	},
];for(let elem of data){
    for(let key in elem){
        console.log(elem[key])
    }
}

/*
let students = {
	'group1': ['name11', 'name12', 'name13'],
	'group2': ['name21', 'name22', 'name23'],
	'group3': ['name31', 'name32', 'name33'],
};console.log(students['group3'][0])



/*
let sum=0;
let obj = {
	1: {
		1: {
			1: 111,
			2: 112,
			3: 113,
		},
		2: {
			1: 121,
			2: 122,
			3: 123,
		},
	},
	2: {
		1: {
			1: 211,
			2: 212,
			3: 213,
		},
		2: {
			1: 221,
			2: 222,
			3: 223,
		},
	},
	3: {
		1: {
			1: 311,
			2: 312,
			3: 313,
        },
		2: {
			1: 321,
			2: 322,
			3: 323,
		},
	},
}
for(let key in obj){
    for(let subKey in obj[key]){
        for(let elem in obj[key][subKey]){
            sum+= obj[key][subKey][elem]
        }
    }
}console.log(sum)




/*
// Сформируйте с помощью трех вложенных циклов следующий трехмерный массив
let arr=[];
let x =1
for(let i=0; i<2; i++){
    arr[i]=[];
    for(let j=0; j<2; j++){
        arr[i][j]=[];
        for(let k=0; k<2; k++){
            //arr[i][j][k]=x
            arr[i][j].push(x)
            x++
        }
    }
}console.log(arr)         //[[[1, 2], [3, 4]],[[5, 6], [7, 8]]]


/*
//[[1, 2], [3, 4], [5, 6], [7, 8]]
let arr = [];
let k=2;
for(let i=0; i<4; i++){
    arr[i]=[];
    for(let j=0; j<2; j++){
        arr[i].push(k+=2);
        //k=k+2;
    }
}console.log(arr)



/*
//Сформируйте с помощью трех вложенных циклов следующий  трехмерный массив:
let arr=[];
for(let i=0; i<3; i++){
    arr[i]=[];
    for(let j=0; j<2; j++){
            arr[i][j]=[];
        for(let k=1; k<=5; k++){
            arr[i][j].push(k)
        }
    }
}console.log(arr)


/*
//формируйте с помощью двух вложенных циклов следующий массив
let arr=[];
for(let i=0; i<3; i++){
    arr[i]=[];
   for(let j='x', x=0; x<4; x++){ 
    arr[i].push(j)
    }
}console.log(arr)

/*
//[[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]
let arr=[]
for(let i=0; i<3;i++){
    arr[i]=[];
    for(let j=0; j<5; j++){
        arr[i][j]=(j+1)
    }

}console.log(arr)






/*
let arr = [];  // хотим в цикле создать какой-нибудь многомерный массив с числами
for (let i = 0; i < 3; i++) {
	arr[i] = []; // создаем подмассив
	for (let j = 0; j < 3; j++) {
		arr[i].push(j + 1); // заполняем подмассив числами
	}
}console.log(arr)

/*

for (let subArr of arr) {//console.log(subArr);
	for (let elem of subArr) {
        res+=elem
	}
}console.log(res)

/*
let arr = [[[1, 2],[3, 4],],[[5, 6],[7, 8],],];
let res=0;
for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr[i].length; j++){
        for(let k=0; k<arr[i][j].length; k++){
            res= res+arr[i][j][k];
            //console.log(res)
        }//console.log(res)
    }//console.log(res)
}console.log(res)                   //найдите сумму всех его элементов



/*
let arr = [[1, 2], [3, 4], [5, 6]]
//let sum=arr[0][0] + arr[0][1];
//console.log(sum)
let res=0
for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr[i].length; j++){
        res= res+arr[i][j];
        //console.log(res)
    }//console.log(res)
}console.log(res)                //найдите сумму всех его элементов


/*
for(let i=0; i<arr.length; i++){
    let sum=(arr[i][0] + arr[i][1]);
    res+=sum
}      console.log(res)
  





/*
//Создайте из этого массива следующий объект
let arr = ['a', 'b', 'c', 'd', 'e']//{'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
let val=[1, 2, 3, 4, 5]
let obj={};
for(let i=0; i<arr.length; i++){console.log(arr[i])
    obj[arr[i]]=val[i]
}console.log(obj)       //{a: 1, b: 2, c: 3, d: 4, e: 5} 


let arr = ['a', 'b', 'c', 'd', 'e'];//{1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'};
let obj={};
for(let i=0, j=1; i<arr.length; i++, j++){
    obj[j]=arr[i]
}console.log(obj)//{1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'}

/*
let arr={}
for(let i=2,j=0; i<11; i+=2, j++){
    arr[j]=i
}console.log(arr)//{0: 2, 1: 4, 2: 6, 3: 8, 4: 10}



/*
let arr=[];// ['125', '225', '128', '145', '281']
let obj = {
	1: 125,
	2: 225,
	3: 128,
	4: 356,
	5: 145,
	6: 281,
	7: 452,
};
for(let key in obj){
    obj[key]=String(obj[key]);
    if(obj[key][0] == '1' || obj[key][0] == '2'){
        arr.push(obj[key])  
    } 
}console.log(arr)//в новый массив элементы, значение которых начинается с цифры 1 или цифры 2


/*
let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
let kl=[];
let zn=[];
for(let key in obj){
    kl.push(key);
    zn.push(obj[key])
}console.log(kl); console.log(zn)//Запишите ключи этого объекта в один массив, а значения - в другой.

/*
//Найдите сумму ключей этого объекта и поделите ее на сумму значений
let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
let sum1=0
let sum2=0
for(let key in obj){
    sum1+=parseInt(key);
    sum2+=obj[key]
}console.log(sum1); console.log(sum2); console.log(sum1/sum2)

/*
//новый объект, сделав его ключами элементы первого массива, а значениями - элементы второго.
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let arr3={};
for(let i=0; i<arr1.length; i++){arr3[arr1[i]]=arr2[i]}console.log(arr3)





/*
let obj = {employee1: 100, employee2: 200, employee3: 300, employee4: 400, employee5: 500,
	employee6: 600,
	employee7: 700,
};
for(let key in obj){
    if(obj[key]<=400){ obj[key]=parseInt(obj[key]* 1.1);}
    //obj[key]=parseInt(obj[key]* 1.1);
    //obj[key]=parseInt(obj[key])
}console.log(obj)//Увеличьте зарплату каждого работника на 10%.
//только тем работникам, у которых она меньше или равна 400.




/*
let arr=['mo', 'tu', 'wr', 'fr', 'st'];//дни недели, а текущий день выведите курсивом
let day='tu';
for(let elem of arr){
    if(elem==day){
        document.write('<strong>' + '<em>' + elem + '</em>' + '</strong>'  + ' ')
    } else{document.write(elem + ' ')}
}                                              //mo tu wr fr st

/*
let arr=['mo', 'tu', 'wr', 'fr', 'st'];
for(let i=0; i<arr.length; i++){
    if(arr[i]=='st'){arr[i]= '<strong>' + arr[i] + '</strong>'}document.write(arr[i] + ' ')
}//выведите все дни недели, а выходные дни выведите жирным.

/*
let arr=[11, 1, 22, 3, 44];
for(let elem of arr){
    document.write(elem + '<br\>')
}



/*
let arr=[11, 1, 22, 3, 44];//все элементы, значение которых совпадает с их порядковым номером в массиве.
for(let i=0; i<=arr.length; i++){if(arr[i]== i){console.log(arr[i])}}


/*
let arr = [10, 20, 30, 50, 235, 3000];
let str=[]
for(let i=arr.length-1; i>=0; i--){str.push(arr[i])
    console.log(' '+ arr[i] + ' ');//document.write(str)
}document.write(str)//Дан массив с числами. Выведите элементы этого массива в обратном порядке.

/*
for(let i=0; i<arr.length; i++){
    let str=String(arr[i])
    if(str[0]==1 || str[0]==5){
        console.log(arr[i])
    }
}




/*
let arr=[2, 2, 5];
let sum=0;
let res;
for(let elem of arr){
    sum=sum+elem
    res=sum/arr.length
    
}console.log(res);document.write(res)//Дан массив с числами. Найдите среднее арифметическое его элементов

/*
//x,x,x,x,x,x,x,x,x,x
let arr=[];
for(let i='x', x=1; x<=10; x++){//console.log(i);document.write(i)
    arr.push(i)
}console.log(arr); document.write(arr)//['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']


/*
//'8, !xxxxxxxxx'
let str='!';
let arr=[8];
for(let i=1;i<10;i++){str=str + 'x'; //arr.push(str)
}arr.push(str); console.log(arr)//Заполните массив 10-ю иксами с помощью цикла '8, !xxxxxxxxx' 


/*
//x,x,x,x,x,x,x,x,x,x
let arr=[];
for(let i=1; i<=10;i++){let i='x';
arr.push(i)
}console.log(arr);document.write(arr);//Заполните массив 10-ю иксами с помощью цикла



/*
let obj = {a: 10, b: 20, c: 30, d: 40, e: 50};
let sum = 0;
for (let key in obj) {if (String(obj[key])[0] === '1' || String(obj[key])[0] ==='2') {
sum += obj[key];}
}console.log(sum)


/*
let arr = [10, 20, 30, 40, 21, 32, 51];
let sum=0
for(let elem of arr){
    if(String(elem)[0]==='1' || String(elem)[0]==2){
    
        sum+=elem
    }
}console.log(sum)


/*
let num=7
let flag=true;
for(let i=2; i<num; i++){
    if(num%i==0){ flag=false; break; }
}
if(flag===true){console.log('+++')
}else(console.log('---'))
//console.log(flag)


// Работа с флагами
/*
let arr = ['a', 'b', 'c', 'd', 'e'];
let flag = false;
for(let elem of arr){
    if(elem =='c'){
        flag=true;
        break;
    }
}
if(flag===true){
    console.log('++++')
}else{console.log('---')}

/*
let obj = {x: 1, y: 2, z: 3};
for(let key in obj){
    obj[key]++
} console.log(obj) // {x: 2, y: 4, z: 9}

//Переберите этот объект циклом и создайте новый объект так, чтобы его ключами стали элементы старого объекта, а значениями - ключи старого объекта
/*
let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
let newObj={}
for(let key in obj){
    let val= obj[key];
    newObj[val]=key;
}console.log(newObj)            //{1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'}

/*
let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
let newObj={}
for(let key in obj){
    if(obj[key]%2==0){
        newObj[key]=obj[key];
        //console.log(key+ ':' + obj[key])
    }
} console.log(newObj)

/*
let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let arr2 = [1, 2, 3, 4, 5, 6, 7];
let obj={};
for(let i=0; i<=6;i++){
    let key=arr1[i];
    let val=arr2[i];
    obj[key]=val;

}console.log(obj)


/*
let arr=[1, -2, 3];
let newArr=[]
for(let i=0; i<arr.length; i++){
    arr[i]= arr[i]-1
}console.log(arr)

//С помощью двух вложенных циклов выведите на экран следующую строку:11 12 13 21 22 23 31 32 33
/*
for(let i=1; i<=3; i++ ){
    for(let j=1; j<=3; j++){
        document.write(String(i) +  String(j) + ' ')
    };
}

/*
let num =20
if (num>10){ num=num-2; console.log(num);}console.log(num)

/*
let num =20
while (num>10){ num=num-2; console.log(num)}console.log(num)

/*
let sum=1
for(let i=1; i<=50; i++){
    sum=sum+i;
   // console.log(i)
    if(sum >= 100){
        console.log(i)
        break;
    }; //console.log(i)
}

/*
let arr = [9, 7, 2, -1, 3, 5, 8, 3];
for(let key in arr){
    if(arr[key]==3) {
        console.log(key);
        break;
    }
}
/*
let arr = [9, 7, 2, -1, 3, 5, 8, 3];
for(let i=0; i<arr.length;i++){//console.log(i)
    if(arr[i]==3){
        console.log(i);
        break;
    };//console.log(i)
};

/*
let arr = [7, 2, -1, 0, 5];
let sum=0
for(let elem of arr){if(elem==0){ break;}; sum= sum+elem;console.log(elem);};//console.log(sum);

/*
for (let elem of arr) {
        res.push(elem)

	switch (elem) { 
        case 0: console.log(res);
		//console.log(res);
		break; // выйдем из цикла
	}
}; //console.log(elem);


/*
for (let i = 10; i <= 100; i++) {
	let str = String(i); // преобразуем число в строку
	let sum= Number(str[0]) + Number(str[1])
	if (sum == 5) {console.log(str);}
}

/*
let str='';
for(let i=9; i>=1; i--){str+= '-'+i;}console.log(str)

/*
let arr = [2, 5, 3];
let res=1
for(let i=0; i<arr.length; i++){res=res*arr[i];} console.log(res)

/*
let n=0;

for(let i=11; i>0; i--){
    console.log(i);
    n++;
}

console.log(n)

/*
let num = 3;
let i=0

while (num <= 40) {
    //i++;

    num = num * 2;

    console.log(num); // результат
    i++;
	//num = num * 2;

}
console.log(i)

/*
let aaa = 1;
let bbb = 2;
let ccc = 3;

console.log(aaa + bbb + ccc);
let a = '123';
let b = '456';
let s = Number(a) + +b;

    
let sum = +num[0] + +num[1] + +num[2];
//console.log(sum);


/*
let num1 = prompt('Введите первое число');
let num2 = prompt('Введите второе число');
/*
alert(+num1 * +num2);*/ // сложи
//let name = prompt('Ваше имя?');
//alert('Ваше имя: ' + name);
//alert('Ваше имя: ' + prompt('Ваше имя?'));


//alert(parseFloat(a)+parseInt(b));

//const PI = 3.14;
//let num3=String(num1).length + String(num2).length
//alert(num1++)
//alert(eee); // Uncaught ReferenceError: eee is not defined

///let str = `abc
//def`; // так будет работать

//let str1 = 'xxx';
//let str2 = 'yyy';
//let txt  = 'aaa ' + str1 + ' bbb ' + str2 + ' ccc';
//let txt = `aaa ${str1} bbb${str2} ccc`;
