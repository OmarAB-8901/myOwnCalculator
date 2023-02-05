let deleteNumber = screen => {

	screen.value = screen.value.slice(0, screen.value.length - 1);

	if (screen.value == "")
		screen.value = 0;
}

let cleanScreen = screen => {
	screen.value = 0;
}

function activateButtons(num) {
	console.log(num);
	let btnPressed = document.querySelector('.btn_' + num).classList;
	btnPressed.toggle('active');
	setTimeout(() => {
		btnPressed.toggle('active');
	}, 100);
}

let addNumber = (screen, num) => screen.value == 0 ? screen.value = num : screen.value += num;

let bodyValidateInput = input => {
	console.log(input);
	let screenNumbers = document.getElementById('screenNumbers');

	let regexNumbers = new RegExp("[0-9/*+./-]");
	let isNumber = regexNumbers.test(input.key);

	if (isNumber)
		addNumber(screenNumbers, input.key)

	// let regexbackSpace = new RegExp("Backspace");
	// let isBackSpace = regexbackSpace.test(input.key);

	// if (isBackSpace)
	// 	deleteNumber(screenNumbers)

	// if (isNumber || isBackSpace)
	// 	activateButtons(input.key.toLowerCase());

	switch (input) {
		case 'backspace': deleteNumber(screenNumbers)
			break;
		case 'delete': cleanScreen(screenNumbers)
			break;
	}

	// debugger
}

let clickValidateInput = input => {
	console.log(input.target.dataset.btntype);
	input = input.target.dataset.btntype;
	let screenNumbers = document.getElementById('screenNumbers');

	let regexNumbers = new RegExp("[0-9/*+./-]");
	let isNumber = regexNumbers.test(input);

	if (isNumber)
		addNumber(screenNumbers, input)

	// let regexbackSpace = new RegExp("[backspace]");
	// let isBackSpace = regexbackSpace.test(input);

	// if (isBackSpace)
	//     deleteNumber(screenNumbers)

	switch (input) {
		case 'backspace': deleteNumber(screenNumbers)
			break;
		case 'delete': cleanScreen(screenNumbers)
			break;
	}
	
	// debugger
}

document.querySelector('body').addEventListener('keyup', bodyValidateInput);
document.querySelectorAll('.btn').forEach(btn => { btn.addEventListener('click', clickValidateInput); });