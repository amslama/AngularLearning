var var1 = "5 + 5";
console.log(var1);
var1 = "another string";
console.log("var1 as a string " + var1);
var1 = 67;
console.log("var1 as a number " + var1);
var array1;
array1 = ["hello world"];
console.log(array1);
array1 = [1, 4, 9];
console.log(array1);
function func1(para1) {
    if (typeof para1 == "string") {
        console.log("para1 is a string");
    }
    else if (typeof para1 == "number") {
        console.log("para1 is a number");
    }
    else {
        console.log(para1);
    }
}
func1("word");
func1(67);
func1(["Let's", "Go", "Blues"]);
