function simpleTest() {
	const re = /ab+c/;
	// const re = new RegExp("ab+c");

	let result = re.test("abc");
	console.log(result);

	result = re.test("ac");
	console.log(result);
}

function statefulTest() {
	// global flag makes the regex "stateful"
	const re = /ab+c/g;

	let result = re.test("abcabbcac");
	console.log(result);
	result = re.test("abcabbcac");
	console.log(result);
	result = re.test("abcabbcac");
	console.log(result); // wait, what???
	result = re.test("abcabbcac");
	console.log(result);
}

function search() {
	const re =/ab+c/;

	let result = "dddabc".search(re);
	console.log(result);
	result = "ac".search(re);
	console.log(result);
}

simpleTest();
// statefulTest();
// search();
