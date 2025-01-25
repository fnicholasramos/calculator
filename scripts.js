
const output = document.querySelector('.output');
const buttons = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('.equals');
const clear = document.querySelector('.clear')
const backspace = document.querySelector('.backspace');

let currentOutput = '';

buttons.forEach((number) => {
    number.addEventListener('click', () => {
        output.textContent += number.value;
        currentOutput = parseInt(output.innerText);
    });
});

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        output.textContent += operator.value;
        currentOutput = output.textContent
    })
})

equal.addEventListener('click', () => {
    const expression = output.textContent;
    const chosenOperator = expression.match(/[\+\-\*\/]/);

    if(!chosenOperator) return;

    const operator = chosenOperator[0];
    const [firstNum, secondNum] = expression.split(operator).map(Number);

    const answer = operate(firstNum, secondNum, operator);
    if (answer % 1 !== 0) {
        output.textContent = answer.toFixed(3);
    } else {
        output.textContent = answer;
    }

})

backspace.addEventListener('click', () => {
    output.textContent = output.textContent.slice(0, -1)
});

clear.addEventListener('click', () => location.reload())

function operate(firstNumber, secondNumber, operator) {
    switch (operator) {
        case '+':
            return firstNumber + secondNumber;
        case '-':
            return firstNumber - secondNumber;
        case '*':
            return firstNumber * secondNumber;
        case '/':
            return secondNumber !== 0 ? firstNumber / secondNumber : 'Cannot divide by zero';
        default:
            return 0;
    }
}