let names: string[] = ["John", "Smith", "Jack"];
//for each loop
for(let name of names)
    console.log(name);

names.forEach(name => console.log(name));

let map: Map<number, string> = new Map();
map.set(1001, 'John');
map.set(1002, 'Smith');

console.log(map.get(1001));

let set: Set<string> = new Set();
set.add("Java");
set.add("JavaScript");
set.add("TypeScript");
set.add("Java");

console.log(set);

class Employee {
    protected processSalary() {
        console.log("processSalary of Employee class");
    }
}

class Manager extends Employee {
    processSalary() {
        super.processSalary();
        console.log("processSalary of Manager class");
    }
}

let emp = new Manager();
emp.processSalary();