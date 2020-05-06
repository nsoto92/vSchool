

const forception = (arr1, arr2) => {
    var newArr = []
    var caps = arr2.toUpperCase()
    for (var i = 0; i < arr1.length; i++) {
        var result = newArr.push(arr1[i] + ": ".concat(caps.split(``)))

    }
    return newArr
}

var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"


console.log(forception(people, alphabet))
