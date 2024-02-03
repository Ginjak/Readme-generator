const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
const writeToFile = util.promisify(fs.writeFile);

// inquirer questions
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "Title of my project",
      name: "title",
    },
    {
      type: "input",
      message: "Short description of a project",
      name: "description",
    },
    {
      type: "input",
      message: "Instalation of a project",
      name: "installation",
    },
    {
      type: "list",
      message: "Display shortcode for instalation?",
      choices: ["Yes", "No"],
      name: "bash",
      default: true,
    },
    {
      type: "input",
      message: "Instalation shortcode",
      name: "installSc",
      when: (answers) => answers.bash === "Yes",
    },
    {
      type: "input",
      message: "Usage of a project",
      name: "usage",
    },
    {
      type: "list",
      message: "Display shortcode for usage?",
      choices: ["Yes", "No"],
      name: "usageBash",
      default: true,
    },
    {
      type: "input",
      message: "Usage shortcode",
      name: "usageSc",
      when: (answers) => answers.usageBash === "Yes",
    },
    {
      type: "list",
      message: "Usage of a project",
      choices: ["MIT", "ISC", "GPL", "0BSD"],
      name: "license",
    },
    {
      type: "input",
      message: "Add contribution guidelines",
      name: "contributing",
    },
    {
      type: "input",
      message: "Add testing instructions",
      name: "testing",
    },
    {
      type: "input",
      message: "Add your github user name",
      name: "github",
    },
    {
      type: "input",
      message: "Add your email address",
      name: "email",
    },
  ]);
};
// questions();

async function init() {
  try {
    const data = await questions();
    console.log(data);
    writeToFile("readme_test.md", generateMarkdown(data));
  } catch (err) {
    console.log(err);
  }
}

init();
// function to write README file
// function writeToFile(fileName, data) {}

// function to initialize program
// function init() {}

// function call to initialize program
// init();
