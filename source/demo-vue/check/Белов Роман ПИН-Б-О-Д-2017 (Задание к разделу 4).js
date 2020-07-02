// Белов Роман ПИН-Б-О-Д-2017
class A {
  constructor(name, age, time, kilom) {
    this._name = name; 
    this._age = age; 
    this.time = time; 
    this.kilom = kilom; 
  }
  
  get name() {
    return this._name;
  }
  
  set name(newName) {
    this._name = newName;
  }
  
  get age() {
    return this._age;
  }
  
  set age(newAge) {
    this._age = newAge; 
  }
  
  run() {
    console.log('Бегает по ' + this.kilom + ' километра(ов) в день'); 
  }
  
  walk() {
    console.log('Ходит по ' + this.time + ' часа(ов) в день'); 
  }
  
  display() {
    console.log('Его возраст ' + this.age + ' лет'); 
  }
  
  speak() {
    console.log('Привет, я A');
  }
}

class B1 extends A {
  constructor(name, lastName) {
    super(name);
    this.lastName = lastName; 
  }
  
  jump() {
    console.log(this.name + ' прыгает'); 
  }
  
  speak() {
    super.speak();
    console.log('Привет, я B1');
  }
}

class B2 extends A {
  constructor(room, floor) {
    this.room = room; 
    this.floor = floor; 
  }
  
  fly() {
    console.log('летает');
  }
}

class B3 extends A {
  constructor(weight, height) {
    this.weight = weight; 
    this.height = height; 
  }
}

class C1 extends B1 {
  constructor(lenght, width) {
    this.lenght = lenght; 
    this.width = width; 
  }
}

let Tomas = new A("Томас", 56, 5, 4); 
console.log(Tomas.name);
Tomas.display(); 
Tomas.walk();
Tomas.run();

let James = new B1('Джейм');
James.jump();


let a = new A(); 
a.speak(); 

let b1 = new B1(); 
b1.speak(); 

