#! /usr/bin/env Node



import inquirer from "inquirer";

//computer can generate a random number

const randomNumber =Math.floor( Math.random()*5 +1);

//user input

const answers = await inquirer.prompt([
{
    name : "userguessednumber",
    type : "number",
    message : "please guess a number between 1-6:",
}]);

//comparision

if(answers.userguessednumber===randomNumber){
    console.log(" congrts you guessed a right number")
}else{
    console.log("you guessed a wrong number")}
