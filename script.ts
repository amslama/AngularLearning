class human{
    //field == property == variable
    firstName: string;
    lastName: string;
    eyeColor: string;
    hairColor: string;
    age:number;

    doAction(){}

    getName(){
        console.log("The first name is " + this.firstName);
    }

    getAllData(){
        this.getName();
        console.log("The last name is " + this.lastName);
        console.log("The eye color is " + this.eyeColor);
        console.log("The hair color is " + this.hairColor);
        console.log("The age is " + this.age);
    }
}

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
