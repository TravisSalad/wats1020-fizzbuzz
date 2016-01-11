//create variable that sets the limit for the loop
var numberLimit = 100;

//create for loop that counts from 1-numberLimit starting at one in increments of 1
for (number = 1; number <= numberLimit; number++){
	//check if number is divisible by three
	if (number % 3 === 0) {
	//if number is divisible by three check if it is divisible by 5
	if (number % 5 === 0) {
	//if this is true, print FizzBuzz instead of the number
		console.log("FizzBuzz");
	}else{
	//if it is not divisible by five but is divisible by three, print Fizz
		console.log("Fizz");
	}
	//if number is divisible by only five print Buzz
	}else if (number % 5 === 0) {
		console.log("Buzz");
	//if number does not meet any of these conditions, print the number
	}else{
		console.log(number);
	}
}
