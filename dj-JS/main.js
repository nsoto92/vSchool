var square = document.getElementById("square")

function changeBlue() {
    square.style.backgroundColor = "blue"
}

function changeRed() {
    square.style.backgroundColor = "red"
}

function changeYellow() {
    square.style.backgroundColor = "yellow"
}

function changeGreen() {
    square.style.backgroundColor = "green"
}

function changeOrange() {
    square.style.backgroundColor = "orange"
}

function logKey(e) {
    if ( e.code === 'KeyB') {
        square.style.backgroundColor = "blue"
    } else if ( e.code === 'KeyR') {
        square.style.backgroundColor = "red"
    } else if ( e.code === 'KeyY') {
        square.style.backgroundColor = "yellow"
    } else if ( e.code === 'KeyG') {
        square.style.backgroundColor = "green"
    } else if ( e.code === 'KeyO') {
        square.style.backgroundColor = "orange"
    }
}



square.addEventListener("mouseover", changeBlue)
square.addEventListener("mousedown", changeRed)
square.addEventListener("mouseup", changeYellow)
square.addEventListener("dblclick", changeGreen)
document.body.addEventListener("wheel", changeOrange)
document.addEventListener("keydown", logKey)