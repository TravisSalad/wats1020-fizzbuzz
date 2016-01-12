var numberLimit = 20;

function numFunction(){
	
for (number = 1; number <= numberLimit; number++){
	if (number % 3 === 0 && number % 5 === 0){
		document.write("FizzBuzz" + "<br>");
	}
	else if (number % 3 ===0){
		document.write("Fizz" + "<br>");
	}
	else if (number % 5 === 0){
		document.write("Buzz" + "<br>");
	}else{
		document.write(number + "<br>");
	}
}
}
