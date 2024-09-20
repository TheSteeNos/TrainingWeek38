/*
    Hello.
    This is a problem set for you to work on
    The idea is to practice a few things at a time.
    You do this by writing your answer after a task is given (see the example).

    DO NOT change the provided code unless the task specifically says you should.
*/

/*
    Task: Example
    Write the code to print all the names in the list, one name per line.
*/
console.log("Task: Example");
const people = ["Tony", "Christian", "Håkon"];

for (let index = 0; index < people.length; index++) {
    let person = people[index];
    console.log(person);
};

/*
    Task: A
    Create variables for:
    * Hours in a day
    * Minutes in an hour
    * Seconds in a minute
    * The ratio between water and juice when mixing juice
    * Days until your birthday
    * Millimeters of rain that falls
*/

console.log(" ");
console.log("Task: A");
console.log(" ");

const HOURS_PER_DAY = 24;
const MINUTES_PER_HOUR = 60;
const SECONDS_PER_MINUTE = 60;
let ratioOfJuiceAndWaterMix = 1/9;
let daysUntilMyBirthday = 204;
let millimetersOfFallingRain = 3;

/*
    Task: B
    Use your variables (do not redefine them) from task A and calculate:
    * How many seconds are in 2.5 hours?
    * How many minutes are in 123 days?
    Remember to assign the answers to their own variables.
    Example:
    // How many deciliters are in 4.5 cups?
    const dlInCups = 2.36588;
    const amountOfDL = dlInCups * 4.5;
*/

console.log(" ");
console.log("Task: B");
console.log(" ");

const SECONDS_PER_HOUR = SECONDS_PER_MINUTE * MINUTES_PER_HOUR
const amountOfSeconds = SECONDS_PER_HOUR * 2.5

const MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY
const amountOfMinutes = MINUTES_PER_DAY * 123

/*
    Task: C
    Use a loop (for) to print the numbers from 1 to 10.
*/

console.log(" ");
console.log("Task: C");
console.log(" ");

let numberPrintRise = 0
for(let i = 0; i < 10; i++){
    numberPrintRise++   
    console.log(numberPrintRise) 
};

/*
    Task: D
    Use a loop (for) to print the numbers from 10 to 1.
*/

console.log(" ");
console.log("Task: D");
console.log(" ");

let numberPrintDecrease = 11
for(let i = 0; i < 10; i++){
    numberPrintDecrease--   
    console.log(numberPrintDecrease) 
};

/*
    Task: E
    This one is a bit more difficult, but you can do it ;)
    Use a loop (for) to print the even numbers between 1 and 100.
*/

console.log(" ");
console.log("Task: E");
console.log(" ");

let numberPrint = 0
for(let i = 0; i < 50; i++){
    numberPrint++
    numberPrint++
    console.log(numberPrint) 
};

/*
    Task: F
    Use a while loop to print all the numbers from 0 to 100;
*/

console.log(" ");
console.log("Task: F");
console.log(" ");

let countCondition = true;
let listOfNumbers = 0;

while (countCondition == true) {
console.log(listOfNumbers)
listOfNumbers++

if (listOfNumbers == 101) {
    countCondition = false
}
};

/*
    Task: G
    Fill in the code needed to make the following code print the expected result.
*/

console.log(" ")
console.log("Task: G");
console.log(" ")

const DICTIONARY_ML = {
    no: {
        hello: "Hello there",
        howAreYou: "How are you doing?"
    },
    en: {

    }
};

console.log(`${DICTIONARY.en.hello} Christian ${DICTIONARY.en.howAreYou}`); //-> Hi Christian, how are you?
console.log(`${DICTIONARY.en.goodQuestionsLately}`); //-> Gotten any good questions lately?