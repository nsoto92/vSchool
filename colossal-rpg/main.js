var readline = require('readline-sync');

// Constructor Functions
function Character(name, weapon, inventory) {
    this.name = name
    this.weapon = weapon
    this.inventory = inventory
    this.hp = 100
}

function Weapon(name, attack) {
    this.name = name
    this.attack = attack
}

// Weapons
let woodSword = new Weapon("Wooden Sword", 20)
let steelSword = new Weapon("Steel Sword", 35)
let bloodSword = new Weapon("Blood Sword", 65)


// Player Character 
var mainCharacter = new Character(input, woodSword, [])

// Enemies
var bandit = new Character("Bandit", woodSword, [])
var knight = new Character("Knight", woodSword, [])
var ancientWarrior = new Character("Ancient Warrior", bloodSword, bloodSword)


// RPG Flow
readline.prompt(console.log('> You wake up in what seems to be an island with no recollection of getting there.' + '\n> As you are inspecting your surroundings, a hologram pops up in your view.' + "\nPress ENTER key to continue."))
var input = readline.question(`"Hey, you're finally awake!, I can help you get out of here. I need you to tell me your name first."` + `\n Enter your name: `);
mainCharacter.name = input
readline.prompt(console.log(`"Hello, ` + mainCharacter.name + `. You have ` + mainCharacter.hp + ` Health Points remaining"`) + "\nPress ENTER key to continue.")

// console.log(mainCharacter)


