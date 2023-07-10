// Import necessary code packages
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

// Function to generate the license badge
function renderLicenseBadge(license) {
  if (license) {
    // Return the license badge based on the license type
    return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// Function to generate the license section of README
function renderLicenseSection(license) {
  if (license) {
    // Return the license section based on the license type
    return `
This application is covered under the ${license} license. 
Click [here](https://opensource.org/licenses/${license}) to view the license details.
    `;
  }
  return '';
}

// Generate the README content
function generateREADME(answers) {
  const licenseBadge = renderLicenseBadge(answers.license);
  const licenseSection = renderLicenseSection(answers.license);

  return `
${licenseBadge}

# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [License](#license)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## License
${licenseSection}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For any questions, please feel free to reach out to me:

GitHub: [${answers.username}](https://github.com/${answers.username})
Email: ${answers.email}
`;
}

// Ask the user questions about what they want on their README
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

    // Write the answers to the README file
    fs.writeFile(path.join(__dirname, 'README.md'), readmeContent, (error) => {
      if (error) {
        console.error(error);
      } else {
        console.log('README.md file generated successfully!');
      }
    });
  });

// //Import necessary code packages 
// const fs = require('fs');
// const path = require('path');
// const inquirer = require('inquirer');

// // Function to generate the license badge
// function renderLicenseBadge(license) {
//   if (license) {
//     // Return the license badge based on the license type
//     return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
//   }
//   return '';
// }

// // Function to generate the license link
// function renderLicenseLink(license) {
//   if (license) {
//     // Return the license link based on the license type
//     return `- [License](#license) - [License](https://opensource.org/licenses/${license})`;
//   }
//   return '';
// }

// // Function to generate the license section of README
// function renderLicenseSection(license) {
//   if (license) {
//     // Return the license section based on the license type
//     return `
// ## License
// This application is covered under the ${license} license. Click [here](https://opensource.org/licenses/${license}) to view the license details.
// `;
//   }
//   return '';
// }

// //Generate the README content
// function generateREADME(answers) {
//   return `
// # ${answers.title}

// ## Description
// ${answers.description}

// ## Table of Contents
// - [Installation](#installation)
// - [Usage](#usage)
// - [License](#license)
// - [Contributing](#contributing)
// - [Tests](#tests)
// - [Questions](#questions)

// ## Installation
// ${answers.installation}

// ## Usage
// ${answers.usage}

// ## License
// This application is covered under the ${answers.license} license.


// ## Contributing
// ${answers.contributing}

// ## Tests
// ${answers.tests}

// ## Questions
// For any questions, please feel free to reach out to me:

// GitHub: [${answers.username}](https://github.com/${answers.username})
// Email: ${answers.email}
// `;
// };

// //Ask the user questions about what they want on their README
// inquirer
//   .prompt([
//     {
//       type: 'input',
//       name: 'title',
//       message: 'Enter the project title:',
//     },
//     {
//       type: 'input',
//       name: 'description',
//       message: 'Enter the project description:',
//     },
//     {
//       type: 'input',
//       name: 'installation',
//       message: 'Enter installation instructions:',
//     },
//     {
//       type: 'input',
//       name: 'usage',
//       message: 'Enter usage information:',
//     },
//     {
//       type: 'input',
//       name: 'contributing',
//       message: 'Enter contribution guidelines:',
//     },
//     {
//       type: 'input',
//       name: 'tests',
//       message: 'Enter test instructions:',
//     },
//     {
//       type: 'list',
//       name: 'license',
//       message: 'Choose a license:',
//       choices: ['MIT', 'Apache', 'GPL', 'BSD'],
//     },
//     {
//       type: 'input',
//       name: 'username',
//       message: 'Enter your GitHub username:',
//     },
//     {
//       type: 'input',
//       name: 'email',
//       message: 'Enter your email address:',
//     },
//   ])
//   .then((answers) => {
//     const readmeContent = generateREADME(answers);

//     //Write the answers to the README file
//     fs.writeFile(path.join(__dirname, 'README.md'), readmeContent, (error) => {
//       if (error) {
//         console.error(error);
//       } else {
//         console.log('README.md file generated successfully!');
//       }
//     });
//   });

