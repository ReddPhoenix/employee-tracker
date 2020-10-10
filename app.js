const inquirer = require("inquirer");
const mysql = require("mysql");

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

companyRoster();

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
            case "Add employee(s)":
                addEmployee();
                break;
            case "Go back to previous menu":
                XassignPathX();
                break;
        }
    })
};

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
        switch (create.viewFinal) {
            case "View departments":
                viewDepartment();
                break;
            case "View roles":
                viewRoles();
                break;
            case "View employee":
                viewEmployee();
                break;
            case "Go back to previous menu":
                XassignPathX();
                break;
        }
    })
};

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