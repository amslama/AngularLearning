var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var human = /** @class */ (function () {
    function human(firstName, lastName, eyeColor, hairColor, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.eyeColor = eyeColor;
        this.hairColor = hairColor;
        this.age = age;
    }
    human.prototype.doAction = function () { };
    human.prototype.getName = function () {
        console.log("The first name is " + this.firstName);
    };
    human.prototype.getAllData = function () {
        if (this.eyeColor == undefined) {
            this.eyeColor = "not mentioned";
        }
        if (this.hairColor == undefined) {
            this.hairColor = "not mentioned";
        }
        if (this.age == undefined) {
            this.age = 0;
        }
        console.log(this.firstName + " " + this.lastName + "'s hair color is " + this.hairColor +
            " and their eye color is " + this.eyeColor + ". Their reported age is " + this.age);
    };
    //field == property == variable
    human.firstName = "Samantha";
    return human;
}());
var child = /** @class */ (function (_super) {
    __extends(child, _super);
    function child(childSleepiness, fName, lName) {
        var _this = _super.call(this, fName, lName) || this;
        _this.childSleepiness = childSleepiness;
        return _this;
    }
    return child;
}(human));
var test = new human("Mark", "Johnson", "blue", "brown", 38);
var test2 = new child("none", "Aaron", "Slama");
console.log(test);
console.log(test2);
