class person {
    name:string;
    abstract eyeColor:string;
    constructor(name:string)
    {
        this.name = name;
    }

    func1()
    {
        console.log("The name is " + this.name);
    }

    abstract func2();
}

var obj1 = new person("Martha");

obj1.func1();

class Person1 extends person{
    age:number;
    eyeColor:string;
    constructor(name:string, age:number)
    {
        super(name);
        this.age = age;
    }
    func2()
    {
        this.name + " and " + this.age;
    }
}

var obj2 = new Person1("billy bob", 39);

obj2.