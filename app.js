// ================================================================================================================
// Exercise no 6.1  
// ================================================================================================================

// 1. Create a function that takes two parameters, adds them together, and returns the result.
function add(a, b) {
    return a + b;
}

// 2. Set up two different variables with two different values.
let num1 = 6;
let num2 = 4;

// 3. Use your function on the two variables, and output the result using console.log.
let result1 = add(num1, num2);
console.log("Result of adding num1 and num2: " + result1);

// 4. Create a second call to the function using two more numbers as arguments sent to the function.
let result2 = add(22, 33);
console.log("Result of adding 22 and 33: " + result2);


// ================================================================================================================
// Exercise no 6.2  
// ================================================================================================================

// 1. Create an array of descriptive words.
let descriptiveWords = ["brilliant", "brave", "try again", "poor editing", "fearless", "kind", "honest", "loyal"];

// 2. Create a function that contains a prompt asking the user for a name.
// 3. Select a random value from the array using Math.random.
// 4. Output into the console the prompt value and the randomly selected array value.

function getUserInput() {

    let userName = prompt("Enter your User Name ! ");
    let randomValue = Math.floor(Math.random() * descriptiveWords.length);
    let arrayIndex = descriptiveWords[randomValue];
    console.log(" " + userName + " " + arrayIndex);
}

// 5. Invoke the function.
getUserInput();


// ================================================================================================================
// Exercise no 6.3
// ================================================================================================================

// 1. Set up two variables containing number values
let number1 = 60;
let number2 = 25;

// 2. Set up a variable to hold an operator, either + or -
let operator = "+";

// 3. Create a function that retrieves the two values and the operator string value within its parameters
function calculate(n1, n2, op = "add") {
    if (op === "add" || op === "+") {
        return n1 + n2;
    } else if (op === "subtract" || op === "-") {
        return n1 - n2;
    } else {
        return n1 + n2;
    }
}

// 4. Within console.log(), call the function using your variables and output the response to the console
console.log(calculate(number1, number2, operator));

// 5. Update the operator value to be the other operator type and call the function again with the new updated arguments
operator = "-";
console.log(calculate(number1, number2, operator));


// ================================================================================================================
// Exercise no 4.5 
// ================================================================================================================

// 1. Create a variable called prize and use a prompt to ask the user to set the value by selecting a number between 0 and 10
let prize = prompt("Select a number between 0 and 10:");

// 2. Convert the prompt response to a number data type
prize = Number(prize);

// 3. Create a variable to use for the output message containing the value "My Selection: "
let message = "My Selection: ";

// 4. Using the switch statement (and creativity), provide a response back regarding a prize that is awarded depending on what number is selected
// 5. Use the switch break to add combined results for prizes
let prizeMessage;

switch (prize) {
    case 0:
        prizeMessage = "a pack of pencils.";
        break;
    case 1:
    case 2:
        prizeMessage = "a small toy.";
        break;
    case 3:
    case 4:
        prizeMessage = "a keychain.";
        break;
    case 5:
    case 6:
        prizeMessage = "a coffee mug.";
        break;
    case 7:
    case 8:
        prizeMessage = "a gift card.";
        break;
    case 9:
    case 10:
        prizeMessage = "a grand prize!";
        break;
    default:
        prizeMessage = "an invalid selection.";
        break;
}

// 6. Output the message back to the user by concatenating your prize variable strings and the output message string
message += prize + "  You have won " + prizeMessage;
console.log(message);




// ================================================================================================================
// Evaluating Number Game :-
// ================================================================================================================

let dynamicNumber = Math.floor(Math.random() * 20) + 1;
console.log("Generated Number: " + dynamicNumber);

function compareNumbers() {
    let userNumber = parseInt(document.getElementById("userNumber").value);
    let resultText = "";

    if (userNumber > dynamicNumber) {
        resultText = "Your number is greater than the generated number.";
    } else if (userNumber < dynamicNumber) {
        resultText = "Your number is less than the generated number.";
    } else {
        resultText = "Your number is equal to the generated number.";
    }

    document.getElementById("result").innerText = resultText;
}


// ================================================================================================================
// Friend Checker Game :-
// ================================================================================================================

function checkFriend() {
    let userName = document.getElementById("userName").value;

    switch (userName.toLowerCase()) {
        case 'mahrukh':
            console.log("Mahrukh is a friend!");
            break;
        case 'mahnoor':
            console.log("Mahnoor is a friend!");
            break;
        case 'manal':
            console.log("Manal is a friend!");
            break;
        case 'mariyam':
            console.log("Mariyam is a friend!");
            break;
        default:
            console.log("I don't know " + userName + "!");
    }
}


// ================================================================================================================
// Rock Paper Scissors Game :-
// ================================================================================================================

function playGame(playerChoice) {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let resultText = "You chose " + playerChoice + ". Computer chose " + computerChoice + ". ";

    if (playerChoice === computerChoice) {
        resultText += "It's a tie!";
    } else if (
        (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
        (playerChoice === 'Paper' && computerChoice === 'Rock') ||
        (playerChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
        resultText += "You win!";
    } else {
        resultText += "Computer wins!";
    }

    document.getElementById("result2").innerText = resultText;
}