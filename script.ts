interface CLinterface1{
    name: string;

}
interface CLinterface2{
    age: number;
    func1();
}

class class1 implements CLinterface1, CLinterface2
{
    constructor(public name: string, public age: number,public hairColor:string){}
    func1()
    {
        console.log("yay;")
    }
}

var obj1 =  new class1("John", 47, "Brown");
console.log(obj1);

obj1.func1();

var obj2:CLinterface1 = new class1("Mary", 21, "pink");