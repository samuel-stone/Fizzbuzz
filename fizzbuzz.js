/"Write a program that prints the numbers from 1 to 100.
For multiples of three print “Fizz” instead of the number
For the multiples of five print “Buzz”.
For numbers which are multiples of both three and five print “FizzBuzz”."/


var fizzbuzz = function (){
	for (i = 1; i <= 100; i++) {

		if (i%15 == 0) {
			console.log("FizzBuzz");
		}

		else if (i%3 == 0) {
			console.log("Fizz");
		}

		else if (i%5 == 0) {
			console.log("Buzz");
		}	

		else {
			console.log(i);
		}
	};
}

console.log(fizzbuzz())

/ --> 1
VM341:18 2
VM341:10 Fizz
VM341:18 4
VM341:14 Buzz
VM341:10 Fizz
VM341:18 7
VM341:18 8
VM341:10 Fizz
VM341:14 Buzz
VM341:18 11
VM341:10 Fizz
VM341:18 13
VM341:18 14
VM341:6 FizzBuzz
VM341:18 16
VM341:18 17
VM341:10 Fizz
VM341:18 19
VM341:14 Buzz
VM341:10 Fizz
VM341:18 22
VM341:18 23
VM341:10 Fizz
VM341:14 Buzz
VM341:18 26
VM341:10 Fizz
VM341:18 28
VM341:18 29
VM341:6 FizzBuzz
VM341:18 31
VM341:18 32
VM341:10 Fizz
VM341:18 34
VM341:14 Buzz
VM341:10 Fizz
VM341:18 37
VM341:18 38
VM341:10 Fizz
VM341:14 Buzz
VM341:18 41
VM341:10 Fizz
VM341:18 43
VM341:18 44
VM341:6 FizzBuzz
VM341:18 46
VM341:18 47
VM341:10 Fizz
VM341:18 49
VM341:14 Buzz
VM341:10 Fizz
VM341:18 52
VM341:18 53
VM341:10 Fizz
VM341:14 Buzz
VM341:18 56
VM341:10 Fizz
VM341:18 58
VM341:18 59
VM341:6 FizzBuzz
VM341:18 61
VM341:18 62
VM341:10 Fizz
VM341:18 64
VM341:14 Buzz
VM341:10 Fizz
VM341:18 67
VM341:18 68
VM341:10 Fizz
VM341:14 Buzz
VM341:18 71
VM341:10 Fizz
VM341:18 73
VM341:18 74
VM341:6 FizzBuzz
VM341:18 76
VM341:18 77
VM341:10 Fizz
VM341:18 79
VM341:14 Buzz
VM341:10 Fizz
VM341:18 82
VM341:18 83
VM341:10 Fizz
VM341:14 Buzz
VM341:18 86
VM341:10 Fizz
VM341:18 88
VM341:18 89
VM341:6 FizzBuzz
VM341:18 91
VM341:18 92
VM341:10 Fizz
VM341:18 94
VM341:14 Buzz
VM341:10 Fizz
VM341:18 97
VM341:18 98
VM341:10 Fizz
VM341:14 Buzz