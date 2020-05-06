// Write a function that takes an array of numbers and returns the largest (without using Math.max())

const largestNum = (arr) => {
    newArr = arr.sort((a, b) => { return a - b })

    return newArr.pop()
}

var num = [3, 5, 2, 8, 1, 9]

// console.log(largestNum(num))


// Write a function that takes an array of words and a character and returns each word that has that character present.

const hasChar = (arr, a) => {
    newArr = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].includes(a) === true) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

// console.log(hasChar(["#3", "$$$", "C%4!", "Hey!"], "#")) 


//  Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.

var isDivisible = (x, y) => {
    if (Number.isInteger(x / y)) {
        return true
    }
    return false
}

// console.log(isDivisible(20, 4))