var human = /** @class */ (function () {
    //field == property == variable
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
    return human;
}());
var test = new human("Maria", "Boris", "Green");
test.getAllData();
var test2 = new human("Mark", "Johnson", "blue", "brown", 38);
test2.getAllData();
