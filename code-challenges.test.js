// ASSESSMENT 2: Coding practical questions with Jest

// Please read all questions thoroughly
// All problems can be solved with concepts covered in class or in the syllabus
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
//create a function - divisible
//use modulo to determine if remainder === 0 
//input 15, 0, -7
//expected output:
    // Expected output: "15 is divisible by three"
    // Expected output: "0 is divisible by three"
    // Expected output: "-7 is not divisible by three"

// a) Create a test with expect statements for each of the variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisible by three"

// describe("divisible", () => {
//         it("returns is divisible by three or is not divisible by three based on input", () => {
//             var num1 = 15
//             var num2 = 0
//             var num3 = -7
//             expect(divisible(num1)).toEqual("is divisible by 3")
//             expect(divisible(num2)).toEqual("is divisible by 3")
//             expect(divisible(num3)).toEqual("is not divisible by 3")
//         })
//     })

// b) Create the function that makes the test pass.

    // const divisible = (number) => {
    //     if (number % 3 === 0){
    //         return "is divisible by 3"
    //     }else {
    //         return "is not divisible by 3"
    //     }
    // }
    


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

//create a function - capitalize
//use charAt[0] to access first letter of each word and .toUpperCase to capitalize
//input:
    // var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
    // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
    //var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
    // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]


// a) Create a test with expect statements for each of the variables provided.

describe("capitalize", () => {
         it("returns new array with first letter of each word capitalized", () => {
            var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
            var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
                expect(capitalize(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
                expect(divisible(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
            })
        })

// b) Create the function that makes the test pass.

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]

const capitalize = (randomNouns1, randomNouns2) => {
    for(var i = 1 ; i < randomNouns1.length ; i++){
       let newArray = newArray[i].charAt(0).toUpperCase() 
       return newArray 
}
}
//I am completely lost on this one, but I think I was on the right Track.          


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.
//Create a function - vowelLog
//use .map() or .filter() to find vowels and log index 
//input - string
// var vowelTester1 = "learn"
// // Expected output: 1
// var vowelTester2 = "academy"
// // Expected output: 0
// var vowelTester3 = "challenge"
// // Expected output: 2

// a) Create a test with expect statements for each of the variables provided.

describe("vowelLog", () => {
    it("returns index of first vowel in a string", () => {
        var vowelTester1 = "learn"
        var vowelTester2 = "academy"
        var vowelTester3 = "challenge"
           expect(capitalize(vowelTester1)).toEqual(1)
           expect(divisible(vowelTester2)).toEqual(0)
           expect(divisible(vowelTester3)).toEqual(2)
       })
   })


// b) Create the function that makes the test pass.

var vowelTester1 = "learn"
var vowelTester2 = "academy"
var vowelTester3 = "challenge"

const vowelLog = (string) => {

}

//I know that I need to use a method to filter for a,e,i,o,u, but I can't seem to work out what the next step is, I'm going to go back to my notes and find the example we did and work on this until I figure it out. 