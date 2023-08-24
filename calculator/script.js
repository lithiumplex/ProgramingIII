const calculator = document.querySelector('.calculator');
const firstInput = calculator.querySelector('input[type="number"]:nth-of-type(1)');
const secondInput = calculator.querySelector('input[type="number"]:nth-of-type(2)');
const resultInput = calculator.querySelector('input[type="number"]:nth-of-type(3)');
const buttons = calculator.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const firstValue = parseFloat(firstInput.value);
    const secondValue = parseFloat(secondInput.value);
    let result;
    switch (button.textContent) {
      case '+':
        result = firstValue + secondValue;
        break;
      case '-':s
        result = firstValue - secondValue;
        break;
      case 'X':
        result = firstValue * secondValue;
        break;
      case '/':
        result = firstValue / secondValue;
        break;
      case '^':
        result = Math.pow(firstValue, secondValue);
        break;
      case '√¯':
        result = Math.pow(firstValue, 1 / secondValue);
        break;
    }
    resultInput.value = result;
  });
});
