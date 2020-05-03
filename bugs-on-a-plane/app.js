var form = document.airlineForm;
const submit = document.getElementById("submit")

function formAlert() {
    var firstName = form.firstName.value;
    var lastName = form.lastName.value;
    var age = form.age.value;
    var gender = form.gender.value;
    var location = form.travelLocation.value;
    const diet = [];
    for (let i = 0; i < form.check.length; i++) {
        if (form.check.checked) {
            diet.push(form.check[i].value);
        }
    }




    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}


submit.addEventListener("click", formAlert);