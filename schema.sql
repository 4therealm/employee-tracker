-- CREATE DATABASE employee_tracker;
-- USE employee_tracker;


-- CREATE TABLE department (
--   id INT NOT NULL AUTO_INCREMENT,
--   name VARCHAR(255) NOT NULL,
--   PRIMARY KEY (id)
-- );

-- CREATE TABLE roles (
--   id INT NOT NULL,
--   title VARCHAR(30),
--   salary decimal,
--   department_id INT,
--   PRIMARY KEY (id)
-- );

CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) not null,
  role_id int not null,
  manager_id int not null,
  PRIMARY KEY (id)
);

