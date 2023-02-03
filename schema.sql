DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;
USE company_db;
create table departments(
  id int auto_increment primary key,
  d_name varchar(100),
  date_updated DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);
insert into departments (d_name)
values ("Sales"),
  ("Engineering"),
  ("Operations");
create table roles (
  id int auto_increment primary key,
  r_name varchar(100),
  salary decimal,
  dep_id int not null,
  date_updated DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
  foreign key (dep_id) references departments(id)
);
create table employees(
  id int auto_increment primary key,
  first_name varchar(30),
  last_name varchar(30),
  role_id int not null,
  manager_id int,
  date_updated DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
  foreign key (role_id) references roles(id),
  foreign key (manager_id) references employees(id)
);
insert into departments (d_name)
values ("Sales"),
  ("Engineering"),
  ("Operations");
insert into roles (r_name, salary, dep_id)
values ("manager", 100000, 1),
  ("Supervisor", 70000, 2),
  ("worker", 50000, 3);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("max", "walters", 1, null),
  ("rob", "davidson", 1, 1),
  ("jacy", "hohan", 1, 1),
  ("isia", "bleep", 2, null),
  ("sam", "sdf", 2, 2),
  ("benny", "kalli", 2, 2),
  ("john", "baby", 3, null),
  ("jake", "wellington", 3, 3),
  ("jingle", "maan", 3, 3);

select e.first_name,
  e.last_name,
  r.r_name as title,
  r.r_salary as salary,
  d.d_name as department
from employees e
  inner join roles r on e.e_role_id = r.id
  inner join departments d on e.e_dep_id = d.id;
where d.id = 1;