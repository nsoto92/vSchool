// Your first task is to use pure JavaScript to insert a header to the top of this page.

document.getElementById("header").innerHTML += "<h1> JavaScript Made This!!</h1>" + `<p><span class="name">Norbert</span> wrote the JavaScript`

// Write some custom JavaScript to automatically change the words of the conversation to something fun and good.

let chatLeft = document.getElementsByClassName("message left")
let chatRight = document.getElementsByClassName("message right")

chatLeft[0].textContent = "Hello!"
chatLeft[1].textContent = "Likewise, what do you do?"

chatRight[0].textContent = "Hey nice to meet you"

// Write some JavaScript that will wait until the user clicks the "clear" button, and then clears out all conversation.

let button = document.querySelector("#clearButton")

function clearChat() {
    let messages = document.getElementsByClassName("messages")
    messages[0].innerText = " "
}

button.addEventListener("click", clearChat)

// Use the drop down to write some JavaScript that will notice when the drop down has changed and then changes the background colors of the messages accordingly.

// Feel free to edit the HTML <select> tag to make it more usable or elaborate. Mo themes, mo fun.

var dropDown = document.getElementById("theme-drop-down")

let leftTheme = document.querySelector(".left")
let rightTheme = document.querySelector(".right")

function themeChange() {
    if (dropDown.value === "red/black") {
        leftTheme.style.backgroundColor = "red"
    }
}

dropDown.addEventListener("click", themeChange)