function change(value) {
	var a, b;
	var what;
	var c;
	if (!value == "+" && !value == "x" && !value == "/" && !value == "-") {
		a = document.getElementById("output").innerHTML += value;
	}
	if (value == "+") {
		what = "+";
		console.log(value);
		return(what);
	}
	if (value == "-") {
		what = "-";
		console.log(value);
		return(what);
	}
	if (value == "x") {
		what = "*";
		console.log(value);
		return(what);
	}
	if (value == "/") {
		what = "/";
		console.log(value);
		return(what);
	}
	b = document.getElementById("output").innerHTML += value;

	if (value == "=") {
		console.log(what);
		// if (what == "+") {
		// 	c = a + b;
		// }
		// if (what == "-") {
		// 	c = a - b;
		// }
		// if (what == "*") {
		// 	c = a * b;
		// }
		// if (what == "/") {
		// 	c = a / b;
		// }
		// document.getElementById("output").innerHTML = c;
	}
	if (value == "ac") {
		document.getElementById("output").innerHTML = "0";
	}
}

