#! /usr/bin/env node
//this line is called a shebang, it tells the os to the run it which nodejs
import inquirer from "inquirer";
//import the 'inquirer' modules, which is a command line interface for node.js

//declare a constant 'answer' and assign it to the result of inquirer.prompt 

const answers: {
    sentence: string;
 } = await inquirer.prompt([
      {
        name : "sentence",
        type : "input",
        message : "enter your sentence to count the word:"
      }
 ])
   const words = answers.sentence.trim().split(" ")
//print the array of words to the console

console.log(words)

//print the word count of the sentence to the console

console.log(`your sentence word count is  ${words.length}`);

