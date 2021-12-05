let a = '';
let b = '';
let sign = '';
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/'];
const out = document.querySelector(".calc-display p");

const f = x => ( (x.toString().includes('.')) ? (x.toString().split('.').pop().length) : (0) );

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
		c = parseFloat(a) + parseFloat(b);
		finish = true;
	}
	if (sign == '-') {
		c = parseFloat(a) - parseFloat(b);
		finish = true;
	}
	if (sign == 'X') {
		c = parseFloat(a) * parseFloat(b);
		finish = true;
	}
	if (sign == '/') {
		c = parseFloat(a) / parseFloat(b);
		finish = true;
	}

	if (f(c) > 10) {
		c = parseFloat(c.toFixed(1));
	}

	if (c.toString().length >= 7) {
		out.style.fontSize = "50px";
	} else if (c.toString().length >= 10) {
		out.style.fontSize = "10px";
	} else {
		out.style.fontSize = "70px";
	}

	out.textContent = c;
	a = '';
	b = '';
	c = '';
	what = '';
	sign = '';
	finish = false;
}

document.querySelector(".ac").onclick = clear_all;

document.querySelector(".calc-buttons").onclick = (event) => {
	if(!event.target.classList.contains('calc-btn')) return;
	if(event.target.classList.contains('ac')) return;

	const key = event.target.textContent;

	if (digit.includes(key)) {
		if (b === '' && sign === '') {
			a += key;
			if (a.toString().length >= 7) {
				out.style.fontSize = "50px";
			} else {
				out.style.fontSize = "70px";
			}

			out.textContent = a;
		} else {
			b += key;
			if (b.toString().length >= 7) {
				out.style.fontSize = "50px";
			} else {
				out.style.fontSize = "70px";
			}
			out.textContent = b;
		}
		return;
	}

	if (action.includes(key)) {
		sign = key;
		out.textContent = sign;
		return;
	}
}

document.querySelector(".equal").onclick = count;