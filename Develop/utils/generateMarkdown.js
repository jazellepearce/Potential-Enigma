// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 
  if(license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === 'Apache') {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === 'Mozilla') {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  } else {
    return "";
  }

  
};


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data.title}
 
  ${renderLicenseBadge(data.license)}
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * 
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${data.license}
 
  ## Contribution
  ${data.contribution}
  ## tests
  ${data.tests}
  ## Questions
  You can reach me about any questions at ${data.email}
  ## Username
  Checkout my github (${data.username})['https://github.com/${data.username}']

`;
}

module.exports = generateMarkdown;

/*${Object.keys(data).map(path=>{
  if (path==='email'){
    return`*(questions)["/#questions"]`
  }
    
  return`*(${path})["/#${path}"]
  
  `
})}
*/