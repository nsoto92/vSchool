var readlineSync = require("readline-sync")

var num1 = readlineSync.questionInt("Enter your first number: ")
var num2 = readlineSync.questionInt("Enter your second number: ")
var operation = readlineSync.question("Please enter the operation to perform: ADD, SUBSTRACT, DIVIDE, MULTIPLY: ")

if (operation === "ADD") {
    return console.log("The result is " + Number(num1+num2))
}

if (operation === "SUBSTRACT") {
    return console.log("The result is " + Number(num1-num2))
}

if (operation === "DIVIDE") {
    return console.log("The result is " + Number(num1/num2))
}

if (operation === "MULTIPLY") {
    return console.log("The result is " + Number(num1*num2))
}