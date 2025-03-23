class EmpClass {
  empno: number;
}

interface EmpInterface {
  empno: number;
}

class Check {
  func1(obj: EmpClass) {
    console.log(obj.empno);
  }

  func2(obj: EmpInterface) {
    console.log(obj.empno);
  }
}

let c = new Check();
let obj1 = new EmpClass();
obj1.empno = 45;

c.func1(obj1);

const obj2: EmpInterface = {
  empno: 23,
};

c.func2(obj2);
