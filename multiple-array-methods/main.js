var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

function lastProb(arr) {
    var newArr = []
    arr.sort((a, b) => {
        if (a.lastName < b.lastName) {
            return -1
        }
    })
    arr.forEach(i => i.age >= 18 && newArr.push(`<li> ` + i.firstName + " " + i.lastName + " is " + i.age + ` </li>`))

    return newArr
}

console.log(lastProb(peopleArray))
