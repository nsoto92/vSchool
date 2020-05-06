var readline = require('readline-sync');

// Weapons
function Weapon(name, attack) {
    this.name = name
    this.attack = attack
}

let woodSword = new Weapon("Wooden Sword", 20)
let steelSword = new Weapon("Steel Sword", 35)
let bloodSword = new Weapon("Blood Sword", 65)

// Loot
let loot = ["Diamond", "Metal Plate", "Food Supplies"]
let randLoot = loot[Math.floor(Math.random() * loot.length)]

// Characters
function Character(name, weapon, inventory, hp) {
    this.name = name
    this.weapon = weapon
    this.inventory = inventory
    this.hp = hp
}
var mainCharacter = new Character(input, woodSword, ["Rusty Key"], 100) // Player

// Enemies
var bandit = new Character("Bandit", woodSword, randLoot, 100)
var knight = new Character("Knight", steelSword, randLoot, 100)
var ancientWarrior = new Character("Warrior of Ancient Times", bloodSword, bloodSword, 120)

enemiesArray = [bandit, bandit, bandit, knight, knight, ancientWarrior]
let randEnemies = enemiesArray[Math.floor(Math.random() * enemiesArray.length)]

// Actions 
const walk = () => {
    let odds = ["engage", "keepWalking", "keepWalking"]
    let randOutcome = odds[Math.floor(Math.random() * odds.length)]
    if (randOutcome === "engage") {
        attack()
    } else {
        console.log("You take a few steps in peace.")
    }
}

const run = () => {
    console.log("You have managed to get away")
}

const attack = () => {
    let currentEnemy = randEnemies.name
    let enemyHP = randEnemies.hp
    let enemyAttack = randEnemies.weapon.attack

    readline.prompt(console.log(`> You come across a ` + currentEnemy + ` in your path. ` + currentEnemy + ` has ` + enemyHP + ` HP left.` + "\nPress ENTER key to continue."))
    while (enemyHP > 0) {
        var combatOption = readline.prompt(console.log(`> You have the option to attack your enemy or run away. Press "a" to attack or type "run" to attempt an escape`)).toLowerCase()
        if (combatOption === "run") {
            let odds = ["run", "stay"]
            let escapeChance = odds[Math.floor(Math.random() * odds.length)]
            if (escapeChance === "run") {
                run()
            } console.log("Escape unsuccesful.")
        }
    }
}
//////////////////////
// RPG Start
//////////////////////


//////////////////////
// Greeting
//////////////////////
readline.prompt(console.log('> You wake up in what seems to be an island with no recollection of getting there.' + '\n> As you are inspecting your surroundings, a hologram pops up in your view.' + "\nPress ENTER key to continue."))
var input = readline.question(`"Hey, you're finally awake!, I can help you get out of here. I need you to tell me your name first."` + `\n Enter your name: `);
mainCharacter.name = input
readline.prompt(console.log(`"Hello, ` + mainCharacter.name + `. I am your designated AI for this adventure. You have ` + mainCharacter.hp + ` Health Points remaining"` + "\nPress ENTER key to continue."))

//////////////////////
// Exploration
//////////////////////
while (mainCharacter.hp > 0) {
    var action = readline.prompt(console.log(`> Type "w" to walk. Type "print" to view your inventory and HP.`)).toLowerCase()
    if (action === "print") {
        console.log(`"` + mainCharacter.name + `, your current inventory is: ` + mainCharacter.inventory + `. You have ` + mainCharacter.hp + ` HP remaining."`)
    } else if (action === "w") {
        walk()
    }
}
