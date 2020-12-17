const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees =[];

function getEmployerInfo() {
   inquirer
            .prompt([
                {
                type: 'input',
                message: 'Name of Employee?',
                name: 'name',
                },
                {
                    type: 'list',
                    name: 'role',
                    message: 'Title of Your Employee?',
                    choices: ['Manager', 'Engineer', 'Intern']
                },
                {
                    type: 'input',
                    message: 'what is ID of your Employee?',
                    name: 'id',
                    },
                {
                    type: 'input',
                    message: 'what is E-mail of your Employee?',
                    name: 'email',
                },
                {
                    type: 'input',
                    message: 'what is Office Number?',
                    name: 'OfficeNumber',
                    when:(answer) => answer.role === 'Manager'
                },
                {
                    type: 'input',
                    message: 'what is Github ID?',
                    name: 'github',
                    when:(answer) => answer.role === 'Engineer'
                },
                {
                    type: 'input',
                    message: 'what school is he/she From',
                    name: 'school',
                    when:(answer) => answer.role === 'Intern'
                },
                {
                    type: 'confirm',
                    message: 'Do you have any more Employees to add?',
                    name: 'moreEmployees',
        
                },
        ])
        .then((data) => {
            console.log(data)
            // in putted datas //

                if (data.role === 'Manager'){
                const newManager = new Manager(data.name, data.id, data.email, data.OfficeNumber);
                // console.log(manager)
                employees.push(newManager) 
                addEmployees(data.moreEmployees)
                return; }
                //render to page//
                else if (data.role === 'Engineer'){
                    const newEngineer = new Engineer(data.name, data.id, data.email, data.github);
                // console.log(engineer)
                employees.push(newEngineer) 
                addEmployees(data.moreEmployees)
                return; }
                //render to page//
                else if (data.role === 'Intern') {
                    const newIntern = new Intern(data.name, data.id, data.email, data.school);
                // console.log(intern)
                employees.push(newIntern) 
                addEmployees(data.moreEmployees)
                return; }//render to page//

console.log(employees);

                

});
}

function addEmployees(more) {
    if (more === true){
        // re-runs build function to create another employee object
        getEmployerInfo();
    } else {
        // Ends new employee object creation and moves application over to Html  & file creation
        buildteam();
    }
}
// console.log(employees)

function buildteam() {
    

    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
        const teamMap = render (employees)
        fs.writeFileSync(outputPath, teamMap, "utf-8");
        console.log("\nThank you, please check team.html for your team details\n");
    } else {
        const teamMap = render (employees)
        fs.writeFileSync(outputPath, teamMap, "utf-8");
        console.log("\nThank you, please check team.html for your team details\n");
    }};


getEmployerInfo()
 
 



  
// and to create objects for each team member (using the correct classes as blueprints!)
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
