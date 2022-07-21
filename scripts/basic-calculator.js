// Elements Variables
const pwPlus_minus = document.getElementById('plus-minus');
const calcScreen = document.querySelector('.calculator-screen');
const getNumbers = document.querySelectorAll('#number');
const operations = document.querySelectorAll('#operation');
const equalButton = document.getElementById('equal');
const dotButton = document.getElementById('dot');

// Other Variables
let onOff = 0;
let screenText = '';
let result = null;
let numeradorEntered = 0;
let denominatorEntered = 0;
let operation = 0;
let numerador = 0;
let denominator = null;
let continuousCount = 0; 
let dotCount = 0;

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
        screenText += item.innerText;
        calcScreen.innerText = screenText;      
    })
});

// Events

// Add + / - sign
pwPlus_minus.addEventListener('click', function(){
    if (calcScreen.innerText.slice(0,1) !== '-' && screenText !== '') {
        screenText  = '-' + screenText
        calcScreen.innerText = screenText;
    } else if (calcScreen.innerText.slice(0,1) == '-' && screenText !== '') {
        screenText = screenText.slice(1);
        calcScreen.innerText = screenText;
    }
});

// Operations
operations.forEach(function(item){
    item.addEventListener('click', () => {

        if (continuousCount == 0) {
            numerador = parseFloat(calcScreen.innerText);
            operationSelection(item.innerText);
            console.log(`Numerador ${numerador}`);
            screenText = '';
            continuousCount++;
            dotCount = 0;
        } else {
            denominator = parseFloat(calcScreen.innerText); 
            operator(numerador, denominator, operation);
            calcScreen.innerText = result;
            numerador = result;
            denominator = null;
            screenText = '';
            operationSelection(item.innerText);
            dotCount = 0;
        }
        
    })
});

// Equal button
equalButton.addEventListener('click', function(){
    if (continuousCount == 0) {

    } else {
       denominator = parseFloat(calcScreen.innerText); 
       operator(numerador, denominator, operation);
       calcScreen.innerText = result;
       screenText = '';
       continuousCount = 0;
       dotCount = 0;
    }
});


dotButton.addEventListener('click', function() {
    if (dotCount == 0) {
        screenText = '0';
        screenText += dotButton.innerText;
        calcScreen.innerText = screenText;
        dotCount++; 
    } else {

    }
});


