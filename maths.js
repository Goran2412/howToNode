function sum(a, b) {
    const sum = a + b;
        console.log("The sum of " + a + " and " + b + " equals " + sum);
    return sum;
}

function subtract(a, b) {
    const subtraction = a - b;
        console.log("The diference between " + a + " and " + b + " is " + subtraction);
    return subtraction;
}

function multiply(a, b) {
    const product = a * b;
        console.log("The product of " + a + " and " + b + " is " + product);
    return product;
}

function divide(a, b) {
    if (b == 0) {
        console.log("¡ERROR! Can't divide by zero. Returning 0...");
        return 0;
    }

    const quotient = a / b;
        console.log("The quotient of " + a + " and " + b + " is " + quotient);
    return quotient;
}

function raise(a, b) {
    if (b == 0) {
        return 1;
    } else if (b == 1) {
        return a;
    }

    const power = Math.pow(a, b);
        console.log("The power of " + a + " and " + b + " is " + power);
    return power;
}

module.exports = {
    sum,
    subtract,
    multiply,
    divide,
    raise,

}