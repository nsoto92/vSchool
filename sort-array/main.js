var arr = [1, 3, 5, 2, 90, 20]
var words = ["dog", "wolf", "by", "family", "eaten"]
var people = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]
//////
// Sort an array from smallest number to largest
//////

// arr.sort((a, b) => a - b)

//////
// Sort an array from largest number to smallest
//////

// arr.sort((a, b) => b - a)

//////
// Sort an array from shortest string to longest
//////

// words.sort((a, b) => a.length - b.length)

//////
// Sort an array alphabetically
//////

// words.sort()

//////
// Sort the objects in the array by age
//////

people.sort((a, b) => a.age - b.age)

console.log(people)