function foo(string, number) {
	//check if the number is between 0-9.
	if (number < 0 || number > 9) return false; //returning false if the condetions are met.
	//initializing the final out put variable
	let outString = "";
	//itrating through every element of the string and processing it accourding to the task.
	for (let i = 0; i < string.length; i++) {
		let currentChar = string.charAt(i);

		if (isNaN(currentChar) || currentChar === " ") {
			outString += currentChar;
		} else {
			let sum = parseInt(currentChar) + number;
			if (sum > 9) {
				outString += sum % 10;
			} else {
				outString += sum;
			}
		}
	}
	return outString; //finaly returning the output string.
}

console.log(foo("India have 50 languages", 7));
console.log(foo("this is a whole string", 4));
console.log(foo("this will be a false", 12));
console.log(foo("this will also be a false", -1));
console.log(foo("86884", 6));
console.log(foo("mi6in8 u9 n5mb36s", 1));
