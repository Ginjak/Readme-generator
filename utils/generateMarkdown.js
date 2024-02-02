// function to generate markdown for README
generateMarkdown = (data) => {
  return `# ${data.title} [![License](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})
  ## Description
  ${data.description}
  # Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  Content for Section 1 goes here.

  ## Usage
  Content for Section 2 goes here.
 
  ## License
  Content for Section 3 goes here.

  ## Contributing
  Content for Section 4 goes here.

  ## Tests
  Content for Section 4 goes here.

  ## Questions
  See my other project on my GitHub account [${data.github}](https://github.com/${data.github}/) and if you have any questions you can send me an email [${data.email}](mailto:${data.email})
`;
};

module.exports = generateMarkdown;
