DROP DATABASE IF EXISTS movies_db;
CREATE DATABASE movies_db;
USE movies_db;
create table movies(
  id int auto_increment primary key,
  name varchar(100)
);
create table reviews (
  id int auto_increment primary key,
  username varchar(100),
  movie_id int not null,
  content text,
  foreign key (movie_id)
  references movies(id)
);
