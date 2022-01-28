function generateMarkdown(data) {
  const licenseIcon = `http://img.shields.io/badge/license-${data.license}-brightgreen.svg`;

  return `
  # ${data.name}

  \n![${data.license}](${licenseIcon})

  ## Description
  ${data.description}

  ## Table of Contents

  [Installation](#installation)
  [Usage](#usage)
  [License](#license)
  [Contributing](#contributing)
  [Tests](#tests)
  [Questions](#questions)

  ## Installation <a name="installation"></a>
  ${data.installation}

  ## Usage <a name="usage"></a>
  ${data.usage}

  ## License <a name="license"></a>
  ${data.license}

  ## Contributing <a name="contributing"></a>
  ${data.contribution}

  ## Tests <a name="tests"></a>
  ${data.test}

  ## Questions <a name="questions"></a>
  View this project and more in Github by searching for ${data.github} or contact me directly at ${data.email}.
`
}

module.exports = generateMarkdown;
