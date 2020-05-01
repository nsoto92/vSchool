//  Make a function that will return any given string into all caps followed by the same string all lowercase.
const capAndLower = (a) => {
    return a.toUpperCase() + a.toLowerCase()
}

// console.log(capAndLower("hello"))

// Make a function that returns a number half the length, and rounded down.
const halfRoundDown = (num) => {
    return Math.floor(num.length / 2)
}

// console.log(halfRoundDown("Hello World"))

// Make a function that uses slice() and the other functions you've written to return the first half of the string
const cutHalf = (a) => {
    return a.slice(0, a.length / 2)
}

// console.log(cutHalf("Hello"))

//  Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower cased.
const finalProb = (a) => {
    var caps = a.toUpperCase().slice(0, Math.floor(a.length / 2))
    var lower = a.toLowerCase().slice(Math.floor(a.length / 2))
    return caps + lower
}
// console.log(finalProb("Hello World"))

const capitalize = (a) => {
    var arr = a.split("")
    var str = (arr1) => {
        for (var i = 0; i < arr1.length; i++) {
            var letter = arr1.indexOf(i)
            if (arr1.indexOf(i) === "r") {
                letter.toUpperCase()
            }
        }
    }
    var hey = str(arr)

    return hey
}

console.log(capitalize("hey friends! practice practice practice!"))