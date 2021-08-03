// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

// var cohort = "Charlie 2021"
// console.log(cohort.split(""))

// a) Your answer: This will return an array with each character from the string in quotations : ["C", "h", "a", "r", "l", "i", "e", " ", "2", "0", "2", "1"]
// b) Verify and explain: The .split method splits a string into an array. 
// [
//   'C', 'h', 'a', 'r',
//   'l', 'i', 'e', ' ',
//   '2', '0', '2', '1'
// ]


// --------------------2) What will this log?

// const greeter = (name) => {
//   return `Hello, ${name}!`
// }
// console.log(greeter("LEARN Student"))

// a) Your answer: My initial thought was that it would return: Hello LEARN Student!, but name is not attached to a variable, so I believe it will either return an error, or undefined. 
// b) Verify and explain: Returned undefined, but I was wrong about why. There was no return in the function, adding return before `Hello...` resolved the issue and returned Hello, LEARN Student!.
// undefined

// --------------------3) What will this log?

// var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer: This will multiply each value of the array and return [8, 10, 12, 14, 16]
// b) Verify and explain:the .map function iterates over each item in the array with the action given in the parenthesis
// [ 8, 10, 12, 14, 16 ]

// --------------------4) What will this log?

// var oddsOnly = [11, 12, 13, 14, 15].filter(value => value % 2 === 0)
// console.log(oddsOnly)

// a) Your answer: This should return all of the even numbers because the filter method is looking for numbers with a 0 remainder.
// b) Verify and explain: I still don't fully understand modulo, but value % 2 === 0 is looking for numbers with a zero remainder which would only be even numbers, and the filter method returns what is being filtered for, not filtered out.
// [ 12, 14 ]


// --------------------5) What will this log?

// class Learn {
//   constructor(){
//     this.student = "George",
//     this.cohort = "Charlie",
//     this.year = 2021
//   }
// }
// var learnStudent = new Learn
// console.log(learnStudent)

// a) Your answer: This should return a new instance of the class Learn with the object profile defined in the class.
// b) Verify and explain: running learnStudent creates a new object from the class
//Learn { student: 'George', cohort: 'Charlie', year: 2021 }
