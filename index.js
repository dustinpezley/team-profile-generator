// Node modules
const inquirer = require('inquirer');
const fs = require('fs');

// Create file link
const generateHTML = require('./src/generateHTML');

// Team objects
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Open file when created
const open = require('open');

// Team array
const teamArray = [];

const addManager = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'managerName',
      message: "What is the manager's name?",
      validate: managerNameInput => {
        if(managerNameInput) {
          return true;
        } else {
          console.log("Please enter the manager's name.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'managerId',
      message: "What is the manager's employee ID?",
      validate: managerIdInput => {
        if(managerIdInput) {
          return true;
        } else {
          console.log("Please enter the manager's employee ID.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'managerEmail',
      message: "What is the manager's email address?",
      validate: managerEmailInput => {
        if(managerEmailInput) {
          return true;
        } else {
          console.log("Please enter the manager's email address.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'managerOffice',
      message: "What is the manager's office number?",
      validate: managerOfficeInput => {
        if(managerOfficeInput) {
          return true;
        } else {
          console.log("Please enter the manager's office number.");
          return false;
        }
      }
    }
  ]).then(answers => {
    const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice);

    teamArray.push(manager);
  })
}

const addEmployee = () => {
  console.log(`
  ==================
  Add team employees
  ==================
  `);

  return inquirer.prompt([
    {
      type: 'list',
      name: 'employeeRole',
      message: "Please choose the employee's role:",
      choices: ['Engineer', 'Intern']
    },
    {
      type: 'input',
      name: 'employeeName',
      message: "What is the employee's name?",
      validate: employeeNameInput => {
        if(employeeNameInput) {
          return true;
        } else {
          console.log("Please enter the employee's name.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'employeeId',
      message: "What is the employee's ID?",
      validate: employeeIdInput => {
        if(employeeIdInput) {
          return true;
        } else {
          console.log("Please enter the employee's ID.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'employeeEmail',
      message: "What is the employee's email address?",
      validate: employeeEmailInput => {
        if(employeeEmailInput) {
          return true;
        } else {
          console.log("Please enter the employee's email address.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'employeeGithub',
      message: "What is the engineer's GitHub username?",
      when: ({employeeRole}) => {
        if(employeeRole === 'Engineer') {
          return true;
        } else {
          return false;
        }
      },
      validate: employeeGithubInput => {
        if(employeeGithubInput) {
          return true;
        } else {
          console.log("Please enter the engineer's GitHub username.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'employeeSchool',
      message: 'What school is the intern attending?',
      when: ({employeeRole}) => {
        if(employeeRole === 'Intern') {
          return true;
        } else {
          return false;
        }
      },
      validate: employeeSchoolInput => {
        if(employeeSchoolInput) {
          return true;
        } else {
          console.log('Please enter the school the intern attends.');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmAddEmployee',
      message: 'Would you like to add more employees?',
      default: false
    }
  ]).then(employeeInput => {
    let { employeeRole, employeeName, employeeId, employeeEmail, employeeGithub, employeeSchool, confirmAddEmployee } = employeeInput;
    let engineer;
    let intern;

    if (employeeRole === 'Engineer') {
      engineer = new Engineer(employeeName, employeeId, employeeEmail, employeeGithub);
      teamArray.push(engineer);
    } else if (employeeRole === 'Intern') {
      intern = new Intern(employeeName, employeeId, employeeEmail, employeeSchool);
      teamArray.push(intern);
    }
  
    if(confirmAddEmployee) {
      return addEmployee(teamArray);
    } else {
      return teamArray;
    }
  });
};

// Write data to generateHTML page
const writeFile = data => {
  fs.writeFile('./dist/index.html', data, err => {
    if(err) {
      console.log(err);
      return;
    } else {
      console.log('Team profile created.')
    }
  })
}

addManager()
  .then(addEmployee)
  .then(teamArray => {
    return writeFile(generateHTML(teamArray));
  })
  // .then(html => {
  //   return writeFile(html);
  // })
  .then(async () => {
    await open('index.html', {"wait":true})
  })
  .catch(err => {
    console.log(err);
  });