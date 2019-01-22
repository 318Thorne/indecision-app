// class examples
class Person {
    constructor(name = "John Doe", age = 0){
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return `hello ${this.name}`;
    }
    getDescription(){
        return `${this.name} is ${this.age} years old.`
    }
}

const me = new Person("Wally", 23);
console.log(me.getDescription());

// sub classes
class Student extends Person{
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();
        return `${description} major: ${this.major}.`
    }
}
const john = new Student("jojn", 12, "comp sci");
console.log(john.getDescription());

class Traveller extends Person{
    constructor(name, age, home){
        super(name, age);
        this.home = home;
    }
    getGreeting(){
         let greeting = super.getGreeting();
         if(!!this.home){
            return `${greeting} I'm visisiting from ${this.home}`;
         }
         return greeting;
    }
}

const bp = new Traveller("jim", 12);
console.log(bp.getGreeting())