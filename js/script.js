let a = '';
let b = '';
let sign = '';
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/'];
const out = document.querySelector(".calc-display p");

function clear_all() {
	a = '';
	b = '';
	c = '';
	let what = '';
	sign = '';
	finish = false;
	out.textContent = 0;
}

function count() {
	var c;
	if (sign == '+') {
		c = parseInt(a) + parseInt(b);
		finish = true;
	}
	if (sign == '-') {
		c = parseInt(a) - parseInt(b);
		finish = true;
	}
	if (sign == 'X') {
		c = parseInt(a) * parseInt(b);
		finish = true;
	}
	if (sign == '/') {
		c = parseInt(a) / parseInt(b);
		finish = true;
	}
	document.getElementById('output').textContent = c;
	console.log("Result: " + c + "\nType: " + typeof(c) + "\nFinished: " + finish + "\nOutput: " + out.textContent);
}

document.querySelector(".ac").onclick = clear_all;

document.querySelector(".calc-buttons").onclick = (event) => {
	if(!event.target.classList.contains('calc-btn')) return;
	if(event.target.classList.contains('ac')) return;

	out.textContent = '';
	const key = event.target.textContent;

	if (digit.includes(key)) {
		if (b === '' && sign === '') {
			a += key;
			out.textContent = a;
		} else {
			b += key;
			out.textContent = b;
		}
		console.log(a, b, sign);
		return;
	}

	if (action.includes(key)) {
		sign = key;
		out.textContent = sign;
		console.log(a, b, sign);
		return;
	}
}

document.querySelector(".equal").onclick = count;
