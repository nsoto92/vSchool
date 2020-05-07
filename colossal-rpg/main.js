var readline = require('readline-sync');

/////////////////
// Game Design
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Weapons
function Weapon(name, attack) {
    this.name = name
    this.attack = attack
}

let woodSword = new Weapon("Wooden Sword", [25, 24, 26, 26, 30])
let steelSword = new Weapon("Steel Sword", [33, 34, 35, 35, 30, 45])
let bloodSword = new Weapon("Blood Sword", [60, 60, 65])

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
var mainCharacter = new Character(input, steelSword, ["Rusty Key"], 100) // Player

// Enemies
var bandit = new Character("Bandit", woodSword, randLoot, 50)
var knight = new Character("Knight", steelSword, randLoot, 60)
var ancientWarrior = new Character("Warrior of Ancient Times", bloodSword, bloodSword, 120)

enemiesArray = [bandit, bandit, knight, knight, ancientWarrior]
let randEnemies = enemiesArray[Math.floor(Math.random() * enemiesArray.length)]

// Actions 

//////////////////////
// Walk
//////////////////////
const walk = () => {
    let odds = ["engage", "keepWalking", "keepWalking"]
    let randOutcome = odds[Math.floor(Math.random() * odds.length)]
    if (randOutcome === "engage") {
        attack()
    } else {
        console.log(" " + "\n> You take a few steps in peace." + "\n ")
    }
}

//////////////////////
// Run
//////////////////////
const run = () => {
    console.log(`> The enemy swings and you slip by them` + "\n> You have managed to get away")
}

//////////////////////
// Attack
//////////////////////
const attack = () => {
    let currentEnemy = randEnemies.name
    let enemyHP = randEnemies.hp
    let characterAttack = mainCharacter.weapon.attack[Math.floor(Math.random() * mainCharacter.weapon.attack.length)]
    let enemyAttack = randEnemies.weapon.attack[Math.floor(Math.random() * randEnemies.weapon.attack.length)]

    readline.prompt(console.log(" " + `\n> You come across a ` + currentEnemy + ` in your path. `
        + currentEnemy + ` has ` + enemyHP + ` HP left.` + "\n " + "\nPress ENTER key to continue."))
    while (enemyHP > 0) {
        var combatOption = readline.prompt(
            console.log(`Enemy HP remaining: ` + enemyHP + `\n> You have the option to attack your enemy or run away. Press "a" to attack or type "run" to attempt an escape. To check your status, press "s"`)).toLowerCase()

        if (combatOption === "run") { //Escape Flow
            let odds = ["run", "stay"]
            let escapeChance = odds[Math.floor(Math.random() * odds.length)]
            if (escapeChance === "run") {
                run()
                break
            } else {
                console.log("> Escape unsuccesful.")

            }
        } else if (combatOption === "a") { //Attack Flow
            enemyHP = enemyHP - characterAttack
            console.log(" " + "\n> You swing your sword at the enemy and inflict " + characterAttack + " damage." + "\n ")
            if (enemyHP > 0) { //Enemy Attack Flow
                mainCharacter.hp = mainCharacter.hp - enemyAttack
                console.log(" " + "\n> The enemy retaliates and inflicts " + enemyAttack + " damage with their sword." + "\n ")
                if (mainCharacter.hp <= 0) {
                    death()
                    break
                }
            } else {   //Loot and Regenerate
                if (mainCharacter.hp < 100) { //Regenerate
                    mainCharacter.hp = mainCharacter.hp + (mainCharacter.hp * .75)
                }
                var newInv = []
                newInv.push(randEnemies.inventory, mainCharacter.inventory) //Loot
                mainCharacter.inventory = newInv
                console.log(" " + "\n> The enemy collapses after the blow. You have inflicted a mortal wound. \n Defeating the enemy regenerates some of your health! \n As you search the body you find: " + randEnemies.inventory + "\n ")
            }
        } else if (combatOption === "s") { //Status Check
            console.log(`///////////////////////////////////////////////////////////////////////////////////\n/////`
                + `\n"` + mainCharacter.name + `, you have ` + mainCharacter.hp + ` HP remaining."`
                + `\n/////\n///////////////////////////////////////////////////////////////////////////////////`)
        }
    }
}

