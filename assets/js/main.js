let deleteNumber = screen => {

    screen.value = screen.value.slice(0, screen.value.length - 1);

    if (screen.value == "")
        screen.value = 0;
}

function activateButtons(num) {
    let btnPressed = document.querySelector('.btn_' + num.key.toLowerCase()).classList;
    btnPressed.toggle('active');
    setTimeout(() => {
        btnPressed.toggle('active');
    }, 150);
}

let addNumber = (screen, num) => { screen.value == 0 ? screen.value = num : screen.value += num; }

let validateInput = input => {
    console.log(input);
    let screenNumbers = document.getElementById('screenNumbers');

    let regexNumbers = new RegExp("[0-9/*+./-]");
    let isNumber = regexNumbers.test(input.key);

    if (isNumber) {
        activateButtons(input);
        addNumber(screenNumbers, input.key)
    }

    let regexbackSpace = new RegExp("backspace");
    let isBackSpace = regexbackSpace.test(input.key.toLowerCase());

    if (isBackSpace)
        deleteNumber(screenNumbers)

    // debugger
}

document.querySelector('body').addEventListener('keyup', validateInput);