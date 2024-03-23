#! /usr/bin/env Node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
//computer can generate a random number
var randomNumber = Math.floor(Math.random() * 5 + 1);
//user input
var answers = await inquirer_1.default.prompt([
    {
        name: "userguessednumber",
        type: "number",
        message: "please guess a number between 1-6:",
    }
]);
//comparision
if (answers.userguessednumber === randomNumber) {
    console.log(" congrts you guessed a right number");
}
else {
    console.log("you guessed a wrong number");
}
