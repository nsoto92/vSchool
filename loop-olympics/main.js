// Write a for loop that prints to the console the numbers 0 through 9.

for (var i = 0; i <= 9; i++) {
    console.log(i)
}

// Write a for loop that prints to the console 9 through 0.

for (var i = 9; i >= 0; i--) {
    console.log(i)
}

// Write a for loop that prints these fruits to the console.

var fruit = ["banana", "orange", "apple", "kiwi"]

for (var i = 0; i < fruit.length; i++) {
    console.log(fruit[i])
}

//  Write a for loop that will push the numbers 0 through 9 to an array.

var newArr = []

for (var i = 0; i <= 9; i++) {
    var numbers = newArr.push(i)
}
console.log(newArr)

// Write a for loop that prints to the console only even numbers 0 through 100.

for (var i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

// Write a for loop that will push every other fruit to an array.

var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
var newArr2 = []

fruit.forEach(function (item, index, array) {
    if (index % 2 === 0) {
        var f = newArr2.push(item)

    }
})

console.log(newArr2)

//

var peopleArray = [
    {
        name: "Harrison Ford",
        occupation: "Actor"
    },
    {
        name: "Justin Bieber",
        occupation: "Singer"
    },
    {
        name: "Vladimir Putin",
        occupation: "Politician"
    },
    {
        name: "Oprah",
        occupation: "Entertainer"
    }
]

// Write a loop that will print out all the names of the people of the people array

for (var i = 0; i < peopleArray.length; i++) {
    console.log(peopleArray[i].name)
}

// Write a loop that pushes the names into a names array, and the occupations into an occupations array.

var occArray = []
var nameArray = []

for (var i = 0; i < peopleArray.length; i++) {
    var p = nameArray.push(peopleArray[i].name)
    for (var j = 0; j < peopleArray.length - 3; j++) {
        var a = occArray.push(peopleArray[j].occupation)
    }
}

console.log(nameArray)
console.log(occArray)

// Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford", and every other occupation to another array starting with, in this case, "Singer".

var eoName = []
var eoOcc = []

// for (var i = 0; i < peopleArray.length; i++) {
//     var p = nameArray.push(peopleArray[i].name)
//     for (var j = 0; j < peopleArray.length - 3; j++) {
//         var a = occArray.push(peopleArray[j].occupation)
//     }
// }

peopleArray.forEach(function (item, index, array) {
    if (index % 2 === 0) {
        var f = eoName.push(item.name)
    } else if (index % 1 === 0) {
        var d = eoOcc.push(item.occupation)
    }
})

// console.log(eoName)
// console.log(eoOcc)

// Create an array that mimics a grid like the following using nested for loops:

arr = []

for (var i = 0; i < 3; i++) {
    var empArr = []
    arr.push(empArr)
    for (var j = 0; j < 3; j++) {
        empArr.push(0)
    }
}

console.log(arr)