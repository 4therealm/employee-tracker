CREATE DATABASE employee_tracker_app;
USE employee_tracker_app;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary decimal,
  department_id INT not null AUTO_INCREMENT
  PRIMARY KEY (id)
  FOREIGN key (department_id) REFERENCES department(id)
);

CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) not null,
  role_id int not null,
  manager_id int not null,
  PRIMARY KEY (id),
  key(manager_id) REFERENCES (id),
  FOREIGN KEY (role_id) REFERENCES roles(id)
);

