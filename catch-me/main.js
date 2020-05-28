function sum(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        console.log(a + b)
    } else {
        throw "Fail"
    }
}

var user = { username: "sam", password: "123abc" };

function login(username, password) {
    if (username === user.username && password === user.password) {
        console.log("login successful")
    } else {
        throw "Login not successful"
    }
}

try {
    login("sam", "123abc")
}
catch (err) {
    console.log(err)
}


