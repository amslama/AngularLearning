interface iPerson{
    name:string;
    age:number;
}

var obj1: iPerson = {
    name: "Watson",
    age: 17
}

obj1.name = "David";
obj1.age = 37;

var obj2: Readonly<iPerson> = {
    name: "Elsa",
    age: 17
}