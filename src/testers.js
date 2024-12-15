function capitalize(value) {
    return value.charAt(0).toUpperCase() + value.slice(1)
}

function reverse(data) {
    return data.split("").reverse().join("")
}

const calculate = (function () {
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

function avgArr(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

    }
    return sum / arr.length
}

function minArr(arr) {
    let min = arr[0]
    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return min

}

function maxArr(arr) {
    let max = arr[0]
    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max

}

function lengthArr(arr) {
    return arr.length
}

function analyzeArr(arr) {
    return {
        average: avgArr(arr),
        min: minArr(arr),
        max: maxArr(arr),
        length: lengthArr(arr)
    }
}

function cipher(str, shift) {

    let result = "";
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            result += String.fromCharCode((charCode - 65 + shift) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            result += String.fromCharCode((charCode - 97 + shift) % 26 + 97);

        } else {
            result += str[i];

        }
    }
    return result;
}



console.log(cipher("Hello World", 3));


module.exports = {
    capitalize,
    reverse,
    calculate,
    avgArr,
    minArr,
    maxArr,
    lengthArr,
    analyzeArr,
    cipher
};