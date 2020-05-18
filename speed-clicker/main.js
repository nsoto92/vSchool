// Show clicks on refresh
if (localStorage.clicks > 0) {
    document.getElementById("clicks").innerHTML = localStorage.clicks
}

var num = () => {

    localStorage.clicks = Number(localStorage.clicks) + 1
    // Appends
    document.getElementById("clicks").innerHTML = localStorage.clicks
    // Sets value for refresh
    localStorage.setItem("clicks", localStorage.clicks)
}

document.addEventListener("click", num)