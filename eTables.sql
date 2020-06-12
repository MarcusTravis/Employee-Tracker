DROP DATABASE IF EXISTS employee_DB;
CREATE DATABASE employee_DB;

USE employee_DB;

CREATE TABLE employee(
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT INT NOT NULL,
  manager_id INT NOT NULL,
  PRIMARY KEY (id)
  FOREIGN KEY(role_id) REFERENCES role(id),
  FOREIGN KEY(manager_id) REFERENCES employee(id)
);

CREATE TABLE role(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30),
  salary DECIMAl,
  department-id INT default 0,
  PRIMARY KEY (department-id)
  FOREIGN KEY(department_id) REFERENCES department(id)
);

CREATE TABLE department(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);


INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Woody", "Herman", "5", "2");
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Glenn", "Miller", "2", "1");
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Blue", "Barron", "7", "4");
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Les", "Brown", "3", "2");
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Sammy", "Kaye", "2", "2");
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Jimmy", "Dorsey", "3", "4");
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Kay", "Kyser", "6", "1");
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Duke ", "Ellington ", "1", "1");
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Benny", "Goodman", "4", "3");


INSERT INTO role (id, title, salary, department_id) VALUES ("1", "Software Engineer", "120000", "1");
INSERT INTO role (id, title, salary, department_id) VALUES ("2", "Lead Engineer", "150000", "1");
INSERT INTO role (id, title, salary, department_id) VALUES ("3", "Salesperson", "80000", "4");
INSERT INTO role (id, title, salary, department_id) VALUES ("4", "Sales Manager", "100000", "4");
INSERT INTO role (id, title, salary, department_id) VALUES ("5", "Accountant", "125000", "2");
INSERT INTO role (id, title, salary, department_id) VALUES ("6", "Lawyer", "190000", "3");
INSERT INTO role (id, title, salary, department_id) VALUES ("7", "Legal Team Manager", "250000", "3");


INSERT INTO department (name) VALUES ("Engineering");
INSERT INTO department (name) VALUES ("Finance");
INSERT INTO department (name) VALUES ("Legal");
INSERT INTO department (name) VALUES ("Sales");