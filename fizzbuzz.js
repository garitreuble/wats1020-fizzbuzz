// Place your FizzBuzz code here. 
var rangeLimit = 1000;
var responseFor3 = 'Bacon';
var responseFor5 = 'Pancakes';

for (i=1; i<=rangeLimit; i++) {
		if (i % 3 === 0) {
			if (i % 5 === 0) {
			document.write(responseFor3+responseFor5+"<BR>");
		} else {
			document.write(responseFor3+"<BR>");
		}
	} else if (i % 5 === 0) {
		document.write(responseFor5+"<BR>");
	} else {
		document.write(i+"<BR>");
	}
}