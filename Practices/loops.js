//#1 Loop through the following array and count how many "computers" there are. Log the final count

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"]

const newArr = officeItems.filter(item => item === "computer")

console.log(newArr.length)

//#2 Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if thy aren't 18.

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: "Mike",
        age: 12,
        gender: "male"
    }, {
        name: "Madeline",
        age: 80,
        gender: "female"
    }, {
        name: "Cheryl",
        age: 22,
        gender: "female"
    }, {
        name: "Sam",
        age: 30,
        gender: "male"
    }, {
        name: "Suzy",
        age: 4,
        gender: "female"
    }
]

for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) {
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max, don't let HER in")
        } else {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max, don't let HIM in")
        }

    } else {
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. SHE'S good to see Mad Max")
        } else {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. HE'S good to see Mad Max")
        }
    }
}

//Optional Bonus challenge: Imagine you have a button that toggles a light on and off. Loop through the following array of numbers and toggle the button the numbers of times for each number.

function sum(items) {
    let sum = 0

    for (let i = 0; i < items.length; i++) {
        sum += items[i]
    } if (sum % 2 === 0) {
        console.log("The light is OFF")
    } else {
        console.log("The light is ON")
    }

    return sum

}

console.log(sum([2, 3, 2]))
console.log(sum([2, 5, 435, 4, 3]))
console.log(sum([1, 1, 1, 1, 3]))
console.log(sum([9, 3, 4, 2]))