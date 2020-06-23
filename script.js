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
var person = /** @class */ (function () {
    function person(name) {
        this.name = name;
    }
    person.prototype.eating = function (food) {
        if (food === void 0) { food = "none"; }
        console.log(this.name + " eat s" + food);
    };
    return person;
}());
var Obj1class = /** @class */ (function (_super) {
    __extends(Obj1class, _super);
    function Obj1class(name) {
        return _super.call(this, name) || this;
    }
    Obj1class.prototype.eating = function (food) {
        if (food === void 0) { food = "pasta"; }
        console.log("obj1class");
        _super.prototype.eating.call(this, food);
    };
    return Obj1class;
}(person));
var Obj2class = /** @class */ (function (_super) {
    __extends(Obj2class, _super);
    function Obj2class(name) {
        return _super.call(this, name) || this;
    }
    Obj2class.prototype.eating = function (food) {
        if (food === void 0) { food = "Macaroni"; }
        console.log("obj2class");
        _super.prototype.eating.call(this, food);
    };
    return Obj2class;
}(person));
var obj1 = new person("John");
obj1.eating();
var obj1class = new Obj1class("Mar");
obj1class.eating();
var obj2class = new Obj2class("Martha");
obj2class.eating();
