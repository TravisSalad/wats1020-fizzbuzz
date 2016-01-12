//set limit for loop to count to 20
		var numberLimit = 20;
//declared the function and named it numFunction
		function numFunction(){
//created a loop that counts from 1-20 in increments of 1
		for (number = 1; number <= numberLimit; number++){
//created a conditional if the number is divisible by 5 or 3, print FizzBuzz
			if (number % 3 === 0 && number % 5 === 0){
				document.write("FizzBuzz" + "<br>");
			}
//created a conditional stating if the number is divisible by only 3, print Fizz
			else if (number % 3 ===0){
				document.write("Fizz" + "<br>");
			}
//created a conditional stating if the number is divisible by only 5, print Buzz
			else if (number % 5 === 0){
				document.write("Buzz" + "<br>");
//created a conditional stating if the number is not divisible by 5 or 3 then print the number
			}else{
				document.write(number + "<br>");
			}
		}
		}
