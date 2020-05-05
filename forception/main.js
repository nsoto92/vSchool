

const forception = (arr1, arr2) => {
    var newArr = []
    for (var i = 0; i < arr1.length; i++) {
        var caps = arr2.toUpperCase()
        var letters = caps.split("")
        var result = newArr.push(people[i] + ": ".concat(letters))
        for (var j = 0; j < arr2.length; j++) {
        }
    }
    return newArr
}

var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

console.log(forception(people, alphabet))
