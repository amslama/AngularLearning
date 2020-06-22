var array1 = ["Hello", "world!", 67, true, "hi"];


//unlimited amount of elements
var array2: string[]  = ["Hello", "World", "again"];

//limisted amount of elements based on what is between the brackets []
var tuple3:[string,string,number,boolean] = ["some new string", "Second property",67, true];
console.log(array1);
console.log(array2);
console.log(tuple3);

var tuple4: string[];

tuple4 = ["this is the ", "4th tuple"]; 

var tuple5: [string, string, number];

tuple5 = ["Where were they going", "without ever knowing the way", 67]
tuple5.push("1","2",3);
console.log(tuple5);