//////////////////////
// Death
//////////////////////
const death = () => {
    console.log(`> You feel the enemy's sword hit and you cannot respond. As your vision fades you realize you have failed the game.`)
    console.log(`
██╗░░░██╗░█████╗░██╗░░░██╗  ██╗░░░░░░█████╗░░██████╗███████╗
╚██╗░██╔╝██╔══██╗██║░░░██║  ██║░░░░░██╔══██╗██╔════╝██╔════╝
░╚████╔╝░██║░░██║██║░░░██║  ██║░░░░░██║░░██║╚█████╗░█████╗░░
░░╚██╔╝░░██║░░██║██║░░░██║  ██║░░░░░██║░░██║░╚═══██╗██╔══╝░░
░░░██║░░░╚█████╔╝╚██████╔╝  ███████╗╚█████╔╝██████╔╝███████╗
░░░╚═╝░░░░╚════╝░░╚═════╝░  ╚══════╝░╚════╝░╚═════╝░╚══════╝`)
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////
// RPG Start
//////////////////////


//////////////////////
// Greeting
//////////////////////
readline.prompt(console.log(`
████████████████████████████████████████████████
█▄─█▀▀▀█─▄█▄─▄▄─█▄─▄███─▄▄▄─█─▄▄─█▄─▀█▀─▄█▄─▄▄─█
██─█─█─█─███─▄█▀██─██▀█─███▀█─██─██─█▄█─███─▄█▀█
▀▀▄▄▄▀▄▄▄▀▀▄▄▄▄▄▀▄▄▄▄▄▀▄▄▄▄▄▀▄▄▄▄▀▄▄▄▀▄▄▄▀▄▄▄▄▄▀
█─▄─▄─█─▄▄─█
███─███─██─█
▀▀▄▄▄▀▀▄▄▄▄▀
█████████████████▀███████████████████████████████████████
█▄─▄▄▀█▄─▄▄─█─▄▄▄▄███▄─▄█─▄▄▄▄█▄─▄████▀▄─██▄─▀█▄─▄█▄─▄▄▀█
██─▄─▄██─▄▄▄█─██▄─████─██▄▄▄▄─██─██▀██─▀─███─█▄▀─███─██─█
▀▄▄▀▄▄▀▄▄▄▀▀▀▄▄▄▄▄▀▀▀▄▄▄▀▄▄▄▄▄▀▄▄▄▄▄▀▄▄▀▄▄▀▄▄▄▀▀▄▄▀▄▄▄▄▀▀`
    + `\n///////////////////////////////////////////////////////////////////////////////////\n/////`
    + '\n> You wake up in what seems to be an island with no recollection of getting there.'
    + '\n> As you are inspecting your surroundings, a hologram pops up in your view.'
    + `\n/////\n///////////////////////////////////////////////////////////////////////////////////`
    + "\nPress ENTER key to continue."))

var input = readline.question(`///////////////////////////////////////////////////////////////////////////////////\n/////`
    + `\n"Hey, you're finally awake!, I can help you get out of here!`
    + `\n I need you to tell me your name first."`
    + `\n/////\n///////////////////////////////////////////////////////////////////////////////////`
    + `\n Enter your name: `);
mainCharacter.name = input

readline.prompt(console.log(`////////////////////////////////////////////////////////////////////////////////////////\n/////`
    + `\n"Hello, ` + mainCharacter.name + `. I am your designated AI for this adventure. You have ` + mainCharacter.hp + ` Health Points remaining"`
    + `\n/////\n///////////////////////////////////////////////////////////////////////////////////`
    + "\nPress ENTER key to continue."))

//////////////////////
// Exploration
//////////////////////
while (mainCharacter.hp > 0) {
    if (mainCharacter.hp <= 0) {
        death()
        break
    }
    var action = readline.prompt(console.log(`///////////////////////////////////////////////////////////////////////////////////\n/////`
        + `\n> Type "w" to walk. Type "print" to view your inventory and HP.`
        + `\n/////\n///////////////////////////////////////////////////////////////////////////////////`)).toLowerCase()
    if (action === "print") {
        console.log(`///////////////////////////////////////////////////////////////////////////////////\n/////`
            + `\n"` + mainCharacter.name + ` your weapon is: ` + mainCharacter.weapon.name + `, your current inventory is: ` + mainCharacter.inventory + `. You have ` + mainCharacter.hp + ` HP remaining."`
            + `\n/////\n///////////////////////////////////////////////////////////////////////////////////`)
    } else if (action === "w") {
        walk()
    }
}



