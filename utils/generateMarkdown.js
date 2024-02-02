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
  - [Test](#test)
  - [Questions](#questions)

  ## Installation
  Content for Section 1 goes here.

  ## Usage
  Content for Section 2 goes here.
 
  ## License
  Content for Section 3 goes here.

  ## Contributing
  Content for Section 4 goes here.

  ## Test
  Content for Section 4 goes here.

  ## Questions
  Content for Section 4 goes here.
`;
};

module.exports = generateMarkdown;
