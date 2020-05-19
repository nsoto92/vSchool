var numbers = [1, 2, 3]
var voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
]
var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
]
var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
]

//////
// Turn an array of numbers into a total of all the numbers
//////

// var result = numbers.reduce((final, current) => {
//     final += current
//     return final
// }, 0)

//////
// Turn an array of numbers into a long string of all those numbers.
//////

// var result = numbers.reduce((final, current) => {

//     return final.concat(current)
// }, "")

//////
// Turn an array of voter objects into a count of how many people voted
//////

// var result = voters.reduce((final, current) => {
//     if (current.voted) {
//         final++
//     } return final
// }, 0)

//////
// Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
//////

// var result = wishlist.reduce((final, current) => {
//     final = current.price + final
//     return final
// }, 0)

//////
// Given an array of arrays, flatten them into a single array
//////

// var result = arrays.reduce((final, current) => {
//     return final.concat(current)
// }, [])

//////
// Given an array of potential voters, return an object representing the results of the vote
//////

var result = voters.reduce((final, voter) => {
    if (voter.age >= 18 && voter.age <= 25) {
        final.youth++
        if (voter.voted) {
            final.youngVotes++
        }
    } else if (voter.age > 25 && voter.age <= 35) {
        final.mids++
        if (voter.voted) {
            final.midVotes++
        }
    } else if (voter.age > 35 && voter.age <= 55) {
        final.olds++
        if (voter.voted) {
            final.oldVotes++
        }
    } return final
}, { youngVotes: 0, youth: 0, midVotes: 0, mids: 0, oldVotes: 0, olds: 0 })

console.log(result)