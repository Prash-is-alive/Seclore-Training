var EmpClass = /** @class */ (function () {
    function EmpClass() {
    }
    return EmpClass;
}());
var Check = /** @class */ (function () {
    function Check() {
    }
    Check.prototype.func1 = function (obj) {
        console.log(obj.empno);
    };
    Check.prototype.func2 = function (obj) {
        console.log(obj.empno);
    };
    return Check;
}());
var c = new Check();
var obj1 = new EmpClass();
obj1.empno = 45;
c.func1(obj1);
var obj2 = {
    empno: 23,
};
c.func2(obj2);
