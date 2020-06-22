interface thePerson
{
    FirstName:string,
    LastName:string,
    EyeColor:string,
    Age:number|string
    greeting: () => string
}

var person:thePerson = {
    FirstName: "Aaron",
    LastName: "Slama",
    EyeColor: "Blue",
    Age: 28,
    greeting: () => {return "Hello Aaron"}
}

var person2:thePerson = {
    FirstName: "Johanson",
    LastName: "Mike",
    EyeColor: "Red",
    Age: "66",
    greeting: () => {return "Hello Mike"}
}

console.log(person);
console.log(person2);