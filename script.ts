class person {
    constructor(public name:string)
    {

    }

    eating(food = "none")
    {
        console.log(this.name + " eats " + food);
    }

}

class Obj1class extends person
{
    constructor(name:string){
        super(name);
    }

    eating(food = "pasta")
    {
        console.log("obj1class");
        super.eating(food);
    }
}
class Obj2class extends person
{
    constructor(name:string){
        super(name);
    }

    eating(food = "Macaroni")
    {
        console.log("obj2class");
        super.eating(food);
    }
}

var obj1 = new person("John");

obj1.eating();

var obj1class = new Obj1class("Mar");

obj1class.eating();

var obj2class = new Obj2class("Martha");
obj2class.eating();