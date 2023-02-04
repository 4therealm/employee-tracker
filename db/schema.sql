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
);