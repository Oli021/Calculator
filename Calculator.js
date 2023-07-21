function backspace() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let display = document.getElementById("display");
        let expression = display.value;

        // Convert trigonometric function inputs from degrees to radians
        expression = expression.replace(/sin\(([^)]+)\)/g, (_, angle) => Math.sin(degreesToRadians(parseFloat(angle))));
        expression = expression.replace(/cos\(([^)]+)\)/g, (_, angle) => Math.cos(degreesToRadians(parseFloat(angle))));
        expression = expression.replace(/tan\(([^)]+)\)/g, (_, angle) => Math.tan(degreesToRadians(parseFloat(angle))));

        // Evaluate the expression using JavaScript's built-in eval function
        let result = eval(expression);

        // Display the result
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}

function degreesToRadians(degrees) {
    return (degrees * Math.PI) / 180;
}



function squareRoot() {
    let display = document.getElementById("display");
    display.value += "sqrt(";
}

function base10Log() {
    let display = document.getElementById("display");
    display.value += "log(";
}

function pi() {
    let display = document.getElementById("display");
    display.value += Math.PI;
}

function e() {
    let display = document.getElementById("display");
    display.value += "e";
}

function power() {
    let display = document.getElementById("display");
    display.value += "^(";
}