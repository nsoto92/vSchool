var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

var newArr = []
var caps = alphabet.toUpperCase()
var letters = caps.split("")



for (var i = 0; i < people.length; i++) {

    var result = newArr.push(people[i] + ": ".concat(letters))
    for (var j = 0; j < letters.length; j++) {
    }
}

console.log(newArr)


// function forception(a, b) {
//     var newArr = []
//     var caps = a.toUpperCase()
//     var letters = caps.split("")

//     for (var i = 0; i < b.length; i++) {

//         var result = newArr.push(b[i] + ": ".concat(letters))
//         for (var j = 0; j < letters.length; j++) {
//         }
//     }

//     return newArr
// }

// forception(people, alphabet)

