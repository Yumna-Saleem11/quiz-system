#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let score = 0;
let question_1 = await inquirer.prompt([
    {
        name: "Q1",
        type: "list",
        message: "when did typescript was invented?",
        choices: ["2012", "2010", "2011"]
    }
]);
if (question_1.Q1 == "2010") {
    console.log(chalk.greenBright("Your answer is correct"));
    score++;
}
else {
    console.log(chalk.black("incorrect answer"));
}
;
let question_2 = await inquirer.prompt([
    {
        name: "Q2",
        type: "list",
        message: "who was the founder of typescript?",
        choices: ["bill gates", "Anders hejlsberg", "Mark zuckerberg"]
    }
]);
if (question_2.Q2 == "Anders hejlsberg") {
    console.log(chalk.greenBright("Your answer is correct"));
    score++;
}
else {
    console.log(chalk.black("incorrect answer"));
}
;
let question_3 = await inquirer.prompt([
    {
        name: "Q3",
        type: "list",
        message: "what is the correct code to compile a typescript file?",
        choices: ["js", "tsc", "cls"]
    }
]);
if (question_3.Q3 == "tsc") {
    console.log(chalk.greenBright("your answer is correct"));
    score++;
}
else {
    console.log(chalk.black("incorrect answer"));
}
;
let question_4 = await inquirer.prompt([
    {
        name: "Q4",
        type: "list",
        message: "Typescript is a superset of which langauge?",
        choices: ["python", "javascript", "html"]
    }
]);
if (question_4.Q4 == "javascript") {
    console.log(chalk.greenBright("your answer is correct"));
    score++;
}
else {
    console.log(chalk.black("incorrect answer"));
}
;
let question_5 = await inquirer.prompt([
    {
        name: "Q5",
        type: "list",
        message: "which of these is a variable?",
        choices: ["Null", "let", "string"]
    }
]);
if (question_5.Q5 == "let") {
    console.log(chalk.greenBright("your answer is correct"));
    score++;
}
else {
    console.log(chalk.black("incorrect answer"));
}
;
console.log(`Your score is: ${score}`);
