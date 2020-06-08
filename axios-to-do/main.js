function getAll() {
    document.getElementById('list').innerHTML = ""
    axios.get("https://api.vschool.io/norbert/todo")
        .then(response => {
            for (let i = 0; i < response.data.length; i++) {
                const h1 = document.createElement('h1')
                const h2 = document.createElement('h3')
                const h3 = document.createElement('h3')
                const h4 = document.createElement('h4')
                //PUT Button
                const check = document.createElement("input");
                check.setAttribute("type", "checkbox");
                //


                // DELETE Button
                const deleteButton = document.createElement('button')
                deleteButton.textContent = "X"
                //

                h1.textContent = "Title: " + response.data[i].title
                h2.textContent = "Description: " + response.data[i].description
                h3.textContent = "Price: " + response.data[i].price
                h4.textContent = "Image Url: " + response.data[i].imgUrl

                // APPENDING
                // PUT FUNCTION
                document.getElementById('list').appendChild(check)
                check.addEventListener("click", function (event) {
                    event.preventDefault()
                    axios.put(`https://api.vschool.io/norbert/todo/${response.data[i]._id}`, { completed: true })
                        .then(response => console.log(response))
                        .catch(error => console.log(error))
                })
                //

                document.getElementById('list').appendChild(h1)
                //DELETE FUNCTION
                document.getElementById('list').appendChild(deleteButton)
                deleteButton.addEventListener("click", function (event) {
                    event.preventDefault()
                    axios.delete(`https://api.vschool.io/norbert/todo/${response.data[i]._id}`)
                        .then(response => getAll())
                        .catch(error => console.log(error))
                })
                //
                document.getElementById('list').appendChild(h2)
                document.getElementById('list').appendChild(h3)
                document.getElementById('list').appendChild(h4)

            }
        })
        .catch(error => console.log(error))
}

getAll()

const form = document.toDoForm

form.addEventListener("submit", function (event) {
    event.preventDefault()

    const newItem = {
        title: form.title.value,
        description: form.description.value,
        price: form.price.value,
        imgUrl: form.image.value
    }

    axios.post("https://api.vschool.io/norbert/todo", newItem)
        .then(response => getAll())
        .catch(error => console.log(error))

})