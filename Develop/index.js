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
        type: 'list',
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
    const writeFile = data => {
        fs.writeFile('README.md', data, err => {
            // if there is an error 
            if (err) {
                console.log(err);
                return;
            // when the README has been created 
            } else {
                console.log("Your README has been successfully created!")
            }
        })
    }; 
}

const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the README has been created 
        } else {
            console.log("Your README has been successfully created!")
        }
    })
}; 

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt (questions) .then (generateMarkdown) .then(data => {
        return writeFile(data);
 
})
}

// Function call to initialize app
init();

