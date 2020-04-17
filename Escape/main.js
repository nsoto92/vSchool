var readlineSync = require("readline-sync")
var key = ""
let options = ['> Put hand in hole', '> Find the key', '> Open the door']
function setKey(name) {
    key = name
}

while (true){
// console.log(key)
let index = readlineSync.keyInSelect(options, ">You find yourself locked inside a room. Inside you see a door with a padlock and a hole in the wall. What do you do? ")

if (options[index]=== '> Find the key'){
    setKey("yes")
    console.log("> You find a key on the wall next to the door")
    
} else if(options[index]=== '> Open the door') {
    if(key === "yes"){
        console.log("> You opened the door and escape the room. Hooray!")
        break
    } else{
    console.log("> The door is locked")
    }
    
    
} else if (options[index]=== '> Put hand in hole') {
    console.log("> You put your hand in the hole. The hole was cursed and you died")
    break
}
}