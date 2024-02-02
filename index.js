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
      type: "input",
      message: "Usage of a project",
      name: "usage",
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
      message: "Add testingasd instructions",
      name: "contributing",
    },
    {
      type: "input",
      message: "Add your github user name",
      name: "github",
    },
    {
      type: "input",
      message: "Add your email address",
      name: "github",
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
