// Elements Variables
const pwButton = document.getElementById('pw');
const calcScreen = document.querySelector('.calculator-screen');
const getNumbers = document.querySelectorAll('#number');


// Other Variables
let onOff = 0;
let screenText = '';
let result = 0;

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

// Alert Numbers
getNumbers.forEach(function(item){
    item.addEventListener('click', () => {
            screenText += item.innerText;
            calcScreen.innerText = screenText;
    })
});

// Events
// Activate Calculator
pwButton.addEventListener('click', function(){
    activateCalculator();
});

console.log(getNumbers);


