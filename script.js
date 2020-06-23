var person = /** @class */ (function () {
    function person(name) {
        this.name = name;
    }
    person.prototype.func1 = function () {
        console.log("The name is " + this.name);
    };
    return person;
}());
var obj1 = new person("Martha");
obj1.func1();
