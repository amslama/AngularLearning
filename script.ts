class human{
    //field == property == variable
    static firstName:string = "Samantha";
    constructor(private firstName:string, protected lastName:string, public eyeColor?:string,
                    public hairColor?:string, public age?:number)
    {    }
    

    doAction(){}

    getName(){
        console.log("The first name is " + this.firstName);
    }

    getAllData(){
        if(this.eyeColor == undefined)
        {
            this.eyeColor = "not mentioned";
        }
        if(this.hairColor == undefined)
        {
            this.hairColor = "not mentioned";
        }
        if(this.age==undefined)
        {
            this.age = 0;
        }
        console.log(this.firstName + " " + this.lastName + "'s hair color is " + this.hairColor +
            " and their eye color is " + this.eyeColor + ". Their reported age is " + this.age);
    }
}

class child extends human{
    childSleepiness:string;
    constructor(childSleepiness:string, fName, lName)
    {
        super(fName, lName);
        this.childSleepiness = childSleepiness;

    }

}


var test = new human("Mark", "Johnson", "blue", "brown", 38);

var test2 = new child("none", "Aaron", "Slama");

console.log(test);
console.log(test2);
