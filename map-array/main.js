var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
////
// Array that doubles first array
////

// var result = arr.map((num) => num * 2)

////
// Array that turns numbers into strings
////

//var result = arr.map((num) => JSON.stringify(num))

////
// Array that capitalize each name
////
var names = ["john", "JACOB", "jinGleHeimer", "schmidt"]

// var result = names.map((string) => {
//     return string[0].toUpperCase() + string.slice(1).toLowerCase()
// })

////
// Array that returns names.
////

var people = [{
    name: "Angelina Jolie",
    age: 80
},

{
    name: "Eric Jones",
    age: 2
},

{
    name: "Paris Hilton",
    age: 5
},
{
    name: "Kayne West",
    age: 16
},
{
    name: "Bob Ziroll",
    age: 100
}
]

// var result = people.map((i) => i.name)

////
// Array that determines Matrix entry.
////

// var result = people.map((i) => {
//     if (i.age > 18) {
//         return i.name + " can go to the matrix"
//     } else {
//         return i.name + " is under age!!"
//     }
// })

////
// Make an array of the names in h1s, and the ages in h2s.
////

var result = people.map((i) => {
    return `<h1>` + i.name + `</h1>` + `<h2>` + i.age + `</h2>`
})
console.log(result)