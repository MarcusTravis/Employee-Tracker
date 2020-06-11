

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
    password: "root",
    database: "eTable_DB" //(Employee Table database)
  });




//TODO:
// Bonus points if you're able to:

//     Update employee managers

//     View employees by manager

//     Delete departments, roles, and employees

//     View the total utilized budget of a department -- ie the combined salaries of all employees in that department