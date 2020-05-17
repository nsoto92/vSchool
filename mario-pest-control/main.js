var goombas = 5
var bobOmbs = 7
var cheepCheep = 11

var form = document.marioPest

const addAll = (e) => {
    e.preventDefault()
    var five = form.goomb.value * 5
    var seven = form.bO.value * 7
    var eleven = form.cheChe.value * 11

    var total = Number(five + seven + eleven)
    var h1 = document.createElement("h1")
    h1.textContent = total

    document.getElementById("all").append(total)
}

form.addEventListener("submit", addAll)