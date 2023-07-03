//Import necessary code packages 
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

//Generate the README content
function generateREADME(answers) {
  return `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This application is covered under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For any questions, please feel free to reach out to me:

GitHub: [${answers.username}](https://github.com/${answers.username})
Email: ${answers.email}
`;
};

//Ask the user questions about what they want on their README
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter the project title:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter the project description:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information:',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter contribution guidelines:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter test instructions:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license:',
      choices: ['MIT', 'Apache', 'GPL', 'BSD'],
    },
    {
      type: 'input',
      name: 'username',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
  ])
  .then((answers) => {
    const readmeContent = generateREADME(answers);

    //Write the answers to the README file
    fs.writeFile(path.join(__dirname, 'README.md'), readmeContent, (error) => {
      if (error) {
        console.error(error);
      } else {
        console.log('README.md file generated successfully!');
      }
    });
  });
  // .catch((error) => {
  //   console.error(error);


// const questions = [];

// fs.writeFile('log.txt', process.argv[2], (err) =>
//   err ? console.error(err) : console.log('Success!')
// ); 

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {
//     prompt(questions)
//         .then((response) => {
//             response.confirm === response.password
//             ? console.log('success')
//             : console.log('failure')
//         }

//         )

// }

// // Function call to initialize app
// init();
