// Elements Variables
const pwButton = document.getElementById('pw');
const calcScreen = document.querySelector('.calculator-screen');
const getNumbers = document.querySelectorAll('#number');
const operations = document.querySelectorAll('#operation')


// Other Variables
let onOff = 0;
let screenText = '';
let result = 0;
let numeradorEntered = 0;
let operation = 0;
let numerador = 0;

// Turn ON / OFF Calculator
const activateCalculator = () => {
    if (onOff == 0) {
        calcScreen.innerText = '0';
        onOff = 1;
    } else {
        calcScreen.innerText = '';
        onOff = 0;
    }
};

// Main calculation
const operator = (numerador, denominator, operation) => {
    switch (operation) {
        case 1: // Adding
            result = numerador + denominator;
        break; // Subs
        case 2:
            result = numerador - denominator;
        break;
        case 3: // Multiply
            result = numerador * denominator;
        break;
        case 4: //Division
            result = numerador / denominator;
        break;
        //default:
    }

};

//Operation selection
const operationSelection = (op) => {
    switch (op) {
        case '+': // Adding
            operation = 1;
        break; // Subs
        case '-':
            operation = 2;
        break;
        case '*': // Multiply
            operation = 3;
        break;
        case '/': //Division
            operation = 4;
        break;
        //default:
    }
    return operation;
};

// Alert Numbers
getNumbers.forEach(function(item){
    item.addEventListener('click', () => {
            if(numeradorEntered == 1) {screenText = ''};
            screenText += item.innerText;
            calcScreen.innerText = screenText;
    })
});

// Events
// Activate Calculator
pwButton.addEventListener('click', function(){
    activateCalculator();
});

//Operations
operations.forEach(function(item){
    item.addEventListener('click', () => {
        if (numeradorEntered == 0) {
            numerador = parseFloat(screenText);
            operationSelection(item.innerText);
            numeradorEntered = 1;
        } else {
            denominator = parseFloat(screenText);
            operator(numerador, denominator, operation);
            calcScreen.innerText = result;
        }
    })
});





