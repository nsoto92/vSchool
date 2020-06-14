var num = (23 + '')

// console.log(num.length)

for (let i = 0; i <= 100; i++) {
    console.log(i)
}

function largestSwap(num) {
    //return num >= num.toString().split("").reverse().join("")
    return +(num + '')[0] >= +(num + '')[1]
}