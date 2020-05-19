var numbers = [3, 6, 8, 2]
var words = ["dog", "wolf", "by", "family", "eaten", "camping"]
var people = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]

var ages = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]

//////
// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
//////

// var result = numbers.filter((num) => num >= 5)

//////
// Given an array of numbers, return a new array that only includes the even numbers.
//////

// var result = numbers.filter((num) => num % 2 === 0)

//////
// Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
//////

// var result = words.filter((i) => i.length <= 5)

//////
// Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.
//////

// var result = people.filter((person) => person.member)

//////
// Make a filtered list of all the people who are old enough to see The Matrix (younger than 18)
//////

var result = ages.filter((person) => person.age > 18)

console.log(result)