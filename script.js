var human = /** @class */ (function () {
    function human() {
    }
    human.prototype.doAction = function () { };
    human.prototype.getName = function () {
        console.log("The first name is " + this.firstName);
    };
    human.prototype.getAllData = function () {
        this.getName();
        console.log("The last name is " + this.lastName);
        console.log("The eye color is " + this.eyeColor);
        console.log("The hair color is " + this.hairColor);
        console.log("The age is " + this.age);
    };
    return human;
}());
var test = new human();
test.firstName = "Maria";
test.lastName = "Boris";
test.getName();
var test2 = new human();
test2.firstName = "Mark";
test2.lastName = "Johnson";
test2.age = 28;
test2.hairColor = "brown";
test2.eyeColor = "blue";
test2.getAllData();
