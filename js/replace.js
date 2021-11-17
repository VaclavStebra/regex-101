function stringReplace() {
	const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

	console.log(p.replace('dog', 'monkey'));
}

function regexReplace() {
	const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
	const re = /dog/;

	console.log(p.replace(re, 'monkey'));
}

function replaceGroups() {
	const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
	const re = /fox(.*?)dog/;

	console.log(p.replace(re, 'dog$1fox'));
}

function replaceFunction() {
	const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
	const re = /fox(.*?)dog/;

	console.log(p.replace(re, (match, p1) => {
		return 'dog' + p1.toUpperCase() + 'fog';
	}));
}

stringReplace();
regexReplace();
replaceGroups();
replaceFunction();
