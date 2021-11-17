function exec() {
	const re = /a(b+)cd/;

	const result = re.exec("xyzabbbcdedef");
	console.log(result);
}

function match() {
	const re = /a(b+)cd/;

	const result = "xyzabbbcdedef".match(re);
	console.log(result);
}

function globalMatch() {
	const re = /a(b+)cd/g;

	const result = "xyzabbbcdedef".match(re);
	console.log(result);
}

function matchAll() {
	const re = /a(b+)cd/g;

	const matches = "xyzabbbcdedef".matchAll(re);
	for (const match of matches) {
		console.log(match);
	}
}

// exec();
// match();
// globalMatch();
matchAll();
