// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateREADME = require('./utils/generateMarkdown')
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is the name of your project?"




    },
    {
        type: 'input',
        name: "description",
        message: 'Provide description of project'

    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information'
    },
     { 
         type: 'input',
        name: 'contribution',
        message: 'Provide contribution guidelines'

        }  ,
    {
        type: 'input',
        name: 'tests',
        message: 'Provide test guidelines'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Select a license?',
        choices: ['Apache', 'MIT', 'Mozilla']
    },
    {
        type: 'input',
        name: 'username',
          message: 'Enter the GitHub username'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Enter email address'
    },



];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('generateMarkdown.js', content, err => {
        if (err) {
          console.error(err);
        }
        // file written successfully
      });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt (questions) .then (generateMarkdown) .then(console.log)
 
}

// Function call to initialize app
init();
