

// Build a command-line application that at a minimum allows the user to:

//     1. Add departments, roles, employees

//     2. View departments, roles, employees

//     3. Update employee roles

// Use the MySQL NPM package to connect to your MySQL database and perform queries.

// Use InquirerJs NPM package to interact with the user via the command-line.

// Use console.table to print MySQL rows to the console. There is a built-in version 
// of console.table, but the NPM package formats the data a little better for our 
// purposes.

// You may wish to have a separate file containing functions for performing specific 
// SQL queries you'll need to use. Could a constructor function or a class be helpful 
// for organizing these?

// You will need to perform a variety of SQL JOINS to complete this assignment, and 
// it's recommended you review the week's activities if you need a refresher on this.

const mysql = require("mysql");
const inquirer = require("inquirer");

const con = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "",
    //(Employee Table database)
    database: "employee_DB" //(Employee Table database)
  });

  con.connect(function (err) {
    if (err) throw err;
    addEmployeePrompt();
});

function addEmployeePrompt() {
  inquirer
      .prompt({
          name: "action",
          type: "rawlist",
          message: "What would you like to do?",
          choices: [
              "View All Employees",
              "View All Roles",
              "View All Departments",
              "Add Employee",
              "Add Role",
              "Add Department",
              "Update Employee Role",
              "Exit"
          ]
      })
      .then(function (answer) {
          switch (answer.action) {
              case "View All Employees":
                  viewEmployees();
                  break;

              case "View All Roles":
                  viewRoles();
                  break;

              case "View All Departments":
                  viewDepartments();
                  break;

              case "Add Employee":
                  addEmployee();
                  break;

              case "Add Role":
                  addRole();
                  break;

              case "Add Department":
                  addDepartment();
                  break;

              case "Update Employee Role":
                  updateEmployeeRole();
                  break;

              case "Exit":
                  exitPrompt();
                  break;
          }
      });
}

function viewEmployees() {
  console.log("Viewing all employees...\n");
  connection.query("SELECT * FROM employee", function (err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.table(res);
      addEmployeePrompt();
  });
}

function viewRoles() {
  console.log("Viewing all roles...\n");
  connection.query("SELECT * FROM role", function (err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.table(res);
      addEmployeePrompt();
  });
}

function viewDepartments() {
  console.log("Viewing all departments...\n");
  connection.query("SELECT * FROM department", function (err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.table(res);
      addEmployeePrompt();
  });
}



function addEmployee() {
  inquirer
      .prompt([
          {
              name: "first_name",
              message: "Enter employee first name:",
              type: "input"
          },
          {
              name: "last_name",
              message: "Enter employee last name:",
              type: "input"
          },
          {
              name: "role_id",
              message: "Enter role ID:",
              type: "input",
          },
          {
              name: "manager_id",
              message: "Enter manager ID:",
              type: "input",
          }
      ])
      .then(function ({ first_name, last_name, role_id, manager_id }) {
          connection.query("INSERT INTO employee SET ?",
              {
                  first_name: first_name,
                  last_name: last_name,
                  role_id: role_id,
                  manager_id: manager_id
              },
              function (err, res) {
                  if (err) throw err;
                  console.log(`Successfully added ${first_name} ${last_name} into employee table!`)
                  viewEmployees();
                  addEmployeePrompt();
              })
      })
}

function addRole() {
  inquirer
      .prompt([
          {
              name: "title",
              message: "Enter role title:",
              type: "input"
          },
          {
              name: "salary",
              message: "Enter salary:",
              type: "input"
          },
          {
              name: "department_id",
              message: "Enter department ID:",
              type: "input"
          }
      ])
      .then(function ({ title, salary, department_id }) {
          connection.query("INSERT INTO role SET ?",
              {
                  title: title,
                  salary: salary,
                  department_id: department_id,
              },
              function (err, res) {
                  if (err) throw err;
                  console.log(`Successfully added ${title} into role table!`)
                  viewRoles();
                  addEmployeePrompt();
              })
      })
}

function addDepartment() {
  inquirer
      .prompt([
          {
              name: "department_name",
              message: "Enter department name:",
              type: "input"
          }
      ])
      .then(function ({ department_name }) {
          connection.query("INSERT INTO department SET ?",
              {
                  name: department_name
              },
              function (err, res) {
                  if (err) throw err;
                  console.log(`Successfully added ${department_name} into department table!`)
                  viewDepartments();
                  addEmployeePrompt();
              })
      })
}



function updateEmployeeRole() {
  connection.query(
      "SELECT * FROM role",
      function (err, res) {
          if (err) throw err;
          const roles = res;
          console.table(roles);
          inquirer
              .prompt([
                  {
                      type: "input",
                      message: "Enter employee's ID:",
                      name: "employee_id"
                  },
                  {
                      type: "list",
                      message: "Choose new employee role:",
                      choices: function() {
                          const choiceArray = [];
                          for (let i = 0; i < res.length; i++) {
                            choiceArray.push(`${res[i].id} ${res[i].title}`);
                          }
                          return choiceArray;
                        },
                      name: "chosenRole"
                  }
              ])
              .then(function ({ employee_id, chosenRole }) {
                  console.log("Updating employee role...\n");
                  connection.query(
                      "UPDATE employee SET ? WHERE ?",
                      [
                          {
                              role_id: chosenRole.split(" ")[0]
                          },
                          {
                              id: employee_id
                          }
                      ],
                      function (err, res) {
                          if (err) throw err;
                          console.log(`Employee ${employee_id}'s role has been updated to ${chosenRole}\n`);
                          viewEmployees();
                          addEmployeePrompt();
                      }
                  );
              })
      })
}

function exitPrompt() {
  connection.end();
}
//TODO:
// Bonus points if you're able to:

//     Update employee managers

//     View employees by manager

//     Delete departments, roles, and employees

//     View the total utilized budget of a department -- ie the combined salaries of all employees in that department
