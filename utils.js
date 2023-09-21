const sayHi = (name) => {
    console.log(`Hello there ${name}`);
}

const add = (a, b) => {
    return a + b
}

const subtract = (a, b) => {
    return a - b
}

module.exports = {
    sayHi : sayHi,
    add : add,
    subtract : subtract,
}