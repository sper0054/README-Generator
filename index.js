// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMardown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = () => {
return inquirer.prompt ([
    {
        type: 'input',
        name: 'name',
        message:'What is your project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information'
    },
    {
        type: 'input',
        name: 'contribution guidelines',
        message: 'Please provide contribution guideslines'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide test instructions'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license',
        choices: ['Apache 2.0', 'Boost 1.0', 'Eclipse', 'IBM', 'ISC', 'MIT', 'Mozilla', 'Unlicense']
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github user name?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err =>
        err ? console.error(err) : console.log('README Created!')
    )
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
