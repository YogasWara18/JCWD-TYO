let input = 6
let result = ""

for(let i = 1; i <= input; i++) {
    result += "*"
}
for(let j = 1; j <= input; j++) {
    console.log(result)
}
console.log("------------------------")

let number = 5
let result = ""

for(let k = 1; k <= number; k++) {
    result += "*"
    if(result)
console.log(result)
}
console.log("-----------------------")

let a = "a"
a = a + "b"
console.log(a)

console.log("-----------------------")

a += "c"
a += "d"
a += "ef"
a += "ef"
a += "gh"
console.log(a)    //abcdefgh
console.log(a[3])

