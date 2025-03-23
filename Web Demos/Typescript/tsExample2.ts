class Person {

  constructor(private name: string,  private age?: number) {
    this.name = name;
    this.age = age;
  }

  info() {
    console.log(this.name + " " + this.age);
  }
}

let p1: Person = new Person("John", 25);
p1.info();
export default Person;