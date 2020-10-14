
const inquirer = require("inquirer");
const mysql = require("mysql");
const cTable = require("console.table");
// const db = require("db");

// Require and configure dotenv
require('dotenv').config();

// db.connect({
//     password: process.env.DB_PASS
//   })

// Connection to mysql
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.DB_PASS,
    database: "roster_db",
});

connection.connect(function (error) {
    if (error) throw error;
    // console.log('connected!', connection.threadId);
    // connection.end();
});

// Initial menu
function companyRoster() {
    inquirer.prompt([
        {
            type: "list",
            name: "initChoice",
            message: "What would you like to do: ",
            choices: [
                "Add departments, roles, employees",
                "View departments, roles, employees",
                "Update employee roles",
                "End session"
            ]
        }
    ]).then(menuChoice => {
        switch (menuChoice.initChoice) {
            case "Add departments, roles, employees":
                addChoice();
                break;
            case "View departments, roles, employees":
                viewChoice();
                break;
            case "Update employee roles":
                updateChoice();
                break;
            case "End session":
                endChoice();
                break;
        }
    }) 
};

// Run app
companyRoster();

// Menu to select options to add department, roles or employees
function addChoice() {
    inquirer.prompt([
        {
            type: "list",
            name: "addFinal",
            message: "Please select from one of the following options:",
            choices: [
                "Add department",
                "Add roles",
                "Add employee",
                "Go back to previous menu"
            ]
        }
    ]).then(create => {
        switch (create.addFinal) {
            case "Add department":
                addDepartment();
                break;
            case "Add roles":
                addRoles();
                break;
            case "Add employee":
                addEmployee();
                break;
            case "Go back to previous menu":
                XassignPathX();
                break;
        }
    })
};

// Menu to select options to view departments, roles or employees
function viewChoice() {
    inquirer.prompt([
        {
            type: "list",
            name: "viewFinal",
            message: "Please select from one of the following options:",
            choices: [
                "View departments",
                "View roles",
                "View employees",
                "Go back to previous menu"
            ]
        }
    ]).then(view => {
        switch (view.viewFinal) {
            case "View departments":
                viewDepartment();
                break;
            case "View roles":
                viewRoles();
                break;
            case "View employees":
                viewEmployees();
                break;
            case "Go back to previous menu":
                XassignPathX();
                break;
        }
    })
};

// Menu to select options to update roles
function updateChoice() {
    inquirer.prompt([
        {
            type: "list",
            name: "updateFinal",
            message: "Please select from one of the following options:",
            choices: [
                "Update department",
                "Update roles",
                "Update employee",
                "Go back to previous menu"
            ]
        }
    ]).then(update => {
        switch (update.updateFinal) {
            case "Update department":
                updateDepartment();
                break;
            case "Update roles":
                updateRoles();
                break;
            case "Update employee":
                updateEmployee();
                break;
            case "Go back to previous menu":
                XassignPathX();
                break;
        }
    })
};

// Add functions

// Add department function
// Department require name
function addDepartment() {
    inquirer.prompt([
        {
            type: "input",
            name: "department",
            message: "Enter the department name you would like to add: "
        }
    ]).then(function (choice) {
        connection.query("INSERT INTO department (name) VALUES (?)", [choice.department], function (err, res) {
            if (err) throw err;
            console.log("Department was added!")
            addChoice();
        });
    });    
};

// Add roles function
// Roles require title, salary and department_id
function addRoles() {
    inquirer.prompt([
        {
            type: "input",
            name: "rolesTitle",
            message: "Enter the title of the role you would like to add: "
        },
        {
            type: "input",
            name: "rolesSalary",
            message: "Enter a salary for the role: "
        },
        {
            type: "input",
            name: "rolesDeptId",
            message: "Enter a department ID for the role: "
        }
    ]).then(function (choice) {
        connection.query("INSERT INTO role (title, salary, department_id) VALUES (?,?,?)", [choice.rolesTitle, choice.rolesSalary, choice.rolesDeptId], function (err, res) {
            if (err) throw err;
            console.log("Role was added!")
            addChoice();
        });
    });    
};

// Add employees function
// Employee requires first_name, last_name, role_id and manager_id
function addEmployee() {
    inquirer.prompt([
        {
            type: "input",
            name: "firstName",
            message: "Enter the employee's first name: "
        },
        {
            type: "input",
            name: "lastName",
            message: "Enter the employee's last name: "
        },
        {
            type: "input",
            name: "roleId",
            message: "Enter a role ID for the employee: "
        },
        {
            type: "input",
            name: "managerId",
            message: "Enter the ID for the manager responsible for the employee (Enter 0 if no manager is assigned): "
        }
    ]).then(function (choice) {
        connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)", [choice.firstName, choice.lastName, choice.roleId, choice.managerId], function (err, res) {
            if (err) throw err;
            console.log("Employee was added!")
            addChoice();
        });
    });    
};


// View functions

// View department function
function viewDepartment() {
    connection.query("SELECT * FROM department", function (err, res) {
        if (err) throw err;
        console.table(res);
        viewChoice();
    });
};

// View roles function
function viewRoles() {
    connection.query("SELECT * FROM role", function (err, res) {
        if (err) throw err;
        console.table(res);
        viewChoice();
    });
};

// View employees function
function viewEmployees() {
    connection.query("SELECT * FROM employee", function (err, res) {
        if (err) throw err;
        console.table(res);
        viewChoice();
    });
};


// Update functions

// Update department


// Update roles


// Update employee