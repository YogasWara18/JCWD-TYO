var input = 6;
var result = "";
for (var i = 1; i <= input; i++) {
    result += "*";
}
for (var j = 1; j <= input; j++) {
    console.log(result);
}
console.log("------------------------");
var number = 5;
var result = "";
for (var k = 1; k <= number; k++) {
    result += "*";
    if (result)
        console.log(result);
}
console.log("-----------------------");
var a = "a";
a = a + "b";
console.log(a);
console.log("-----------------------");
a += "c";
a += "d";
a += "ef";
a += "ef";
a += "gh";
console.log(a);
console.log(a[3]);
