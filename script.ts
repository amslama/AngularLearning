class human{
    //field == property == variable
    
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

var test = new human("Maria", "Boris", "Green");

test.getAllData();

var test2 = new human("Mark", "Johnson", "blue", "brown", 38);

test2.getAllData();
