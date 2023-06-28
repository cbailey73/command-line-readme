// TODO: Include packages needed for this application
import { prompt } from 'inquirer';
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [{
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    },
    {
      type: 'password',
      message: 'What is your password?',
      name: 'password',
    },
    {
      type: 'password',
      message: 'Re-enter password to confirm:',
      name: 'confirm',
    },
];
// const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    prompt(questions)
        .then((response) => {
            response.confirm === response.password
            ? console.log('success')
            : console.log('failure')
        }

        )

}

// Function call to initialize app
init();
