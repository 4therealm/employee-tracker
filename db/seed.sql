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