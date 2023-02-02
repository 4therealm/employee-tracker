DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;
USE company_db;
create table departments(
  id int auto_increment primary key,
  d_name varchar(100),
  date_updated DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);
create table roles (
  id int auto_increment primary key,
  r_name varchar(100),
  salary decimal,
  date_updated DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);
create table employees(
  id int auto_increment primary key,
  first_name varchar(30),
  last_name varchar(30),
  title varchar(100),
  department varchar(100),
  salary decimal,
  manager varchar(30),
  date_updated DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
  foreign key (department) references departments(d_name),
  foreign key (title) references roles(r_name)
  foreign key (salary) references roles(salary)
);
insert into departments (d_name)
values ("Sales"),
  ("Engineering"),
  ("Operations");
insert into roles (r_name, r_salary)
values ("manager", 100000),
  ("Supervisor", 70000),
  ("worker", 50000);
INSERT INTO employees (first_name, last_name, e_role_id, e_dep_id)
VALUES ("max", "walters", 1, 2),
  ("rob", "davidson", 1, 1),
  ("jacy", "hohan", 1, 3),
  ("isia", "bleep", 2, 1),
  ("sam", "sdf", 2, 2),
  ("benny", "kalli", 2, 3),
  ("john", "baby", 3, 1),
  ("jake", "wellington", 3, 2),
  ("jingle", "maan", 3, 3);
-- table name.key = table2 name.key
-- select department, role_id
--   from employees
--   INNER JOIN departments on employees.department_id = departments.id
--   INNER JOIN role_id on employees.role_id = roles.id
-- THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to


  -- db.query(`INSERT INTO employees(first_name, last_name, e_role_id, e_dep_id) 
  -- VALUES("maxxxxxxxxx", "aaaaaaaaswalt", 3, 3);`, function (err, results) {
  --   console.table(results)
  -- });