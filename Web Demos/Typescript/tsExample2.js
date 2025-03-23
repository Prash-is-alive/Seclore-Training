class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    info() {
        console.log(this.name + " " + this.age);
    }
}
let p1 = new Person("John", 25);
p1.info();
export default Person;
