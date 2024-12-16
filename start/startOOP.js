

/*
//Иерархия наследования классов в ООП в JavaScript
//Можно выполнять наследования от класса, который сам является потомком.
class User {
	setName(name) {
		this._name = name;
	}
	getName() {
		return this._name;
	}
}

class Student extends User {
	setYear(year) {
		this._year = year;
	}
	getYear() {
		return this._year;
	}
}

class StudentProgrammer extends Student {
	setSkill(skill) {
		this._skill = skill;
	}
	getSkill() {
		return this._skill;
	}
}
const stud = new StudentProgrammer()
stud.setSkill('js')
stud.setName('bob')
console.log(`${stud.getName()} - ${stud.getSkill()}`)

/*
//Вызов переопределенного метода в ООП в JavaScript
//При переопределении потомок теряет доступ к переопределенному методу родителя. Однако, получить к нему доступ все равно можно. Это делается с помощью ключевого слова super, которое указывает на родительский класс.
class User {
	setAge(age) {
		if (age >= 18) {
			this.age = age;
		} else {
			throw new Error('need age more 0');
		}
	}
}

class Employee extends User {
	setAge(age) {
		if (age <= 120) {
		} else {
			throw new Error('need age less 120');
		};
        super.setAge(age)
	}
}
let emp = new Employee
console.log(emp.setAge(7))

/*
//Наследование публичных методов в ООП
// 1 variant
class User {
	setName(name) {
		this.name = name;
	}
	getName() {
		return this.name;
	}
}
class Student extends User {
	
}
let student = new Student;
student.setName('john');
let name = student.getName();
console.log(name);

// 2 variant

class User {
	constructor(name){
		this.name = name;
    }
	go() {
		return this.name;
	}
}
class Student extends User {
	
}
let student = new Student('bob');
// student('john');
let name = student.go();
console.log(name);

// 3 variant
class User {
		name;
	go() {
		return this.name;
	}
}
class Student extends User {
	
}
let student = new Student();
student.name = 'Bill';
let name = student.go();
console.log(name);



/*
class NumbersArray extends Array {
    sum() {
        return this.reduce((acc, el)=>acc+el, 0)
    }
}
const myArray = new NumbersArray (2,5, 7)
console.log(myArray)
console.log(myArray.sum())
const arr = myArray
arr[0] = 13
console.log(arr.sum())
console.log(arr.__proto__)


/*
//Сделайте класс Validator, который будет выполнять проверку строк на корректность
//Сделайте в вашем классе метод isEmail, проверяющий строку на то, что она корректный email
//метод isNumber, проверяющий строку на то, что она содержит только числа.
class Employee {
	constructor(name, position, department) {
		this.name = name;
		this.position = position;
		this.department = department;
	}
}
class Position {
    constructor(elem){
        this.posit = elem
    }
}
class Department {
    constructor(dolg){
        this.otdel = dolg;
    }
}
// console.log(new Department('js'))

let position = new Position('jonior');
// console.log(position)
let department = new Department('js');
let emp = new Employee('and', position, department);
console.log(Object.values(emp)) //(3) ['and', Position, Department]
//[ 'and', Position { posit: 'jonior' }, Department { otdel: 'js' } ]
// console.log(typeof department)



/*
class Validator {
    getValid(str){
        if(typeof str == 'string'){
            return 'STRING'
        }else{return 'NoNoStr'}
    }
    isMail(str){
        if(/[-.\w]+@([\w-]+\.)+[\w-.]+/g.test(str)){
            return 'майл коррект'
        }else{ throw Error('майл неверный')}
    }
    isNumber(str){
        if(typeof str == 'number'){
            return 'указаны только числа '
        }else{return '!'}
    }
    
}
let valid = new Validator
console.log(valid.isMail('a.sd@ma.ru'))


/*
//специальные методы, позволяющие прочитать эти свойства. Такие методы (их называют геттеры) должны начинаться со слова get, а затем должно идти название читаемого свойство.
class Employee {
    #name;
    #age;
    #sal;
    #work;
    constructor(elname, elage, elsal){
        this.#name = elname;
        this.#age = elage;
        this.#sal = elsal;
    }
    getName(){return this.#name + ''+'!'}
    getAge(){return this.#age};
    getSal(){return this.#sal};

    setWork(str){
        if(str == 'junior'){
            this.#work = str;
        }else{throw new Error('стаж не указан')}
    }
    getWork(){return this.#work}
}
let emp = new Employee('and', 47, 1000)
try {
    emp.setWork('junior');
    console.log(emp.getWork())
} catch (error) {
    console.log(error.message)
}
console.log(Object.keys(emp))


/*
//Приватными могут быть не только свойства, но и методы. Обычно приватными делают вспомогательные методы, чтобы они случайно не могли быть вызваны извне класса.
class Employee {
	constructor(name, salary) {
		this.name = name;
		this.salary = salary;
	}
	
	getSalary() {
		return this.#addSign(this.salary);
	}
	
	#addSign(num) {
		return num + '$';
	}
}
let empl = new Employee('and', 1000)
console.log(empl.getSalary())



/*
//Параметры в конструкторе в ООП 
//специальный метод, который будет вызываться в момент создания нового объекта класса. Этот метод называется constructor
class User {
    #surn;
	constructor(name, sall, surn) {
        this.#surn= surn;
        this.name = name;
        this.sallary = sall;
        this.age = 47;
		// console.log(this.name);
	}
    show(){
        // console.log(this.sallary)
        return `${this.name}: ${this.sallary} - ${this.#surn}`
    }
}
//new User
let user = new User('and', 1000, 'dom')
// user.show()
console.log({...user, work: 'js'})
console.log(user.show())


/*
class User {
    age = 47;
	show() {
		return this.cape(this.name);
	}
	
	cape(str) {
		return str[0].toUpperCase() + str.slice(1);
	}
}

let user = new User
user.name = 'john'
console.log(user.age)


/*
class Student {
    name;
    surn;
    go(){

        return this.showBigStr(this.name, this.surn);
    }
    showBigStr(el1, el2){
        return el1[0].toUpperCase() +'.'+el2[0].toUpperCase()+'.'
    };

}
let stud = new Student
stud.name = 'and';
stud.surn = 'dom'
console.log(stud.go())
// console.log(stud.showBigStr(this.name, this.surn))
/*
class Emplouer {
    age = 47;
    sal = 1000;
    go(){
        return Number(`${this.age}`) + Number(`${this.sal}`)
    };
    work(name, sallary){
        return `${name}: ${sallary}`
    };
    show(){
        console.log(this)
    }
}
let user = new Emplouer;
user.show()

let user1 = new Emplouer;
let user2 = new Emplouer;
console.log(user2.work('Adr', '$1000'))
user2.sal = 2000;
console.log(user1.sal + user2.sal);
console.log(user1.go())

// console.log(user2.sal)
// console.log(Object.keys(user1),  Object.values(user2));
*/
