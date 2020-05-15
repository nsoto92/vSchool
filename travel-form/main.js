var form = document.travelForm

function popUp() {

    var fName = form.fName.value;
    var lName = form.lName.value;
    var age = form.age.value;
    var gender = form.gender.value;
    var destination = form.destination.value;
    var food = [];
    for (let i = 0; i < form.meal.length; i++) {
        if (form.meal[i].checked === true) {
            food.push(form.meal[i].value);
        }
    }




    alert("Please review your information:" + "\nFirst Name: " + fName + "\nLast Name: " + lName + "\nAge: " + age + "\nGender: " + gender + "\nDestination: " + destination + "\nMeal Preference: " + food);
}


form.addEventListener("submit", popUp);