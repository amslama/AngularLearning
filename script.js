var class1 = /** @class */ (function () {
    function class1(name, age, hairColor) {
        this.name = name;
        this.age = age;
        this.hairColor = hairColor;
    }
    class1.prototype.func1 = function () {
        console.log("yay;");
    };
    return class1;
}());
var obj1 = new class1("John", 47, "Brown");
console.log(obj1);
obj1.func1();
