// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Create a title: Enter a name for your project",
    },
    {
        type: "input",
        name: "description",
        message: "Provide a short description of your project",
    },
    {
        type: "input",
        name: "installation",
        message: "Provide a step-by-step descritpion of installation requirements",
    },
    {
        type: "input",
        name: "usage",
        message: "Provide examples for usage"
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license for your project:",
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
    },
    {
        type: "input",
        name: "contributing",
        message: "Include contribution guidelines here:",
    },
    {
        type: "input",
        name: "tests",
        message: "What are the necessary steps to run tests for your project?",
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address:",
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub profile link:"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success! The (Generated)README.md file is created.");
    });
}

// TODO: Create a function to initialize app
async function init() {
    console.log("Initializing the (Generated)README.md generator....");
    try {
        const responses = await inquirer.prompt(questions);
        const markdownContent = generateMarkdown(responses);
        writeToFile("README.md", markdownContent);
    } catch (error) {
        console.log(error);
    }
}

// Function call to initialize app
init();
