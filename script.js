var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var obj1 = new Person("Mark", 34);
console.log(obj1);
obj1.name = "Elsa";
console.log(obj1);
