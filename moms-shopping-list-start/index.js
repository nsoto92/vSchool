const form = document.addItem
const list = document.getElementById("list")


// Functions

let addItem = e => {
    e.preventDefault()
    let removeItem = () => {
        list.removeChild(listItem)
    }

    var input = form.title.value
    var listItem = document.createElement("li")
    var div = document.createElement("div")
    var clearButton = document.createElement("button")
    clearButton.textContent = "X"
    clearButton.addEventListener("click", removeItem)
    var editButton = document.createElement("button")
    editButton.textContent = "edit"
    div.textContent = input
    listItem.appendChild(div)
    listItem.appendChild(editButton)
    listItem.appendChild(clearButton)
    list.appendChild(listItem)

    form.title.value = ''
}



// Event Listeners

form.addEventListener("submit", addItem)
