const form1 = document.add
const form2 = document.substract
const form3 = document.multiply

const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")

const add = e => {
    e.preventDefault()

    const num1 = Number(form1.num1.value)
    const num2 = Number(form1.num2.value)
    const result = num1 + num2
    const h4 = document.createElement("h4")
    h4.textContent = result

    form1.appendChild(h4)

    console.log(result)
}

const substract = e => {
    e.preventDefault()

    const num1 = Number(form2.num1.value)
    const num2 = Number(form2.num2.value)
    const result = num1 - num2
    const h4 = document.createElement("h4")
    h4.textContent = result

    form2.appendChild(h4)

    console.log(result)
}

const multiply = e => {
    e.preventDefault()

    const num1 = Number(form3.num1.value)
    const num2 = Number(form3.num2.value)
    const result = num1 * num2
    const h4 = document.createElement("h4")
    h4.textContent = result

    form3.appendChild(h4)

    console.log(result)
}

form1.addEventListener("submit", add)
form2.addEventListener("submit", substract)
form3.addEventListener("submit", multiply)