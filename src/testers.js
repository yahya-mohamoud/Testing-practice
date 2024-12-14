function capitalize (value) {
    return String(value).charAt(0).toUpperCase() + String(value).slice(1)
}

function reverse (data) {
    return data.split("").reverse().join("")
}

const calculate = ( function()  {
    const add = (a, b) => a + b
    const sub = (a, b) => a - b
    const mul = (a, b) => a * b
    const div = (a, b) => {
        if (b === 0) {
            throw new Error("Error");
            
        }
        return a / b
    }

    return { add, sub, mul, div }
})()


module.exports = {capitalize, reverse, calculate};