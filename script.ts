interface CLinterface{
    name: string;
}

class class2 implements CLinterface {
    name: string;
}

interface Interface1 extends class2{
    age:number;

}

var obj1: Interface1 = {age: 32, name: "Barry"}

console.log(obj1);