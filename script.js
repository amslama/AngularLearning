//Optional parameters MUST be defined in the end
function func1(para1, para2, para3, para4, para5) {
    if (para5 === void 0) { para5 = "default value"; }
    console.log("para1 = " + para1);
    console.log("para2 = " + para2);
    console.log("para3 = " + para3);
    console.log("para4 = " + para4);
    console.log("para5 = " + para5);
}
func1("The string parameter", 67, ["bob", "for", "apples"], [6, 7, 8, 9]);
func1("The string parameter", 67, ["bob", "for", "apples"], [6, 7, 8, 9], "It is defined");
