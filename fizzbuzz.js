// Place your FizzBuzz code here. 
var rangeLimit = 1000;
var responseFor3 = 'Bacon';
var responseFor5 = 'Pancakes';

for (i=1; i<=rangeLimit; i++) {
		if (i % 3 === 0) {
			if (i % 5 === 0) {
				//If the number is divisible by **BOTH** 3 and 5, print "FizzBuzz" to the console.
			document.write(responseFor3+responseFor5+"<BR>");
		} else {
			document.write(responseFor3+"<BR>");
			//If the number is divisible by 3, print "Fizz" to the console.
		}
	} else if (i % 5 === 0) {
					//If the number is divisible by 5, print "Buzz" to the console.
		document.write(responseFor5+"<BR>");
		//If none of these conditions are met, print the number to the console.
	} else {
		document.write(i+"<BR>");
	}
}