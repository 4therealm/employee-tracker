-- adding departments
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
       
