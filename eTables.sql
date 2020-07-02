DROP DATABASE IF EXISTS employee_DB;
CREATE DATABASE employee_DB;

USE employee_DB;

CREATE TABLE employee(
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE employee_role(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NULL,
  salary DECIMAl (10,2) NULL,
  department_id INT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE department(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);


INSERT INTO employee 
		(first_name, last_name, role_id, manager_id) 
        
VALUES  ("Woody", "Herman", "5", "2"),
		("Glenn", "Miller", "2", "1"),
		("Blue", "Barron", "7", "4"),
		("Les", "Brown", "3", "2"),
		("Sammy", "Kaye", "2", "2"),
		("Jimmy", "Dorsey", "3", "4"),
		("Kay", "Kyser", "6", "1"),
		("Duke ", "Ellington ", "1", "1"),
		("Benny", "Goodman", "4", "3");


INSERT INTO employee_role 
		(id, title, salary, department_id) 
        
VALUES  ("1", "Software Engineer", "120000", "1"),
		("2", "Lead Engineer", "150000", "1"),
		("3", "Salesperson", "80000", "4"),
		("4", "Sales Manager", "100000", "4"),
		("5", "Accountant", "125000", "2"),
		("6", "Lawyer", "190000", "3"),
		("7", "Legal Team Manager", "250000", "3");


INSERT INTO department 
		(name) 
        
VALUES  ("Engineering"),
		("Finance"),
		("Legal"),
		("Sales");