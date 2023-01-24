
let deleteNumber = screen => {
  
  screen.value = screen.value.slice(0, screen.value.length - 1);

  if( screen.value == "" )
    screen.value = 0;
}

let addNumber = (screen, num) => { screen.value == 0 ? screen.value = num : screen.value += num; }

let validateInput = input => {

  let screenNumbers = document.getElementById('screenNumbers');

  let regexNumbers = new RegExp("[0-9/*+./-]");
  let isNumber = regexNumbers.test(input.key);

  if (isNumber)
    addNumber(screenNumbers, input.key)

  let regexbackSpace = new RegExp("backspace");
  let isBackSpace = regexbackSpace.test(input.key.toLowerCase());

  if (isBackSpace)
    deleteNumber(screenNumbers)

  // debugger
}

document.querySelector('body').addEventListener('keyup', validateInput);
