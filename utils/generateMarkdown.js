// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseIcon = `http://img.shields.io/badge/license-${data.license}-brightgreen.svg`;

  return `
  # ${data.name}

  \n![${data.license}](${licenseIcon})

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation] (#installation)
  - [Usage] (#usage)
  - [License] (#license)
  - [Contributing] (#contributing)
  - [Tests] (#tests)
  - [Questions] (#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.test}

  ## Questions
  \n View this project and more in Github by searching for ${data.github}.
  \n If you have questions, contact me directly at ${data.email}.
`;
}

module.exports = generateMarkdown;
