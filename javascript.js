//Functions

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) return "But Why!";
    else return a / b;
}

let firstNumber = null;
let operator = null;
let secondNumber = null;

function operate(operator, firstNumber, secondNumber) {
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        return "Not Allowed!"
    }
    
    switch (operator) {
        case "+":
            return add(firstNumber, secondNumber);
        case "-":
            return subtract(firstNumber, secondNumber);
        case "*":
            return multiply(firstNumber, secondNumber);
        case "/":
            return divide(firstNumber, secondNumber);
        default:
            return "I don't even know what to say!"                    
    }
}

const screen = document.querySelector(".screen");
const numberButtons = document.querySelectorAll(".number"); 

for (let numberButton of Array.from(numberButtons)) {
    numberButton.addEventListener("click", () => {
        let buttonText = numberButton.textContent;
        screen.textContent = buttonText;

        if (operator === null) {
            if (firstNumber === null) {
                firstNumber = buttonText;
            } else {
                firstNumber += buttonText;
            }
        } else {
            if (secondNumber === null) {
                secondNumber = buttonText;
            } else {
                secondNumber += buttonText;
            }
        }
    })
}

const operatorButtons = document.querySelectorAll(".operator");

for (let operatorButton of operatorButtons) {
    operatorButton.addEventListener("click", () => {
        let clickedOperator = operatorButton.textContent;

        if (firstNumber !== null && operator !== null && secondNumber !== null) {
            let result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
            screen.textContent = result;
            firstNumber = result.toString();
            operator = clickedOperator;
            secondNumber = null;
        } else if (firstNumber !== null) {
            operator = clickedOperator;
        }
    })
}